# xquuid

This is a toolkit that automatically generates uuid.

[View Chinese documents](./zh.md)

## Install

**Browser**:

import cdn

```html
<!-- Browser -->
<script src="../lib/xquuid.min.js"></script>
<!-- es module -->
<script type="module">
    import xquuid from '../lib/xquuid-esm.min.js';
</script>
```

**Node**:

```sh
npm install xquuid
```

```js
const xqsql = require('xquuid');
```

## Usage

+ Create random number

```js
const rid = xquuid.randomId();
console.log('random number is:', rid);
// random number is: xowyvf
```

+ Create file id

```js
const fid = xquuid.fileId(1);
console.log('file id is:', fid);
// file id is: 2ee7a39e36adf4
```

Of course you can also use md5

```sh
npm install js-md5
```

+ Create short URL id

```js
const sid = xquuid.shortId(1);
console.log('short text is:', sid);
// short text is: 2321714
```

+ Create uuid

```js
const uuid = xquuid.getUuid();
console.log('uuid is:', uuid);
// uuid is: 6bf6-b7a2-f273-b14a-0c9f
```

+ Create guid

```js
const guid = xquuid.Guid();
console.log('guid is:', guid);
// guid is: c117e50c-2da3-4fb7-9ace-d7acb2346b54
```

+ Decimal to hexadecimal

```js
const num1 = xquuid.str10To16(2021);
console.log('10 to 16 id is:', num1);
// 10 to 16 id is: 7e5
```

+ Hexadecimal to decimal

```js
const num2 = xquuid.str16To10(num1);
console.log('16 to 10 is:', num2);
// 16 to 10 is: 2021
```

+ Decimal to 64 hexadecimal

```js
const num3 = xquuid.str10To64(sid);
console.log('10 to 64 is:', num3);
// 10 to 64 is: 9GZ0
```

+ 64 base to decimal

```js
const num4 = xquuid.str64To10(num3);
console.log('64 to 10 is:', num4);
// 64 to 10 is: 2310182
```

+ base64 encryption

```js
var str ='Encrypted content';
var str1 = new xquuid.Base64().encode(str);
console.log('encryption text:', str1);
// encryption text: 5Yqg5a+G5YaF5a65
```

+ base64 decryption

```js
var str2 = new xquuid.Base64().decode(str1);
console.log('Decrypt text:', str2);
// Decrypt text: encrypted content
```

## View example

Run this script to view the demonstration case: `npm run test:node`, `npm run test:browser`.

## ask questions

[submit your question](https://github.com/gitguanqi/xquuid/issues/new)

## Author

[@gitguanqi](https://github.com/gitguanqi)
