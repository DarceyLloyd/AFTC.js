// AFTC.JS Version 1.6.38
// Author: Darcey@aftc.io
export function onReady(fn) {
    "complete" === document.readyState || "loading" !== document.readyState && !document.documentElement.doScroll ? setTimeout(fn, 10) : document.addEventListener && document.addEventListener("DOMContentLoaded", () => {
        window.setTimeout(fn, 10)
    })
}
export function normaliseRange(min, max, v) {
    let r = 1 / (max - min) * (v - min);
    return v < min ? r = 0 : v > max && (r = 1), r
}
export function roundTo(v, dec) {
    return +(Math.round(Number(v + "e+" + dec)) + "e-" + dec)
}
export function attachDebug(no) {
    window.vDebug = [];
    let debugContainer = document.createElement("div");
    debugContainer.id = "debug-container";
    for (let i = 0; i < no; i++) {
        let div = document.createElement("div");
        div.id = "[" + i + "]", div.classList.add("debug"), debugContainer.appendChild(div), window.vDebug[i] = div, div.addEventListener("click", (function(e) {
            console.log(this.innerHTML)
        }))
    }
    document.body.appendChild(debugContainer)
}
export function log(arg) {
    console.log(arg)
}
export function debug(index, msg) {
    return !!window.vDebug && (index > window.vDebug.length - 1 ? (log("DEBUG INDEX [" + index + "] DOESNT EXIST!"), !1) : void(window.vDebug[index].innerHTML = msg))
}
export function argsToObject(fArgs, obj, strict) {
    if (fArgs[0] && "object" == typeof fArgs[0]) {
        let args = fArgs[0];
        if (void 0 === strict && (strict = !0), args && "object" == typeof args)
            for (let key in args) strict ? obj.hasOwnProperty(key) ? obj[key] = args[key] : console.warn("argsToObject(): Argument [" + key + "] is not supported.") : obj[key] = args[key]
    }
}
export function argsTo(args, obj, strict) {
    this.argsToObject(args, obj, strict)
}
export function isElement(o) {
    return 1 == ("object" == typeof HTMLElement ? o instanceof HTMLElement : o && "object" == typeof o && null !== o && 1 === o.nodeType && "string" == typeof o.nodeName)
}
export function isElement2(element) {
    return element instanceof Element
}
export function isStringInArray(needle, haystack) {
    return new RegExp("(" + haystack.join("|").replace(/\./g, "\\.") + ")$").test(needle)
}
export function arrayContains(needle, haystack) {
    return haystack.indexOf(needle) > -1
}
export function isInArray(needle, haystack) {
    return haystack.indexOf(needle) > -1
}
export function arrayEmpty(arr) {
    for (; arr.length > 0;) arr.pop()
}
export function arrayClear(arr) {
    for (; arr.length > 0;) arr.pop()
}
export function getMaxFromArray(arr) {
    return Math.max.apply(Math, arr)
}
export function arrayGetMax(arr) {
    return Math.max.apply(Math, arr)
}
export function arrayMax(arr) {
    return Math.max.apply(Math, arr)
}
export function getMinFromArray(arr) {
    return Math.min.apply(Math, arr)
}
export function arrayGetMin(arr) {
    return Math.min.apply(Math, arr)
}
export function arrayMin(arr) {
    return Math.min.apply(Math, arr)
}
export function arrayShuffle(arr) {
    let temporaryValue, randomIndex, currentIndex = arr.length;
    for (; 0 !== currentIndex;) randomIndex = Math.floor(Math.random() * currentIndex), temporaryValue = arr[currentIndex -= 1], arr[currentIndex] = arr[randomIndex], arr[randomIndex] = temporaryValue;
    return arr
}
export function arrayShuffle2(a) {
    let x, t, r = new Uint32Array(1);
    for (let i = 0, c = a.length - 1, m = a.length; i < c; i++, m--) crypto.getRandomValues(r), x = Math.floor(r / 65536 / 65536 * m) + i, t = a[i], a[i] = a[x], a[x] = t;
    return a
}
export function isInString(find, source) {
    return -1 !== source.indexOf(find)
}
export function inString(find, source) {
    return -1 !== source.indexOf(find)
}
export function isEven(n) {
    return n % 2 == 0
}
export function isOdd(n) {
    return 1 === Math.abs(n % 2)
}
export function isAlphaNumeric(input) {
    return !/\W/.test(input)
}
export function isDOM(obj) {
    try {
        return obj instanceof HTMLElement
    } catch (e) {
        return "object" == typeof obj && 1 === obj.nodeType && "object" == typeof obj.style && "object" == typeof obj.ownerDocument
    }
}
export function isBoolean(input) {
    return "boolean" == typeof input
}
export function isBool(input) {
    return "boolean" == typeof input
}
export function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
}
export function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
}
export function isArray(input) {
    return !!input && input.constructor === Array
}
export function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}
export function getRandomThatsNot(min, max, not) {
    let r = not,
        runs = 0;
    for (; r === not && runs < 100;) runs++, r = getRandomInt(min, max);
    return !(runs >= 100) && r
}
export function getRandomFloat(min, max) {
    return Math.random() * (max - min) + min
}
export function getRandomString(len) {
    let text = "",
        possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    for (let i = 0; i < len; i++) text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text
}
export function getUID(len) {
    if (!(len > 34)) return Math.random().toString(36).substr(2, len);
    console.error("getUID(length): Limit error: Length must be 34 or lower")
}
export function getGUID() {
    function Amiga() {
        return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
    }
    return Amiga() + Amiga() + "-" + Amiga() + "-" + Amiga() + "-" + Amiga() + "-" + Amiga() + Amiga() + Amiga()
}
export function getWeightedRandom(odds, iterations) {
    odds || (odds = [.68, .69, .698, .6909, .68, .58, .57, .56, .4, .3]);
    let weights = [],
        r = 0,
        iMax = 0,
        wMax = 0;
    for (let i in odds) {
        weights[i] || (weights[i] = 0);
        for (let x = 0; x < iterations; x++)(r = Math.random()) <= odds[i] && (weights[i] += odds[i]);
        weights[i] > wMax && (wMax = weights[i], iMax = i)
    }
    return iMax
}
export function limitLengthInWords(str, maxWords) {
    let wordCount = str.split(/\S+/).length - 1,
        re = new RegExp("^\\s*\\S+(?:\\s+\\S+){0," + (maxWords - 1) + "}"),
        output = "";
    return {
        output: output = wordCount >= maxWords ? str.match(re) : str,
        remaining: maxWords - wordCount
    }
}
export function cleanJSONString(s) {
    return s = (s = s.replace(/\\n/g, "\\n").replace(/\\'/g, "\\'").replace(/\\"/g, '\\"').replace(/\\&/g, "\\&").replace(/\\r/g, "\\r").replace(/\\t/g, "\\t").replace(/\\b/g, "\\b").replace(/\\f/g, "\\f")).replace(/[\u0000-\u0019]+/g, "")
}
export function escapeHTML(str) {
    if ("string" != typeof str) return console.error("escape(arg): usage error: arg needs to be a string!"), !1;
    let replacements = {
        "<": "&lt;",
        ">": "&gt;",
        "&": "&amp;",
        '"': "&quot;",
        "`": "&#039;"
    };
    return str.replace(/[<>&"]/g, (function(character) {
        return replacements[character]
    }))
}
export function cutStringTo(s, len) {
    return s.substring(0, len)
}
export function lTrimBy(str, by) {
    return str.substring(by, str.length)
}
export function trimStringBy(str, trimBy) {
    return str.substring(0, str.length - trimBy)
}
export function rTrimBy(str, trimBy) {
    return str.substring(0, str.length - trimBy)
}
export function getFileExtension(input) {
    return input.split(".").pop()
}
export function getFileExtension2(input) {
    return input.slice(2 + (input.lastIndexOf(".") - 1 >>> 0))
}
export function getLastPartOfUrl(url) {
    return url || (url = window.location.href), url.substring(url.lastIndexOf("/") + 1)
}
export function removeFileFromPath(path) {
    return path = path.replace(/[^\/]*$/, "")
}
export function getAnchorFromUrl(url) {
    return url || (url = window.location.href), !!isInString("#", url) && url.slice(url.lastIndexOf("#") + 1)
}
export function getStringBetween(str, start, end) {
    return str.split(start).pop().split(end).shift().trim()
}
export function getStringsBetween(str, start, end) {
    let results = [];

    function getBetween() {
        let startMatchIndex = str.indexOf(start);
        if (-1 === startMatchIndex) return !1;
        let startCutIndex = start.length + startMatchIndex,
            endMatchIndex = (str = str.substring(startCutIndex, str.length)).indexOf(end);
        if (-1 === endMatchIndex) return !1;
        let between = str.substring(0, endMatchIndex),
            endCutIndex = end.length + endMatchIndex;
        return str = str.substring(endCutIndex, str.length), between
    }
    let pos = 0,
        result = !0;
    for (; pos <= 500 && 0 != result;) pos++, (result = getBetween()) && results.push(result);
    return results
}
export function radToDeg(input) {
    return input * (180 / Math.PI)
}
export function rad2deg(arg) {
    return input * (180 / Math.PI)
}
export function degToRad(input) {
    return input * (Math.PI / 180)
}
export function deg2rad(arg) {
    return input * (Math.PI / 180)
}
export function toHex(num) {
    return num.toString(16)
}
export function boolToString(bool) {
    return bool && void 0 !== bool && "boolean" == typeof bool ? bool ? "true" : "false" : (console.log("AFTC.js: Conversion.js: boolToString(str): Error - input is not a boolean!"), "error")
}
export function boolToYesNo(bool) {
    return bool && void 0 !== bool && "boolean" == typeof bool ? bool ? "yes" : "no" : (console.log("AFTC.js: Conversion.js: boolToString(str): Error - input is not a boolean!"), "error")
}
export function stringToBool(str) {
    if (!str || void 0 === str || "string" != typeof str) return console.log("AFTC.js: stringToBoolean(str): Error - input string is not valid!"), !1;
    switch (str.toLowerCase()) {
        case "y":
        case "yes":
        case "1":
        case "true":
            return !0;
        default:
            return !1
    }
}
export function parseArrayToFloat(arr) {
    let converted;
    for (let i = 0; i < arr.length; i++) converted = parseFloat(arr[i]), isNaN(converted) ? arr[i] = 0 : arr[i] = converted;
    return arr
}
export function parseArrayToInt(arr) {
    let converted;
    for (let i = 0; i < arr.length; i++) converted = parseInt(arr[i]), isNaN(converted) ? arr[i] = 0 : arr[i] = converted;
    return arr
}
export function rgb2Hex(r, g, b) {
    return (r << 16 | g << 8 | b).toString(16)
}
export function rgbToHex(r, g, b) {
    function getHex(c) {
        let hex = c.toString(16);
        return 1 === hex.length ? "0" + hex : hex
    }
    let hex = "#" + getHex(r) + getHex(g) + getHex(b);
    return hex = hex.toUpperCase()
}
export function hexToRgb(hex) {
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null
}
export function hex2Rgb(hex) {
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null
}
export function getDaysBetween(startDateTime, endDateTime) {
    let sd = new Date(startDateTime),
        ed = new Date(endDateTime);
    return sd.setHours(12, 0, 0), ed.setHours(12, 0, 0), Math.round((ed - sd) / 864e5)
}
export function getUKDateFromDate(dte) {
    return dte.getDay() + "-" + (dte.getMonth() + 1) + "-" + dte.getFullYear()
}
export function getUSDateFromDate(dte) {
    return dte.getFullYear() + "-" + (dte.getMonth() + 1) + "-" + (dte.getDay() + 1)
}
export function getUkDateFromDbDateTime(input) {
    if ("" === input || null === input) return "no input";
    let DateParts = input.split(" ")[0].split("-");
    return DateParts[2] + "/" + DateParts[1] + "/" + DateParts[0]
}
export function getUkDateTimeFromDbDateTime(input) {
    let DateTime = input.split(" "),
        DateParts = DateTime[0].split("-"),
        TimeParts = DateTime[1].split(":");
    return DateParts[2] + "/" + DateParts[1] + "/" + DateParts[0] + " " + (TimeParts[0] + ":" + TimeParts[1])
}
export function getSQLDateTimeString() {
    let now = new Date,
        year = now.getFullYear(),
        month = now.getMonth() + 1,
        day = now.getDate(),
        hour = now.getHours(),
        minute = now.getMinutes(),
        second = now.getSeconds();
    return 1 === month.toString().length && (month = "0" + month), 1 === day.toString().length && (day = "0" + day), 1 === hour.toString().length && (hour = "0" + hour), 1 === minute.toString().length && (minute = "0" + minute), 1 === second.toString().length && (second = "0" + second), year + "/" + month + "/" + day + " " + hour + ":" + minute + ":" + second
}
export function isEmail(email) {
    return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)
}
export function isMobile() {
    let ua = navigator.userAgent.toLowerCase();
    return !!/windows phone/i.test(ua) || !!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
}
export function isAndroid() {
    let ua = navigator.userAgent.toLowerCase();
    if (/windows phone/i.test(ua)) return !1;
    return ua.indexOf("android") > -1
}
export function iOS() {
    let iDevices = ["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod"];
    if (navigator.platform)
        for (; iDevices.length;)
            if (navigator.platform === iDevices.pop()) return !0;
    return !1
}
export function isFireFox() {
    return "undefined" != typeof InstallTrigger
}
export function isChrome() {}
export function isEdge() {
    let edge = !1;
    return /Edge\/\d./i.test(navigator.userAgent) && (edge = !0), edge
}
export function isSafari() {
    return /constructor/i.test(window.HTMLElement) || "[object SafariRemoteNotification]" === (!window.safari || "undefined" != typeof safari && safari.pushNotification).toString()
}
export function isIE() {
    return !!document.documentMode
}
export function isOpera() {
    return !!window.opr && !!opr.addons || !!window.opera || navigator.userAgent.indexOf(" OPR/") >= 0
}
export function getIEVersion() {
    let match = navigator.userAgent.match(/(?:MSIE |Trident\/.*; rv:)(\d+)/);
    return match ? parseInt(match[1]) : void 0
}
export function getBrowser() {
    let tem, ua = navigator.userAgent,
        M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    return /trident/i.test(M[1]) ? (tem = /\brv[ :]+(\d+)/g.exec(ua) || [], "IE") : "Chrome" === M[1] && null != (tem = ua.match(/\bOPR\/(\d+)/)) ? "Opera" : (M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, "-?"], null != (tem = ua.match(/version\/(\d+)/i)) && M.splice(1, 1, tem[1]), M[0])
}
export function getOS(testAgent) {
    let userAgent;
    return userAgent = (userAgent = testAgent || (navigator.userAgent || navigator.vendor || window.opera)).toLowerCase(), /windows phone/i.test(userAgent) ? {
        os: "windows phone",
        userAgent: userAgent
    } : /samsungbrowser/i.test(userAgent) ? {
        os: "android",
        userAgent: userAgent
    } : /android/i.test(userAgent) ? {
        os: "android",
        userAgent: userAgent
    } : /ipad|iphone|ipod/i.test(userAgent) ? {
        os: "ios",
        userAgent: userAgent
    } : /win64|win32|win16|win95|win98|windows 2000|windows xp|msie|windows nt 6.3; trident|windows nt|windows/i.test(userAgent) ? {
        os: "windows",
        userAgent: userAgent
    } : /os x/i.test(userAgent) ? {
        os: "osx",
        userAgent: userAgent
    } : /macintosh|osx/i.test(userAgent) ? {
        os: "osx",
        userAgent: userAgent
    } : /openbsd/i.test(userAgent) ? {
        os: "open bsd",
        userAgent: userAgent
    } : /sunos/i.test(userAgent) ? {
        os: "sunos",
        userAgent: userAgent
    } : /crkey/i.test(userAgent) ? {
        os: "chromecast",
        userAgent: userAgent
    } : /appletv/i.test(userAgent) ? {
        os: "apple tv",
        userAgent: userAgent
    } : /wiiu/i.test(userAgent) ? {
        os: "nintendo wiiu",
        userAgent: userAgent
    } : /nintendo 3ds/i.test(userAgent) ? {
        os: "nintendo 3ds",
        userAgent: userAgent
    } : /playstation/i.test(userAgent) ? {
        os: "playstation",
        userAgent: userAgent
    } : /kindle/i.test(userAgent) ? {
        os: "amazon kindle",
        userAgent: userAgent
    } : / cros /i.test(userAgent) ? {
        os: "chrome os",
        userAgent: userAgent
    } : /ubuntu/i.test(userAgent) ? {
        os: "ubuntu",
        userAgent: userAgent
    } : /googlebot/i.test(userAgent) ? {
        os: "google bot",
        userAgent: userAgent
    } : /bingbot/i.test(userAgent) ? {
        os: "bing bot",
        userAgent: userAgent
    } : /yahoo! slurp/i.test(userAgent) ? {
        os: "yahoo bot",
        userAgent: userAgent
    } : {
        os: !1,
        userAgent: userAgent
    }
}
export function setHTML(elementOrId, str) {
    let ele;
    if (!(ele = "string" == typeof elementOrId ? getElementById(elementOrId) : elementOrId)) return "AFTC.js: Usage error: Unable to retrieve element id or use element [" + elementOrId + "]";
    ele.innerHTML = str
}
export function getElementOffsetTop(elementId) {
    let element = getElementById(elementId),
        curtop = 0;
    if (element.hasOwnProperty("offsetParent")) {
        do {
            curtop += element.offsetTop
        } while (element = element.offsetParent);
        return parseFloat([curtop])
    }
    return !1
}
export function XHR() {
    let args = {
        url: !1,
        method: !1,
        data: !1,
        dataType: !1,
        responseType: !1,
        onComplete: !1,
        onError: !1,
        onProgress: !1,
        onCancel: !1
    };
    if (arguments[0] && "object" == typeof arguments[0])
        for (let key in arguments[0]) args.hasOwnProperty(key) && (args[key] = arguments[0][key]);
    let params = {
        url: !1,
        requestHeader: !1,
        xhr: !1,
        readyState: !1,
        status: !1,
        responseType: !1,
        response: null,
        percentComplete: 0,
        isImage: !1,
        imageType: ""
    };

    function responseError(msg, e) {
        return console.error(msg), args.onError && (e ? args.onError(e) : args.onError(params.xhr)), !1
    }

    function updateProgress(e) {
        if (params.percentComplete = 0, e.lengthComputable ? (params.percentComplete = 100 / e.total * e.loaded, params.percentComplete = parseFloat(params.percentComplete.toFixed(2))) : params.percentComplete = 0, !args.onProgress) return params.percentComplete;
        args.onProgress(params.percentComplete)
    }

    function transferComplete(e) {
        4 === params.xhr.readyState ? "404" === params.xhr.status ? responseError("AFTC.XHR: ERROR: Please check your URL [" + args.url + "] NOT FOUND.", params.xhr) : args.onComplete && args.onComplete(params.xhr.responseText) : responseError("AFTC.XHR: ERROR: Please review event details!", e)
    }

    function transferFailed(e) {
        log("AFTC.XHR.transferFailed()"), args.onError && args.onError(e)
    }

    function transferCanceled(e) {
        log("AFTC.XHR.transferCanceled()"), args.onCancel && args.onCancel(e)
    }
    return function() {
        if (window.XMLHttpRequest ? params.xhr = new XMLHttpRequest : params.xhr = new ActiveXObject("Microsoft.XMLHTTP"), params.xhr.addEventListener("progress", updateProgress), params.xhr.addEventListener("load", transferComplete), params.xhr.addEventListener("error", transferFailed), params.xhr.addEventListener("abort", transferCanceled), args.method ? args.method = String(args.method).toUpperCase() : args.method = "GET", args.dataType ? args.dataType = String(args.dataType).toLowerCase() : args.dataType = "form", "GET" !== args.method) {
            if ("form" != args.dataType && "formdata" != args.dataType && "json" != args.dataType && "array" != args.dataType && "object" != args.dataType) {
                let msg = "AFTC.XHR: ERROR: The dataType option only supports 'form', 'formdata', 'json', 'array' or 'object'";
                console.error(msg), args.onError && args.onError(msg)
            }
            return !1
        }
        if ("form" != args.dataType) {
            let msg = "AFTC.XHR: ERROR: GET only supports the 'form' data type (key value pairs eg a=1&b=2)";
            return console.error(msg), args.onError && args.onError(msg), !1
        }
        if (!args.url) {
            let msg = "AFTC.XHR: ERROR: Please specify a URL!";
            return console.error(msg), args.onError && args.onError(msg), !1
        }
        if (args.responseType && (args.responseType = String(args.responseType).toLowerCase(), -1 != args.responseType.indexOf("json") && (params.xhr.responseType = "json")), args.data) switch (function() {
            if ("GET" === args.method && 0 != args.data) return args.url = args.url + "?" + args.data, !0;
            if ("POST" === args.method)
                if (args.data.append) args.dataType = "formdata";
                else if (isArray(args.data) || "object" == typeof args.data) {
                let data = "",
                    formData = new FormData;
                for (let key in args.data) log(key + " = " + args.data[key]), formData.append(key, args.data[key]), data += "&" + key + "=" + args.data[key];
                return args.dataType = "form", args.data = data, !0
            }
        }(), "form" === args.dataType ? params.requestHeader = "application/x-www-form-urlencoded; charset=utf-8" : "formdata" === args.dataType || "json" === args.dataType && (params.requestHeader = "application/json; charset=utf-8"), params.xhr.open(args.method, args.url, !0), params.requestHeader && params.xhr.setRequestHeader("Content-Type", params.requestHeader), args.method) {
            case "GET":
                params.xhr.send();
                break;
            default:
                params.xhr.send(args.data)
        } else params.xhr.open(args.method, args.url, !0), params.xhr.send()
    }(), {
        url: args.url,
        method: args.method,
        data: args.data,
        dataType: args.dataType,
        xhr: params.xhr,
        readyState: params.readyState,
        status: params.status,
        response: params.response,
        responseType: params.responseType
    }
}