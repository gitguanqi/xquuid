/**
 * 
 * @param {*} num1 
 * @param {*} num2 
 * @param {*} len 
 * @returns 
 */
function randomId (num1 = 52, num2 = 2, len = 4) {
    return (Math.random() * Math.pow(num1, num2)).toString(36).slice(len, 10);
}

/**
 * 
 * @param {*} uid 随机数
 * @returns 
 */
function fileId (uid) {
    return (parseInt(uid) + Date.now() + Math.random() * Math.pow(52, 10)).toString(16);
}

/**
 * 
 * @param {*} uid 
 * @returns 
 */
function shortId (uid) {
    return parseInt(uid + Math.random() * Math.pow(52, 4));
}

/**
 * 
 * @returns 16位数
 */
function getUuid() {
    return 'xxxx-xxxx-xxxx-xxxx-xxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0,
            v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

function Guid() {
    var d = new Date().getTime();
    if (globalThis.performance && typeof globalThis.performance.now === "function") {
        d += performance.now(); //use high-precision timer if available
    }
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
}

// 十进制转64进制
function str10To64(number) {
    var chars = '0123456789abcdefghigklmnopqrstuvwxyzABCDEFGHIGKLMNOPQRSTUVWXYZ'.split(''),
        radix = chars.length,
        qutient = +number,
        mod = '',
        arr = [];
    do {
        mod = qutient % radix;
        qutient = (qutient - mod) / radix;
        arr.unshift(chars[mod]);
    } while (qutient);
    return arr.join('');
}

// 十进制转64进制
function str64To10(number_code) {
    var chars = '0123456789abcdefghigklmnopqrstuvwxyzABCDEFGHIGKLMNOPQRSTUVWXYZ',
        radix = chars.length,
        number_code = String(number_code),
        len = number_code.length,
        i = 0,
        origin_number = 0;
    while (i < len) {
        origin_number += Math.pow(radix, i++) * chars.indexOf(number_code.charAt(len - i) || 0);
    }
    return origin_number;
}

// 10进制转16进制
function str10To16(n) {
    typeof n == "string" ? n = Number(n) : ''
    return n.toString(16);
}

// 16进制转10进制
function str16To10(n) {
    return Number('0x' + n);
}


module.exports = {
    randomId,
    fileId,
    shortId,
    getUuid,
    Guid,
    str10To64,
    str64To10,
    str10To16,
    str16To10
}