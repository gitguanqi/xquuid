# xquuid

这是一个自动生成uuid的工具包

[查看英文文档](./README.md)

## 安装

**游览器端**:

引入cdn

```html
<!-- 游览器es5 -->
<script src="../lib/xquuid.min.js"></script>
<!-- es6模块 -->
<script type="module">
    import xquuid from '../lib/xquuid-esm.min.js';
</script>
```

**Node**:

```sh
$ npm install xquuid
```

```js
const xqsql = require('xquuid');
```

## 使用

+ 创建随机数

```js
const rid = xquuid.randomId();
console.log('random number is:  ', rid);
// random number is:   xowyvf
```

+ 创建文件id

```js
const fid = xquuid.fileId(1);
console.log('file id is:  ', fid);
// file id is:   2ee7a39e36adf4
```

当然你也可以使用md5

```sh
npm install js-md5
```

+ 创建短网址id

```js
const sid = xquuid.shortId(1);
console.log('short text is:  ', sid);
// short text is:   2321714
```

+ 创建uuid

```js
const uuid = xquuid.getUuid();
console.log('uuid is:  ', uuid);
// uuid is:   6bf6-b7a2-f273-b14a-0c9f
```

+ 创建guid

```js
const guid = xquuid.Guid();
console.log('guid is:  ', guid);
// guid is:   c117e50c-2da3-4fb7-9ace-d7acb2346b54
```

+ 十进制转十六进制

```js
const num1 = xquuid.str10To16(2021);
console.log('10 to 16 id is: ', num1);
// 10 to 16 id is:  7e5
```

+ 十六进制转十进制

```js
const num2 = xquuid.str16To10(num1);
console.log('16 to 10 is : ', num2);
// 16 to 10 is :  2021
```

+ 10进制转64进制

```js
const num3 = xquuid.str10To64(sid);
console.log('10 to 64 is : ', num3);
// 10 to 64 is :  9GZ0
```

+ 64进制转10进制

```js
const num4 = xquuid.str64To10(num3);
console.log('64 to 10 is:  ', num4);
// 64 to 10 is:   2310182
```

+ base64加密

```js
var str = '加密内容';
var str1 = new xquuid.Base64().encode(str);  
console.log('encryption text:  ', str1);
// encryption text:   5Yqg5a+G5YaF5a65
```

+ base64解密

```js
var str2 = new xquuid.Base64().decode(str1);  
console.log('Decrypt text:  ', str2);
// Decrypt text:   加密内容
```

## 查看示例

运行这个脚本查看展示案例：`npm run test:node`, `npm run test:browser`。

## 提问题

[submit your question](https://github.com/gitguanqi/xquuid/issues/new)

## 作者

[@gitguanqi](https://github.com/gitguanqi)
