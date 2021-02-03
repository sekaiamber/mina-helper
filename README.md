# MINA 帮助

## 安装依赖

依赖nodejs

```shell
$ npm install
```

## 生成钱包

```shell
$ npm run generate

生成中...

私钥【请勿外传】:
EKDmSipehCXiTRipbUktcob4k7W6oyVn54JWLa874DhRD8sLxPA9
公钥：
B62qjyqsT9QjECB9V5PfsyEMgaFrb7WFYiDL9ykHRvCaEEA1hpxpbop
```

## 签名字符串

参照`example.js`中的`例子1.1`。

```javascript
// 引入utils
const utils = require('./utils');

// 1. 设置公私钥
const privateKey = 'EKDmSipehCXiTRipbUktcob4k7W6oyVn54JWLa874DhRD8sLxPA9';
const publicKey = 'B62qjyqsT9QjECB9V5PfsyEMgaFrb7WFYiDL9ykHRvCaEEA1hpxpbop';

// 例子1.1: 签名某个字符串
const message = 'hello';
const signedMessage = utils.signMessage(message, privateKey, publicKey);
console.log(signedMessage);
```

结果

```shell
{
  publicKey: 'B62qjyqsT9QjECB9V5PfsyEMgaFrb7WFYiDL9ykHRvCaEEA1hpxpbop',
  signature: {
    field: '7186695120283966735005482487870042560961584145827645652543685251274859556527',
    scalar: '21563884126760774810368416670750930976744713196253874191375419768476212815116'
  },
  payload: 'hello'
}
```

## 验证签名字符串

参照`example.js`中的`例子1.2`。

```javascript
// 引入utils
const utils = require('./utils');

// 1. 设置公私钥
const publicKey = 'B62qjyqsT9QjECB9V5PfsyEMgaFrb7WFYiDL9ykHRvCaEEA1hpxpbop';

// 例子1.2: 验证签名
const message = 'hello';
const verified = utils.verifyMessage(message, publicKey, {
  field: '7186695120283966735005482487870042560961584145827645652543685251274859556527',
  scalar: '21563884126760774810368416670750930976744713196253874191375419768476212815116'
});
console.log(verified);
```

结果

```shell
true
```

## 签名交易【请在测试后再在正式网络中使用】

参照`example.js`中的`例子2`。

```javascript
// 引入utils
const utils = require('./utils');

// 1. 设置公私钥
const privateKey = 'EKDmSipehCXiTRipbUktcob4k7W6oyVn54JWLa874DhRD8sLxPA9';
const publicKey = 'B62qjyqsT9QjECB9V5PfsyEMgaFrb7WFYiDL9ykHRvCaEEA1hpxpbop';

// 例子2: 签名交易
const sendTo = 'B62qkLcK2CKQh1TS1cMuk72N9oXx9krSyt9LVAF5P93TyibU8sz2Jyb';

const signedPayment = utils.signPayment(sendTo, privateKey, publicKey, 1, 1, 0);
console.log(signedPayment);
```

结果

```shell
{
  publicKey: 'B62qjyqsT9QjECB9V5PfsyEMgaFrb7WFYiDL9ykHRvCaEEA1hpxpbop',
  signature: {
    field: '10961873198340743374835843110149109244792306790044155616586289403667370781416',
    scalar: '13883088631941332777763202859477089398838294552313757513298333500886194662686'
  },
  payload: {
    to: 'B62qkLcK2CKQh1TS1cMuk72N9oXx9krSyt9LVAF5P93TyibU8sz2Jyb',
    from: 'B62qjyqsT9QjECB9V5PfsyEMgaFrb7WFYiDL9ykHRvCaEEA1hpxpbop',
    fee: '1',
    amount: '1',
    nonce: '0',
    memo: '',
    validUntil: '4294967295'
  }
}
```

其中`utils.signPayment`的参数为：

1. 收款地址
2. 发款地址私钥
3. 发款地址公钥
4. 发款数量
5. fee
6. nonce
