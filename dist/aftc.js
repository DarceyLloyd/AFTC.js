/*
    Author: Darcey@AllForTheCode.co.uk

    Structure:
        - Base functions
        - Common / Crytical / Essential functions
        - Plug in the rest via gulpfile.js command gulp build and gulp watch

    NOTE: This file has a sequential structure
*/


// Var defs
var AFTC = {};




// # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
// Events / Event related functions
// # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
window.addEvent = function (obj, type, callback, eventReturn) {
    if (obj == null || typeof (obj) == 'undefined') return;
    if (obj.addEventListener) {
        //obj.addEventListener(type, callback, false);
        obj.addEventListener(type, callback, eventReturn ? true : false);
    } else if (obj.attachEvent) {
        obj.attachEvent("on" + type, callback);
    } else {
        obj["on" + type] = callback;
    }
};
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Replacement for jQuerys "$(document).ready(function(){})" for "ready(function(){})"
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
window.onReady = function (callback) {
    // IE9+
    if (document.readyState === "complete" || (document.readyState !== "loading" && !document.documentElement.doScroll)) {
        callback();
    } else {
        document.addEventListener("DOMContentLoaded", function () {
            // Adds a little delay but is a good thing
            setTimeout(callback, 10);
        });
    }
}
window.ready = function (callback) {
    window.onReady(callback);
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// AFTC.ResizeManager = {
//     running:false,
//     enabled:false,
//     delay: 100,
//     stack:[],
//     enable:function(){
//         log("AFTC.ResizeManager.enable()");
//         AFTC.ResizeManager.enabled = true;
//         window.addEventListener("resize", AFTC.ResizeManager.resizeHandler, false);
//         window.addEventListener("orientationchange", AFTC.ResizeManager.resizeHandler, false);
//     },
//     disable:function(){
//         log("AFTC.ResizeManager.disable()");
//         AFTC.ResizeManager.enabled = false;
//         window.removeEventListener("resize", AFTC.ResizeManager.resizeHandler, false);
//         window.removeEventListener("orientationchange", AFTC.ResizeManager.resizeHandler, false);
//     },
//     add:function (name, fn) {
//         log("AFTC.ResizeManager.add(): " + name);
//         var stackItem = {
//             name:name,
//             fn:fn
//         };
//         AFTC.ResizeManager.stack.push(stackItem);
//     },
//     remove:function (name) {
//         log("AFTC.ResizeManager.remove(): " + name);
//         var len = AFTC.ResizeManager.stack.length;
//         for (var i = 0; i < len; i++) {
//             if (AFTC.ResizeManager.stack[i]){
//                 //log(AFTC.ResizeManager.stack[i].name);
//                 if (AFTC.ResizeManager.stack[i].name == name) {
//                     AFTC.ResizeManager.stack.splice(i, 1);
//                     AFTC.ResizeManager.remove(name);
//                     break;
//                 }
//             }
//         }
//     },
//     runStackItem: function(i){
//         var stackItem = AFTC.ResizeManager.stack[i];
//         window.setTimeout(function(){
//             if (i == (AFTC.ResizeManager.stack.length-1)){
//                 AFTC.ResizeManager.running = false;
//             }
//             stackItem.fn();
//         },AFTC.ResizeManager.delay);
//     },
//     resizeHandler: function (e) {
//         if (AFTC.ResizeManager.running) {
//             return;
//         }
//         log("AFTC.ResizeManager.resizeHandler()");
//         AFTC.ResizeManager.running = true;
//         var len = AFTC.ResizeManager.stack.length;
//         var i;
//         window.setTimeout(function(){
//             for (i = 0; i < len; i++) {
//                 AFTC.ResizeManager.runStackItem(i);
//             }
//         },AFTC.ResizeManager.delay);
//     }
// }

// Array push based not associative object based
AFTC.ResizeManager = {
    running:false,
    enabled:false,
    delay: 100,
    stack:[],
    enable:function(){
        // log("AFTC.ResizeManager.enable()");
        AFTC.ResizeManager.enabled = true;
        window.addEventListener("resize", AFTC.ResizeManager.resizeHandler, false);
        window.addEventListener("orientationchange", AFTC.ResizeManager.resizeHandler, false);
    },
    disable:function(){
        // log("AFTC.ResizeManager.disable()");
        AFTC.ResizeManager.enabled = false;
        window.removeEventListener("resize", AFTC.ResizeManager.resizeHandler, false);
        window.removeEventListener("orientationchange", AFTC.ResizeManager.resizeHandler, false);
    },
    add:function (name, fn) {
        // log("AFTC.ResizeManager.add(): " + name);
        var stackItem = {};
        stackItem.name = name;
        stackItem.fn = fn;
        AFTC.ResizeManager.stack.push( stackItem );
    },
    remove:function (name) {
        // log("AFTC.ResizeManager.remove(): " + name);
        var len = AFTC.ResizeManager.stack.length;
        for (var i = 0; i < len; i++) {
            if (AFTC.ResizeManager.stack[i]){
                //log(AFTC.ResizeManager.stack[i].name);
                if (AFTC.ResizeManager.stack[i].name == name) {
                    AFTC.ResizeManager.stack.splice(i, 1);
                    AFTC.ResizeManager.remove(name);
                    break;
                }
            }
        }
    },
    runStackItem: function(index,stackLength){
        // log("runStackItem(index:"+index+")");
        window.setTimeout(function(){
            if (index == (stackLength-1)){
                AFTC.ResizeManager.running = false;
            }
            AFTC.ResizeManager.stack[index].fn();
        },AFTC.ResizeManager.delay);

    },
    resizeHandler: function (e) {
        if (AFTC.ResizeManager.running) {
            return;
        }
        AFTC.ResizeManager.running = true;

        window.setTimeout(function(){
            var len = AFTC.ResizeManager.stack.length;
            for (var i = 0; i < len; i++) {
                AFTC.ResizeManager.runStackItem(i,len);
            }
        },AFTC.ResizeManager.delay);
    }
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


// # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
// # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #










// # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
// DOM Element retrieval
// # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
AFTC.AFTCElementQueryCache = [];
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
window.getElementById = function (id) {
    var cached = AFTC.AFTCElementQueryCache[id];
    if (isElement(cached)){
        return cached;
    } else {
        var ele = document.getElementById(id);
        AFTC.AFTCElementQueryCache[id] = ele;
        return ele;
    }
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
window.querySelector = function (str) {
    var cached = AFTC.AFTCElementQueryCache[str];
    if (isElement(cached)){
        return cached;
    } else {
        var ele = document.querySelector(str);
        AFTC.AFTCElementQueryCache[id] = ele;
        return ele;
    }
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
window.getElementsByClassName = function (str) {
    var cached = AFTC.AFTCElementQueryCache[str];
    if (isElement(cached)){
        return cached;
    } else {
        var ele = document.getElementsByClassName(str);
        AFTC.AFTCElementQueryCache[id] = ele;
        return ele;
    }
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
window.getElementsByTagName = function (str) {
    // TODO
    return document.getElementsByTagName(str);
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
// # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #










// # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
// DEBUG
// # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
AFTC.log = {
    enabled: true
};
AFTC.logTo = {
    enabled: false,
    element: false
};
window.log = function (arg) {
    if (console) {
        if (AFTC.log.enabled) {
            if (typeof (arg) == "undefined") {
                console.error(arg);
            } else {
                console.log(arg);
            }
            if (isElement(AFTC.logTo.element) && AFTC.logTo.enabled) {
                if (typeof (arg) == "object") {
                    AFTC.logTo.element.innerHTML += "[Object]<br>";
                    for (var key in arg) {
                        AFTC.logTo.element.innerHTML += ("&nbsp;&nbsp;&nbsp;&nbsp;" + key + " = " + arg[key] + "<br>");
                    }
                } else {
                    AFTC.logTo.element.innerHTML += (arg + "<br>");
                }

            }
        }
    }
}

window.configLog = function () {
    // Command functions (multiple commands may run the same function)
    var autoLogTo = function (arg) {
        var element = getElementById(arg);
        if (isElement(element)) {
            AFTC.logTo.element = element;
            AFTC.logTo.enabled = true;
        } else {

        }
    }
    var autoLogEnable = function (value) {
        if (isBoolean(value)) {
            AFTC.logTo.enabled = value;
        }
    }
    var autoLogDisable = function (value) {
        if (isBoolean(value)) {
            AFTC.logTo.enabled = !value;
        }
    }


    // Process arguments
    if (arguments[0] && typeof (arguments[0]) == "object") {
        for (var key in arguments[0]) {
            var value = arguments[0][key];

            switch (key) {
                case "autoLogTo":
                    autoLogTo(value);
                    break;
                case "autoLogEnable":
                    autoLogEnable(value);
                    break;
                case "enableAutoLog":
                    autoLogEnable(value);
                    break;
                case "autoLogDisable":
                    autoLogDisable(value);
                    break;
                case "disableAutoLog":
                    autoLogDisable(value);
                    break;
                default:
                    console.error("AFTC.js > configLog({autoLogTo:elementId}): Usage error, unknown command [" + key + "]!");
                    break;
            }

        }
    }


    // var enableAutoLogTo = function(elementId){
    //     var element = getElementById(elementId);
    //     if (!element){
    //         throw("AFTC.js > logEnableAutoLogTo(elementId): Usage error, can't find [" + elementId + "] on the DOM");
    //         return;
    //     }
    //     AFTC.logTo = element;
    // };
    // return {
    //     enableAutoLogTo:function(elementId){
    //         enableAutoLogTo(elementId);
    //     },
    //     disableAutoLogTo:function(){
    //         AFTC.logTo = false;
    //     },
    //     autoLogTo:function(elementId){
    //         if (!elementId){
    //             AFTC.logTo = false;
    //         } else {
    //             enableAutoLogTo(elementId);
    //         }
    //     },
    //     enable:function(){
    //         AFTC.log.enabled = true;
    //     },
    //     disable:function(){
    //         AFTC.log.enabled = false;
    //     }
    // }
}

window.logEnable = function () {
    AFTC.log.enabled = true;
}

window.logDisable = function () {
    AFTC.log.enabled = false;
}

window.trace = function (arg) {
    log(arg);
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
window.logTo = function (elementId, msg) {
    var element = getElementById(elementId);
    log(msg);
    if (element) {
        element.innerHTML += (msg + "<br>");
    }
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
window.logObjTo = function (elementId, obj, append) {
    var element = getElementById(elementId);
    if (!element) {
        throw ("AFTC.JS > logObjTo(elementId,obj): Usage error. Can't find elementId of [" + elementId + "] on the dom!");
    }

    var msg = "Logging object:<br>\n";
    for (var key in obj) {
        msg += "&nbsp;&nbsp;&nbsp;&nbsp;" + key + " = " + obj[key] + "<br>\n";
    }

    if (!append) {
        append = true;
    }

    if (append) {
        var oldContent = element.innerHTML;
        element.innerHTML = oldContent + "<br>" + msg;
    } else {
        var oldContent = element.innerHTML;
        element.innerHTML = msg + "<br>" + oldContent;
    }



    // log("Logging object:\n");
    // for (var key in obj) {
    //     log(key + " = " +  obj[key] + "\n");
    // }
    // log(" ");
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
window.openDebugWindow = function (str) {
    var w = window.open('debug', 'debug', 'width=1200,height=400,resizeable,scrollbars');
    w.document.title = "Debug";
    w.document.write("<style>body {width:100%;}</style>");
    w.document.write("<div style='display:block;width:98%;-ms-word-wrap:break-word ;word-wrap:break-word;border:1px solid #000000;'>" + str + "</div>");
    //w.document.write("<div style='width:100%'>" + str + "</div>");
    w.document.close();
}
window.stringToWindow = function (str) {
    openDebugWindow(str);
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
// # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #










// # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
// Array functions
// # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
window.arrayRemoveIndex = function (array, index) {
    return array.splice(index);
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
window.isStringInArray = function (string, array) {
    return (new RegExp('(' + array.join('|').replace(/\./g, '\\.') + ')$')).test(string);
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
Array.prototype.contains = function (needle) {
    var len = this.length;
    for (var i = 0; i < len; i++) {
        if (this[i] == needle) {
            return true;
            break;
        }
    }
    return false;
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
window.getMaxFromArray = function (arr) {
    return Math.max.apply(Math, arr);
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
window.getMinFromArray = function (arr) {
    return Math.min.apply(Math, arr);
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
window.shuffleArray = function (array) {
    var methodNo = getRandom(1, 2);
    return window["arrayShuffle" + methodNo](array);
    var fn = "arrayShuffle" + methodNo;
    //log(fn);
    //fn();
}
window.arrayShuffle = function (arr) {
    return shuffleArray(arr);
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
window.arrayShuffle1 = function (array) {
    var currentIndex = array.length,
        temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
window.arrayShuffle2 = function (a) {
    var x, t, r = new Uint32Array(1);
    for (var i = 0, c = a.length - 1, m = a.length; i < c; i++, m--) {
        crypto.getRandomValues(r);
        x = Math.floor(r / 65536 / 65536 * m) + i;
        t = a[i], a[i] = a[x], a[x] = t;
    }

    return a;
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
// # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #










// # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
// Datatype handling / Variable conversion / Type checking / isXXX / getXXX / Common equation functions
// # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
window.isAlphaNumeric = function (str) { // [a-z],[A-Z],[0-9] only
    return !(/\W/.test(str));
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
window.isNode = function (o) {
    return (
        typeof Node === "object" ? o instanceof Node :
        o && typeof o === "object" && typeof o.nodeType === "number" && typeof o.nodeName === "string"
    );
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
window.isElement = function (o) {
    var answer = (
        typeof HTMLElement === "object" ? o instanceof HTMLElement : //DOM2
        o && typeof o === "object" && o !== null && o.nodeType === 1 && typeof o.nodeName === "string"
    );

    if (answer != true) {
        return false;
    } else {
        return true;
    }
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
window.isElement2 = function (element) {
    // works on major browsers back to IE7
    return element instanceof Element;
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
window.radToDeg = function (input) {
    return input * (180 / Math.PI);
}
window.rad2deg = function (arg) {
    return radToDeg(arg);
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
window.degToRad = function (input) {
    return input * (Math.PI / 180);
}
window.deg2rad = function (arg) {
    return degToRad(arg);
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
window.boolToString = function (arg) {

    if (!arg || arg == undefined || typeof (arg) != "boolean") {
        console.log("AFTC.js: Conversion.js: boolToString(str): Error - input is not a boolean!");
        return "error";
    }

    if (arg) {
        return "true";
    } else {
        return "false";
    }
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
window.stringToBool = function (str) {

    if (!str || str == undefined || typeof (str) != "string") {
        console.log("AFTC.js: Conversion.js: stringToBoolean(str): Error - input str is not valid!");
        return false;
    }

    switch (str.toLowerCase()) {
        case "y":
            return true;
            break;
        case "yes":
            return true;
            break;
        case "1":
            return true;
            break;
        case "true":
            return true;
            break;
        case "y":
            return true;
            break;
        default:
            return false;
            break;
    }
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
window.getBooleanFrom = function (arg) {
    if (typeof (arg) == "string") {
        return stringToBool(arg);
    }

    if (typeof (arg) == "number") {
        if (arg <= 0) {
            return false;
        } else {
            return true;
        }
    }
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
window.isBoolean = function (arg) {
    if (typeof (arg) == "boolean") {
        return true;
    } else {
        return false;
    }
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
window.isArray = function (obj) {
    return !!obj && obj.constructor === Array;
    //return arr.constructor == Array;
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
function getFunctionName(fn) {
    var name = fn.toString();
    var reg = /function ([^\(]*)/;
    return reg.exec(name)[1];
};
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
// # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #











// # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
// Misc features (small ones only)
// # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
window.redirect = function (url) {
    self.location.href = url;
};
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
var Benchmark = function () {
    var start = new Date();
    return {
        stop: function () {
            var end = new Date();
            var time = end.getTime() - start.getTime();
            return time;
        }
    }
};
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
// # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #










// # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
// Random generators (small ones)
// # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
window.getRandomInt = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
window.getRandom = function (min, max) {
    return getRandomInt(min, max);
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
window.randomString = function (length) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    for (var i = 0; i < length; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}
window.getRandomString = function (len) {
    return randomString(len);
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
window.guid = function () {
    function Amiga() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }

    return Amiga() + Amiga() + '-' + Amiga() + '-' + Amiga() + '-' +
        Amiga() + '-' + Amiga() + Amiga() + Amiga();
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
window.getArrayOfRandomNumbers = function (arraySize, min, max) {
    var arr = [];
    for (var i = 0; i < arraySize; i++) {
        arr[i] = getRandom(min, max);
    }
    return arr;
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
window.getArrayOfRandomStrings = function (arraySize, strLength) {
    var arr = [];
    for (var i = 0; i < arraySize; i++) {
        arr[i] = getRandomString(strLength);
    }
    return arr;
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
// # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
window.cleanJSONString = function (s) {
	// preserve newlines, etc - use valid JSON
	s = s.replace(/\\n/g, "\\n")
		.replace(/\\'/g, "\\'")
		.replace(/\\"/g, '\\"')
		.replace(/\\&/g, "\\&")
		.replace(/\\r/g, "\\r")
		.replace(/\\t/g, "\\t")
		.replace(/\\b/g, "\\b")
		.replace(/\\f/g, "\\f");
	// remove non-printable and other non-valid JSON chars
	s = s.replace(/[\u0000-\u0019]+/g, "");
	return s;
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
window.escapeHTML = function (text) {
	var replacements = {
		"<": "&lt;",
		">": "&gt;",
		"&": "&amp;",
		"\"": "&quot;"
	};
	return text.replace(/[<>&"]/g, function (character) {
		return replacements[character];
	});
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
window.trimStringLength = function (input, length) {
	return input.substring(0, length);
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
window.getFileExtension = function (str) {
	var ext = str.split('.').pop();
	return str;
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
window.getLastPartOfUrl = function () {
	var url = window.location.href;
	var part = url.substring(url.lastIndexOf('/') + 1);
	return part;
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
window.getFileExtension2 = function (input) {
	return input.slice((input.lastIndexOf(".") - 1 >>> 0) + 2);
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
window.removeFileFromPath = function (path) {
	//var pa = '/this/is/a/folder/aFile.txt';
	var r = /[^\/]*$/;
	path = path.replace(r, '');
	return path;
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
window.getAnchorFromUrl = function (url) {
	return url.slice(url.lastIndexOf('#') + 1);
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -





// es6 now supports the startsWith() and endsWith() (This is for pre ES6 support)
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
if (typeof String.prototype.startsWith != 'function') {
	String.prototype.startsWith = function (str) {
		return this.match(new RegExp("^" + str));
	};
}

if (typeof String.prototype.endsWith != 'function') {
	String.prototype.endsWith = function (str) {
		return this.match(new RegExp(str + "$"));
	};
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
window.getStringBetween = function(str,start,end){
	return str.split(start).pop().split(end).shift().trim();
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
window.getAllStringsBetween = function(str,start,end){
	//return str.match(new RegExp(start + "(.*)" + end));
	// var regExString = new RegExp("(?:"+start+")(.*?)(?:"+end+")", "ig"); //set ig flag for global search and case insensitive
	// return regExString.exec(str);
	for(var i=0; i<str.length; ++i) {
		log(str[i]);
	}
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -




/*
window.getAllStringsBetween = function(str,start,end){
	var arr = str.split(/[:;]/);
}


test.match(new RegExp(firstvariable + "(.*)" + secondvariable));

or

var regExString = new RegExp("(?:"+firstvariable+")(.*?)(?:"+secondvariable+")", "ig"); //set ig flag for global search and case insensitive

var testRE = regExString.exec("My cow always gives milk.");
if (testRE && testRE.length > 1) //RegEx has found something and has more than one entry.
{  
    alert(testRE[1]); //is the matched group if found
}
*/


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
window.getWeightedRandom = function (odds, iterations) {
    if (!odds) {
        odds = [
            0.68, // 0
            0.69, // 1
            0.698, // 2
            0.6909, // 3
            0.68, // 4
            0.58, // 5
            0.57, // 6
            0.56, // 7
            0.4, // 8
            0.3, // 9
        ];
    }
    var weights = [];
    var r = 0;
    var iMax = 0;
    var wMax = 0;

    for (var i in odds) {
        if (!weights[i]) {
            weights[i] = 0;
        }

        for (var x = 0; x < iterations; x++) {
            r = Math.random();
            //log(r.toFixed(3) + "   " + odds[i].toFixed(3));
            if (r <= odds[i]) {
                weights[i] += odds[i];
            }
        }

        if (weights[i] > wMax) {
            wMax = weights[i];
            iMax = i;
        }
    }

    //log(weights);
    //log("wMax = " + wMax + "   iMax = " + iMax);
    return iMax;
};
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

window.getUkDateFromDbDateTime = function (input) {
	// "2016-04-08 21:11:59" to UK date
	if (input == "" || input == null) {
		return "no input";
	}
	var DateTime = input.split(" ");
	var DateParts = DateTime[0].split("-");
	var UKDate = DateParts[2] + "/" + DateParts[1] + "/" + DateParts[0];
	return UKDate;
}

window.getUkDateTimeFromDbDateTime = function (input) {
	// "2016-04-08 21:11:59" to UK date time
	var DateTime = input.split(" ");
	var DateParts = DateTime[0].split("-");
	var TimeParts = DateTime[1].split(":");
	var UKDate = DateParts[2] + "/" + DateParts[1] + "/" + DateParts[0];
	var Time = TimeParts[0] + ":" + TimeParts[1];
	return (UKDate + " " + Time);
}


window.getSQLDateTime = function () {
	var now = new Date();
	var year = now.getFullYear();
	var month = now.getMonth() + 1;
	var day = now.getDate();
	var hour = now.getHours();
	var minute = now.getMinutes();
	var second = now.getSeconds();
	if (month.toString().length == 1) {
		var month = '0' + month;
	}
	if (day.toString().length == 1) {
		var day = '0' + day;
	}
	if (hour.toString().length == 1) {
		var hour = '0' + hour;
	}
	if (minute.toString().length == 1) {
		var minute = '0' + minute;
	}
	if (second.toString().length == 1) {
		var second = '0' + second;
	}
	var dateTime = year + '/' + month + '/' + day + ' ' + hour + ':' + minute + ':' + second;
	return dateTime;
}




window.getDateTime = function (local) {
	// NOTE: MySQL DB DateTime format: "2016-04-08 21:11:59"
	var currentdate = new Date(),
		datetime = "";

	if (!local) {
		local = "en-GB";
	}

	switch (local.toLowerCase()) {
		case "db":
			datetime = getSQLDateTime();
			break;
		case "us":
			datetime = currentdate.toLocaleString('en-US', {
				hour12: false,
				month: "numeric",
				day: "numeric",
				year: "numeric",
				hour: "numeric",
				minute: "numeric",
				second: "numeric"
			});
			datetime = datetime.replace(",", "");
			break;
		default:
			datetime = currentdate.toLocaleString('en-GB');
			datetime = datetime.replace(",", "");
			break;
	}

	return datetime;
}



// -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
window.setCookie = function (name, value) {
	//document.cookie = name + "=" + value + "; expires=Thu, 18 Dec 2013 12:00:00 GMT";
	//.cookie(name, value, {expires:365,path:'/sfsow'});
	var expires = new Date();
	expires.setTime(expires.getTime() + (1 * 24 * 60 * 60 * 1000));
	document.cookie = name + '=' + value + ';expires=' + expires.toUTCString();
}
// -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -


// -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
window.getCookie = function (name) {
	//return .cookie(name);
	var keyValue = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|)');
	return keyValue ? keyValue[2] : null;
}
// -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -


// -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
window.validateEmail = function (email) {
	var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email);
}
// -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -

window.isValidEmail = function (email) {
	return validateEmail(email);
}




// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
window.generateNoise = function(canvasId, width, height, opacity) {
	var canvas = document.getElementById(canvasId),
		ctx = canvas.getContext('2d'),
		x, y,
		number,
		opacity = opacity || .2;

	canvas.width = width;
	canvas.height = height;

	for (x = 0; x < canvas.width; x++) {
		for (y = 0; y < canvas.height; y++) {
			number = Math.floor(Math.random() * 60);

			ctx.fillStyle = "rgba(" + number + "," + number + "," + number + "," + opacity + ")";
			ctx.fillRect(x, y, 1, 1);
		}
	}

	//document.body.style.backgroundImage = "url(" + canvas.toDataURL("image/png") + ")";
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



// This is for animations that have no dependancies (functions that use jquery and gsap have their own files)


// t 0 > 1
window.AFTCEase = {
    // no easing, no acceleration
    linear: function (t) { return t },
    // accelerating from zero velocity
    easeInQuad: function (t) { return t*t },
    // decelerating to zero velocity
    easeOutQuad: function (t) { return t*(2-t) },
    // acceleration until halfway, then deceleration
    easeInOutQuad: function (t) { return t<.5 ? 2*t*t : -1+(4-2*t)*t },
    // accelerating from zero velocity 
    easeInCubic: function (t) { return t*t*t },
    // decelerating to zero velocity 
    easeOutCubic: function (t) { return (--t)*t*t+1 },
    // acceleration until halfway, then deceleration 
    easeInOutCubic: function (t) { return t<.5 ? 4*t*t*t : (t-1)*(2*t-2)*(2*t-2)+1 },
    // accelerating from zero velocity 
    easeInQuart: function (t) { return t*t*t*t },
    // decelerating to zero velocity 
    easeOutQuart: function (t) { return 1-(--t)*t*t*t },
    // acceleration until halfway, then deceleration
    easeInOutQuart: function (t) { return t<.5 ? 8*t*t*t*t : 1-8*(--t)*t*t*t },
    // accelerating from zero velocity
    easeInQuint: function (t) { return t*t*t*t*t },
    // decelerating to zero velocity
    easeOutQuint: function (t) { return 1+(--t)*t*t*t*t },
    // acceleration until halfway, then deceleration 
    easeInOutQuint: function (t) { return t<.5 ? 16*t*t*t*t*t : 1+16*(--t)*t*t*t*t }
}




/* NOTES:
- TransitionEnd events can fire multiple times when animating css styles which include other styles such as border, has 4 sides, margin etc (flag and event remove is in place to fix this)
- left,right,top,bottom wont animate unless the default values have been set, dynamic setting of this style element doesnt work for no reason, so harcoded values are in place
- TransitionEnd events and removal fire too close to re-addition of event and start of next style animation, delays of 100ms are in place to prevent this from happening
- Tried revetring to single transitionend with no adding and removing it between animations but this resulted in everything executing at same time again
*/

var AFTC = AFTC || {};
AFTC.Animate = function (elementQuery, onComplete) {

    var element = querySelector(elementQuery);
    if (!this.element) {
        this.element = getElementById(elementQuery);
        if (!this.element) {
            throw ("AFTC.js > animation.js > Animate(elementQuery): Usage error, unable to find element [" + elementQuery + "] on the DOM!");
        }
    }

    var transitionedEventAdded = false;
    var chain = []; // Que of functions to execute
    var chainActive = false;
    var hasOnCompleteRun = false;

    function processChain(action, fn) {
        // log("processChain(action,fn): action = " + action);

        if (action == "complete") {
            transitionedEventAdded = false;
            element.removeEventListener("transitionend", false);

            var chainLen = chain.length;
            // remove index 1
            if (chainLen > 0) {
                chain.splice(0, 1);

                // after splice (removal of index 0)
                chainLen = chain.length;
                // log("chainLen = " + chainLen);
                if (chainLen > 0) {
                    // log("processChain() COMPELTE & RUN NEXT");
                    //var fnToRun = chain[0];
                    setTimeout(chain[0], 100)

                } else {
                    // log("function chain complete()");
                    chainActive = false;
                    processOnComplete();
                }
            } else {
                // Nothing left in chain stack
                chainActive = false;
                processOnComplete();
            }
        } else if (action == "add") {
            chain.push(fn);
            if (!chainActive) {
                chainActive = true;
                // log("processChain() ADD & RUN");
                // chain[0]();
                setTimeout(chain[0], 100)
            }
        }

    }

    function processOnComplete() {
        if (typeof (onComplete) != "undefined") {
            // prevent multi run
            // animating some styles will result in the TransitionEnd firing multiple times!!!
            if (!hasOnCompleteRun) {
                hasOnCompleteRun = true;
                onComplete();
            }
        }
    }

    function setDuration(duration) {
        // log("setDuration()");
        // element.style.transition = "all " + duration + "s";
        element.style.transitionDuration = duration + "s";
        element.style.webkitTransitionDuration = duration + "s";
        element.style.mozTransitionDuration = duration + "s";
        element.style.oTransitionDuration = duration + "s";
        element.style.msTransitionDuration = duration + "s";
    }

    function removeDuration() {
        // log("removeDuration()");
        // element.style.removeProperty("transition");
        element.style.removeProperty("transitionDuration");
        element.style.removeProperty("webkitTransitionDuration");
        element.style.removeProperty("mozTransitionDuration");
        element.style.removeProperty("oTransitionDuration");
        element.style.removeProperty("msTransitionDuration");
    }

    function validateDuration(duration) {
        if (typeof (duration) == "undefined") {
            return duration = 1;
        } else {
            return parseFloat(duration);
        }
    }


    function getSuffixFromValueAndStyle(style, targetValue) {
        // log("getSuffixFromValueAndStyle()");
        var isPercentage = false,
            isPixel = false,
            isColor = false,
            isNumber = false,
            suffix = "";

        // If targetValue is a string we detect its measurement system (px or % or number)
        if (typeof (targetValue) == "string") {
            // log("getSuffixFromValueAndStyle(): typeof(targetValue) = string [" + targetValue + "]");
            //myArray = datastring.split(/[0-9]+/);
            isPercentage = targetValue.indexOf("%");
            isPixel = targetValue.indexOf("px");
            isColor = targetValue.indexOf("#");
            // log("targetValue = " + targetValue);
            // log("isPercentage = " + isPercentage);
            // log("isPixel = " + isPixel);
            // log("isColor = " + isColor);

            if (isPercentage == -1 && isPixel == -1 && isColor == -1) {
                suffix = "number";
            } else if (isPercentage > -1) {
                suffix = "%";
            } else if (isPixel > -1) {
                suffix = "px";
            } else if (isColor > -1) {
                suffix = "#";
            } else {
                suffix = "number";
            }
        } else {

            // Assume suffix = "px" as mostly everything is
            var numberStyles = [
                "opacity"
            ];
            if (numberStyles.contains(style)) {
                suffix = "number";
            } else {
                // Default to px
                suffix = "px";
            }
        }

        return suffix;
    }



    var onTransitionEndHandler = function () {
        // log("--- EVENT: TransitionEnd ---");
        element.removeEventListener("transitionend", onTransitionEndHandler, false);
        removeDuration();
        processChain("complete");
    }




    var animate = function (style, targetValue, duration) {
        //log("animate()");



        if (!element.style.hasOwnProperty(style)) {
            var msg = "";
            msg = "AFTC.js > animation.js > Animate(elementQuery): Usage error, unable to find style [" + style + "] on element [" + elementQuery + "]\n";
            msg += "Common styles available (there are more) to you are:\n";
            msg += "\t" + "width" + "\n";
            msg += "\t" + "height" + "\n";
            msg += "\t" + "left" + "\n";
            msg += "\t" + "right" + "\n";
            msg += "\t" + "top" + "\n";
            msg += "\t" + "bottom" + "\n";
            msg += "\t" + "borderWidth" + "\n";
            msg += "\t" + "margin" + "\n";
            msg += "\t" + "marginLeft" + "\n";
            msg += "\t" + "marginRight" + "\n";
            msg += "\t" + "marginTop" + "\n";
            msg += "\t" + "marginBottom" + "\n";
            msg += "\t" + "padding" + "\n";
            msg += "\t" + "paddingLeft" + "\n";
            msg += "\t" + "paddingRight" + "\n";
            msg += "\t" + "paddingTop" + "\n";
            msg += "\t" + "paddingBottom" + "\n";

            for (var key in element.style) {
                var keyFloat = parseFloat(key);
                if (!isNumeric(keyFloat)) {
                    msg += "\t" + key + "\n";
                }
            }
            throw (msg);
            return;
        }

        var suffix = getSuffixFromValueAndStyle(style, targetValue);

        // Ensure targetValue is a number / float for everything but colors #
        if (suffix != "#") {
            targetValue = parseFloat(targetValue);
        }

        var currentValue = element.style[style];
        var computedValue = getComputedStyle(element, null)[style];

        //log("animate(): suffix = " + suffix);
        processChain("add", function () {
            // log("#########################################");
            // log("### element = " + element)
            // log("### style = " + style)
            // log("### targetValue = " + targetValue)
            // log("### computedValue = " + computedValue);
            // log("### currentValue = " + currentValue)
            // log("### typeof(currentValue) = " + typeof(currentValue))
            // log("### currentValue.length = " + currentValue.length)
            // log("### suffix = " + suffix)
            // log("### duration = " + duration)

            // You must set css left, right, top, bottom, etc or animation wont work
            // and if you do, you cant run animation straight away after setting the property
            // you will need to use a timer, I've put a timer in for 50ms delay before animation starts
            if (currentValue.length == 0) {
                var numberStyles = [
                    "opacity",
                    "left",
                    "right",
                    "top",
                    "bottom",
                    "borderWidth",
                    "borderSize",
                ];
                // log("contains = " + numberStyles.contains(style));
                if (numberStyles.contains(style)) {
                    // log("style found!");
                    element.style[style] = 0;
                }
            }

            // element.style.left = 0;
            // element.style.left = "0";
            // element.style.left = "0px";
            // if (element.style.left.length == 0){ log("setting left!"); element.style.left = 0; }
            // if (element.style.right.length == 0){ element.style.right = 0; }
            // if (element.style.top.length == 0){ element.style.top = 0; }
            // if (element.style.bottom.length == 0){ element.style.bottom = 0; }

            setDuration(validateDuration(duration));
            if (!transitionedEventAdded) {
                // log("### Adding event [TransitionEnd]");
                transitionedEventAdded = true;
                element.addEventListener("transitionend", onTransitionEndHandler, false);
            }

            var styleValue;
            if (suffix == "number" || suffix == "#") {
                styleValue = targetValue;
            } else {
                styleValue = (targetValue + suffix);
            }

            // log("##### Setting style [" + style + "] to [" + styleValue + "]");
            setTimeout(function () {
                element.style[style] = styleValue;
            }, 50);

            // log("\n\n\n");
        });
        return publicFunctions;
    }


    function set(style, value) {
        processChain("add", function () {
            element.style[style] = value;
            processChain("complete");
        });
        return publicFunctions;
    }


    function delay(duration) {
        processChain("add", function () {
            setTimeout(function () {
                processChain("complete");
            }, (duration * 1000));

        });
        return publicFunctions;
    }




    var publicFunctions = {
        delay: function (duration) {
            return delay(duration);
        },
        set: function (style, value) {
            return set(style, value);
        },
        opacity: function (targetValue, duration) {
            return animate("opacity", targetValue, duration);
        },
        prop: function (style, targetValue, duration) {
            return animate(style, targetValue, duration);
        }
    }



    return publicFunctions;
}



// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
window.fadeIn = function (elementQuery, duration) {

}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
window.fadeOut = function (elementQuery, duration) {
    window.fade("out", elementQuery, duration, arguments[2]);
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
window.getElementOffsetTop = function (elementIdOrQuery) {
    var element = getElement(elementIdOrQuery);
    if (!element) {
        throw ("AFTC.js > animation.js > getElementOffsetTop(elementIdOrQuery): Usage error, unable to find [" + elementIdOrQuery + "] on the DOM!");
    }

    var curtop = 0;
    if (element.offsetParent) {
        do {
            curtop += element.offsetTop;
        } while (element = element.offsetParent);
        return parseFloat([curtop]);
    }
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
window.scrollToElement = function (elementIdOrQuery, arg_duration, offset) {
    var e = getElement(elementIdOrQuery);
    if (!e) {
        throw ("AFTC.js > animation.js > scrollToElement(elementIdOrQuery): Usage error, unable to find [" + elementIdOrQuery + "] on the DOM!");
    }

    var targetY = getElementOffsetTop(elementIdOrQuery);
    if (typeof (offset) != "undefined") {
        targetY += parseFloat(offset);
    }

    // If you dont want scroll just use this next line and return
    //window.scroll(0, targetY);

    var startY = document.documentElement.scrollTop,
        currentY = document.documentElement.scrollTop,
        distance = Math.abs(targetY - startY),
        duration = arg_duration*1000,
        startTime = null,
        endTime,
        step = 0;

    // Prevent run if at location +/- 3 pixels
    if (startY > (targetY - 3) && startY < (targetY + 3)) {
        return false;
    }

    var direction = "scroll up";
    if (targetY > startY) {
        direction = "scroll down";
    }

    // log("scrollToElement(): startY = " + startY)
    // log("scrollToElement(): targetY = " + targetY)
    // log("scrollToElement(): distance = " + distance)    
    // log("scrollToElement(): currentY = " + currentY)
    // log("scrollToElement(): direction = " + direction)



    var animate = function (t) {
        if (!startTime) {
            startTime = t;
            endTime = t + duration;
            step = (distance / duration);
        }

        // 1st run startTime and endTime are undefined and NaN, prevent run
        if (!endTime) {
            // log("prevent run");
            requestAnimationFrame(animate);
            return;
        }

        currentY = document.documentElement.scrollTop;

        if (direction == "scroll down") {
            var nextY = startY + (step * (t - startTime));
            if (nextY > targetY) {
                nextY = targetY;
            }
            // var msg = "";
            // msg += "start = " + startTime.toFixed(2);
            // msg += "   end = " + endTime.toFixed(2);
            // msg += "   startY = " + startY.toFixed(2);
            // msg += "   targetY = " + targetY.toFixed(2);
            // msg += "   currentY = " + currentY.toFixed(2);
            // msg += "   step = " + step.toFixed(2);
            // msg += "   nextY = " + nextY.toFixed(2);
            // log(msg);

            if (nextY >= targetY) {
                delete startTime;
                delete endTime;
                delete duration;
                delete step;
                window.scrollTo(0, targetY);
                // log("scroll down animation done");
                // log("-------------------------------\n\n\n");
            } else {
                window.scrollTo(0, nextY);
                requestAnimationFrame(animate);
            }
        } else {
            var nextY = startY - (step * (t - startTime));
            if (nextY < targetY) {
                nextY = targetY;
            }
            if (nextY <= targetY) {
                delete startTime;
                delete endTime;
                delete duration;
                delete step;
                window.scrollTo(0, targetY);
            } else {
                window.scrollTo(0, nextY);
                requestAnimationFrame(animate);
            }
        }
    }
    animate();
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
window.getHSLColor = function (value) {
    //value from 0 to 1
    var hue = ((1 - value) * 120).toString(10);
    return ["hsl(", hue, ",100%,50%)"].join("");
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
window.getRandomRGBString = function () {
    var $r = Math.round(Math.random() * 255);
    var $g = Math.round(Math.random() * 255);
    var $b = Math.round(Math.random() * 255);
    var rgb = "rgb(" + $r + "," + $g + "," + $b + ")";
    return rgb;
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
window.getRandomHexColor = function () {
    var hex = Math.floor(Math.random() * 0xFFFFFF);
    return "#" + ("000000" + hex.toString(16)).substr(-6);
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
window.getRandomRGBColor = function(){
    rand = "rgb("+
        Math.floor(Math.random()*256)+","+
        Math.floor(Math.random()*256)+","+
        Math.floor(Math.random()*256)+")";
    return rand;
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
window.rgb2Hex = function (r, g, b) {
    if (r > 255 || g > 255 || b > 255)
        throw "Invalid color component";
    return ((r << 16) | (g << 8) | b).toString(16);
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -




// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
window.rgbToHex = function (r, g, b) {
    function getHex(c) {
        var hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    }

    var rr = getHex(r);
    var gg = getHex(g);
    var bb = getHex(b);

    return "#" + rr + gg + bb;
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
window.hexToRgb = function (hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
window.numberToHex = function (num) {
    return num.toString(16);
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -





window.rgb2hsv = function() {
    var rr, gg, bb,
        r = arguments[0] / 255,
        g = arguments[1] / 255,
        b = arguments[2] / 255,
        h, s,
        v = Math.max(r, g, b),
        diff = v - Math.min(r, g, b),
        diffc = function(c){
            return (v - c) / 6 / diff + 1 / 2;
        };

    if (diff == 0) {
        h = s = 0;
    } else {
        s = diff / v;
        rr = diffc(r);
        gg = diffc(g);
        bb = diffc(b);

        if (r === v) {
            h = bb - gg;
        }else if (g === v) {
            h = (1 / 3) + rr - bb;
        }else if (b === v) {
            h = (2 / 3) + gg - rr;
        }
        if (h < 0) {
            h += 1;
        }else if (h > 1) {
            h -= 1;
        }
    }
    return {
        h: Math.round(h * 360),
        s: Math.round(s * 100),
        v: Math.round(v * 100)
    };
}






// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
var AFTC = AFTC || {}
AFTC.Color = function (arg_color) {

    // Var ini
    var me = this;

    var params = {
        color: {
            r: 0,
            g: 0,
            b: 0
        }
    };

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    function init() {
        //log("AFTC.Color.init()");

        // Process arg_color
        var hex = "";
        var num = "";
        var rgb = "";
        var str = "";
        var conversionError = false;

        switch (typeof (arg_color)) {
            case "string":
                // hex or rgb
                if (arg_color[0] == "#") {
                    //log("AFTC.Color.init(): Converting hex format [" + arg_color + "] to RGB");
                    rgb = hexToRgb(arg_color);
                    params.color.r = rgb.r;
                    params.color.g = rgb.g;
                    params.color.b = rgb.b;
                } else {
                    //log("AFTC.Color.init(): Converting rgb string to RGB");
                    str = arg_color.replace("rgb(", "");
                    str = str.replace(")", "");
                    var arr = str.split(",");
                    if (arr.length == 3) {
                        params.color.r = parseInt(arr[0]);
                        params.color.g = parseInt(arr[1]);
                        params.color.b = parseInt(arr[2]);
                    } else {
                        conversionError = true;
                    }
                }
                break;
            // case "number":
            //     //log("AFTC.Color.init(): Converting number format 0x000000 to RGB");
            //     hex = "#" + numberToHex(arg_color);
            //     log(arg_color);
            //     log(hex);
            //     rgb = hexToRgb(hex);
            //     params.color.r = rgb.r;
            //     params.color.g = rgb.g;
            //     params.color.b = rgb.b;
            //     break;
            case "object":
                var isArray = !!arg_color && arg_color.constructor === Array;
                if (!isArray) {
                    conversionError = true;
                } else if (arg_color.length == 3) {
                    //log("AFTC.Color.init(): Converting array to RGB");
                    params.color.r = parseInt(arg_color[0]);
                    params.color.g = parseInt(arg_color[1]);
                    params.color.b = parseInt(arg_color[2]);
                } else {
                    conversionError = true;
                }
                break;
            default:

                break;
        }


        //log(params.color.rgb);

        if (conversionError) {
            var msg = "";
            msg += "AFTC.Color(): ERROR - Unable to conver the color you supplied [" + arg_color + "] to a useful RGB value!\n";
            msg += "Formats supported are:" + "\n";
            msg += "\t" + "new AFTC.Color('rgb(50,60,70)');" + "\n";
            msg += "\t" + "new AFTC.Color('50,60,70');" + "\n";
            msg += "\t" + "new AFTC.Color([50,60,70]);" + "\n";
            msg += "\t" + "new AFTC.Color('#FFFFFF');" + "\n";
            throw (msg);
        }
    }
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    var adjustBrightness = function (percent) {
        //log("adjustBrightness(): " + percent);
        if (percent == 0) {
            return;
        } else {
            if (percent > 0){
                shadeColor(params.color,percent);
            } else {
                shadeColor(params.color,percent);

            }
            //log("################### - " + rgbToHex(params.color) + " " + percent + "%");
        }
    }
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -






    // Utility functions
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // Stack exchange was full of rubbish (event hat shadeBlendConvert), done my own based on percentage of number base 255
    function shadeColor(rgbObj, percent) {
        var r = rgbObj.r;
        var g = rgbObj.g;
        var b = rgbObj.b;

        var redPercent = (100/255) * r; // The current value percent of 255
        var redTarget = Math.ceil(redPercent + percent);
        if (redPercent > 100){
            redTarget = 100;
        }

        var greenPercent = (100/255) * g; // The current value percent of 255
        var greenTarget = Math.ceil(greenPercent + percent);
        if (greenTarget > 100){
            greenTarget = 100;
        }

        var bluePercent = (100/255) * b // The current value percent of 255
        var blueTarget = Math.ceil(bluePercent + percent);
        if (blueTarget > 100){
            blueTarget = 100;
        }
        
        
        //log(rgbObj)
        //log("redPercent:" + redPercent.toFixed(2) + "%  redTarget:" + redTarget.toFixed(2));
        // log("greenPercent:" + greenPercent.toFixed(2) + "%  greenTarget:" + greenTarget.toFixed(2));
        //log("bluePercent:" + bluePercent.toFixed(2) + "%  blueTarget:" + blueTarget.toFixed(2));

        var step = 255/100;

        params.color.r = Math.round(step * redTarget);
        params.color.g = Math.round(step * greenTarget);
        params.color.b = Math.round(step * blueTarget);


    }




    var rgbToHex = function (obj) {
        var r = obj.r;
        var g = obj.g;
        var b = obj.b;

        function getHex(c) {
            var hex = c.toString(16);
            return hex.length == 1 ? "0" + hex : hex;
        }

        var rr = getHex(r);
        var gg = getHex(g);
        var bb = getHex(b);

        return "#" + rr + gg + bb;
    }
    var rgb2hex = function (obj) {
        var red = obj.r;
        var gren = obj.g;
        var blue = obj.b;

        var rgb = blue | (green << 8) | (red << 16);
        return '#' + (0x1000000 + rgb).toString(16).slice(1)
    }

    var hexToRgb = function (hex) {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    }

    var numberToHex = function (num) {
        return num.toString(16);
    }


    var rgbToNumber = function RGBToHex(obj) {
        var r = obj.r;
        var g = obj.g;
        var b = obj.b;

        var v = r << 16 | g << 8 | b;
        return v;
    }
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -






    // Simulate constructor
    init();
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



    // Public
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    return {
        lighten: function (percent) {
            adjustBrightness(percent);
        },
        darken: function (percent) {
            adjustBrightness(-percent);
        },
        getHex: function () {
            return rgbToHex(params.color);
        },
        getRGB: function () {
            return {r:params.color.r,g:params.color.g,b:params.color.b};
        },
        getRGBString: function () {
            return "rgb(" + params.color.r + "," + params.color.g + "," + params.color.b + ")";
        },
        getNumber: function () {

            return rgbToNumber(params.color) + " ";
        }
    }
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


// -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
window.isFireFox = function () {
	var is_firefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
	return is_firefox;
}
window.isChrome = function () {
	var is_chrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
	return is_chrome;
}
window.isSafari = function () {
	var is_safari = navigator.userAgent.toLowerCase().indexOf('safari') > -1;
	return is_safari;
}
window.isIE = function () {
	var is_ie = navigator.userAgent.toLowerCase().indexOf('MSIE') > -1;
	return is_ie;
}
window.getIEVersion = function () {
	var match = navigator.userAgent.match(/(?:MSIE |Trident\/.*; rv:)(\d+)/);
	return match ? parseInt(match[1]) : undefined;
}
window.getBrowser = function () {
	var ua = navigator.userAgent, tem, M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
	if (/trident/i.test(M[1])) {
		tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
		return 'IE';
	}
	if (M[1] === 'Chrome') {
		tem = ua.match(/\bOPR\/(\d+)/);
		if (tem != null) {
			return 'Opera';
		}
	}
	M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
	if ((tem = ua.match(/version\/(\d+)/i)) != null) {
		M.splice(1, 1, tem[1]);
	}
	return M[0];
}
// -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -



// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
window.getOS = function (testAgent) {
	var userAgent;

	if (!testAgent){
		userAgent = navigator.userAgent || navigator.vendor || window.opera;
	} else {
		userAgent = testAgent;
	}

	userAgent = userAgent.toLowerCase();

	


	// Windows Phone must come first because its UA also contains "Android"!
	if (/windows phone/i.test(userAgent)) {
		return {
			os:"windows phone",
			userAgent:userAgent
		}
	}

	// Samsung Browser detection S8
	if (/samsungbrowser/i.test(userAgent)) {
		return {
			os:"android",
			userAgent:userAgent
		}
	}



	if (/android/i.test(userAgent)) {
		return {
			os:"android",
			userAgent:userAgent
		}
	}

	if (/ipad|iphone|ipod/i.test(userAgent)) {
		return {
			os:"ios",
			userAgent:userAgent
		}
	}



	// Windows Phone must come first because its UA also contains "Android"
	if (/win64|win32|win16|win95|win98|windows 2000|windows xp|msie|windows nt 6.3; trident|windows nt|windows/i.test(userAgent)) {
		return {
			os:"windows",
			userAgent:userAgent
		}
	}


	if (/os x/i.test(userAgent)) {
		return {
			os:"osx",
			userAgent:userAgent
		}
	}

	if (/macintosh|osx/i.test(userAgent)) {
		return {
			os:"osx",
			userAgent:userAgent
		}
	}

	if (/openbsd/i.test(userAgent)) {
		return {
			os:"open bsd",
			userAgent:userAgent
		}
	}


	if (/sunos/i.test(userAgent)) {
		return {
			os:"sunos",
			userAgent:userAgent
		}
	}






	if (/crkey/i.test(userAgent)) {
		return {
			os:"chromecast",
			userAgent:userAgent
		}
	}

	if (/appletv/i.test(userAgent)) {
		return {
			os:"apple tv",
			userAgent:userAgent
		}
	}

	if (/wiiu/i.test(userAgent)) {
		return {
			os:"nintendo wiiu",
			userAgent:userAgent
		}
	}

	if (/nintendo 3ds/i.test(userAgent)) {
		return {
			os:"nintendo 3ds",
			userAgent:userAgent
		}
	}

	if (/playstation/i.test(userAgent)) {
		return {
			os:"playstation",
			userAgent:userAgent
		}
	}

	if (/kindle/i.test(userAgent)) {
		return {
			os:"amazon kindle",
			userAgent:userAgent
		}
	}

	if (/ cros /i.test(userAgent)) {
		return {
			os:"chrome os",
			userAgent:userAgent
		}
	}



	if (/ubuntu/i.test(userAgent)) {
		return {
			os:"ubuntu",
			userAgent:userAgent
		}
	}


	if (/googlebot/i.test(userAgent)) {
		return {
			os:"google bot",
			userAgent:userAgent
		}
	}

	if (/bingbot/i.test(userAgent)) {
		return {
			os:"bing bot",
			userAgent:userAgent
		}
	}

	if (/yahoo! slurp/i.test(userAgent)) {
		return {
			os:"yahoo bot",
			userAgent:userAgent
		}
	}



	return {
		os: false,
		userAgent:userAgent
	};
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -










// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
window.AFTCLockBodyParams = {
	pageYOffset: null,
	elementId: ""
};
window.lockBody = function () {
	if (arguments[0] && typeof (arguments[0]) == "object") {
		for (var key in arguments[0]) {
			if (window.AFTCLockBodyParams.hasOwnProperty(key)) {
				window.AFTCLockBodyParams[key] = arguments[0][key];
			} else {
				throw ("AFTC.js > dom.js > lockBody(): Usage Error - Unknown parameter [" + key + "]");
			}
		}
	} else {
		var usage = "\n";
		usage += "AFTC.js > dom.js > lockBody() usage:" + "\n";
		usage += "lockBody({elementId:'PageContainmentDivId'});" + "\n";
		usage += "unlockBody();" + "\n";
		throw (usage);
	}

	if (window.pageYOffset) {
		window.AFTCLockBodyParams.pageYOffset = window.pageYOffset;

		$('html, body').css({
			top: -(window.AFTCLockBodyParams.pageYOffset)
		});
	}

	$('#' + window.AFTCLockBodyParams.elementId).css({
		height: "100%",
		overflow: "hidden"
	});
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
window.unlockBody = function () {
	$('#' + window.AFTCLockBodyParams.elementId).css({
		height: "",
		overflow: ""
	});

	$('html, body').css({
		top: ''
	});

	window.scrollTo(0, window.AFTCLockBodyParams.pageYOffset);
	window.setTimeout(function () {
		window.AFTCLockBodyParams.pageYOffset = null;
	}, 0);
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -





// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
window.centerAbsoluteElement = function (eleOrEleId) {
	var element;

	if (typeof (eleOrEleId) === "string") {
		element = document.getElementById(eleOrEleId);
		if (!element) {
			throw ("AFTC.js > centerAbsoluteElement(elementOrElementId): ERROR! elementId supplied was not found on the DOM!");
		}
	}

	// var marginL = parseInt( getComputedStyle(element,null).marginLeft );
	// var marginR = parseInt( getComputedStyle(element,null).marginRight );
	// var marginT = parseInt( getComputedStyle(element,null).marginTop );
	// var marginB = parseInt( getComputedStyle(element,null).marginBottom );

	// var paddingL = parseInt( getComputedStyle(element,null).paddingLeft );
	// var paddingR = parseInt( getComputedStyle(element,null).paddingRight );
	// var paddingT = parseInt( getComputedStyle(element,null).paddingTop );
	// var paddingB = parseInt( getComputedStyle(element,null).paddingBottom );

	// var borderLeftW = parseInt( getComputedStyle(element,null).borderLeftWidth );
	// var borderRighttW = parseInt( getComputedStyle(element,null).borderRighttWidth );
	// var borderTopW = parseInt( getComputedStyle(element,null).borderTopWidth );
	// var borderBottomW = parseInt( getComputedStyle(element,null).borderBottomWidth );

	var offsetWidth = parseInt(element.offsetWidth);
	var offsetHeight = parseInt(element.offsetHeight);

	var tx = (window.innerWidth / 2) - (offsetWidth / 2);
	var ty = (window.innerHeight / 2) - (offsetHeight / 2);

	element.style.left = tx + "px";
	element.style.top = ty + "px";

	// element.css("left", tx);
	// element.css("top", ty);
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -




// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
window.getStyle = function (eleOrId, style) {
    var element;

    if (typeof (eleOrId) == "string") {
        element = document.getElementById(eleOrId);
        if (!element) {
            var msg = "getComputerStyle(elementOrId,style): usage error!";
            msg += "elementOrId needs to be an element in the DOM or a string of the ID of an element in the DOM!";
            throw (msg);
        }
    } else {
        element = eleOrId;
    }


    if (!document.defaultView) {
        var msg = "getComputerStyle(elementOrId,style): Your browser doesn't support defaultView, please upgrade your browser or try google chrome.";
        throw (msg);
    }

    if (!document.defaultView.getComputedStyle) {
        var msg = "getComputerStyle(elementOrId,style): Your browser doesn't support getComputedStyle, please upgrade your browser or try google chrome.";
        throw (msg);
    }

    var sd = document.defaultView.getComputedStyle(element, null);

    if (!sd[style]) {
        var msg = "\n" + "getComputerStyle(elementOrId,style): Computed style for element doesn't exist!\n";
        msg += "The element [" + eleOrId + "] doesn't have a computer style property of [" + style + "]";
        throw (msg);
    }

    return sd[style];
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -







// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
window.hasClass = function(element, cls) {
    return element.classList.contains(cls);
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
window.addClass = function(element,cls){
    element.classList.add(cls);
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
window.removeClass = function(element,cls){
    element.classList.remove(cls);
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  



// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
window.isBreakPoint = function(bp) {
    // The breakpoints that you set in your css
    var bps = [320, 480, 768, 1024];
    var w = window.innerWidth;
    var min, max;
    for (var i = 0, l = bps.length; i < l; i++) {
      if (bps[i] === bp) {
        min = bps[i-1] || 0;
        max = bps[i];
        break;
      }
    }
    return w > min && w <= max;
  }
  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
window.removeAllSelectOptions = function (selectBoxId) {
	var i,
		element = document.getElementById(selectBoxId);

	if (element) {
		for (i = element.options.length - 1; i >= 0; i--) {
			element.remove(i);
		}
	}

}
// -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -





// -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
window.checkboxToggleContent = function (cb, ids, showOnCheck) {
	var msg = "aftc.js > checkboxShowHide > incorrect usage!\n";
	msg += "checkboxHideShow(arg1,arg2,arg3)" + "\n";
	msg += "arg1 = checkbox element || checkbox element id" + "\n";
	msg += "arg2 = elementIdToShowHodeToggle || ArrayOfElementIdsToShowHide toggle" + "\n";
	msg += "arg3 (optional) = boolean : true (default) = show items on check || false = hide items on check" + "\n";

	var checkbox;

	if (typeof (cb) == "string") {
		checkbox = document.getElementById(cb);
		if (!cb) {
			log("checkboxShowHide argument 1 ID was not found on the DOM! Check for typos")
			throw (msg);
		}
	}

	if (cb.type && cb.type != 'checkbox') {
		log("checkboxShowHide argument 1 was not a checkbox element or id of a checkbox!")
		throw (msg);
	}


	if (!ids || ids == '' || ids.length < 1) {
		log("checkboxShowHide argument 2 is not valid!")
		throw (msg);
	}


	if (typeof (showOnCheck) == "undefined") {
		showOnCheck = true;
	}

	var itemsToShowHide = [];

	if (typeof (ids) == "string") {
		var element = document.getElementById(ids);
		if (!element) {
			log("Unable to find elemnt id [" + ids + "] on page!\n" + msg);
		}
		itemsToShowHide.push(element);

	} else if (isArray(ids)) {
		// log("PARSING ARRAY");
		for (var index = 0; index < ids.length; index++) {
			var id = ids[index];
			// log("going to look for element with id of [" + id + "]");
			var element = document.getElementById(id);
			if (!element) {
				throw ("Unable to find elemnt id [" + id + "] on page!\n" + msg);
			}
			itemsToShowHide.push(element);
		}

	}


	// Take note of each elements style.display value as we will want to restore it
	//.setAttribute('data', "icon:
	//document.getElementById('item1').dataset.icon


	for (var index = 0; index < itemsToShowHide.length; index++) {
		var element = itemsToShowHide[index];
		var currentDisplayStyle = element.style.display;
		var originalDisplayStyle = element.getAttribute("data-display");
		if (!element.dataset.display) {
			//displayStyle = getStyle(element,"display"); // This would make it dependent on misc.js
			var sd = document.defaultView.getComputedStyle(element, null);
			currentDisplayStyle = sd.display;
			originalDisplayStyle = currentDisplayStyle;
			element.setAttribute("data-display", originalDisplayStyle);
		}

		var style = "";

		if (cb.checked && showOnCheck) {
			style = originalDisplayStyle;
		} else if (cb.checked && !showOnCheck) {
			style = "none";
		} else if (!cb.checked && showOnCheck) {
			style = "none";
		} else {
			style = originalDisplayStyle;
		}

		//log("Setting [" + element.id + "] style.display to [" + style + "]");
		element.style.display = style;

	}

	// log("---");
	// log("currentDisplayStyle = [" + currentDisplayStyle + "]");
	// log("originalDisplayStyle = [" + originalDisplayStyle + "]");

	// show by elementId
	var elementToShow = document.getElementById(ids);
	if (elementToShow) {


	}

	/*
	var $state = jQuery('input[name="' + $checkboxID + '"]:checked').val();
	$state = $state.toLowerCase();

	if ($state.checked) {
		jQuery("#" + $elementIdForHideShow).slideDown();
	} else {
		jQuery("#" + $elementIdForHideShow).slideUp();
	}
	*/
}
// -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -


// -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
window.isChecked = function (id) {
	return document.getElementById(id).checked;
}
// -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -




// -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
window.isNumberKey = function (evt) {
	var charCode = (evt.which) ? evt.which : event.keyCode;
	if (charCode > 31 && (charCode < 48 || charCode > 57))
		return false;

	return true;
}
// -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -




window.parseJSONToSelect = function (j, selectElementIdOrElement, labelKey, valueKey) {
	var element;
	
	if (typeof(selectElementIdOrElement) == "string"){
		element = document.getElementById(selectElementIdOrElement);
		if (!element){
			throw("AFTC.js > parseJSONToSelect() Usage ERROR, Unable to find anything on the DOM with an ID of [" + selectElementIdOrElement + "]");
		}
	}

	if( typeof(selectElementIdOrElement) == "object"){
		element = selectElementIdOrElement;
	}


	
	if (typeof(j) == "string"){
		j = JSON.parse(j);
	}

	for (var i = 0; i < j.length; i++) {
		var label = j[i][labelKey];
		var data = j[i][valueKey];
		
		var option = document.createElement("option");
		option.text = label;
		option.value = data;
		//log(option);
		element.add(option);

		
	}


}




// -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
window.limitLengthInWords = function (element, maxWords) {
	var value = element.value,
		wordCount = value.split(/\S+/).length - 1,
		re = new RegExp("^\\s*\\S+(?:\\s+\\S+){0," + (maxWords - 1) + "}");
	if (wordCount >= maxWords) {
		element.value = value.match(re);
		document.getElementById('word_count').innerHTML = "";
		wcount_valid = true;
	} else {
		document.getElementById('word_count').innerHTML = (maxWords - wordCount) + " words remaining";
		wcount_valid = false;
	}

	return wcount_valid;
}
// -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -