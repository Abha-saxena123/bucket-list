import JSEncrypt from 'jsencrypt';
import getConfig from 'next/config';

const {
  publicRuntimeConfig: { rsaPublicKey },
} = getConfig();

export const encryptData = (data: string): string => {
  const crypto = new JSEncrypt();

  crypto.setPublicKey(rsaPublicKey);

  const encryptedData = crypto.encrypt(data);

  return encryptedData as string;
};
