(function (root, factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory();
    } else if (typeof define === 'function' && define.amd) {
        define(factory());
    } else if (typeof define === 'function' && define.cmd) {
        define(function (require, exports, module) {  
            module.exports = factory();
        });
    } else {
        root.xquuid = factory();
    }
})(this, function factory () {  
    return {
        /**
         * 
         * @param {*} num1 
         * @param {*} num2 
         * @param {*} len 
         * @returns 
         */
         randomId: function (num1 = 52, num2 = 2, len = 4) {
            return (Math.random() * Math.pow(num1, num2)).toString(36).slice(len, 10);
        },

        /**
         * 
         * @param {*} uid 随机数
         * @returns 
         */
        fileId: function (uid) {
            return (parseInt(uid) + Date.now() + Math.random() * Math.pow(52, 10)).toString(16);
        },

        /**
         * 
         * @param {*} uid 
         * @returns 
         */
         shortId: function (uid) {
            return parseInt(uid + Math.random() * Math.pow(52, 4));
        },

        /**
         * 
         * @returns 16位数
         */
        getUuid: function () {
            return 'xxxx-xxxx-xxxx-xxxx-xxxx'.replace(/[xy]/g, function (c) {
                var r = Math.random() * 16 | 0,
                    v = c == 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
        },

        Guid: function () {
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
        },

        // 十进制转64进制
        str10To64: function (number) {
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
        },

        // 十进制转64进制
        str64To10: function (number_code) {
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
        },

        // 10进制转16进制
        str10To16: function (n) {
            typeof n == "string" ? n = Number(n) : ''
            return n.toString(16);
        },

        // 16进制转10进制
        str16To10: function (n) {
            return Number('0x' + n);
        },

        Base64: function () {  

            // private property  
            const _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";  
    
            // public method for encoding  
            this.encode = function (input) {  
                var output = "";  
                var chr1, chr2, chr3, enc1, enc2, enc3, enc4;  
                var i = 0;
                input = this._utf8_encode(input);  
                while (i < input.length) {  
                    chr1 = input.charCodeAt(i++);  
                    chr2 = input.charCodeAt(i++);  
                    chr3 = input.charCodeAt(i++);  
                    enc1 = chr1 >> 2;  
                    enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);  
                    enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);  
                    enc4 = chr3 & 63;  
                    if (isNaN(chr2)) {  
                        enc3 = enc4 = 64;  
                    } else if (isNaN(chr3)) {  
                        enc4 = 64;  
                    }  
                    output = output +  
                    _keyStr.charAt(enc1) + _keyStr.charAt(enc2) +  
                    _keyStr.charAt(enc3) + _keyStr.charAt(enc4);  
                }  
                return output;  
            }  
    
            // public method for decoding  
            this.decode = function (input) {  
                var output = "";  
                var chr1, chr2, chr3;  
                var enc1, enc2, enc3, enc4;  
                var i = 0;  
                input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");  
                while (i < input.length) {  
                    enc1 = _keyStr.indexOf(input.charAt(i++));  
                    enc2 = _keyStr.indexOf(input.charAt(i++));  
                    enc3 = _keyStr.indexOf(input.charAt(i++));  
                    enc4 = _keyStr.indexOf(input.charAt(i++));  
                    chr1 = (enc1 << 2) | (enc2 >> 4);  
                    chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);  
                    chr3 = ((enc3 & 3) << 6) | enc4;  
                    output = output + String.fromCharCode(chr1);  
                    if (enc3 != 64) {  
                        output = output + String.fromCharCode(chr2);  
                    }  
                    if (enc4 != 64) {  
                        output = output + String.fromCharCode(chr3);  
                    }  
                }  
                output = this._utf8_decode(output);  
                return output;  
            }
    
            // private method for UTF-8 encoding  
            this._utf8_encode = function (string) {  
                string = string.replace(/\r\n/g,"\n");  
                var utftext = "";  
                for (var n = 0; n < string.length; n++) {  
                    var c = string.charCodeAt(n);  
                    if (c < 128) {  
                        utftext += String.fromCharCode(c);  
                    } else if((c > 127) && (c < 2048)) {  
                        utftext += String.fromCharCode((c >> 6) | 192);  
                        utftext += String.fromCharCode((c & 63) | 128);  
                    } else {  
                        utftext += String.fromCharCode((c >> 12) | 224);  
                        utftext += String.fromCharCode(((c >> 6) & 63) | 128);  
                        utftext += String.fromCharCode((c & 63) | 128);  
                    }  
    
                }  
                return utftext;  
            }  
    
            // private method for UTF-8 decoding  
            this._utf8_decode = function (utftext) {  
                var string = "",
                i = 0,
                c = 0,
                c1 = 0,
                c2 = 0;
                while ( i < utftext.length ) {  
                    c = utftext.charCodeAt(i);  
                    if (c < 128) {  
                        string += String.fromCharCode(c);  
                        i++;  
                    } else if((c > 191) && (c < 224)) {  
                        c2 = utftext.charCodeAt(i+1);  
                        string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));  
                        i += 2;  
                    } else {  
                        c2 = utftext.charCodeAt(i+1);  
                        let c3 = utftext.charCodeAt(i+2);  
                        string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));  
                        i += 3;  
                    }
                }  
                return string;  
            }  
        }
    }
});
