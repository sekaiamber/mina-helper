const CodaSDK = require("@o1labs/client-sdk");

function signMessage(message, privateKey, publicKey) {
  const signed = CodaSDK.signMessage(message, {
    privateKey,
    publicKey,
  });
  return signed;
}

function verifyMessage(message, publicKey, signature) {
  return CodaSDK.verifyMessage({
    publicKey,
    signature,
    payload: message
  });
}

function signPayment(to, privateKey, publicKey, amount, fee, nonce) {
  const signedPayment = CodaSDK.signPayment({
    to,
    from: publicKey,
    amount,
    fee,
    nonce,
  }, {
    privateKey,
    publicKey,
  });
  return signedPayment;
}




// if (CodaSDK.verifyMessage(signed)) {
//     console.log("Message was verified successfully")
// };

module.exports.signMessage = signMessage;
module.exports.verifyMessage = verifyMessage;
module.exports.signPayment = signPayment;
