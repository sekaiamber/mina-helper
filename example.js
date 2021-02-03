const utils = require('./utils');

// 1. 设置公私钥
const privateKey = 'EKDmSipehCXiTRipbUktcob4k7W6oyVn54JWLa874DhRD8sLxPA9';
const publicKey = 'B62qjyqsT9QjECB9V5PfsyEMgaFrb7WFYiDL9ykHRvCaEEA1hpxpbop';

// 例子1.1: 签名某个字符串
const message = 'hello';
const signedMessage = utils.signMessage(message, privateKey, publicKey);
console.log(signedMessage);

// 例子1.2: 验证签名
const verified = utils.verifyMessage(message, publicKey, signedMessage.signature);
console.log(verified);

// 例子2: 签名交易
const sendTo = 'B62qkLcK2CKQh1TS1cMuk72N9oXx9krSyt9LVAF5P93TyibU8sz2Jyb';

const signedPayment = utils.signPayment(sendTo, privateKey, publicKey, 1, 1, 0);
console.log(signedPayment);
