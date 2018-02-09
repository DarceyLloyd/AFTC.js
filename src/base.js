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