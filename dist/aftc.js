/*
    Author: Darcey@AllForTheCode.co.uk
    Author: Darcey.Lloyd@gmail.com
*/



// The AFTC Object - All For The Code and NOTHING but the CODE!
var AFTC = AFTC || {};

/**
 * @type: function
 * @name: addEvent
 * @desc: Shortcut for adding events with old browser compatibility
 * @param object required obj: The object you wish to attach the event listener to
 * @param string required type: The event type (e.type) mousedown, mouseup, click etc
 * @param function required fn: The function to call when the event is triggered
 * @param boolean optional useCapture: Whether the event should be executed in the capturing or in the bubbling phase
 * @return:
 */
window.addEvent = function (obj, type, fn, useCapture) {
    if (obj == null || typeof (obj) == 'undefined') return;
    if (obj.addEventListener) {
        //obj.addEventListener(type, fn, false);
        obj.addEventListener(type, fn, useCapture ? true : false);
    } else if (obj.attachEvent) {
        obj.attachEvent("on" + type, fn);
    } else {
        obj["on" + type] = fn;
    }
};

/**
 * @type: function
 * @name: onReady
 * @desc: Replacement for jQuerys $(document).ready
 * @param function fn: inline function or pass it a function for when your page is loaded and ready to be used
 * @return:
 * @alias: ready
 */
window.onReady = function (fn) {
    // IE9+
    if (document.readyState === "complete" || (document.readyState !== "loading" && !document.documentElement.doScroll)) {
        fn();
    } else {
        document.addEventListener("DOMContentLoaded", function () {
            // Adds a little delay but is a good thing
            setTimeout(fn, 10);
        });
    }
}
window.ready = function (fn) {
    window.onReady(fn);
}




/**
 * @type: object
 * @name: AFTC.ResizeManager
 * @desc: A function stack manager for resize and orientation change events
 * @function enable: enable function stack execution on oritentation and resize change
 * @function disable: disable function stack execution on oritentation and resize change
 * @function add: add function to orientation and resize stack
 * @param string uid: unique id / label of function to add from stack
 * @param function fn: function to add to stack
 * @function remove: remove function from orientation and resize stack
 * @param string uid: unique id / label of function to remove from stack
 * @return:
 */
AFTC.ResizeManager = {
    running: false,
    enabled: false,
    delay: 100,
    stack: [],
    enable: function () {
        // log("AFTC.ResizeManager.enable()");
        AFTC.ResizeManager.enabled = true;
        window.addEventListener("resize", AFTC.ResizeManager.resizeHandler, false);
        window.addEventListener("orientationchange", AFTC.ResizeManager.resizeHandler, false);
    },
    disable: function () {
        // log("AFTC.ResizeManager.disable()");
        AFTC.ResizeManager.enabled = false;
        window.removeEventListener("resize", AFTC.ResizeManager.resizeHandler, false);
        window.removeEventListener("orientationchange", AFTC.ResizeManager.resizeHandler, false);
    },
    add: function (uid, fn) {
        // log("AFTC.ResizeManager.add(): " + uid);
        var stackItem = {};
        stackItem.uid = uid;
        stackItem.fn = fn;
        AFTC.ResizeManager.stack.push(stackItem);
    },
    remove: function (uid) {
        // log("AFTC.ResizeManager.remove(): " + uid);
        var len = AFTC.ResizeManager.stack.length;
        for (var i = 0; i < len; i++) {
            if (AFTC.ResizeManager.stack[i]) {
                //log(AFTC.ResizeManager.stack[i].uid);
                if (AFTC.ResizeManager.stack[i].uid == uid) {
                    AFTC.ResizeManager.stack.splice(i, 1);
                    AFTC.ResizeManager.remove(uid);
                    break;
                }
            }
        }
    },
    runStackItem: function (index, stackLength) {
        // log("runStackItem(index:"+index+")");
        window.setTimeout(function () {
            if (index == (stackLength - 1)) {
                AFTC.ResizeManager.running = false;
            }
            AFTC.ResizeManager.stack[index].fn();
        }, AFTC.ResizeManager.delay);

    },
    resizeHandler: function (e) {
        if (AFTC.ResizeManager.running) {
            return;
        }
        AFTC.ResizeManager.running = true;

        window.setTimeout(function () {
            var len = AFTC.ResizeManager.stack.length;
            for (var i = 0; i < len; i++) {
                AFTC.ResizeManager.runStackItem(i, len);
            }
        }, AFTC.ResizeManager.delay);
    }
}
// # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
// # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #










// # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
// DOM Element retrieval
// # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
AFTC.AFTCElementQueryCache = [];

/**
 * @type: function
 * @name: getElementById
 * @desc: short cut for document.getElementById, it also caches the query
 * @param id string: id of html element to retrieve
 * @return: element
 * @alias: getId
 * @alias: byId
 */
window.getElementById = function (id) {
    var cached = AFTC.AFTCElementQueryCache[id];
    if (isElement(cached)) {
        return cached;
    } else {
        var ele = document.getElementById(id);
        AFTC.AFTCElementQueryCache[id] = ele;
        return ele;
    }
}
window.getId = function (id) { return window.getElementById(id); }
window.byId = function (id) { return window.getElementById(id); }

/**
 * @type: function
 * @name: querySelector
 * @desc: short cut for document.querySelector, it also caches the query
 * @param string str: the query to be run on the dom
 * @return: element
 * @alias: query
 * @alias: cssQuery
 */
window.querySelector = function (str) {
    var cached = AFTC.AFTCElementQueryCache[str];
    if (isElement(cached)) {
        return cached;
    } else {
        var ele = document.querySelector(str);
        AFTC.AFTCElementQueryCache[str] = ele;
        return ele;
    }
}
window.query = function (id) { return window.querySelector(id); }
window.cssQuery = function (id) { return window.querySelector(id); }


/**
 * @type: function
 * @name: getElementsByClassName
 * @desc: short cut for document.getElementsByClassName, it also caches the query
 * @param string str: the class name to look for
 * @return: array
 * @alias: getClass
 * @alias: byClass
 */
window.getElementsByClassName = function (str) {
    var cached = AFTC.AFTCElementQueryCache[str];
    if (isElement(cached)) {
        return cached;
    } else {
        var ele = document.getElementsByClassName(str);
        AFTC.AFTCElementQueryCache[str] = ele;
        return ele;
    }
}
window.getClass = function (id) { return window.getElementsByClassName(id); }
window.byClass = function (id) { return window.getElementsByClassName(id); }



/**
 * @type: function
 * @name: getElementsByTagName
 * @desc: shortcut for getElementsByTagName
 * @param string str: tag name to look for
 * @return: array
 */
// TODO: Needs completing see getClass
window.getElementsByTagName = function (str) {
    return document.getElementsByTagName(str);
}
// # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
// # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #






// # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
// Styling shortcuts
// # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
/**
 * @type: function
 * @name: addClass
 * @desc: shortcut to add a css class to a html element
 * @param element||string elementOrId: The elemnt or id of the html element to add a css class to
 * @param string className: the class name to add
 * @return:
 */
window.addClass = function (elementOrId, className) {
    if (typeof (className) != "string") {
        return;
    }

    if (isElement(elementOrId)) {
        elementOrId.classList.add(className);
    } else {
        getElementById(elementOrId).classList.add(className);
    }
}

/**
 * @type: function
 * @name: removeClass
 * @desc: shortcut to remove a class from a html element
 * @param element||string elementOrId: The elemnt or id of the html element to add a css class to
 * @param string className: the class name to remove
 * @return:
 */
window.removeClass = function (elementOrId, className) {
    if (typeof (className) != "string") {
        return;
    }

    if (isElement(elementOrId)) {
        elementOrId.classList.remove(className);
    } else {
        log("elementOrId =" + elementOrId);
        log("className =" + className);
        getElementById(elementOrId).classList.remove(className);
    }
}
// # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
// # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #







// # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
// DEBUG
// # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
AFTC.log = {
    enabled: true
};
AFTC.logTo = {
    enabled: false,
    element: false
};
/**
 * @type: function
 * @name: log
 * @desc: shortcut for console.log with capabilities to log nice arrays, objects and to html elements via innerHTML 
 * @param * arg: what you want to console.log
 * @alias: trace
 */
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
window.trace = function (arg) {
    log(arg);
}



/**
 * @type: function
 * @name: logEnable
 * @desc: enable log
 * @return:
 */
window.logEnable = function () {
    AFTC.log.enabled = true;
}


/**
 * @type: function
 * @name: logDisable
 * @desc: disable log
 * @return:
 */
window.logDisable = function () {
    AFTC.log.enabled = false;
}




/**
 * @type: class
 * @name: configLog
 * @desc: a configuration function for log()
 * @param object arguments: {see arguments}
 * @param argument string autoLogTo: html element id to log to
 * @param argument boolean autoLogEnable boolean: enable auto log
 * @param argument boolean enableAutoLog boolean: enable auto log
 * @param argument boolean autoLogDisable boolean: disable auto log
 * @param argument  disableAutoLog boolean: disable auto log
 * @return:
 */
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
}



/**
 * @type: function
 * @name: logTo
 * @desc: A console.log alternative that will output to a html element and the console at the same time
 * @param string elementId: elementId to output to
 * @param string msg: what innerHTML will be set to
 * @return:
 */
window.logTo = function (elementId, msg) {
    var element = getElementById(elementId);
    log(msg);
    if (element) {
        element.innerHTML += (msg + "<br>");
    }
}


/**
 * @type: function
 * @name: logObjTo
 * @desc: A console.log alternative that will output an object to a html element and the console nicely formatted at the same time
 * @param string elementId: html element id to output to
 * @param object obj: the object to debug output
 * @param boolean append optional: append text or prepend text
 * @return:
 */
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
}


/**
 * @type: function
 * @name: openDebugWindow
 * @desc: open a popup window with the html you wish to display in it
 * @param dataType html: the html you wish to display in the popup window
 * @return:
 * @alias: stringToWindow
 */
window.openDebugWindow = function (html) {
    var w = window.open('debug', 'debug', 'width=1200,height=400,resizeable,scrollbars');
    w.document.title = "Debug";
    w.document.write("<style>body {width:100%;}</style>");
    w.document.write("<div style='display:block;width:98%;-ms-word-wrap:break-word ;word-wrap:break-word;border:1px solid #000000;'>" + html + "</div>");
    //w.document.write("<div style='width:100%'>" + str + "</div>");
    w.document.close();
}
window.stringToWindow = function (html) {
    openDebugWindow(html);
}


/**
 * @type: function
 * @name: setHTML
 * @desc: quick shortcut for outputting html to an element
 * @param dataType elementOrId: the element or the element id you wish to set the html of
 * @param dataType str: the html string to insert into your element
 * @return:
 * @alias: html
 */
window.setHTML = function (elementOrId, str) {
    if (typeof (elementOrId) == "string") {
        element = getElementById(element);
    }
    if (isElement(element)){
        element.innerHTML = str;
    } else {
        return "unable to retrieve element from [" + elementOrId + "]";
    }
}
window.html = function (element, str) { window.setHTML(element, str); }
// # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
// # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #










// # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
// Array functions
// # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
/**
 * @type: function
 * @name: arrayRemoveIndex
 * @desc: remove a specified index from an array
 * @param array arr: the array you wish to remove an index on
 * @param number index: the array index you wish to remove
 * @return: array
 */
window.arrayRemoveIndex = function (array, index) {
    return array.splice(index);
}

/**
 * @type: function
 * @name: isStringInArray
 * @desc: check to see if a string is in an array
 * @param string str: the string your looking for
 * @param array arr: the array you wish to search
 * @return: boolean
 */
window.isStringInArray = function (str, array) {
    return (new RegExp('(' + array.join('|').replace(/\./g, '\\.') + ')$')).test(str);
}

/**
 * @type: function
 * @name: arrayContains
 * @desc: check to see if your array contains something you want to find
 * @param array arr: the array you wish to search
 * @param string needle: what you want to find
 * @return:
 */
window.arrayContains = function (arr, needle) {
    if (arr.indexOf(needle) > -1) { return true; } else { return false; }
}

/**
 * @type: function
 * @name: arrayRemove
 * @desc: removes an item from an array
 * @param array arr: the array you wish to search and remove from
 * @param string item:  index at which a given element can be found
 * @return: array
 * @alias: arrayRemoveItem
 */
window.arrayRemove = function (arr, item) {
    if (!window.arrayContains(item)) { return this; }
    return arr.splice(arr.indexOf(item), 1);
}
window.arrayRemoveItem = function(arr,item) { return arrayRemove(arr,item); }

/**
 * @type: function
 * @name: arrayEmpty
 * @desc: clears/empties an array for garbage collection
 * @param array arr: the array to clear / empty
 * @return:
 * @alias: arrayClear
 */
window.arrayEmpty = function (arr) {
    while(arr.length > 0) { arr.pop(); }
}
window.arrayClear = function (arr) { window.arrayEmpty(arr); }


/**
 * @type: function
 * @name: getMaxFromArray
 * @desc: returns the maximum value in an array
 * @param array arr: the array you wish to find the maximum value in
 * @return: number
 * @alias: arrayGetMax
 * @alias: arrayMax
 */
window.getMaxFromArray = function (arr) {
    return Math.max.apply(Math, arr);
}
window.arrayGetMax = function(arr){ return getMaxFromArray(arr); }
window.arrayMax = function(arr){ return getMaxFromArray(arr); }

/**
 * @type: function
 * @name: arrayGetMin
 * @desc: returns the minimum value in an array
 * @param array arr: the array you wish to find the minimum value in
 * @return: array
 * @alias: getMinFromArray
 * @alias: arrayMin
 */
window.arrayGetMin = function (arr) {
    return Math.min.apply(Math, arr);
}
window.getMinFromArray = function (arr) { return arrayGetMin(arr); }
window.arrayMin = function (arr) { return arrayGetMin(arr); }

/**
 * @type: function
 * @name: arrayShuffle
 * @desc: shuffles an array
 * @param array arr: the array to shuffle
 * @return: array
 * @alias: shuffleArray
 */
window.arrayShuffle = function (array) {
    var methodNo = getRandom(1, 2);
    return window["arrayShuffle" + methodNo](array);
    var fn = "arrayShuffle" + methodNo;
}
window.shuffleArray = function (arr) { return arrayShuffle(arr); }


/**
 * @type: function
 * @name: arrayShuffle2
 * @desc: shuffles an array (method 2)
 * @param array arr: the array to shuffle
 * @return: array
 */
window.arrayShuffle2 = function (array) {
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

/**
 * @type: function
 * @name: arrayShuffle3
 * @desc: shuffles an array (method 2)
 * @param array arr: the array to shuffle
 * @return: array
 */
window.arrayShuffle3 = function (a) {
    var x, t, r = new Uint32Array(1);
    for (var i = 0, c = a.length - 1, m = a.length; i < c; i++ , m--) {
        crypto.getRandomValues(r);
        x = Math.floor(r / 65536 / 65536 * m) + i;
        t = a[i], a[i] = a[x], a[x] = t;
    }

    return a;
}
// # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
// # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #










// # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
// Datatype handling / Variable conversion / Type checking / isXXX / getXXX / Common equation functions
// # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
/**
 * @type: function
 * @name: isAlphaNumeric
 * @desc: check if an input is an alpha numerical value ([a-z],[A-Z],[0-9] only)
 * @param string||number input: variable / value you wish to check
 * @return: boolean
 */
window.isAlphaNumeric = function (input) {
    return !(/\W/.test(input));
}


/**
 * @type: function
 * @name: isElement
 * @desc: checks if your variable is an element or not
 * @param * o: variable you wish to check
 * @return: boolean
 */
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
/**
 * @type: function
 * @name: isElement2
 * @desc: checks to see if your vairable is an element or not
 * @param * element: the variable you wish to check
 * @return: boolean
 */
window.isElement2 = function (element) {
    // works on major browsers back to IE7
    return element instanceof Element;
}
/**
 * @type: function
 * @name: isDOM
 * @desc: checks to see if your variable is a DOM object
 * @param object obj: variable to check
 * @return: boolean
 */
window.isDOM = function (obj) {
    // this works for newer browsers
    try { return obj instanceof HTMLElement; }

    // this works for older browsers
    catch (e) {
        return (typeof obj === "object") &&
            (obj.nodeType === 1) && (typeof obj.style === "object") &&
            (typeof obj.ownerDocument === "object");
    }
};
/**
 * @type: function
 * @name: radToDeg
 * @desc: converts radians to degrees
 * @param number input: the radians you wish converted to degrees
 * @return: number
 * @alias: rad2deg
 */
window.radToDeg = function (input) {
    return input * (180 / Math.PI);
}
window.rad2deg = function (arg) { return radToDeg(arg); }


/**
 * @type: function
 * @name: degToRad
 * @desc: converts degrees to radians
 * @param number input: the value you wish converted to radians
 * @return: number
 * @alias: deg2rad
 */
window.degToRad = function (input) {
    return input * (Math.PI / 180);
}
window.deg2rad = function (arg) { return degToRad(arg); }


/**
 * @type: function
 * @name: boolToString
 * @desc: converts boolean to a string of true or false
 * @param boolean bool: the boolean you wish to convert
 * @return: string
 */
window.boolToString = function (bool) {

    if (!bool || bool == undefined || typeof (bool) != "boolean") {
        console.log("AFTC.js: Conversion.js: boolToString(str): Error - input is not a boolean!");
        return "error";
    }

    if (bool) {
        return "true";
    } else {
        return "false";
    }
}




/**
 * @type: function
 * @name: boolToYesNo
 * @desc: converts a boolean to yes or no
 * @param boolean arg: the boolean you wish to convert
 * @return: string 
 */
window.boolToYesNo = function (arg) {

    if (!arg || arg == undefined || typeof (arg) != "boolean") {
        console.log("AFTC.js: Conversion.js: boolToString(str): Error - input is not a boolean!");
        return "error";
    }

    if (arg) {
        return "yes";
    } else {
        return "no";
    }
}


/**
 * @type: function
 * @name: stringToBool
 * @desc: converts a string to a boolean (y,yes,"1",no etc)
 * @param string str: the string you wish to convert
 * @return: boolean
 */
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



/**
 * @type: function
 * @name: getBooleanFrom
 * @desc: converts an input to a boolean
 * @param * arg: the variable you wish to convert to a boolean
 * @return: boolean
 */
window.getBooleanFrom = function (arg) {
    if (arg == null || arg == "" || !arg){
        return false;
    }

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


/**
 * @type: function
 * @name: isBoolean
 * @desc: checks if a variable is a boolean
 * @param * arg: variable to check
 * @return: boolean
 * @alias: isBool
 */
window.isBoolean = function (arg) {
    if (typeof (arg) == "boolean") {
        return true;
    } else {
        return false;
    }
}
window.isBool = function(arg) { return isBoolean(arg); }


/**
 * @type: function
 * @name: isNumeric
 * @desc: check if variable is numeric
 * @param * n: variable to check
 * @return: boolean
 * @alias: isNumber
 */
window.isNumeric = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}
window.isNumber = function (n) { return isNumeric(n); }



/**
 * @type: function
 * @name: isArray
 * @desc: check if variable is an array
 * @param * arg: variable to check
 * @return: boolean
 */
window.isArray = function (arg) {
    return !!arg && arg.constructor === Array;
    //return arr.constructor == Array;
}


/**
 * @type: function
 * @name: getFunctionName
 * @desc: tries to get the function name of a suppled function
 * @param function fn: the function wish to get the name of
 * @return:
 */
function getFunctionName(fn) {
    var name = fn.toString();
    var reg = /function ([^\(]*)/;
    return reg.exec(name)[1];
};

// # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
// # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
















// # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
// Random generators (small ones)
// # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
/**
 * @type: function
 * @name: getRandomInt
 * @desc: returns a random number / int betwen your specified min and max values
 * @param number min: the minimum your random number is allowed to go
 * @param number max: the maximum your random number is allowed to go
 * @return: number
 * @alias: getRandom
 */
window.getRandomInt = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
window.getRandom = function (min, max) {
    return getRandomInt(min, max);
}


/**
 * @type: function
 * @name: randomString
 * @desc: get a random string of a specified length
 * @param number length: the length of the string you wish to generate
 * @return: string
 * @alias: getRandomString
 */
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



/**
 * @type: function
 * @name: getArrayOfRandomNumbers
 * @desc: generate an array of random number between your max and min values
 * @param number arraySize: the number of random numbers to generate also the array size that will be returned
 * @param number min: the minimum your random number is allowed to be
 * @param number max: the maximum your random number is allowed to be
 * @return: array
 */
window.getArrayOfRandomNumbers = function (arraySize, min, max) {
    var arr = [];
    for (var i = 0; i < arraySize; i++) {
        arr[i] = getRandom(min, max);
    }
    return arr;
}


/**
 * @type: function
 * @name: getArrayOfRandomStrings
 * @desc: generate an array of random string of a specified length
 * @param number arraySize: the number of random strings to generate also the array size that will be returned
 * @param number strLength: the length of the strings to be generated
 * @return: array

 */
window.getArrayOfRandomStrings = function (arraySize, strLength) {
    var arr = [];
    for (var i = 0; i < arraySize; i++) {
        arr[i] = getRandomString(strLength);
    }
    return arr;
}



/**
 * @type: function
 * @name: guid
 * @desc: generates a guid
 * @return: string
 * @alias: getGUID
 */
window.guid = function () {
    function Amiga() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }

    return Amiga() + Amiga() + '-' + Amiga() + '-' + Amiga() + '-' +
        Amiga() + '-' + Amiga() + Amiga() + Amiga();
}
window.getGUID = function(){ return guid(); }

// # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
// # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #










// # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
// Misc features (small ones only)
// # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
/**
 * @type: function
 * @name: redirect
 * @desc: no more typing self.location.href, just use redirect(url)
 * @param string url: the url you wish to redirect to
 */
window.redirect = function (url) {
    self.location.href = url;
};


/**
 * @type: object
 * @name: AFTC.Benchmark
 * @desc: quick and easy benchmarking, see examples benchmark.htm for usage
 * @function start: start benchmark
 * @function stop: stop benchmark
 * @function getTime: return benchmark result
 */
AFTC.Benchmark = function () {
    var params = {
        start:0,
        end:0,
        time:0
    }

    return {
        start:function(){
            params.start = new Date();
        },
        stop:function(){
            params.end = new Date();
            params.time = params.end.getTime() - params.start.getTime();
            return params.time;
        },
        getTime:function(){
            return params.time;
        }
    }
}


/**
 * @type: function
 * @name: hide
 * @desc: hides a html element, can also add or remove any amount of classes on element hide at the same time
 * @param element||string element: the element or the string id of the element you wish to hide
 * @param array classListToRemoveOnHide: string of class to remove or array of string classes to remove on hide
 * @param array classListToAddOnHide: string of class to remove or array of string classes to add on hide
 */
window.hide = function (element, classListToRemoveOnHide, classListToAddOnHide) {
    var elementId = false;
    if (typeof (element) == "string") {
        elementId = element;
        element = getElementById(elementId);
    } else if (!isElement(element)) {
        console.error("AFTC.js > show({element}): Usage error, element must be string ID of element or the element itself");
        return false;
    }

    if (!element || element == null || element == undefined) {
        console.error("AFTC.js > show({element}): Unable to find element of id [" + elementId + "]");
        return false;
    }

    // REMOVE
    if (isArray(classListToRemoveOnHide)) {
        for (var key in classListToRemoveOnHide) {
            var className = classListToRemoveOnHide[key];
            // log("removing class [" + className + "]");
            removeClass(element, className);
        }
    } else if (typeof (classListToRemoveOnHide) == "string") {
        removeClass(element, classListToRemoveOnHide);
        // log("removing class [" + className + "]");
    }

    // ADD
    if (isArray(classListToAddOnHide)) {
        for (var key in classListToAddOnHide) {
            var className = classListToAddOnHide[key];
            // log("adding class [" + className + "]");
            addClass(element, className);
        }
    } else if (typeof (classListToAddOnHide) == "string") {
        addClass(element, classListToAddOnHide);
        // log("adding class [" + className + "]");
    }


    var oldDisplayValue = element.getAttribute("old-display-prop");
    //log("oldDisplayValue = " + oldDisplayValue);
    if (!oldDisplayValue || oldDisplayValue == "" || oldDisplayValue.length < 1) {
        // log("no old value going to assume display is block");
        element.style.display = 'block';
    } 

    element.style.display = 'none';
}


/**
 * @type: function
 * @desc: show a html element, can also add or remove any amount of classes on element show at the same time
 * @param element||string element: the element or the string id of the element you wish to hide
 * @param array classListToRemoveOnShow: string of class to remove or array of string classes to remove on show
 * @param array classListToAddOnShow: string of class to remove or array of string classes to add on show
 */
window.show = function (element, classListToRemoveOnShow, classListToAddOnShow) {
    // log("window.show(" + element + ")");
    var elementId = false;
    if (typeof (element) == "string") {
        elementId = element;
        element = getElementById(elementId);
    } else if (!isElement(element)) {
        console.error("AFTC.js > show({element}): Usage error, element must be string ID of element or the element itself");
        return false;
    }

    if (!element || element == null || element == undefined) {
        console.error("AFTC.js > show({element}): Unable to find element of id [" + elementId + "]");
        return false;
    }

    // REMOVE
    if (isArray(classListToRemoveOnShow)) {
        for (var key in classListToRemoveOnShow) {
            var className = classListToRemoveOnShow[key];
            // log("removing class [" + className + "]");
            removeClass(element, className);
        }
    } else if (typeof (classListToRemoveOnShow) == "string") {
        removeClass(element, classListToRemoveOnShow);
        // log("removing class [" + className + "]");
    }

    // ADD
    if (isArray(classListToAddOnShow)) {
        for (var key in classListToAddOnShow) {
            var className = classListToAddOnShow[key];
            // log("adding class [" + className + "]");
            addClass(element, className);
        }
    } else if (typeof (classListToAddOnShow) == "string") {
        addClass(element, classListToAddOnShow);
        // log("adding class [" + className + "]");
    }


    var oldDisplayValue = element.getAttribute("old-display-prop");
    //log("oldDisplayValue = " + oldDisplayValue);
    if (!oldDisplayValue || oldDisplayValue == "" || oldDisplayValue.length < 1) {
        // log("no old value going to assume display is block");
        element.style.display = 'block';
    } else {
        element.style.display = oldDisplayValue;
    }


}

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
            try {
                element.removeEventListener("transitionend", false);
            } catch (e){

            }
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
        //log("processOnComplete()");
        if (typeof (onComplete) != "undefined") {
            // prevent multi run
            // animating some styles will result in the TransitionEnd firing multiple times!!!
            if (!hasOnCompleteRun) {
                //log("RUNNING ON COMPLETE!");
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
        try {
            element.removeEventListener("transitionend", onTransitionEndHandler, false);
        } catch (e){

        }
        removeDuration();
        processChain("complete");
    }



    var me = this;
    var animate = function (style, targetValue, duration) {
        // For some reason lost scope, was working before, me comes to the resuce
        // element is undefined || null when you use an id without a # but is found in function start?
        // TODO: CHECK OUT THIS ISSUE, FIX THE ISSUE AND REMOVE THE HOTFIX
        element = me.element;
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