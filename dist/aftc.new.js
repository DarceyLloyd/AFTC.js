/*
 * Author: darcey@aftc.io || darcey.lloyd@gmail.com
 */

// AFTC Core
var AFTC = AFTC || {}


/**
 * @function: ArgsToObject(args, obj)
 * @desc: xxxxxxxxxxxxxxxxxxxxxxxxxx
 * @param arg1 obj: xxxxxxxxxxxxxxxxxxxxxxxxxx
 * @param arg2 obj: xxxxxxxxxxxxxxxxxxxxxxxxxx
 * @return: null
 * @alias: argsTo
 */
AFTC.ArgsToObject = function (args, obj, strict) {
    if (!strict){ strict = true; }
    if (args && typeof (args) == "object") {
        for (var key in args) {
            if (strict){
                if (obj.hasOwnProperty(key)) {
                    obj[key] = args[key];
                } else {
                    console.warn("AFTC.ArgsToObject(): Argument [" + key + "] is not supported.");
                }
            } else {
                obj[key] = args[key];
            }
        }
    }
}


AFTC.GetElement = {
    vars: {
        cache: []
    },
    by: function (type, arg) {
        var cached = AFTC.GetElement.vars.cache[arg] || false;
        if (cached) {
            return cached;
        } else {
            switch (type.toLowerCase()) {
                case "id":
                    AFTC.GetElement.vars.cache[arg] = document.getElementById(arg);
                    return AFTC.GetElement.vars.cache[arg];
                    break;
                case "class":
                    AFTC.GetElement.vars.cache[arg] = document.getElementsByClassName(arg);
                    return AFTC.GetElement.vars.cache[arg];
                    break;
                case "query":
                    AFTC.GetElement.vars.cache[arg] = document.querySelector(arg);
                    return AFTC.GetElement.vars.cache[arg];
                    break;
                case "tag":
                    AFTC.GetElement.vars.cache[arg] = document.getElementsByTagName(arg);
                    return AFTC.GetElement.vars.cache[arg];
                    break;
                case "name":
                    AFTC.GetElement.vars.cache[arg] = document.getElementsByName(arg);
                    return AFTC.GetElement.vars.cache[arg];
                    break;
            }
        }
    }
};
window.getElementById = function (id) {
    return AFTC.GetElement.by("id", id);
}
window.getId = function (id) { return window.getElementById(id); }
window.byId = function (id) { return window.getElementById(id); }

window.querySelector = function (query) {
    return AFTC.GetElement.by("query", query);
}
window.query = function (query) { return window.querySelector(query); }

window.getElementsByName = function (name) { return AFTC.GetElement.by("name", name); }
window.getElementByName = function (name) { return AFTC.GetElement.by("name", name)[0]; }

window.getElementsByClassName = function (className) { return AFTC.GetElement.by("class", className); }
window.getElementByClassName = function (className) { return AFTC.GetElement.by("class", className)[0]; }

window.getElementsByTagName = function (tagName) { return AFTC.GetElement.by("tag", tagName); }
window.getElementByTagName = function (tagName) { return AFTC.GetElement.by("tag", tagName)[0]; }

// HTMLElement.getElementByClassName = function (className) { console.log("HERE"); return AFTC.GetElement.by("class", className)[0]; }


/**
 * @function: AFTC.Log
 * @desc: Shortcut for console.log with some formatting capabilities
 * ````
 * log("Hello World");
 * log("a = " + a);
 * log("myVar1 = " + myVar1 + "  myVar2 = " + myVar2);
 * log(MyObject);
 * log(MyClass);
 * ````
 * @param * input: what you want to console.log
 * @alias: trace
 */
AFTC.Log = {
    enabled: true,
    element: false,
    enable: function () {
        enabled = true;
    },
    disable: function () {
        enabled = false;
    },
    to: function (arg) {
        var error = false;
        if (arg == undefined || arg == null || !arg) {
            AFTC.Log.element = false;
            return;
        } else if (typeof (arg) == "string") {
            arg = getElementById(arg);
        }
        if (isElement(arg)) {
            AFTC.Log.element = arg;
        } else {
            console.error("logTo(arg) ERROR: Supplied arg is not an ID or Element! To turn off logTo HTML element, don't supply an argument or use false.");
        }
    },
    out: function (arg) {
        if (console) {
            if (AFTC.Log.enabled) {
                if (typeof (arg) == "undefined") {
                    console.warn("log(arg) ERROR: Your log variable (arg) is \"undefined\"!");
                } else {
                    console.log(arg);
                }
                if (AFTC.Log.element != false) {
                    if (isElement(arg)) {
                        // AFTC.Log.element.innerHTML += ("[HTMLElement]<br>");
                        AFTC.Log.element.innerHTML += (arg+"<br>");
                    } else {
                        if (typeof (arg) == "object") {
                            AFTC.Log.element.innerHTML += "[object||array]<br>";
                            for (var key in arg) {
                                AFTC.Log.element.innerHTML += ("&nbsp;&nbsp;&nbsp;&nbsp;[" + key + "] = " + arg[key] + "<br>");
                            }
                        } else {
                            AFTC.Log.element.innerHTML += (arg + "<br>");
                        }
                    }
                }
            }
        }
    }
};
window.logTo = function (element) { AFTC.Log.to(element); }
window.log = function (arg) { AFTC.Log.out(arg); }
window.trace = function (arg) { AFTC.Log.out(arg); }

/**
 * @function: logEnable() | log.enable()
 * @desc: Enables log()
 */
window.logEnable = function () { AFTC.Log.enabled = true; }
window.log.enable = function () { AFTC.Log.enabled = true; }


/**
 * @function: logDisable() | log.disable()
 * @desc: Disable log()
 */
window.logDisable = function () { AFTC.Log.enabled = false; }
window.log.disable = function () { AFTC.Log.enabled = false; }
window.logToDisable = function () { AFTC.Log.to(false); }
window.disableLogTo = function () { AFTC.Log.to(false); }



window.cls = function(){
    if (console){
        if (console.clear){
            console.clear();
        }
    }
    if (AFTC.Log.element){
        AFTC.Log.element.innerHTML = "";
    }
}
window.clearLog = function(){ cls(); }
/*
 * Author: Darcey.Lloyd@gmail.com
 */


 AFTC.VLog = function(){
    if (!(this instanceof arguments.callee)) {
        throw new Error("\nAFTC.DOM.HideShow: USAGE ERROR: Constructor called as a function.\nPlease use new AFTC.DOM.HideHsow({})");
    }
    var me = this;
    var vars = {
        
    }

    new AFTC.ArgsToObject(arguments[0], vars);
 };



/**
 * @function: openDebugWindow(html)
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

/*
 * Author: Darcey.Lloyd@gmail.com
 */

/**
 * @function: addEvent(obj,type,fn,useCapture)
 * @desc: Shortcut for adding events with old browser compatibility
 * @param object obj: The object you wish to attach the event listener to
 * @param string type: The event type (e.type) mousedown, mouseup, click etc
 * @param function fn: The function to call when the event is triggered
 * @param boolean optional useCapture: Whether the event should be executed in the capturing or in the bubbling phase
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
 * @function: onReady(fn)
 * @desc: Replacement for jQuerys $(document).ready
 * @param function fn: inline function or pass it a function for when your page is loaded and ready to be used
 * @alias: ready
 */
window.onReady = function (fn) {
    // IE9+
    if (document.readyState === "complete" || (document.readyState !== "loading" && !document.documentElement.doScroll)) {
        // Adds a little delay but is a good thing
        setTimeout(fn, 10);
    } else {
        if (document.addEventListener){
            document.addEventListener("DOMContentLoaded", function () {
                // Adds a little delay but is a good thing
                setTimeout(fn, 10);
            });
        }
        
    }
}
window.ready = function (fn) {
    window.onReady(fn);
}
/*
 * Author: Darcey.Lloyd@gmail.com
 */


/**
 * @function: arrayRemoveIndex(arr,index)
 * @desc: remove a specified index from an array
 * @param array arr: the array you wish to remove an index on
 * @param number index: the array index you wish to remove
 * @return: array
 */
window.arrayRemoveIndex = function (arr, index) {
    arr.splice(index, 1);
    return arr;
}

/**
 * @function: isStringInArray(needle,haystack)
 * @desc: Check to see if a string is in an array
 * @param string needle: the string your looking for
 * @param array haystack: the array you wish to search
 */
window.isStringInArray = function (needle, haystack) {
    return (new RegExp('(' + haystack.join('|').replace(/\./g, '\\.') + ')$')).test(needle);
}

/**
 * @function: arrayContains(needle,haystack)
 * @desc: Check to see if your array contains something you want to find
 * @param array arr: the array you wish to search
 * @param string needle: what you want to find
 */
window.arrayContains = function (needle, haystack) {
    if (haystack.indexOf(needle) > -1) { return true; } else { return false; }
}
window.isInArray = function (needle, haystack) { return window.arrayContains(needle, haystack); }



/**
 * @function: arrayEmpty(arr)
 * @desc: clears/empties an array for garbage collection
 * @param array arr: the array to clear / empty
 * @alias: arrayClear
 */
window.arrayEmpty = function (arr) {
    while (arr.length > 0) { arr.pop(); }
}
window.arrayClear = function (arr) { window.arrayEmpty(arr); }






/**
 * @function: getMaxFromArray(arr)
 * @desc: returns the maximum value in an array
 * @param array arr: the array you wish to find the maximum value in
 * @alias: arrayGetMax
 * @alias: arrayMax
 */
window.getMaxFromArray = function (arr) {
    return Math.max.apply(Math, arr);
}
window.arrayGetMax = function (arr) { return getMaxFromArray(arr); }
window.arrayMax = function (arr) { return getMaxFromArray(arr); }




/**
 * @function: arrayGetMin
 * @desc: returns the minimum value in an array
 * @param array arr: the array you wish to find the minimum value in
 * @alias: getMinFromArray
 * @alias: arrayMin
 */
window.getMinFromArray = function (arr) {
    return Math.min.apply(Math, arr);
}
window.arrayGetMin = function (arr) { return getMinFromArray(arr); }
window.arrayMin = function (arr) { return getMinFromArray(arr); }




/**
 * @function: arrayShuffle(arr)
 * @desc: shuffles an array (method 1)
 * @param array arr: the array to shuffle
 * @alias: shuffle
 * @alias: arrayShuffle
 */
window.arrayShuffle = function (arr) {
    var currentIndex = arr.length,
        temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = arr[currentIndex];
        arr[currentIndex] = arr[randomIndex];
        arr[randomIndex] = temporaryValue;
    }

    return arr;
}
window.shuffle = function(arr){ return arrayShuffle(arr); }
window.shuffleArray = function(arr){ return arrayShuffle(arr); }


/**
 * @function: arrayShuffle2(arr)
 * @desc: shuffles an array (method 2)
 * @param array arr: the array to shuffle
 * @alias: shuffle2
 * @alias: arrayShuffle2
 */
window.arrayShuffle2 = function (a) {
    var x, t, r = new Uint32Array(1);
    for (var i = 0, c = a.length - 1, m = a.length; i < c; i++ , m--) {
        crypto.getRandomValues(r);
        x = Math.floor(r / 65536 / 65536 * m) + i;
        t = a[i], a[i] = a[x], a[x] = t;
    }

    return a;
}
window.shuffle2 = function(arr){ return arrayShuffle2(arr); }
window.shuffleArray2 = function(arr){ return arrayShuffle2(arr); }




window.arrayToSingleLineString = function (arr) {
    var html = "[";
    for (i = 0; i < arr.length; i++) {
        switch (typeof (arr[i])) {
            case "number":
                html += arr[i] + ",";
                break;
            case "string":
                html += "'" + arr[i] + "',";
                break;
            default:
                html += "" + typeof (arr[i]) + ",";
                break;
        }
    }
    html = trimStringLength(html, html.length - 1);
    html += "]";
    return html;
}
window.arrayToString = function(arr){ return arrayToSingleLineString(arr); }

/*
 * Author: Darcey.Lloyd@gmail.com
 */



/**
 * @function: getFunctionName(fn)
 * @desc: tries to get the function name of a suppled function
 * @param function fn: the function wish to get the name of
 */
function getFunctionName(fn) {
    var name = fn.toString();
    var reg = /function ([^\(]*)/;
    return reg.exec(name)[1];
};
/*
 * Author: Darcey.Lloyd@gmail.com
 */



 /**
 * @function: isInString(find,source)
 * @desc: check for string in string
 * @param string find: The string to look for
 * @param string source: The string to look in
 */
window.isInString = function (find,source) {
    return source.indexOf(find) !== -1;
}


/**
 * @function: isEven(n)
 * @desc: check if input is even
 * @param number n: variable / value you wish to test
 */
window.isEven = function (n) {
    return n % 2 == 0;
}

/**
* @function: isOdd(n)
* @desc: check if input is odd
* @param number n: variable / value you wish to test
*/
window.isOdd = function (n) {
    return Math.abs(n % 2) == 1;
}


/**
 * @function: isAlphaNumeric(input)
 * @desc: check if an input is an alpha numerical value ([a-z],[A-Z],[0-9] only)
 * @param string||number input: variable / value you wish to check
 */
window.isAlphaNumeric = function (input) {
    return !(/\W/.test(input));
}


/**
 * @function: isElement(o)
 * @desc: checks if your variable is an element or not
 * @param * o: variable you wish to check
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
 * @function: isElement2(element)
 * @desc: checks to see if your vairable is an element or not
 * @param * element: the variable you wish to check
 */
window.isElement2 = function (element) {
    // works on major browsers back to IE7
    return element instanceof Element;
}
/**
 * @function: isDOM(obj)
 * @desc: checks to see if your variable is a DOM object
 * @param object obj: variable to check
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
 * @function: isBoolean(input)
 * @desc: checks if a variable is a boolean
 * @param * input: variable to check
 * @alias: isBool
 */
window.isBoolean = function (input) {
    if (typeof (input) == "boolean") {
        return true;
    } else {
        return false;
    }
}
window.isBool = function (input) { return isBoolean(input); }



/**
 * @function: isNumeric(n)
 * @desc: check if variable is numeric
 * @param * n: variable to check
 * @alias: isNumber
 */
window.isNumeric = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}
window.isNumber = function (n) { return isNumeric(n); }




/**
 * @function: isArray(input)
 * @desc: check if variable is an array
 * @param * arr: variable to check
 */
window.isArray = function (input) {
    return !!input && input.constructor === Array;
    //return arr.constructor == Array;
}

/*
 * Author: Darcey.Lloyd@gmail.com
 */


/**
 * @function: getRandomInt(min,max)
 * @desc: returns a random number / int betwen your specified min and max values
 * @param number min: the minimum your random number is allowed to go
 * @param number max: the maximum your random number is allowed to go
 * @alias: getRandom
 */
window.getRandomInt = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
window.getRandom = function (min, max) {
    return getRandomInt(min, max);
}



/**
 * @function: getRandomFloat(min,max)
 * @desc: returns a random floating point number betwen your specified min and max values
 * @param number min: min value
 * @param number max: max value
 */
window.getRandomFloat = function (min, max) {
    return (Math.random() * (max - min) + min);
};


/**
 * @function: randomString(length)
 * @desc: get a random string of a specified length
 * @param number length: the length of the string you wish to generate
 * @alias: getRandomString
 */
window.randomString = function (length) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
}
window.getRandomString = function (len) {
    return randomString(len);
}


/**
 * @function: getUniqueId()
 * @desc: Generates a random id
 * @alias: getUID
 * @alias: generateRandomId
 * @alias: generateUID
 */
window.getUniqueId = function () {
    return randomString(5) + Math.random().toString(36).substr(2, 8);
}
window.getUID = function () { return getUniqueId(); }
window.generateRandomId = function () { return getUniqueId(); }
window.generateUID = function () { return getUniqueId(); }


/**
 * @function: getArrayOfRandomNumbers(arraySize,min,max)
 * @desc: generate an array of random number between your max and min values
 * @param number arraySize: the number of random numbers to generate also the array size that will be returned
 * @param number min: the minimum your random number is allowed to be
 * @param number max: the maximum your random number is allowed to be
 */
window.getArrayOfRandomNumbers = function (arraySize, min, max) {
    var arr = [];
    for (var i = 0; i < arraySize; i++) {
        arr[i] = getRandom(min, max);
    }
    return arr;
}


/**
 * @function: getArrayOfRandomStrings(arraySize,strLength)
 * @desc: generate an array of random string of a specified length
 * @param number arraySize: the number of random strings to generate also the array size that will be returned
 * @param number strLength: the length of the strings to be generated
 */
window.getArrayOfRandomStrings = function (arraySize, strLength) {
    var arr = [];
    for (var i = 0; i < arraySize; i++) {
        arr[i] = getRandomString(strLength);
    }
    return arr;
}



/**
 * @function: guid()
 * @desc: generates a guid
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
window.getGUID = function () { return guid(); }
window.generateUniqueId = function () { return guid(); }











/**
 * @function: getWeightedRandom(odds, iterations)
 * @desc: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
 * @param string odds: xxxxxxxxxxxxxxxxxxxx
 * @param string iterations: xxxxxxxxxxxxxxxxxxxx
 */
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
/*
 * Author: Darcey.Lloyd@gmail.com
 */




/**
 * @function: xxxxxx(xxx)
 * @desc: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
 * @param string xxxx: xxxxxxxxxxxxxxxxxxxx
 */
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





/**
 * @function: cleanJSONString(s)
 * @desc: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
 * @param string xxxx: xxxxxxxxxxxxxxxxxxxx
 */
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


/**
 * @function: escapeHTML(text)
 * @desc: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
 * @param string xxxx: xxxxxxxxxxxxxxxxxxxx
 */
/*
function escapeHtml(unsafe) {
    return unsafe
         .replace(/&/g, "&amp;")
         .replace(/</g, "&lt;")
         .replace(/>/g, "&gt;")
         .replace(/"/g, "&quot;")
         .replace(/'/g, "&#039;");
 }
*/
window.escapeHTML = function (text) {
	var replacements = {
		"<": "&lt;",
		">": "&gt;",
		"&": "&amp;",
		"\"": "&quot;",
		"`": "&#039;"
	};
	return text.replace(/[<>&"]/g, function (character) {
		return replacements[character];
	});
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



/**
 * @function: trimStringLength(input, length)
 * @desc: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
 * @param string xxxx: xxxxxxxxxxxxxxxxxxxx
 */
window.trimStringLength = function (input, length) {
	return input.substring(0, length);
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


/**
 * @function: trimStringBy(input, trimBy)
 * @desc: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
 * @param string xxxx: xxxxxxxxxxxxxxxxxxxx
 */
window.trimStringBy = function(str,trimBy){
	return ( str.substring(0, str.length - trimBy) );
}
window.rTrim = function(str,trimBy){ return trimStringBy(str,trimBy); }





/**
 * @function: getFileExtension(str)
 * @desc: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
 * @param string xxxx: xxxxxxxxxxxxxxxxxxxx
 */
window.getFileExtension = function (str) {
	var ext = str.split('.').pop();
	return str;
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



/**
 * @function: getFileExtension2(input)
 * @desc: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
 * @param string xxxx: xxxxxxxxxxxxxxxxxxxx
 */
window.getFileExtension2 = function (input) {
	return input.slice((input.lastIndexOf(".") - 1 >>> 0) + 2);
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -




/**
 * @function: getLastPartOfUrl()
 * @desc: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
 * @param string xxxx: xxxxxxxxxxxxxxxxxxxx
 */
window.getLastPartOfUrl = function () {
	var url = window.location.href;
	var part = url.substring(url.lastIndexOf('/') + 1);
	return part;
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



/**
 * @function: removeFileFromPath(path)
 * @desc: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
 * @param string xxxx: xxxxxxxxxxxxxxxxxxxx
 */
window.removeFileFromPath = function (path) {
	//var pa = '/this/is/a/folder/aFile.txt';
	var r = /[^\/]*$/;
	path = path.replace(r, '');
	return path;
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


/**
 * @function: getAnchorFromUrl(url)
 * @desc: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
 * @param string xxxx: xxxxxxxxxxxxxxxxxxxx
 */
window.getAnchorFromUrl = function (url) {
	return url.slice(url.lastIndexOf('#') + 1);
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -





/**
 * @function: String.prototype.startsWith(str)
 * @desc: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
 * @param string xxxx: xxxxxxxxxxxxxxxxxxxx
 */
// es6 now supports the startsWith() and endsWith() (This is for pre ES6 support)
if (typeof String.prototype.startsWith != 'function') {
	String.prototype.startsWith = function (str) {
		return this.match(new RegExp("^" + str));
	};
}

/**
 * @function: String.prototype.endsWith(str)
 * @desc: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
 * @param string xxxx: xxxxxxxxxxxxxxxxxxxx
 */
// es6 now supports the startsWith() and endsWith() (This is for pre ES6 support)
if (typeof String.prototype.endsWith != 'function') {
	String.prototype.endsWith = function (str) {
		return this.match(new RegExp(str + "$"));
	};
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


/**
 * @function: getStringBetween(str,start,end)
 * @desc: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
 * @param string xxxx: xxxxxxxxxxxxxxxxxxxx
 */
window.getStringBetween = function (str, start, end) {
	return str.split(start).pop().split(end).shift().trim();
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



/**
 * @function: getAllStringsBetween(str,start,end)
 * @desc: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
 * @param string xxxx: xxxxxxxxxxxxxxxxxxxx
 */
window.getAllStringsBetween = function (str, start, end) {
	//return str.match(new RegExp(start + "(.*)" + end));
	// var regExString = new RegExp("(?:"+start+")(.*?)(?:"+end+")", "ig"); //set ig flag for global search and case insensitive
	// return regExString.exec(str);
	for (var i = 0; i < str.length; ++i) {
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
/*
 * Author: Darcey.Lloyd@gmail.com
 */



/**
 * @function: radToDeg(input)
 * @desc: converts radians to degrees
 * @param number input: the radians you wish converted to degrees
 * @alias: rad2deg
 */
window.radToDeg = function (input) {
    return input * (180 / Math.PI);
}
window.rad2deg = function (arg) { return radToDeg(arg); }


/**
 * @function: degToRad(input)
 * @desc: converts degrees to radians
 * @param number input: the value you wish converted to radians
 * @alias: deg2rad
 */
window.degToRad = function (input) {
    return input * (Math.PI / 180);
}
window.deg2rad = function (arg) { return degToRad(arg); }



/**
 * @function: toHex(num)
 * @desc: Converts a number to hex
 * @param number num: decimal base 10
 * @return string: hexidecimal value
 */
window.toHex = function (num) {
    return num.toString(16);
}
window.decToHex = function(num) { return toHex(num); }
window.decimalToHex = function(num) { return toHex(num); }
window.numberToHex = function(num) { return toHex(num); }
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -




/**
 * @function: boolToString(bool)
 * @desc: converts boolean to a string of true or false
 * @param boolean bool: the boolean you wish to convert
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
window.booleanToString = function(bool) { return boolToString(bool); }




/**
 * @function: boolToYesNo(bool)
 * @desc: converts a boolean to yes or no
 * @param boolean bool: the boolean you wish to convert
 */
window.boolToYesNo = function (bool) {

    if (!bool || bool == undefined || typeof (bool) != "boolean") {
        console.log("AFTC.js: Conversion.js: boolToString(str): Error - input is not a boolean!");
        return "error";
    }

    if (bool) {
        return "yes";
    } else {
        return "no";
    }
}
window.booleanToYesNo = function(bool) { return boolToYesNo(bool); }


/**
 * @function: stringToBool(str)
 * @desc: Converts a string to a boolean (y,yes,"1",no etc)
 * @param string str: the string you wish to convert
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
        default:
            return false;
            break;
    }
}
window.stringToBoolean = function(str) { return stringToBool(str); }



/**
 * @function: getBooleanFrom(input)
 * @desc: converts an input to a boolean
 * @param * input: the variable you wish to convert to a boolean
 */
window.toBoolean = function (input) {
    if (input == null || input == "" || !input) {
        return false;
    }

    if (typeof (input) == "string") {
        return stringToBool(input);
    }

    if (typeof (input) == "number") {
        if (input <= 0) {
            return false;
        } else {
            return true;
        }
    }

    return true;
}
window.getBooleanFrom = function(input) { return toBoolean(input); }



/**
 * @function: parseArrayToFloat(arr)
 * @desc: parses all values in array to float
 * @param array arr: array to process
 * @alias: arrayToFloat
 */
window.parseArrayToFloat = function (arr) {
    var converted;
    for (var i = 0; i < arr.length; i++) {
        converted = parseFloat(arr[i]);
        if (isNaN(converted)){
            arr[i] = 0;
        } else {
            arr[i] = converted;
        }
    }
    return arr;
}
window.arrayToFloat = function (arr) { return parseArrayToFloat(arr); }

/**
 * @function:parseArrayToInt(arr)
 * @desc: parses all values in array to float
 * @param array arr: array to process
 * @alias: arrayToInt
 */
window.parseArrayToInt = function (arr) {
    for (var i = 0; i < arr.length; i++) {
        converted = parseInt(arr[i]);
        if (isNaN(converted)){
            arr[i] = 0;
        } else {
            arr[i] = converted;
        }
    }
    return arr;
}
window.arrayToInt = function (arr) { return parseArrayToInt(arr); }



/**
 * @function:toArray(v)
 * @desc: takes an input and returns it as index[0] of an array
 * @param * arg: value to insert into array
 * @alias: convertToArray
 * @alias: valueToArray
 */
window.toArray = function (arg) {
    var a = [];
    switch (typeof(arg)){
        case "object":
            if (isArray(arg)){
                return arg;
            } else {
                for (var prop in arg){
                    a.push(arg[prop]);
                }
                return a;
            }
            return [arg];
        break;
        default:
            return [arg];
        break;
    }
}
window.convertToArray = function (v) { return toArray(v); }

/**
 * @function: getDaysBetween(startDateTime, endDateTime)
 * @desc: Gets the number of whole days between a start and end date
 * @param DateTime startDateTime: start date
 * @param DateTime endDateTime: end date
 * @alias: getNoOfDaysBetween
 * @alias: getDaysBetweenDates
 */
window.getDaysBetween = function(startDateTime, endDateTime) {
	var msPerDay = 8.64e7;
	// Copy dates so don't mess them up
	var sd = new Date(startDateTime);
	var ed = new Date(endDateTime);
	// Set to noon - avoid DST errors
	sd.setHours(12, 0, 0);
	ed.setHours(12, 0, 0);
	// Round to remove daylight saving errors
	return Math.round((ed - sd) / msPerDay);
}
window.getNoOfDaysBetween = function(start, end){ return getDaysBetween(start, end); }
window.getDaysBetweenDates = function(start, end){ return getDaysBetween(start, end); }




/**
 * @function: getUkDateFromDbDateTime(input)
 * @desc: get a uk date from a mysql db date value
 * @param MySQLDateTimeString input: MySQL DB DateTime
 */
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

/**
 * @function: getUkDateTimeFromDbDateTime(input)
 * @desc: get a uk date from a mysql db date time value
 * @param MySQLDateTimeString input: MySQL DB DateTime
 */
window.getUkDateTimeFromDbDateTime = function (input) {
	// "2016-04-08 21:11:59" to UK date time
	var DateTime = input.split(" ");
	var DateParts = DateTime[0].split("-");
	var TimeParts = DateTime[1].split(":");
	var UKDate = DateParts[2] + "/" + DateParts[1] + "/" + DateParts[0];
	var Time = TimeParts[0] + ":" + TimeParts[1];
	return (UKDate + " " + Time);
}

/**
 * @function: getSQLDateTime()
 * @desc: gets the date time now for sql insert
 */
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



/**
 * @function: getDateTime(local)
 * @desc: gets the date time at a specified local
 * @param string optional local: options are us or do not supply for en-gb
 */
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


/*
 * Author: Darcey.Lloyd@gmail.com
 */


/**
 * @function: validateEmail(email)
 * @desc: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
 * @param string xxxx: xxxxxxxxxxxxxxxxxxxx
 */
window.validateEmail = function (email) {
	var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email);
}
window.isValidEmail = function (email) {
	return validateEmail(email);
}

/*
 * Author: Darcey.Lloyd@gmail.com
 */


/**
 * @function: isMobile()
 * @desc: isMobile
 * @return boolean
 */
window.isMobile = function(){
	// Windows Phone must come first because its UA also contains "Android"!
	var ua = navigator.userAgent.toLowerCase();
	if (/windows phone/i.test(ua)) {
		return true;
	} else {
		if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
			return true;
		} else {
			return false;
		}
	}
}

window.isAndroid = function(){
	var ua = navigator.userAgent.toLowerCase();
	if (/windows phone/i.test(ua)) {
		return false;
	} else {
		var isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");
		return isAndroid;
	}
}

window.iOS = function() {
	var iDevices = [
	  'iPad Simulator',
	  'iPhone Simulator',
	  'iPod Simulator',
	  'iPad',
	  'iPhone',
	  'iPod'
	];
  
	if (!!navigator.platform) {
	  while (iDevices.length) {
		if (navigator.platform === iDevices.pop()){ return true; }
	  }
	}
  
	return false;
  }

/**
 * @function: isFireFox()
 * @desc: Detects FireFox
 * @return boolean
 */
window.isFireFox = function () {
	// var is_firefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
	// return is_firefox;
	return (typeof InstallTrigger !== 'undefined');
}

/**
 * @function: isChrome()
 * @desc: Detects Chrome
 * @return boolean
 */
window.isChrome = function () {
	// var chrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
	var chrome = !!window.chrome && !!window.chrome.webstore;
	return chrome;
}


/**
 * @function: isEdge()
 * @desc: Detects Edge
 * @return boolean
 */
window.isEdge = function () {
	//var isEdge = !isIE && !!window.StyleMedia; // Edge 20+
	var edge = false;
	if (/Edge\/\d./i.test(navigator.userAgent)) {
		edge = true;
	}
	return edge;
}


/**
 * @function: isSafari()
 * @desc: Detects Safari
 * @return boolean
 */
window.isSafari = function () {
	// var is_safari = navigator.userAgent.toLowerCase().indexOf('safari') > -1;
	// return is_safari;
	return /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));
}

/**
 * @function: isIE()
 * @desc: Detects IE
 * @return boolean
 */
window.isIE = function () {
	// var is_ie = navigator.userAgent.toLowerCase().indexOf('MSIE') > -1;
	// return is_ie;
	// params.isIE = navigator.userAgent.match(/MSIE|Trident/);
	// params.isIE = document.documentMode; // IS9 and above
	return /*@cc_on!@*/false || !!document.documentMode; // Internet Explorer 6-11
}


/**
 * @function: isOpera()
 * @desc: Detects Opera
 * @return boolean
 */
window.isOpera = function() {
	// var isChromium = window.chrome;
	// var isOpera = window.navigator.userAgent.indexOf("OPR") > -1 || window.navigator.userAgent.indexOf("Opera") > -1;
	// var isOpera = (navigator.userAgent.match(/Opera|OPR\//) ? true : false);
	var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
	return isOpera;
}

/**
 * @function: getIEVersion()
 * @desc: Gets version of IE
 * @return float
 */
window.getIEVersion = function () {
	var match = navigator.userAgent.match(/(?:MSIE |Trident\/.*; rv:)(\d+)/);
	return match ? parseInt(match[1]) : undefined;
}

/**
 * @function: getBrowser()
 * @desc: Detects browser
 * @return string
 */
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



/**
 * @function: getOS(testUserAgent)
 * @desc: Attempts to get the os from the user agent or the test user agent
 * @param string testUserAgent: test user agent string
 */
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




/*
 * Author: Darcey.Lloyd@gmail.com
 */

var AFTC = AFTC || {}




/**
 * @function: setHTML(elementOrId,html);
 * @desc: quick shortcut for outputting html to an element
 * ````
 * setHTML("header","Welcome");
 * // or
 * var myElement = getElementById("header");
 * setHTML(myElement,"Welcome!");
 * ````
 * @param dataType elementOrId: the element or the element id you wish to set the html of
 * @param dataType html: the html string to insert into your element
 * @return:
 * @alias: html
 */
window.setHTML = function (elementOrId, str) {
    var element;
    if (typeof (elementOrId) == "string") {
        element = getElementById(elementOrId);
    }
    if (isElement(element)) {
        element.innerHTML = str;
    } else {
        return "unable to retrieve element from [" + elementOrId + "]";
    }
}
window.html = function (element, str) { window.setHTML(element, str); }


/**
 * @function: getElementOffsetTop(elementIdOrQuery)
 * @desc: Gets an elements top offset
 * @param string elementId: the element ID you wish to get the top offset of
 */
window.getElementOffsetTop = function (elementId) {
    var element = getElementById(elementId);
    var curtop = 0;
    if (isElement(element)) {
        if (element.offsetParent) {
            do {
                curtop += element.offsetTop;
            } while (element = element.offsetParent);
            return parseFloat([curtop]);
        }
    }
}
window.getElementTopOffset = function (elementId) { getElementOffsetTop(elementId); }







// AFTC.lockBody params
window.AFTCLockBodyParams = {
	pageYOffset: null,
	elementId: ""
};
/**
 * @function: lockBody()
 * @desc: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
 * @param string xxxx: xxxxxxxxxxxxxxxxxxxx
 */
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



/**
 * @function: unlockBody()
 * @desc: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
 * @param string xxxx: xxxxxxxxxxxxxxxxxxxx
 */
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





/**
 * @function: centerAbsoluteElement(eleOrEleId)
 * @desc: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
 * @param string xxxx: xxxxxxxxxxxxxxxxxxxx
 */
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
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
/*
 * Author: Darcey.Lloyd@gmail.com
 */



// # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
// Styling shortcuts
// # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
/**
 * @function: addClass(elementOrId,classname)
 * @desc: shortcut to add a css class to a html element
 * @param elementORstring elementOrId: The elemnt or id of the html element to add a css class to
 * @param string className: the class name to add
 */
window.addClass = function (elementOrId, classNames) {
    var element;
    if (typeof(elementOrId) == "string"){
        element = getElementById(elementOrId);
    }

    if (isArray(classNames)){
        for (var i=0; i < classNames.length; i++){
            element.classList.add(classNames[i]);
        }
    } else {
        element.classList.add(classNames);
    }
}
window.addClassTo = function(elementOrId, classNames){ addClass(elementOrId, classNames); }

/**
 * @func: removeClass(elementOrId,className)
 * @desc: shortcut to remove a class from a html element
 * @param elementORstring elementOrId: The elemnt or id of the html element to add a css class to
 * @param string className: the class name to remove
 */
window.removeClass = function (elementOrId, className) {
    var element;
    if (typeof(elementOrId) == "string"){
        element = getElementById(elementOrId);
    }

    if (isArray(classNames)){
        for (var i=0; i < classNames.length; i++){
            element.classList.remove(classNames[i]);
        }
    } else {
        element.classList.remove(classNames);
    }
}
window.removeClassFrom = function(elementOrId, classNames){ removeClass(elementOrId, classNames); }


/**
 * @function: hasClass(elementOrId, cls)
 * @desc: Check to see if an element has a class attached to it
 * @param string elementOrId: The elemnt or id of the html element
 * @param string cls: class to look for
 */
window.hasClass = function (elementOrId, cls) {
    if (isElement(elementOrId)) {
        return elementOrId.classList.contains(cls);
    } else {
        return getElementById(elementOrId).classList.contains(cls);
    }
}
// # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
// # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #





/*
 * Author: Darcey.Lloyd@gmail.com
 */


/**
 * @function: redirect(url)
 * @desc: no more typing self.location.href, just use redirect(url)
 * @param string url: the url you wish to redirect to
 */
window.redirect = function (url) {
    self.location.href = url;
};


window.goFullScreen = function (element) {
    var target = document.body;
    if (element != undefined){
        if (isElement(element)) {
            target = element;
        }
    }
    
    if (target.requestFullscreen) {
        target.requestFullscreen();
    } else if (target.webkitRequestFullscreen) {
        target.webkitRequestFullscreen();
    } else if (target.mozRequestFullScreen) {
        target.mozRequestFullScreen();
    } else if (target.msRequestFullscreen) {
        target.msRequestFullscreen();
    } else {
        console.error('Fullscreen API is not supported.');
    }
}

window.exitFullScreen = function () {
	if (document.exitFullscreen) {
		document.exitFullscreen();
	} else if (document.webkitExitFullscreen) {
		document.webkitExitFullscreen();
	} else if (document.mozCancelFullScreen) {
		document.mozCancelFullScreen();
	} else if (document.msExitFullscreen) {
		document.msExitFullscreen();
	} else {
		console.error('Fullscreen API is not supported.');
	}
}
/*
 * Author: Darcey.Lloyd@gmail.com
 */



/**
 * @function: setCookie(name, value)
 * @desc: Sets a cookie by name with a value
 * @param string name: name of the cookie
 * @param * value: value of the cookie
 */
window.setCookie = function (name, value) {
	//document.cookie = name + "=" + value + "; expires=Thu, 18 Dec 2013 12:00:00 GMT";
	//.cookie(name, value, {expires:365,path:'/cookies'});
	var expires = new Date();
	expires.setTime(expires.getTime() + (1 * 24 * 60 * 60 * 1000));
	document.cookie = name + '=' + value + ';expires=' + expires.toUTCString();
}
// -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -


/**
 * @function: getCookie(name)
 * @desc: Gets the value of a cookie by name
 * @param string name: name of the cookie
 */
window.getCookie = function (name) {
	//return .cookie(name);
	var keyValue = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|)');
	return keyValue ? keyValue[2] : null;
}
// -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -



/**
 * @function: isChecked(xxx)
 * @desc: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
 * @param string xxxx: xxxxxxxxxxxxxxxxxxxx
 */
window.isChecked = function (id) {
	return document.getElementById(id).checked;
}
// -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -




/**
 * @function: isNumberKey(event)
 * @desc: Checks if evt supplied (use on form input events via onkeyup or onkeydown)
 * @param event evt: html onkeyup(event) or onkeydown(event)
 */
window.isNumberKey = function (evt) {
	var charCode = (evt.which) ? evt.which : event.keyCode;
	if (charCode > 31 && (charCode < 48 || charCode > 57))
		return false;

	return true;
}
// -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -







/**
 * @function: removeAllSelectOptions(xxx)
 * @desc: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
 * @param string xxxx: xxxxxxxxxxxxxxxxxxxx
 */
window.removeAllSelectOptions = function (elementOrId) {
    var element;
	if (typeof(elementOrId) == "string"){
		element = document.getElementById(elementOrId);
		if (!element){
			throw("AFTC.js > parseJSONToSelect() Usage ERROR, Unable to find anything on the DOM with an ID of [" + elementOrId + "]");
		}
	}

	if (element) {
		for (var i = element.options.length - 1; i >= 0; i--) {
			element.remove(i);
		}
	}

}
// -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -









/**
 * @function: parseJSONToSelect(j, selectElementIdOrElement, label, value)
 * @desc: parses a json object of key value pairs to a form select element
 * @param string j: the json data
 * @param multi selectElementIdOrElement: the json data
 * @param string label: of key value pair this is the key
 * @param string value: of key value pair this is the value
 */
window.parseJSONToSelect = function (j, elementOrId, label, value) {
	var element;

	if (typeof(elementOrId) == "string"){
		element = document.getElementById(elementOrId);
		if (!element){
			throw("AFTC.js > parseJSONToSelect() Usage ERROR, Unable to find anything on the DOM with an ID of [" + elementOrId + "]");
		}
	}

	if( typeof(elementOrId) == "object"){
		element = elementOrId;
	}

	if (typeof(j) == "string"){
		j = JSON.parse(j);
	}

	for (var i = 0; i < j.length; i++) {
		var label = j[i][label];
		var data = j[i][value];

		var option = document.createElement("option");
		option.text = label;
		option.value = data;
		//log(option);
		element.add(option);
	}
}
/*
 * Author: Darcey.Lloyd@gmail.com
 */


AFTC.Point = function (x, y) {
    !x ? this.x = 0 : this.x = x;
    !y ? this.y = 0 : this.y = y;
}

AFTC.Rectangle = function (x1, y1, x2, y2) {
    !x1 ? this.x1 = 0 : this.x1 = x1;
    !y1 ? this.y1 = 0 : this.y1 = y1;
    !x2 ? this.x2 = 0 : this.x2 = x2;
    !y2 ? this.y2 = 0 : this.y2 = y2;
}
/*
 * Author: Darcey.Lloyd@gmail.com
 */





// REF: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio
// REF: https://www.w3schools.com/tags/ref_av_dom.asp
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
AFTC.Audio = function () {
    if (!(this instanceof arguments.callee)) {
        var msg = "\nAFTC.Audio: USAGE ERROR: Constructor called as a function.\n";
        msg += "Please use new AFTC.Audio({params})";
        throw new Error(msg);
    }
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    var me = this;
    var args = {
        url: false,
        volume: 1,
        repeat: 0,
        preload: true,
        onComplete: false,
        offsetLoopBy: 0
    };
    var params = {
        audio: false,
        loaded: false,
        playCount: 0,
        endTimeWithOffset: 0,
        manualLooping: false,
        manualLoopingComplete: false,
        timer: false,
        timerInterval: 50,
        ready: false,
        isIE: false,
        isEdge: false,
        isFireFox: false,
        isChrome: false,
        isOpera: false,
        isSafari: false
    };

    new AFTC.ArgsToObject(arguments[0], args);
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    // Constructor
    function init() {
        if (!args.url) {
            throw new Error("\nAFTC.Audio: USAGE ERROR: A url to a sound file is required!");
        }

        // DETECT THE BROWSERS
        params.isChrome = isChrome();
        params.isFirefox = isFireFox();
        params.isOpera = isOpera();
        params.isSafari = isSafari();
        params.isEdge = isEdge();
        params.isIE = isIE();
        // log("isChrome = " + params.isChrome);
        // log("isFirefox = " + params.isFirefox);
        // log("isOpera = " + params.isOpera);
        // log("isSafari = " + params.isSafari);
        // log("isEdge = " + params.isEdge);
        // log("isIE = " + params.isIE);

        //params.audio = new Audio();
        // params.audio.src = args.url; // DONT WORK

        params.audio = document.createElement('audio');
        // params.audio.volume = args.volume;
        params.audio.preload = "auto"; // auto || metadata || none

        params.audio.addEventListener('timeupdate', onTimeUpdate, false);
        params.audio.addEventListener("ended", playCompleteViaEvent, false);

        // params.audio.addEventListener("onloadeddata",function(){ log("LOADED"); }); // DOESNT WORK BUT SHOULD!
        params.audio.onloadeddata = function () {
            params.loaded = true;
            onLoadedInitAudio();
        };

        if (isArray(args.url)) {
            var html = "";
            var isOGG, isMP3, isWAV;
            for (var i = 0; i < args.url.length; i++) {
                // log("file " + i + " = " + args.url[i]);
                isOGG = isInString("ogg", args.url[i].toLowerCase());
                isMP3 = isInString("mp3", args.url[i].toLowerCase());
                isWAV = isInString("wav", args.url[i].toLowerCase());
                if (isOGG && !isMP3 && !isWAV) {
                    html += '<source src="' + args.url[i] + '" type="audio/ogg" />'
                } else if (!isOGG && isMP3 && !isWAV) {
                    html += '<source src="' + args.url[i] + '" type="audio/mpeg" />'
                } else if (!isOGG && !isMP3 && isWAV) {
                    html += '<source src="' + args.url[i] + '" type="audio/wave" />'
                } else {
                    throw new Error("\nAFTC.Audio: USAGE ERROR: Only MP3, OGG and WAV formats are supported!");
                }
            }
            params.audio.innerHTML = html;
            //audioElement.innerHTML = '<source src="' + '/audio/sound.mp3'+ '" type="audio/mpeg" />'
        } else {

            var msg = "\nAFTC.JS > AUDIO.JS > WARNING\n";
            msg += "You are using an obsolete or incapable web browser, audio may not function correctly!\n";

            if (params.isIE) {
                msg += "If you have to use a microsoft web browser please use MS Edge, however this may still not function correctly\n.";
                msg += "It is recommended that you use Chrome, Firefox or Opera web browsers.";
                console.warn(msg);
            } else if (params.isEdge) {
                msg += "It is recommended that you use Chrome, Firefox or Opera web browsers.";
                console.warn(msg);
            }

            // Compatibility issue alerts/warnings
            var isOGG = isInString("ogg", args.url.toLowerCase());
            var isMP3 = isInString("mp3", args.url.toLowerCase());
            var isWAV = isInString("wav", args.url.toLowerCase());
            // log("isOGG = " + isOGG);
            // log("isMP3 = " + isMP3);
            // log("isWAV = " + isWAV);
            // log("args.url = " + args.url);

            if (params.isIE && isWAV || params.isEdge && isWAV || params.isFirefox && isWAV) {
                throw new Error("\nAFTC.Audio: USAGE ERROR: FireFox, EDGE & IE don't support WAV playback!\nPlease use MP3!");
            }
            if (params.isIE && isOGG) {
                throw new Error("\nAFTC.Audio: USAGE ERROR: IE doesn't support OGG playback!\nPlease use MP3!");
            }

            params.audio.setAttribute('src', args.url);
        }

    }
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



    function onLoadedInitAudio() {
        // log("onLoadedInitAudio()");
        // This will force execution of the timeupdate event, which will init params.audio.duration
        params.audio.volume = 0;
        setTimeout(function () {
            // WARNING: Putting params.audio.play here will ignore volume and other settings
            playIt();
        }, 250);
    }
    function playIt() {
        params.audio.play();
        params.timer = setInterval(checkForDuration, params.timerInterval);
    }
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



    function checkForDuration() {
        if (params.audio.duration > 0) {
            params.isReady = true;
            //log(params.audio.duration + " seconds of audio is ready for use!");
            // setHTML("debug3", "duration = " + params.audio.duration.toFixed(3));
            clearInterval(params.timer);
            params.timer = null;
            params.ready = true;
            params.audio.pause();
            params.audio.volume = args.volume;
            params.audio.currentTime = 0;

            // SET REPEAT HERE AFTER DURATION INIT HAS BEEN DONE
            // NOTE: Edge wont loop unless src is an array of sources (BUG)
            if (params.isEdge && !isArray(args.src)) {
                if (args.offsetLoopBy == 0) {
                    args.offsetLoopBy = 0.01;
                }
            } else {
                if (args.repeat == -1) {
                    params.audio.loop = true;
                }
            }
        } else {
            // setHTML("debug3", "duration = ??");
        }

        // log(args);
        // log(params);
    }
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



    function onTimeUpdate(e) {
        // Doesn't need to do anything, but "ontimeupdate" event needs to be initialised
        // log("onTimeUpdate()");
        // params.currentTime = this.currentTime;
        // params.audio.duration = this.duration;
        // setHTML("debug2","duration = " + params.audio.duration.toFixed(3));
    }
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



    function playCompleteViaEvent() {
        if (params.audio.loop) {
            // log("AUDIO is in loop mode");
            return;
        }

        if (params.manualLooping) { return; }

        params.playCount++;
        // log("playCompleteViaEvent(): playCount = " + params.playCount + " : args.repeat = " + args.repeat);

        params.audio.currentTime = 0;

        if (args.repeat == -1) {
            // repeat forever
            params.audio.currentTime = 0;
            params.audio.play();
        } else {
            if (params.playCount <= args.repeat) {
                // repeat
                params.audio.currentTime = 0;
                params.audio.play();
            } else {
                // complete
                params.audio.pause();
                params.audio.currentTime = 0;

                if (args.onComplete) {
                    args.onComplete();
                }
            }
        }

    }
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



    function checkPlayPos() {
        if (!params.manualLooping) { return; }

        // setHTML("debug1", "time = " + params.audio.currentTime.toFixed(3) + "/" + params.audio.duration.toFixed(3));

        if (params.manualLoopingComplete) {
            // log("checkPlayPos(): manualLoopingComplete!");
            return;
        }
        params.endTimeWithOffset = params.audio.duration - args.offsetLoopBy;
        if (params.audio.currentTime >= params.endTimeWithOffset) {
            params.playCount++;

            if (args.repeat == -1) {
                // repeat forever
                params.audio.currentTime = 0;
            } else if (args.repeat > 0) {
                if (params.playCount <= args.repeat) {
                    // repeat
                    params.audio.currentTime = 0;
                } else {
                    // COMPELTE
                    params.manualLoopingComplete = true;
                    // log("COMPLETE!");
                    clearInterval(params.timer);
                    params.timer = null;
                    if (args.onComplete) {
                        args.onComplete();
                    }
                }
            }
        }
    }
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -





    function play() {
        if (params.audio) {
            if (!params.isReady) {
                console.warn("AFTC.Audio(): WARNING: Audio is not ready! [load has not completed, will try to play anyway!]");
            }
            params.playCount = 0;
            params.manualLoopingComplete = false;
            params.audio.currentTime = 0;

            if (args.offsetLoopBy != 0) {
                params.manualLooping = true;
                params.timer = setInterval(checkPlayPos, params.timerInterval);
                params.audio.play();
            } else {
                params.manualLooping = false;
                params.audio.play();
            }
        } else {
            console.warn("AFTC.Audio(): WARNING: Audio is not ready!");
        }
    }
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



    function pause() {
        if (params.audio) {
            params.audio.pause();
        }
    }
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


    function resume() {
        if (params.audio) {
            params.audio.play();
        }
    }
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



    function dispose() {
        params.audio.removeEventListener('timeupdate', onTimeUpdate, false);
        params.audio.removeEventListener('ended', playCompleteViaEvent, false);
        params.audio = undefined;
    }
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



    // public
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    this.play = function () { play(); }
    this.pause = function () { pause(); }
    this.stop = function () { pause(); }
    this.resume = function () { resume(); }
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    this.dispose = function () { dispose(); }
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    this.getAudio = function () { return params.audio; }
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    this.isReady = function () { return params.ready; }
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



    // Constructor simulation (run construct or init in this case)
    init();
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -





window.playSound = function(url, vol, loop, onComplete) {
    var sound = new Audio(url);
    vol ? sound.volume = vol : sound.volume = 1;
    if (loop) {
        sound.loop = true;
        // sound.addEventListener('ended', function () {
        //     log("ENDED!");
        //     this.currentTime = 0;
        //     this.play();
        // }, false);
    }

    if (onComplete) {
        try {
            sound.removeEventListener("ended",onComplete,false);
        } catch (e) {}
    }
    sound.play();
    return sound;
}
/*
 * Author: Darcey.Lloyd@gmail.com
 */



/**
 * @type: class
 * @name: AFTC.Animate()
 * @version: 2.3.14
 * @requires: base.js
 * @function: AFTC.Animate(elementId, onComplete)
 * @desc: Quick and easy css animation for nearly every css element style
 * ````
 * var anim1 = new AFTC.Animate("box1", onCompleteFunction);
 * anim1.wait(2); // wait in 2 seconds
 * anim1.set("backgroundColor","RGBA(255,255,255,0.5)"); // sets background color to white 50% opacity
 * anim1.anim("fontColor","RGBA(255,0,0,1)",1.5); // animates the font color to red over 1.5 seconds
 * anim1.set(["html","paddingLeft",left"],["hello","10px","100px"],[1,2,3]); // sets innerHTML, padding-left and left position over 1, 2 and 3 seconds
 * ````
 * @link: see usage example in test/animation.htm
 */
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
AFTC.Animate = function (elementId, onComplete) {
    // log("AFTC.Animate()");

    // Var defs
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    var params = {
        error: {
            error: false,
            msg: ""
        },
        elementId: false,
        element: false,
        onComplete: false,
        stack: [],
        stackCount: 0,
        active: {
            stackIndex: false,
            defIndex: false,
            definition: false,
        },
        state: {
            started: false,
            stopped: false
        },
        onComplete: false
    };

    var StackVo = function () {
        this.type = ""; // set || anim || delay
        this.definitions = []; // Array of DefinitionVo's
        this.uid = 0;
    }

    var DelayVo = function () {
        this.duration = false;
        this.start = false;
        this.end = false;
    }

    var DefinitionVo = function () {
        this.style = "";
        this.valid = true;
        this.start = {
            v: false,
            rgba: false,
            r: false,
            g: false,
            b: false,
            a: false,
            suffix: false
        };
        this.end = {
            v: false,
            rgba: false,
            r: false,
            g: false,
            b: false,
            a: false,
            suffix: false
        };
        this.range = {
            v: false,
            r: false,
            g: false,
            b: false,
            a: false
        };
        this.step = {
            v: false,
            r: false,
            g: false,
            b: false,
            a: false
        };
        this.time = {
            start: false,
            end: false,
            duration: false
        }
    }
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



    // Constructor
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    function init() {
        // log("AFTC.Animate.init()");

        // var ini
        params.elementId = elementId;
        params.onComplete = onComplete;

        // Get element and check exists
        params.element = getElementById(elementId);
        if (!isElement(params.element)) {
            params.error.msg = "AFTC.js > AFTC.Animate(): Usage error, unable to locate an element with id [" + params.elementId + "] on the DOM!";
            throw (params.error.msg);
            return;
        }
    }
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    function addStackItem(type, style, value, duration) {
        // log("- - - - - - - - - - - - - - - - - - - - - - - - -");
        // log("AFTC.Animate.addStackItem(type:" + type + ", style, value, duration)");
        type = String(type).toLowerCase();
        if (type != "set" && type != "anim" && type != "delay") {
            params.error.flag = true;
            params.error.msg = "AFTC.js > AFTC.Animate.addStackItem(): Error - unhandled type of [" + type + "]";
            throw (params.error.msg);
            return;
        }

        var isStyleArray = isArray(style);
        var isValueArray = isArray(value);
        var isDurationArray = isArray(duration);
        if (isStyleArray != isValueArray && isStyleArray != isDurationArray) {
            params.error.flag = true;
            params.error.msg = "AFTC.js > AFTC.Animate.addStackItem(): Error - please ensure all your params are either arrays or single values";
            throw (params.error.msg);
            return;
        }
        if (isStyleArray && isValueArray && isDurationArray) {
            if (style.length != value.length && style.length != duration.length) {
                params.error.flag = true;
                params.error.msg = "AFTC.js > AFTC.Animate.addStackItem(): Error - please ensure all your params are arrays are the same size";
                throw (params.error.msg);
                return;
            }
        }

        // If params are single value then push them into arrays for array processing
        if (!isStyleArray && !isValueArray && !isDurationArray) {
            style = convertToArray(style);
            value = convertToArray(value);
            duration = convertToArray(duration);
        }

        // Create new StackVo() for strack of set||anim|delay configurations
        var svo = new StackVo();
        svo.type = type;
        //svo.uid = "aftcAnimId" + Math.random().toString(36).substr(2, 9);
        //svo.uid = "stk" + Math.round( Math.random()*9999999 );
        params.stackCount++;
        svo.uid = "stk" + params.stackCount;

        if (type == "anim" || type == "set") {
            // log("ADD: " + type + "  STYLE: " + style);
            for (var i = 0; i < style.length; i++) {
                var dvo = new DefinitionVo();
                dvo.style = style[i];
                dvo.time.duration = parseFloat(duration) * 1000;
                // NOTE: Can't set start value here as it might change, work it out before run
                // Process endValue
                var endValue = value[i];
                if (isRGB(endValue)) {
                    var rgba = getRGBAArray(endValue);
                    dvo.end.r = rgba[0];
                    dvo.end.g = rgba[1];
                    dvo.end.b = rgba[2];
                    dvo.end.a = rgba[3];
                    dvo.end.rgba = true;
                    dvo.end.suffix = getSuffix(endValue);
                } else {
                    if (dvo.style.toLowerCase() == "html") {
                        dvo.end.v = endValue;
                    } else {
                        dvo.end.v = parseFloat(endValue);
                        if (isNaN(dvo.end.v)) {
                            dvo.end.v = endValue;
                        }
                    }
                    dvo.end.rgba = false;
                    dvo.end.suffix = getSuffix(endValue);
                }
                // log(dvo);
                // log("--");
                svo.definitions.push(dvo);
            }
            params.stack.push(svo);
        } else if (type == "delay") {
            // log("ADD Delay");
            // Set times
            var dvo = new DelayVo();
            dvo.duration = parseFloat(duration) * 1000;
            svo.definitions.push(dvo);
            params.stack.push(svo);
        }
        // log(svo);
    }
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -







    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    function start() {
        // log("AFTC.Animate.start()");
        params.state.started = true;
        params.state.stopped = false;
        params.active.stackIndex = 0;
        params.active.defIndex = 0;
        selectStackRunCount = 0;
        selectStack();
    }
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


    var selectStackRunLimit = 2000;
    var selectStackRunCount = 0;


    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    function selectStack() {
        // log("- - - - - - - - - - - - - - - - - - - - - - - - -");
        if (params.active.stackIndex >= (params.stack.length)) {
            // log("AFTC.Animate.selectStack(): Stack complete!");
            stackCompletehandler();
            return;
        } else {
            if (selectStackRunCount >= selectStackRunLimit) {
                console.error("AFTC.Animate.selectStack(): ERROR: Run count limit triggered");
                return;
            } else {
                selectStackRunCount++;
                // log("AFTC.Animate.selectStack(): Processing [" + params.active.stackIndex + "] of [" + (params.stack.length - 1) + "]");
                params.active.defIndex = 0; // reset

                var svo = params.stack[params.active.stackIndex];
                var definitions = svo.definitions;
                params.active.defIndex = 0;
                // log(svo);

                if (svo.type == "delay") {
                    var dvo = svo.definitions[0]; // DelayVo
                    if (!dvo.start) {
                        dvo.start = new Date().getTime();
                        dvo.end = dvo.start + (dvo.duration);
                    }
                    processDelay();
                } else if (svo.type == "set") {
                    processSet();
                } else if (svo.type == "anim") {
                    for (var i = 0; i < definitions.length; i++) {
                        setDefinitionValues(i);
                    }
                    processAnimRunCount = 0;
                    processAnim();
                } else {
                    log("PROCESS: ERROR - UNKNOWN type [" + svo.type + "]");
                }

            }
        }
    }
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


    var processAnimLimit = 2000;
    var processAnimRunCount = 0;

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    function processAnim() {
        if (processAnimRunCount > processAnimLimit) {
            console.error("processAnim(): RUN LIMIT REACHED!");
            return;
        }
        processAnimRunCount++;
        // log("-----");
        // log("AFTC.Animate.processAnim()")

        var svo = params.stack[params.active.stackIndex];
        var definitions = svo.definitions;
        var complete = true;

        for (var i = 0; i < definitions.length; i++) {
            var dvo = definitions[i];
            //log(dvo);
            var ct = new Date().getTime() - dvo.time.start;
            var v = 0, r = 0, g = 0, b = 0, a = 0, msg = "";
            
            // //setHTML("debug","c = " + c);
            if (ct < dvo.time.duration) {
                if (dvo.start.rgba && dvo.end.rgba) {
                    r = Math.round(dvo.start.r + (dvo.step.r * ct));
                    g = Math.round(dvo.start.g + (dvo.step.g * ct));
                    b = Math.round(dvo.start.b + (dvo.step.b * ct));
                    a = dvo.start.a + (dvo.step.a * ct);
                    v = "RGBA(" + r + "," + g + "," + b + "," + a.toFixed(2) + ")";
                    var t = "RGBA(" + dvo.end.r + "," + dvo.end.g + "," + dvo.end.b + "," + dvo.end.a.toFixed(2) + ")";
                    var c = "RGBA(" + dvo.start.r + "," + dvo.start.g + "," + dvo.start.b + "," + dvo.start.a.toFixed(2) + ")";
                    msg += "ct:" + ct + "  v:" + v + "   target:" + t + "  ";
                    msg += "  current:" + c + "  rs:" + dvo.step.r + "  ra:" + dvo.step.a;
                    // log(msg);
                    params.element.style[dvo.style] = v;
                } else {
                    v = dvo.start.v + (dvo.step.v * ct);
                    msg += "ct:" + ct + "  v:" + v + "  range:" + dvo.range.v + "  ";
                    msg += "current:" + dvo.start.v + "  target:" + dvo.end.v + "  step:" + dvo.step.v;
                    // log(msg);
                    params.element.style[dvo.style] = v + dvo.end.suffix;
                }
                complete = false;
            } else {
                if (dvo.start.rgba && dvo.end.rgba) {
                    v = "RGBA(" + dvo.end.r + "," + dvo.end.g + "," + dvo.end.b + "," + dvo.end.a.toFixed(2) + ")";
                    params.element.style[dvo.style] = v;
                } else {
                    v = dvo.end.v;
                    msg += "ct:" + ct + "  v:" + v + "  range:" + dvo.range.v + "  ";
                    msg += "current:" + dvo.start.v + "  target:" + dvo.end.v + "  step:" + dvo.step.v;
                    // log(msg);
                    params.element.style[dvo.style] = v + dvo.end.suffix;
                }
                
            }
        }

        if (!complete){
            requestAnimationFrame(processAnim);
        } else {
            params.active.stackIndex++;
            selectStack();
        }
    }
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -








    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    function processSet() {
        // log("-----");
        // log("AFTC.Animate.processSet()");
        var svo = params.stack[params.active.stackIndex];
        var definitions = svo.definitions;

        for (var i = 0; i < definitions.length; i++) {
            var dvo = definitions[i];
            var v;
            if (dvo.style.toLowerCase() == "html") {
                params.element.innerHTML = dvo.end.v;
            } else {
                if (dvo.end.rgba) {
                    v = "RGBA(" + dvo.end.r + "," + dvo.end.g + "," + dvo.end.b + "," + dvo.end.a + ")";
                    params.element.style[dvo.style] = v;
                } else {
                    var v = (dvo.end.v + dvo.end.suffix);
                    params.element.style[dvo.style] = v;
                }
            }
            // log("Setting style: [" + dvo.style + "] to [" + v + "]");
        }

        params.active.stackIndex++;
        params.active.defIndex = 0;
        selectStack();
    }
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -




    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    function processDelay() {
        // log("processDelay()");

        var svo = params.stack[params.active.stackIndex];
        var definitions = svo.definitions;
        var delayVo = svo.definitions[0];

        var c = new Date().getTime() - delayVo.start;
        // log(c);
        //setHTML("debug","c = " + c);
        if (c < delayVo.duration) {
            requestAnimationFrame(processDelay);
        } else {
            // log("processDelay(): COMPLETE");
            params.active.stackIndex++;
            params.active.defIndex = 0;
            selectStack();
        }
    }
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -








    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    function stackCompletehandler() {
        // log("AFTC.Animate.stackCompletehandler()");
        if (typeof(params.onComplete) == "function") {
            params.onComplete();
        }
    }
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -













    // Utility functions
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    function setDefinitionValues(definitionsIndex) {
        // log("AFTC.Animate.setDefinitionValues(definitionsIndex:"+definitionsIndex+")");
        var svo = params.stack[params.active.stackIndex];
        var dvo = svo.definitions[definitionsIndex];


        // Process startValue
        var startValue = getComputedStyle(params.element)[dvo.style];
        if (isRGB(startValue)) {
            var rgba = getRGBAArray(startValue);
            dvo.start.r = rgba[0];
            dvo.start.g = rgba[1];
            dvo.start.b = rgba[2];
            dvo.start.a = rgba[3];
            dvo.start.rgba = true;
            dvo.start.suffix = getSuffix(startValue);
        } else {
            dvo.start.v = parseFloat(startValue);
            dvo.start.rgba = false;
            dvo.start.suffix = getSuffix(startValue);
        }

        // Calculate ranges, times and steps
        if (svo.type == "anim") {
            if (dvo.start.rgba && dvo.end.rgba) {
                // dvo.range.r = dvo.end.r > dvo.start.r ? dvo.end.r - dvo.start.r : dvo.start.r - dvo.end.r;
                // dvo.range.g = dvo.end.g > dvo.start.g ? dvo.end.g - dvo.start.g : dvo.start.g - dvo.end.g;
                // dvo.range.b = dvo.end.b > dvo.start.b ? dvo.end.b - dvo.start.b : dvo.start.b - dvo.end.b;
                // dvo.range.a = dvo.end.a > dvo.start.a ? dvo.end.a - dvo.start.a : dvo.start.a - dvo.end.a;

                dvo.range.r = dvo.end.r - dvo.start.r;
                dvo.range.g = dvo.end.g - dvo.start.g;
                dvo.range.b = dvo.end.b - dvo.start.b;
                dvo.range.a = dvo.end.a - dvo.start.a;

                dvo.step.r = (dvo.range.r / dvo.time.duration);
                dvo.step.g = (dvo.range.g / dvo.time.duration);
                dvo.step.b = (dvo.range.b / dvo.time.duration);
                dvo.step.a = (dvo.range.a / dvo.time.duration);
            } else {
                //dvo.range.v = dvo.end.v > dvo.start.v ? dvo.end.v - dvo.start.v : dvo.start.v - dvo.end.v;
                dvo.range.v = dvo.end.v - dvo.start.v;
                dvo.step.v = (dvo.range.v / dvo.time.duration);
            }

            dvo.time.start = new Date().getTime() + 0;
            dvo.time.end = dvo.time.start + dvo.time.duration;

            // log(dvo.start);
            // log(dvo.end);
            // log(dvo.range);

            // Check start and end are valid
            if (dvo.start.rgba !== dvo.end.rgba && dvo.start.suffix !== dvo.end.suffix && set != "set") {
                params.error.flag = true;
                params.error.msg = "AFTC.js > AFTC.Animate(): Error - Unable to process set or animate for style [" + dvo.style + "] due to start and end value datatypes not being the same!\n";
                params.error.msg += "startValueIsRGB:[" + dvo.start.rgba + "]  endValueIsRGB:[" + dvo.end.rgba + "]  ";
                params.error.msg += "startSuffix:[" + dvo.start.suffix + "]  endSuffix:[" + dvo.end.suffix + "]";
                console.error(params.error.msg);
                dvo.valid = false;
                return;
            }
        }
    }


    function getRGBAArray(input) {
        var input = String(input).toLowerCase();
        input = input.replace(" ", "");
        input = input.replace("rgba", "");
        input = input.replace("rgb", "");
        input = input.replace("(", "");
        input = input.replace(")", "");
        parts = input.split(",");
        for (var i = 0; i < parts.length; i++) {
            parts[i] = parseFloat(parts[i]);
        }
        if (parts.length == 3) {
            parts.push(1);
        }
        return parts;
    }

    function setStyleDuration(duration) {
        // log("setStyleDuration()");
        // params.element.style.transition = "all " + duration + "s";
        params.element.style.transitionDuration = duration + "s";
        params.element.style.webkitTransitionDuration = duration + "s";
        params.element.style.mozTransitionDuration = duration + "s";
        params.element.style.oTransitionDuration = duration + "s";
        params.element.style.msTransitionDuration = duration + "s";
    }

    function removeStyleDuration() {
        // log("removeStyleDuration()");
        // params.element.style.removeProperty("transition");
        setStyleDuration(0);
        params.element.style.removeProperty("transitionDuration");
        params.element.style.removeProperty("webkitTransitionDuration");
        params.element.style.removeProperty("mozTransitionDuration");
        params.element.style.removeProperty("oTransitionDuration");
        params.element.style.removeProperty("msTransitionDuration");
    }

    function validateDuration(duration) {
        if (typeof (duration) == "undefined") {
            return duration = 0.01;
        } else {
            return parseFloat(duration);
        }
    }

    function isRGB(input) {
        input = String(input).toLowerCase();
        if (input.indexOf("rgb") > -1) {
            return true;
        } else {
            return false;
        }
    }

    function getSuffix(input) {
        input = String(input).toLowerCase();
        if (input.indexOf("px") > -1) {
            return "px";
        } else if (input.indexOf("%") > -1) {
            return "%";
        } else if (input.indexOf("rem") > -1) {
            return "rem";
        } else if (input.indexOf("em") > -1) {
            return "em";
        } else if (input.indexOf("rem") > -1) {
            return "rem";
        } else {
            return "";
        }
    }
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -





    // Public functions
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    this.animate = function (style, value, duration) {
        addStackItem("anim", style, value, duration);
        return this;
    };
    this.anim = function (style, value, duration) {
        addStackItem("anim", style, value, duration);
        return this;
    };
    this.setProp = function (style, value) {
        addStackItem("set", style, value, 0);
        return this;
    };
    this.set = function (style, value) {
        addStackItem("set", style, value, 0);
        return this;
    };
    this.delay = function (duration) {
        addStackItem("delay", "", 0, duration);
        return this;
    };
    this.wait = function (duration) {
        addStackItem("delay", "", 0, duration);
        return this;
    };
    this.pause = function (duration) {
        addStackItem("delay", "", 0, duration);
        return this;
    };
    this.repeat = function (count) {
        start();
    };
    this.start = function () {
        start();
    };
    this.stop = function () {
        stop();
    };
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -




    // Simulate constructor auto execution
    init();
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -





/**
 * @function: fadeIn(elementId, duration)
 * @desc: fades in an element over a specified duration
 * @param string elementId: the id of the html element you wish to fade
 * @param number duration: how long you want the fade to run over in seconds
 */
window.fadeIn = function (elementId, duration) {
    var cleanUp = function(){
        animation = null;
        delete(animation);
    }
    var animation = new AFTC.Animate(elementId,cleanUp);
    animation.anim(["opacity"],[1],[duration]);
    animation.start();
}


/**
 * @function: fadeOut(elementId, duration)
 * @desc: fades out an element over a specified duration
 * @param string elementId: the id of the html element you wish to fade
 * @param number duration: how long you want the fade to run over in seconds
 */
window.fadeOut = function (elementId, duration) {
    var cleanUp = function(){
        animation = null;
        delete(animation);
    }
    var animation = new AFTC.Animate(elementId,cleanUp);
    animation.anim(["opacity"],[0],[duration]);
    animation.start();
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -







/**
 * @function: scrollToElement(elementId, arg_duration, offset)
 * @desc: Scroll to element on page
 * @param string elementId: ID of element you wish to scroll to
 * @param string arg_duration: Duration in seconds
 * @param number offset: How much to offset scroll by
 */
window.scrollToElement = function (elementId, arg_duration, offset) {
    var ele = getElementById(elementId);
    var targetY = getElementOffsetTop(elementId);
    if (typeof (offset) != "undefined") {
        targetY += parseFloat(offset);
    }

    // If you dont want scroll just use this next line and return
    //window.scroll(0, targetY);

    var startY = document.documentElement.scrollTop,
        currentY = document.documentElement.scrollTop,
        distance = Math.abs(targetY - startY),
        duration = arg_duration * 1000,
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
/*
 * Author: Darcey.Lloyd@gmail.com
 */

/**
 * @function: AFTC.Canvas({id||canvas})
 * @desc:
 * ````

 * ````
 * @param string canvasId: Canvas element id to work with
 * @param number opacity: opacity of noise
 */

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
AFTC.Canvas = function () {
    if (!(this instanceof arguments.callee)) {
        throw new Error("\nAFTC.Canvas: USAGE ERROR: Constructor called as a function.\nPlease use new AFTC.DOM.HideHsow({})");
    }

    var me = this;
    var args = {
        id: false, canvas: false
    }
    var params = {
        canvas: false,
        context: false,
    };

    new AFTC.ArgsToObject(arguments[0], args);

    function init() {
        if (args.id && !args.canvas) {
            params.canvas = getElementById(args.id);
        } else if (!args.id && args.canvas) {
            params.canvas = args.canvas;
        } else {
            params.canvas = document.createElement("canvas");
        }
        params.context = params.canvas.getContext('2d');
    }

    this.drawCircle = function (args) {
        var fnArgs = {
            x: 0, y: 0, radius: 20,
            fillColor: "#FFCC00",
            borderWidth: 2,
            borderColor: "#000000"
        };
        AFTC.ArgsToObject(args, fnArgs);
        params.context.beginPath();
        params.context.arc(fnArgs.x, fnArgs.y, fnArgs.radius, 0, 2 * Math.PI, false);
        params.context.fillStyle = fnArgs.fillColor;
        params.context.fill();
        params.context.lineWidth = fnArgs.borderWidth;
        params.context.strokeStyle = fnArgs.borderColor;
        params.context.stroke();
    }

    this.drawLine = function (args) {
        var fnArgs = {
            fromX: 0, fromY: 0,
            toX: 100, toY: 1,
            color: "#FFCC00",
            lineWidth: 1
        };
        AFTC.ArgsToObject(args, fnArgs);

        params.context.beginPath();
        params.context.moveTo(fnArgs.fromX, fnArgs.fromY);
        params.context.lineTo(fnArgs.toX, fnArgs.toY);
        params.context.lineWidth = fnArgs.lineWidth;
        params.context.strokeStyle = fnArgs.color;
        params.context.stroke();
    }

    this.attachImage = function () {
        var fnArgs = {
            src: false, id: false, img: false,
            x: false, y: false, w: -1, h: -1,
            onComplete: false
        };
        var fnParams = {
            img: false,
            canvas: params.canvas,
            context: params.context
        };

        AFTC.ArgsToObject(arguments[0], fnArgs);

        if (fnArgs.src && !fnArgs.id && !fnArgs.img) {
            fnParams.img = new Image();
            fnParams.img.onload = function () {
                if (fnArgs.w != -1 && fnArgs.h != -1) {
                    fnParams.context.drawImage(this, fnArgs.x, fnArgs.y, fnArgs.w, fnArgs.h);
                } else {
                    fnParams.context.drawImage(this, fnArgs.x, fnArgs.y);
                }
            }
            fnParams.img.src = fnArgs.src;
            if (fnArgs.onComplete) { fnArgs.onComplete(); }
        } else if (!fnArgs.src && fnArgs.id && !fnArgs.img) {
            fnArgs.img = getElementById(fnArgs.id);
            if (fnArgs.w != -1 && fnArgs.h != -1) {
                fnParams.context.drawImage(fnArgs.img, fnArgs.x, fnArgs.y, fnArgs.w, fnArgs.h);
            } else {
                fnParams.context.drawImage(fnArgs.img, fnArgs.x, fnArgs.y);
            }
            if (fnArgs.onComplete) { fnArgs.onComplete(); }
        } else if (!fnArgs.src && !fnArgs.id && fnArgs.img) {
            if (fnArgs.w != -1 && fnArgs.h != -1) {
                fnParams.context.drawImage(fnArgs.img, fnArgs.x, fnArgs.y, fnArgs.w, fnArgs.h);
            } else {
                fnParams.context.drawImage(fnArgs.img, fnArgs.x, fnArgs.y);
            }
            if (fnArgs.onComplete) { fnArgs.onComplete(); }
        } else {
            console.error("AFTC.Canvas().attachImage(): Error please set the correct arguments...");
        }
    }


    this.attachText = function (args) {
        var fnArgs = {
            text: "undefined", size: 14, font: "arial",
            color: false, stroke: false, strokeSize: 1,
            x: 0, y: 0
        };
        var fnParams = {
            canvas: params.canvas,
            context: params.context
        };

        AFTC.ArgsToObject(args, fnArgs);

        fnArgs.size = parseInt(fnArgs.size);
        fnParams.context.font = fnArgs.size + "px " + fnArgs.font;
        fnParams.context.lineWidth = fnArgs.strokeSize;

        if (fnArgs.color) {
            fnParams.context.fillStyle = fnArgs.color;
            fnParams.context.fillText(fnArgs.text, fnArgs.x, fnArgs.y);
        }

        if (fnArgs.stroke) {
            fnParams.context.strokeStyle = fnArgs.stroke;
            fnParams.context.strokeText(fnArgs.text, fnArgs.x, fnArgs.y);
        }
    }

    this.getCanvas = function () { return params.canvas; }
    this.getContext = function () { return params.context; }
    this.getWidth = function () { return params.canvas.width; }
    this.getHeight = function () { return params.canvas.height; }
    this.setWidth = function (w) { params.canvas.width = w; }
    this.setHeight = function (h) { params.canvas.height = h; }
    this.setSize = function (w, h) { params.canvas.width = w; params.canvas.height = h; }
    this.getParams = function () { return params; }
    this.clear = function () { params.context.clearRect(0, 0, params.canvas.width, params.canvas.height); }

    init();
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


/*
 * Author: Darcey.Lloyd@gmail.com
 */

/**
 * @function: getHSLColor(xxx)
 * @desc: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
 * @param string xxxx: xxxxxxxxxxxxxxxxxxxx
 */
window.getHSLColor = function (value) {
    //value from 0 to 1
    var hue = ((1 - value) * 120).toString(10);
    return ["hsl(", hue, ",100%,50%)"].join("");
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


/**
 * @function: rgb2Hex(r,g,b)
 * @desc: rgb to hex
 * @param number r: red
 * @param number g: green
 * @param number b: blue
 * @return string: hex color
 */
window.rgb2Hex = function (r, g, b) {
    return ((r << 16) | (g << 8) | b).toString(16);
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

/**
 * @function: rgbToHex(r,g,b)
 * @desc: rgb to hex
 * @param number r: red
 * @param number g: green
 * @param number b: blue
 * @return string: hex color
 */
window.rgbToHex = function (r, g, b) {
    function getHex(c) {
        var hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    }
    var hex = "#" + getHex(r) + getHex(g) + getHex(b);
    hex = hex.toUpperCase();
    return hex;
}



/**
 * @function: hexToRgb(hex)
 * @desc: hexToRgb
 * @param string hex: hex color
 * @return string: rgb color
 */
window.hexToRgb = function (hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}
window.hex2Rgb = function (hex) { return window.hexToRgb(hex); }
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -






AFTC.Color = function () {
    var me = this;
    var args = {
        r: false, g: false, b: false, a: false,
        hex: false
    };
    var params = {
        random: true,
        r: false,
        g: false,
        b: false,
        a: false,
    };

    if (arguments[0] && typeof (arguments[0]) == "object") {
        new AFTC.ArgsToObject(arguments[0], args);
        params.random = false;
    }

    function init() {
        if (params.random) {
            me.randomizeColor();
        } else {
            if (args.hex) {
                // log("HEX");
                params.hex = args.hex;
                args.hex = args.hex.replace("#", "");
                var HexBits = args.hex.match(/.{1,2}/g)
                params.r = hexToDec(HexBits[0]);
                params.g = hexToDec(HexBits[1]);
                params.b = hexToDec(HexBits[2]);
                params.a = 1;
            } else if (!args.hex && !args.a) {
                // log("RGB");
                !args.r ? params.r = 0 : params.r = args.r;
                !args.g ? params.g = 0 : params.g = args.g;
                !args.b ? params.b = 0 : params.b = args.b;
                params.a = 1;
            } else if (!args.hex && args.a) {
                // log("RGBA");
                !args.r ? params.r = 0 : params.r = args.r;
                !args.g ? params.g = 0 : params.g = args.g;
                !args.b ? params.b = 0 : params.b = args.b;
                !args.a ? params.a = 0 : params.a = args.a;
            } else {
                console.log("AFTC.Color(): Invalid color or arguments supplied! Use {r:0,g:0,b:0} or {r:0,g:0,b:0,a:1} or {hex:'#FFFFFF'}");
                me.randomizeColor();
                params.random = true;
            }
        }
        // log(args);
        // log(params);
    }

    function hexToDec(v) {
        return parseInt(v, 16);
    }

    function decToHex(v) {
        var hex = v.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    }

    this.randomizeColor = function () {
        params.r = Math.round(Math.random() * 255);
        params.g = Math.round(Math.random() * 255);
        params.b = Math.round(Math.random() * 255);
        params.a = 1;
    }

    this.getRGBSstring = function () {
        var c = "RGB(" + params.r + "," + params.g + "," + params.b + ")";
        return c;
    }
    this.getRGBASstring = function () {
        var c = "RGBA(" + params.r + "," + params.g + "," + params.b + "," + params.a + ")";
        return c;
    }
    this.getHexString = function () {
        var c = "#" + decToHex(params.r) + decToHex(params.g) + decToHex(params.b);
        c = c.toUpperCase();
        return c;
    }
    this.getHex = function () { return this.getHexString(); }
    this.hex = function () { return this.getHex(); }
    this.getRGB = function () { return this.getRGBSstring(); }
    this.rgb = function () { return this.getRGB(); }
    this.getRGBA = function () { return this.getRGBASstring(); }
    this.rgba = function () { return this.getRGBA(); }

    init();
}





/**
 * @function: getRandomColor()
 * @desc: returns a random RGB object o.r, o.g, o.g
 */
window.getRandomColor = function () {
    var c = new AFTC.Color();
    return c;
}
window.getRandomHexColor = function () {
    var c = new AFTC.Color();
    return c.getHex();
}
window.getRandomRGBString = function () {
    var c = new AFTC.Color();
    return c.getRGB();
}
window.getRandomRGBAString = function () {
    var c = new AFTC.Color();
    return c.getRGBA();
}
window.getRandomRGBColor = function () {
    var c = new AFTC.Color();
    return c.getRGB();
}

/*
 * Author: Darcey.Lloyd@gmail.com
 */

var AFTC = AFTC || {}



AFTC.Visibility = function () {
    // if (!(this instanceof arguments.callee)) {
    //     throw new Error("\nAFTC.Visibility: USAGE ERROR: Constructor called as a function.\nPlease use new AFTC.DOM.HideHsow({})");
    // }
    // if (!(this instanceof AFTC.Visibility)) {
    //     throw new Error("AFTC.Visibility needs to be called with the new keyword");
    // }

    var me = this;
    var vars = {
        element: false,
        id: false,
        delay: false,
        duration: false,
        display: "block",
        animateHeight: false,
        onStartAddClassList: false,
        onStartRemoveClassList: false,
        onCompleteAddClassList: false,
        onCompleteRemoveClassList: false,
        onComplete: false
    }

    new AFTC.ArgsToObject(arguments[0], vars);

    function getElement() {
        if (!vars.element && vars.id) {
            vars.element = getElementById(vars.id);
        }
    }

    function removeClassList(classList) {
        if (isArray(classList)) {
            for (var key in classList) {
                var className = classList[key];
                try {
                    vars.element.classList.remove(className);
                } catch (e){ }
            }
        } else if (typeof (classList) == "string") {
            try {
                vars.element.classList.remove(classList);
            } catch (e){ }
        }
    }

    function addClassList(classList) {
        if (isArray(classList)) {
            for (var key in classList) {
                var className = classList[key];
                try {
                    vars.element.classList.add(className);
                } catch (e){ }
            }
        } else if (typeof (classList) == "string") {
            try {
                vars.element.classList.add(classList);
            } catch (e){ }
        }
    }

    function processOnStartClassLists() {
        if (vars.onStartAddClassList) {
            addClassList(vars.onStartAddClassList);
        }
        if (vars.onStartRemoveClassList) {
            removeClassList(vars.onStartRemoveClassList);
        }
    }

    function processOnCompleteClassLists() {
        if (vars.onCompleteAddClassList) {
            addClassList(vars.onCompleteAddClassList);
        }
        if (vars.onCompleteRemoveClassList) {
            removeClassList(vars.onCompleteRemoveClassList);
        }
    }

    function _hide() {
        getElement();
        if (!vars.element || !isElement(vars.element)) { return; }

        processOnStartClassLists();

        function setOnCompleteState() {
            vars.element.style.transitionDuration = "0s";
            vars.element.style.display = "none";
            processOnCompleteClassLists();
            if (vars.onComplete) {
                vars.onComplete();
            }
        }

        if (vars.duration) {
            vars.element.style.transitionDuration = vars.duration + "s";
            vars.element.style.opacity = 0;
            vars.element.style.overflow = "hidden";
            if (vars.animateHeight){
                vars.element.style.height = getComputedStyle(vars.element).height;
                setTimeout(function () {
                    vars.element.style.height = "0px";
                    vars.element.style.marginTop = "0px";
                    vars.element.style.marginBottom = "0px";
                }, 25);
            }
            vars.element.addEventListener("transitionend", function (event) {
                setOnCompleteState();
            }, false);
        } else {
            vars.element.style.display = "none";
            setOnCompleteState();
        }
    }


    function hide() {
        if (vars.delay) {
            setTimeout(function () {
                _hide();
            }, (vars.delay*1000));
        } else {
            _hide();
        }
    }

    

    function _show() {
        getElement();
        if (!vars.element || !isElement(vars.element)) { return; }

        processOnStartClassLists();

        function setOnCompleteState() {
            vars.element.style.transitionDuration = "0s";
            vars.element.style.opacity = 1;
            vars.element.style.display = vars.display;
            processOnCompleteClassLists();
            if (vars.onComplete) {
                vars.onComplete();
            }
        }

        if (vars.duration) {
            vars.element.style.opacity = 0;
            vars.element.style.transitionDuration = vars.duration + "s";
            vars.element.style.display = vars.display;
            setTimeout(function () {
                vars.element.style.opacity = 1;
            }, 25);

            vars.element.addEventListener("transitionend", function (event) {
                setOnCompleteState();
            }, false);
        } else {
            setOnCompleteState();
        }
    }

    return {
        hide: function () {
            hide();
        },
        show: function () {
            show();
        }
    }

    function show() {
        if (vars.delay) {
            setTimeout(function () {
                _show();
            }, (vars.delay*1000));
        } else {
            _show();
        }
    }
}

window.show = function () {
    if (typeof(arguments[0]) == "string"){
        var args = { id :arguments[0] }
        AFTC.Visibility(args).show();
    } else if (isElement(arguments[0])){
        var args = { element :arguments[0] }
        AFTC.Visibility(args).show();
    } else {
        AFTC.Visibility(arguments[0]).show();
    }
}
window.fadeIn = function(){ window.show(arguments[0]); }

window.hide = function () {
    if (typeof(arguments[0]) == "string"){
        var args = { id :arguments[0] }
        AFTC.Visibility(args).hide();
    } else if (isElement(arguments[0])){
        var args = { element :arguments[0] }
        AFTC.Visibility(args).hide();
    } else {
        AFTC.Visibility(arguments[0]).hide();
    }
}
window.fadeOut = function(){ window.hide(arguments[0]); }



// AFTC init
var AFTC = AFTC || {}

/* Some reading / ref material
https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState
https://developer.mozilla.org/es/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest
https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest
*/


/**
 * @type: class
 * @name: AFTC.XHR()
 * @version: 1.0.0
 * @requires: base.js
 * @function: AFTC.XHR(args)
 * @desc: Quick and easy xhr/ajax
 * ````
	var data = "mode=json2";
	xhr1 = AFTC.XHR({
		url: "./request.php",
		method: "post",
		data: data,
		dataType: "form",
		onComplete: function (response) {
			logTo("debug", response);
			response = JSON.parse(response);
			// Iterate
			// for (var index in response) {
			//     var jObject = response[index];
			//     logTo("debug", jObject);
			//     for (var key in jObject) {
			//         log(key + " = " + response[index][key]);
			//     }
			// }
		}
	});
 * ````
 * @param string url: url or file you wish to load
 * @param string method: post, get, put, delete etc
 * @param * data: array, object, formdata, string or json data you wish to send to the url
 * @param string dataType: data type of data object array, object, formdata, form and json
 * @param function onComplete: on a successfull xhr request this is the function that will be called
 * @return object data;
 * @link: see usage example in tests/xhr/xhr.htm
 */
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
AFTC.XHR = function () {
	var args = {
		url: false,
		method: false,
		data: false,
		dataType: false,
		responseType: false,
		onComplete: false,
		onError: false,
		onProgress: false,
		onCancel: false
	};

	// Process arguments
	if (arguments[0] && typeof (arguments[0]) == "object") {
		for (var key in arguments[0]) {
			if (args.hasOwnProperty(key)) {
				args[key] = arguments[0][key];
			}
		}
	}

	var params = {
		url: false,
		requestHeader: false,
		xhr: false,
		readyState: false,
		status: false,
		responseType: false,
		response: null,
		percentComplete: 0,
		isImage: false,
		imageType: ""
	};
	// - - - - - - - - - - - - - - - - - - -




	// - - - - - - - - - - - - - - - - - - -
	function init() {
		if (window.XMLHttpRequest) {
			// code for IE7+, Firefox, Chrome, Opera, Safari
			params.xhr = new XMLHttpRequest();
		} else {
			// code for IE6, IE5
			params.xhr = new ActiveXObject("Microsoft.XMLHTTP");
		}

		params.xhr.addEventListener("progress", updateProgress);
		params.xhr.addEventListener("load", transferComplete);
		params.xhr.addEventListener("error", transferFailed);
		params.xhr.addEventListener("abort", transferCanceled);


		// format and check args
		if (!args.method) {
			args.method = "GET";
		} else {
			args.method = String(args.method).toUpperCase();
		}

		if (!args.dataType) {
			args.dataType = "form";
		} else {
			args.dataType = String(args.dataType).toLowerCase();
		}

		if (args.method == "GET" && args.dataType != "form") {
			msg = "AFTC.XHR: ERROR: GET only supports the 'form' data type (key value pairs eg a=1&b=2)";
			console.error(msg);
			if (args.onError) {
				args.onError(msg);
			}
			return false;
		} else if (args.dataType != "form" && args.dataType != "formdata" && args.dataType != "json" && args.dataType != "array" && args.dataType != "object") {
			msg = "AFTC.XHR: ERROR: The dataType option only supports 'form', 'formdata', 'json', 'array' or 'object'";
			console.error(msg);
			if (args.onError) {
				args.onError(msg);
			}
			return false;
		}


		if (!args.url) {
			msg = "AFTC.XHR: ERROR: Please specify a URL!";
			console.error(msg);
			if (args.onError) {
				args.onError(msg);
			}
			return false;
		}
		// - - - -

		// Set response headers
		if (args.responseType) {
			args.responseType = String(args.responseType).toLowerCase();
			if (args.responseType.indexOf("json") != -1) {
				params.xhr.responseType = 'json';
			}
		}
		// - - - -

		// Open, setRequestHeader, Send
		if (!args.data) {
			params.xhr.open(args.method, args.url, true);
			params.xhr.send();
		} else {
			processData();

			if (args.dataType == "form") {
				params.requestHeader = "application/x-www-form-urlencoded; charset=utf-8";
			} else if (args.dataType == "formdata") {
				//params.requestHeader = "multipart/form-data";
			} else if (args.dataType == "json") {
				params.requestHeader = "application/json; charset=utf-8";
			} else {

			}


			params.xhr.open(args.method, args.url, true);
			if (params.requestHeader) {
				params.xhr.setRequestHeader("Content-Type", params.requestHeader);
			}


			switch (args.method) {
				case "GET":
					params.xhr.send();
					break;
				default:
					params.xhr.send(args.data);
					break;
			}

			// log("getResponseHeader = " + params.xhr.getResponseHeader("Content-Type"));

		}
		// - - - -

	}
	// - - - - - - - - - - - - - - - - - - -



	// - - - - - - - - - - - - - - - - - - -
	function responseError(msg, e) {
		console.error(msg);
		if (args.onError) {
			if (!e) {
				args.onError(params.xhr);
			} else {
				args.onError(e);
			}
		}
		return false;
	}
	// - - - - - - - - - - - - - - - - - - -


	// - - - - - - - - - - - - - - - - - - -
	function updateProgress(e) {
		params.percentComplete = 0;
		if (e.lengthComputable) {
			params.percentComplete = (100 / e.total) * e.loaded;
			params.percentComplete = parseFloat(params.percentComplete.toFixed(2));
		} else {
			params.percentComplete = 0;
		}
		if (args.onProgress) {
			args.onProgress(params.percentComplete);
		} else {
			return params.percentComplete;
		}
	}
	// - - - - - - - - - - - - - - - - - - -



	// - - - - - - - - - - - - - - - - - - -
	function transferComplete(e) {
		// log("AFTC.XHR.transferComplete()");
		if (params.xhr.readyState == 4) {
			if (params.xhr.status == "404") {
				responseError("AFTC.XHR: ERROR: Please check your URL [" + args.url + "] NOT FOUND.", params.xhr);
			} else {
				if (args.onComplete) {
					args.onComplete(params.xhr.responseText);
				}
			}
		} else {
			responseError("AFTC.XHR: ERROR: Please review event details!", e);
		}
	}
	// - - - - - - - - - - - - - - - - - - -
	// - - - - - - - - - - - - - - - - - - -
	function transferFailed(e) {
		log("AFTC.XHR.transferFailed()");
		if (args.onError) {
			args.onError(e);
		}
	}
	// - - - - - - - - - - - - - - - - - - -
	// - - - - - - - - - - - - - - - - - - -
	function transferCanceled(e) {
		log("AFTC.XHR.transferCanceled()");
		if (args.onCancel) {
			args.onCancel(e);
		}
	}
	// - - - - - - - - - - - - - - - - - - -




	// - - - - - - - - - - - - - - - - - - -
	function cleanUpEventListeners() {
		try {
			params.xhr.removeEventListener("progress", updateProgress);
		} catch (e) { }
		try {
			params.xhr.removeEventListener("load", transferComplete);
		} catch (e) { }
		try {
			params.xhr.removeEventListener("error", transferFailed);
		} catch (e) { }
		try {
			params.xhr.removeEventListener("abort", transferCanceled);
		} catch (e) { }
	}
	// - - - - - - - - - - - - - - - - - - -




	// - - - - - - - - - - - - - - - - - - -
	function processData() {
		if (args.method == "GET" && args.data != false) {
			args.url = args.url + "?" + args.data;
			return true;
		}

		if (args.method == "POST") {
			if (args.data.append) {
				args.dataType = "formdata";
			} else {
				if (isArray(args.data) || typeof (args.data) == "object") {
					// Array || Object
					var data = "";
					var formData = new FormData();
					for (var key in args.data) {
						log(key + " = " + args.data[key]);
						formData.append(key, args.data[key]);
						data += "&" + key + "=" + args.data[key];
					}
					args.dataType = "form";
					args.data = data;
					return true;
				}
			}

		}


		// default
		return true;
	}
	// - - - - - - - - - - - - - - - - - - -






	// Constructor simulation
	init();
	// - - - - - - - - - - - - - - - - - - -


	// utils
	function isImage() {
		var sfx = ["jpg","jpeg","png","gif"];
		for (var i=0; i < sfx.length; i++){
			if (args.url.indexOf(sfx[i]) > -1){
				params.imageType = sfx[i];
				params.isImage = true;
				break;
			}
		}
	}
	// - - - - - - - - - - - - - - - - - - -


	// Return
	return {
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
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -




