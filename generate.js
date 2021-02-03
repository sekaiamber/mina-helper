console.log('生成中...')
console.log('');

const CodaSDK = require("@o1labs/client-sdk");

const keys = CodaSDK.genKeys();

const { privateKey, publicKey } = keys;

console.log('私钥【请勿外传】: ');
console.log(privateKey);
console.log('公钥：');
console.log(publicKey);
