import crypto from 'crypto';

export const decryptData = (encryptedMessage: string, privateKey: string): string => {
  const rsaPrivateKey = {
    key: Buffer.from(privateKey, 'base64'),
    format: 'der',
    type: 'pkcs1',
    padding: crypto.constants.RSA_PKCS1_PADDING,
  };
  const decryptedMessage = crypto.privateDecrypt(rsaPrivateKey, Buffer.from(encryptedMessage, 'base64'));

  return decryptedMessage.toString('utf8');
};
