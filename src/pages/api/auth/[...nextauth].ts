import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import getConfig from "next/config";
import dayjs from "dayjs";
import "../../../modules/common/utils/helpers/api.helpers";
import { decryptData } from "../../../modules/common/utils/helpers/decryption.helpers";
import { AuthService } from "../../../modules/auth/services/auth.services";
import { Users } from "../../../modules/users/types/users.types";

const {
  serverRuntimeConfig: { rsaPrivateKey, nextAuthSecret },
} = getConfig();

const providers = [
  CredentialsProvider({
    id: "credentials",
    credentials: {},
    async authorize(credentials) {
      try {
        // @ts-ignore
        const { userName, password } = credentials;

        const decryptedPassword = decryptData(password, rsaPrivateKey);

        const res = await AuthService.login({
          userName: userName,
          password: decryptedPassword,
        });

        if (res.message) {
          throw Error(res.message);
        }

        if (res?.access_token) {
          return {
            accessToken: res.access_token,
            refreshToken: res.refresh_token,
            accessTokenExpiry: res.accessTokenExpiry,
            // converting refresh expiry duration into ms
            // TODO: get proper refresh token expiry from ACE and remove this logic
            refreshTokenExpiry:
              Date.now() + 1000 * (res.refresh_expires_in || NaN),
            data: {
              lastName: res.user.lastName,
              password: res.user.password,
              firstName: res.user.firstName,
              userName: res.user.userName,
              _id: res.user._id,
            } as Users,
          };
        }

        return null;
      } catch (e) {
        throw Error((e as { message: string }).message);
      }
    },
  }),
];

const pages = {
  signIn: "/auth/login",
  error: "/auth/login",
  newUser: "/",
};

export default NextAuth({
  secret: nextAuthSecret,
  providers,
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.accessToken = user.accessToken;
        token.user = user.data as Users;
        token.accessTokenExpiry = user.accessTokenExpiry;
      }

      return token;
    },
    async session({ session, token }) {
      session.user = token.user as Users;
      session.accessToken = token.accessToken;
      if (dayjs().isAfter(token.accessTokenExpiry as number)) {
        session.expired = true;
      }

      return session;
    },
  },
  pages,
});
