/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  serverRuntimeConfig: {
    rsaPrivateKey: process.env.RSA_PRIVATE_KEY,
    nextAuthSecret: process.env.NEXTAUTH_SECRET,
  },
  publicRuntimeConfig: {
    mongoURI: process.env.MONGODB_URI,
    mongoDB: process.env.MONGODB_DB,
    hostUrl: process.env.HOST_URL,
    apiUrl: process.env.API_URL,
    rsaPublicKey: process.env.RSA_PUBLIC_KEY,
  },
  async headers() {
    return [
      {
        source: "/api/(.*)",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,OPTIONS,PATCH,DELETE,POST,PUT",
          },
          {
            key: "Access-Control-Allow-Headers",
            value:
              "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
          },
        ],
      },
    ];
  },
};
