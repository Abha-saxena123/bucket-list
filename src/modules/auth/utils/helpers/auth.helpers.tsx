import { signOut } from "next-auth/react";
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

export const handleLogout = (params = {}): void => {
  signOut({
    ...params,
    callbackUrl: `${publicRuntimeConfig.hostUrl}/auth/login`,
  });
};
