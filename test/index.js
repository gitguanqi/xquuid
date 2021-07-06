const xquuid = require('../index');

// 
const rid = xquuid.randomId();
console.log('random number is:  ', rid);

const fid = xquuid.fileId(1);
console.log('file id is:  ', fid);

const sid = xquuid.shortId(1);
console.log('short text is:  ', sid);

const uuid = xquuid.getUuid();
console.log('uuid is:  ', uuid);

const guid = xquuid.Guid();
console.log('guid is:  ', guid);

const num1 = xquuid.str10To16(2021);
console.log('10 to 16 id is: ', num1);

const num2 = xquuid.str16To10(num1);
console.log('16 to 10 is : ', num2);

const num3 = xquuid.str10To64(sid);
console.log('10 to 64 is : ', num3);

const num4 = xquuid.str64To10(num3);
console.log('64 to 10 is:  ', num4);
