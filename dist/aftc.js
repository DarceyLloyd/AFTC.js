// AFTC.JS Version 1.7.7
// Author: Darcey@aftc.io

// AFTC Core
var AFTC = AFTC || {}


/**
 * @function: argsToObject(fArgs, obj, strict)
 * @desc: Quick and easy args to object
 * @param args object: arguments (from the function structure, typically code will always be 'arguments'
 * @param obj object: object to parse into
 * @param strict boolean: console.warn any args that have been supplied that don't exist in args
 * @return: null
 * @alias: argsTo
 * @link: https://codepen.io/AllForTheCode/pen/PaqbKN
 */
argsToObject = function (fArgs, obj, strict) {
    if (fArgs[0] && typeof (fArgs[0]) == "object") {
        var args = fArgs[0];

        if (strict == undefined) { strict = true; }
        if (args && typeof (args) == "object") {
            for (var key in args) {
                if (strict) {
                    if (obj.hasOwnProperty(key)) {
                        obj[key] = args[key];
                    } else {
                        console.warn("argsToObject(): Argument [" + key + "] is not supported.");
                    }
                } else {
                    obj[key] = args[key];
                }
            }
        }

    }
};
argsTo = function (args, obj, strict) { argsToObject(args, obj, strict); }




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



/**
 * @function: getElementById(id)
 * @desc: Gets an element from the DOM by ID. NOTE: AFTC.JS DOM queries are cached and faster than the normal document. version!
 * @param id string: The ID of the DOM element you wish to find
 * @return: html element
 * @alias: getId
 * @alias: byId
 * @link: https://codepen.io/AllForTheCode/pen/PedyNO
 */
window.getElementById = function (id) {
    return AFTC.GetElement.by("id", id);
}
window.getId = function (id) { return window.getElementById(id); }
window.byId = function (id) { return window.getElementById(id); }

/**
 * @function: querySelector(query)
 * @desc: Gets an element from the DOM via DOM Query. NOTE: AFTC.JS DOM queries are cached and faster than the normal document. version!
 * @param query string: The DOM Query / css element path you wish to find
 * @return: html element
 * @alias: query
 * @link: https://codepen.io/AllForTheCode/pen/MGqPrN
 */
window.querySelector = function (query) {
    return AFTC.GetElement.by("query", query);
}
window.query = function (query) { return window.querySelector(query); }


/**
 * @function: getElementsByName(name)
 * @desc: Gets an array of element from the DOM that have a specific name. NOTE: AFTC.JS DOM queries are cached and faster than the normal document. version!
 * @param name string: The name of the DOM element you wish to find
 * @return: array of html elements
 * @link: https://codepen.io/AllForTheCode/pen/gzdBdz
 */
window.getElementsByName = function (name) { return AFTC.GetElement.by("name", name); }
/**
 * @function: getElementByName(name)
 * @desc: Gets the first element from the DOM that has a specific name. NOTE: AFTC.JS DOM queries are cached and faster than the normal document. version!
 * @param name string: The name of the DOM element you wish to find
 * @return: html elements
 * @link: https://codepen.io/AllForTheCode/pen/gzdBdz
 */
window.getElementByName = function (name) { return AFTC.GetElement.by("name", name)[0]; }


/**
 * @function: getElementsByClassName(className)
 * @desc: Gets an array of html elements from the DOM that have a specific class name. NOTE: AFTC.JS DOM queries are cached and faster than the normal document. version!
 * @param className string: The class the DOM element(s) use you wish to find
 * @return: array of html elements
 * @link: https://codepen.io/AllForTheCode/pen/odPQxE
 */
window.getElementsByClassName = function (className) { return AFTC.GetElement.by("class", className); }
/**
 * @function: getElementByClassName(className)
 * @desc: Gets the first html element from the DOM that has a specific class name. NOTE: AFTC.JS DOM queries are cached and faster than the normal document. version!
 * @param className string: The class name the DOM element uses you wish to find
 * @return: html elements
 * @link: https://codepen.io/AllForTheCode/pen/odPQxE
 */
window.getElementByClassName = function (className) { return AFTC.GetElement.by("class", className)[0]; }


/**
 * @function: getElementsByTagName(tagName)
 * @desc: Gets an array of html elements from the DOM that has a specific tag name. NOTE: AFTC.JS DOM queries are cached and faster than the normal document. version!
 * @param tagName string: the tag name you wish to find
 * @return: array of html elements
 */
window.getElementsByTagName = function (tagName) { return AFTC.GetElement.by("tag", tagName); }
/**
 * @function: getElementByTagName(tagName)
 * @desc: Gets the first html element from the DOM that has a specific tag name. NOTE: AFTC.JS DOM queries are cached and faster than the normal document. version!
 * @param tagName string: the tag name you wish to find
 * @return:  html element
 */
window.getElementByTagName = function (tagName) { return AFTC.GetElement.by("tag", tagName)[0]; }




AFTC.Log = {
    element: false,
    out: function (arg) {
        if (console) {

            if (typeof (arg) == "undefined") {
                console.warn("log(arg) ERROR: Your log variable (arg) is \"undefined\"!");
            } else {
                console.log(arg);
            }
            if (AFTC.Log.element != false) {
                if (isElement(arg)) {
                    // AFTC.Log.element.innerHTML += ("[HTMLElement]<br>");
                    AFTC.Log.element.innerHTML += (arg + "<br>");
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
};


/**
 * @function: log(*)
 * @desc: Shortcut for console.log with some formatting capabilities, you can also log to html elements see logTo()
 * ```
 * log("Hello World");
 * log("a = " + a);
 * log("myVar1 = " + myVar1 + "  myVar2 = " + myVar2);
 * log(MyObject);
 * log(MyClass);
 * ```
 * @param * input: what you want to console.log
 * @alias: log
 * @alias: trace
 * @link: https://codepen.io/AllForTheCode/pen/pVOOZV
 * @link: https://codepen.io/AllForTheCode/pen/NMLLJX
 */
window.log = function (arg) { AFTC.Log.out(arg); }
window.trace = function (arg) { AFTC.Log.out(arg); }



/**
 * @function: logTo(ele,msg,append)
 * @desc: Enabled AFTC.Log and log to output to a html element of choice also, some things like arrays will be formatted
 * @param ele element: The html element you wish to log to
 * @param msg string: The string to inject into the html element
 * @param append boolean: Whether to append or to overwrite all content (good for clean start)
 * @link: https://codepen.io/AllForTheCode/pen/NMLLJX
 */
window.logTo = function logTo(elementOrId,msg,append){

    if (!append){
        append = true;
    }

    function isElement(o) {
        return (
            typeof HTMLElement === "object" ? o instanceof HTMLElement : //DOM2
                o && typeof o === "object" && o !== null && o.nodeType === 1 && typeof o.nodeName === "string"
        );
    }

    let ele = false;
    if (typeof(elementOrId) == "string"){
        ele = document.getElementById(elementOrId);
    } else {
        ele = elementOrId;
    }

    if (isElement(ele)){
        if (append){
            ele.innerHTML = ele.innerHTML + msg + "<br>";
        } else {
            ele.innerHTML = msg;
        }
        
    } else {
        console.log("LogTo(): Unable to log to element or id provided!");
        return false;
    }
}




/**
 * @function: cls()
 * @desc: Clears the console if supported
 * @alias: clearLog();
 * @link: https://codepen.io/AllForTheCode/pen/pVOOZV
 * @link: https://codepen.io/AllForTheCode/pen/NMLLJX
 */
window.cls = function () {
    if (console) {
        if (console.clear) {
            console.clear();
        }
    }
    if (AFTC.Log.element) {
        AFTC.Log.element.innerHTML = "";
    }
}
window.clearLog = function () { cls(); }
/**
 * @function: openDebugWindow(html)
 * @desc: open a popup window with the html you wish to display in it
 * @param html string: the html you wish to display in the popup window
 * @return:
 * @alias: stringToWindow
 * @alias: htmlToWindow
 * @link: https://codepen.io/AllForTheCode/pen/ELGWpE
 */
window.openDebugWindow = function (html) {
    var w = window.open('debug', 'debug', 'width=1200,height=400,resizeable,scrollbars');
    w.document.title = "Debug";
    w.document.write("<style>body {width:100%;}</style>");
    w.document.write("<div style='display:block;width:98%;-ms-word-wrap:break-word ;word-wrap:break-word;border:1px solid #000000;'>" + html + "</div>");
    //w.document.write("<div style='width:100%'>" + str + "</div>");
    w.document.close();
}
window.stringToWindow = function (html) { openDebugWindow(html); }
window.htmlToWindow = function (html) { openDebugWindow(html);}

/**
 * @function: onReady(fn)
 * @desc: A replacement for using body onload and no need for jQuery's $(document).ready
 * @param fn function: inline function or pass it a function for when your page is loaded and ready to be used
 * @alias: ready
 * @link: https://codepen.io/AllForTheCode/pen/GdYxVa
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
/**
 * @function: addEvent(obj,type,fn,useCapture)
 * @desc: Shortcut for adding events with old browser compatibility
 * @param obj object: The object you wish to attach the event listener to
 * @param type string: The event type (e.type) mousedown, mouseup, click etc
 * @param fn function: The function to call when the event is triggered
 * @param useCapture boolean: Whether the event should be executed in the capturing or in the bubbling phase
 * @link: https://codepen.io/AllForTheCode/pen/VxExLg
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
 * @function: loadJS(url, onComplete, location)
 * @desc: cycles from 0 to max based on pos, will cycle back to 0 if over max
 * @param url string: Path to javascript file to load
 * @param onComplete function: The function you wish to call once the script has loaded
 * @link:
 */
var loadJS = function (src, onComplete, onProgress) {
    /*
    // NOT IE11 Friendly
    var scriptTag = document.createElement('script');
    scriptTag.src = src;

    scriptTag.onload = onComplete;
    scriptTag.onreadystatechange = onComplete;

    document.body.appendChild(scriptTag);
    */

    var me = this;
    var head = document.getElementsByTagName("head")[0] || document.body;
    var script = document.createElement("script");

    // script.src = src;

    // script.onreadystatechange = function () {
    //     if (this.readyState == 'complete' || this.readyState == 'loaded') {
    //         if (onComplete) {
    //             onComplete();
    //         }
    //     }
    // };

    // script.onload = function () {
    //     if (onComplete) {
    //         onComplete();
    //     }
    // };

    // head.appendChild(script);

    var req = new XMLHttpRequest();

    // report progress events
    req.addEventListener("progress", function(event) {
        if (event.lengthComputable) {
            var percentComplete = event.loaded / event.total;
            // console.log(percentComplete);
            if (onProgress){
                onProgress(percentComplete);
            }
        } else {
            // Unable to compute progress information since the total size is unknown
            if (onProgress){
                onProgress(false);
            }
        }
    }, false);

    // load responseText into a new script element
    req.addEventListener("load", function(e) {
        script.innerHTML = e.target.responseText;
        document.documentElement.appendChild(script);

        if (onComplete) {
            onComplete();
        }

        script.addEventListener("load", function() {
            // this runs after the new script has been executed...
        });
    }, false);

    req.open("GET", src);
    req.send();

};



/**
 * @function: arrayRemoveIndex(arr,index)
 * @desc: remove a specified index from an array
 * @param arr array: the array you wish to remove an index on
 * @param index number: the array index you wish to remove
 * @return: array
 * @link: https://codepen.io/AllForTheCode/pen/mLzyGP
 */
window.arrayRemoveIndex = function (arr, index) {
    arr.splice(index, 1);
    return arr;
}

/**
 * @function: isStringInArray(needle,haystack)
 * @desc: Check to see if a string is in an array
 * @param needle string: what you want to search for in each array index
 * @param haystack string: the array you want to search
 * @link: https://codepen.io/AllForTheCode/pen/QrZrBM
 */
window.isStringInArray = function (needle, haystack) {
    return (new RegExp('(' + haystack.join('|').replace(/\./g, '\\.') + ')$')).test(needle);
}

/**
 * @function: arrayContains(needle,haystack)
 * @desc: Check to see if your array contains something you want to find
 * @param needle string: what you want to search for in each array index
 * @param haystack string: the array you want to search
 * @alias: isInArray
 * @link: https://codepen.io/AllForTheCode/pen/VxExVw
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
 * @link: https://codepen.io/AllForTheCode/pen/ELdRYJ
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
 * @link: https://codepen.io/AllForTheCode/pen/GdYGjW
 */
window.getMaxFromArray = function (arr) {
    return Math.max.apply(Math, arr);
}
window.arrayGetMax = function (arr) { return getMaxFromArray(arr); }
window.arrayMax = function (arr) { return getMaxFromArray(arr); }




/**
 * @function: arrayGetMin(arr)
 * @desc: returns the minimum value in an array
 * @param arr array: the array you wish to find the minimum value in
 * @alias: getMinFromArray
 * @alias: arrayMin
 * @link: https://codepen.io/AllForTheCode/pen/bMmKBa
 */
window.getMinFromArray = function (arr) {
    return Math.min.apply(Math, arr);
}
window.arrayGetMin = function (arr) { return getMinFromArray(arr); }
window.arrayMin = function (arr) { return getMinFromArray(arr); }




/**
 * @function: arrayShuffle(arr)
 * @desc: shuffles an array (method 1)
 * @param arr array: the array to shuffle
 * @alias: shuffle
 * @alias: arrayShuffle
 * @link: https://codepen.io/AllForTheCode/pen/wjYjmo
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
 * @param arr array: the array to shuffle
 * @alias: shuffle2
 * @alias: arrayShuffle2
 * @link: https://codepen.io/AllForTheCode/pen/wjYjmo
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



/**
 * @function: arrayToSingleLineString(arr)
 * @desc: Converts an array to a single line string (usefull for debug)
 * @param arr array: the convert
 * @alias: arrayToString
 * @link: https://codepen.io/AllForTheCode/pen/XqoVEe
 */
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
    html = cutStringTo(html, html.length - 1);
    html += "]";
    return html;
}
window.arrayToString = function(arr){ return arrayToSingleLineString(arr); }



/**
 * @function: convertToArray(val)
 * @desc: takes an input and returns it as index[0] of an array
 * @param val *: value to make into array an array
 * @alias: valueToArray
 * @link: https://codepen.io/AllForTheCode/pen/QrzazK
 */
window.convertToArray = function(v){
    var a = [];
    a[0] = v;
    return a;
}
window.toArray = function(v){ return convertToArray(v); }
window.valueToArray = function(v){ return convertToArray(v); }
/**
 * @function: getFunctionName(fn)
 * @desc: tries to get the function name of a suppled function
 * @param fn function: the function wish to get the name of
 * @link: https://codepen.io/AllForTheCode/pen/YLBKRy
 */
function getFunctionName(fn) {
    var name = fn.toString();
    var reg = /function ([^\(]*)/;
    return reg.exec(name)[1];
};
/**
 * @function: isInString(find,source)
 * @desc: check for string in string
 * @param string find: The string to look for
 * @param string source: The string to look in
 * @link: https://codepen.io/AllForTheCode/pen/jxdONK
 */
window.isInString = function (find,source) {
    return source.indexOf(find) !== -1;
}
window.inString = function (find,source) { return isInString(find,source); }


/**
 * @function: isEven(n)
 * @desc: check if input is even
 * @param n number: variable / value you wish to test
 * @link: https://codepen.io/AllForTheCode/pen/rvPNBR
 */
window.isEven = function (n) {
    return n % 2 == 0;
}

/**
* @function: isOdd(n)
* @desc: check if input is odd
* @param n number: variable value you wish to test
* @link: https://codepen.io/AllForTheCode/pen/gzqOOW
*/
window.isOdd = function (n) {
    return Math.abs(n % 2) == 1;
}


/**
 * @function: isAlphaNumeric(input)
 * @desc: check if an input is an alpha numerical value ([a-z],[A-Z],[0-9] only)
 * @param string||number input: variable / value you wish to check
 * @link: https://codepen.io/AllForTheCode/pen/pVGooO
 */
window.isAlphaNumeric = function (input) {
    return !(/\W/.test(input));
}


/**
 * @function: isElement(o)
 * @desc: checks if your variable is an element or not
 * @param o *: variable you wish to check
 * @link: https://codepen.io/AllForTheCode/pen/RyvwPK
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
 * @param element *: the variable you wish to check
 * @link: https://codepen.io/AllForTheCode/pen/RyvwPK
 */
window.isElement2 = function (element) {
    // works on major browsers back to IE7
    return element instanceof Element;
}


/**
 * @function: isDOM(obj)
 * @desc: checks to see if your variable is a DOM object
 * @param obj object: variable to check
 * @link: https://codepen.io/AllForTheCode/pen/JvxjYo
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
 * @param input *: variable to check
 * @alias: isBool
 * @link: https://codepen.io/AllForTheCode/pen/JvxjGo
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
 * @param n *: variable to check
 * @alias: isNumber
 * @link: https://codepen.io/AllForTheCode/pen/bMzGEL
 */
window.isNumeric = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}
window.isNumber = function (n) { return isNumeric(n); }




/**
 * @function: isArray(input)
 * @desc: check if variable is an array
 * @param input *: variable to check
 * @link: https://codepen.io/AllForTheCode/pen/rvPNeg
 */
window.isArray = function (input) {
    return !!input && input.constructor === Array;
    //return arr.constructor == Array;
}

/**
 * @function: getRandomInt(min,max)
 * @desc: returns a random number / int betwen your specified min and max values
 * @param min number: the minimum your random number is allowed to go
 * @param max number: the maximum your random number is allowed to go
 * @alias: getRandom
 * @link: https://codepen.io/AllForTheCode/pen/PeVqLp
 */
window.getRandomInt = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
window.randomInt = function (min, max) { return getRandomInt(min, max); }
window.getRandom = function (min, max) { return getRandomInt(min, max); }
window.random = function (min, max) { return getRandomInt(min, max); }



/**
 * @function: getRandomThatsNot(min,max,not)
 * @desc: returns a random int betwen your specified min and max values but never the not value
 * @param min number: the minimum your random number is allowed to go
 * @param max number: the maximum your random number is allowed to go
 * @alias: getRandom
 * @link: https://codepen.io/AllForTheCode/pen/yEBZNq
 */
window.getRandomThatsNot = function(min,max,not){
    var r = not; var lim = 100; var runs = 0;
    while (r==not && runs < lim){
        runs++;
        r = getRandomInt(min,max);
    }
    if (runs>=lim){
        return false;
    } else {
        return r;
    }
}


/**
 * @function: getRandomFloat(min,max)
 * @desc: returns a random floating point number betwen your specified min and max values
 * @param min number: min value
 * @param max number: max value
 * @link: https://codepen.io/AllForTheCode/pen/gzqaYm
 */
window.getRandomFloat = function (min, max) {
    return (Math.random() * (max - min) + min);
};
window.randomFloat = function (min, max) { return getRandomFloat(min, max); }


/**
 * @function: randomString(length)
 * @desc: get a random string of a specified length
 * @param length number: the length of the string you wish to generate
 * @alias: getRandomString
 * @link: https://codepen.io/AllForTheCode/pen/QrYjwr
 */
window.randomString = function (length) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
}
window.getRandomString = function (len) { return randomString(len); }



/**
 * @function: getUID(length)
 * @desc: Generates a random id
 * @param length number: length of the unique id to generate
 * @alias: getUID
 * @alias: generateUID
 * @link: https://codepen.io/AllForTheCode/pen/NMoGGY
 */
window.getUID = function (len) {
    if (len > 34){
        console.error("getUID(length): Limit error: Length must be 34 or lower");
    } else {
        return Math.random().toString(36).substr(2, len);
    }
}
window.getUniqueId = function (len) { return getUID(len); }
window.generateUID = function (len) { return getUID(len); }


/**
 * @function: getArrayOfRandomNumbers(arraySize,min,max)
 * @desc: generate an array of random number between your max and min values
 * @param arraySize number: the number of random numbers to generate also the array size that will be returned
 * @param min number: the minimum your random number is allowed to be
 * @param max number: the maximum your random number is allowed to be
 * @link: https://codepen.io/AllForTheCode/pen/NMoGdz
 */
window.getArrayOfRandomNumbers = function (arraySize, min, max) {
    var arr = [];
    for (var i = 0; i < arraySize; i++) {
        arr[i] = getRandomInt(min, max);
    }
    return arr;
}


/**
 * @function: getArrayOfRandomStrings(arraySize,strLength)
 * @desc: generate an array of random string of a specified length
 * @param arraySize number: the number of random strings to generate also the array size that will be returned
 * @param strLength number: the length of the strings to be generated
 * @link: https://codepen.io/AllForTheCode/pen/BVNJvB
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
 * @link: https://codepen.io/AllForTheCode/pen/MGLayZ
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











/**
 * @function: getWeightedRandom(odds, iterations)
 * @desc: Get a weighted random based on odds and iterations
 * @param odds array: array of odds
 * @param iterations number: number of iterations to run on each number test
 * @link: https://codepen.io/AllForTheCode/pen/RyvWjZ
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
/**
 * @function: limitLengthInWords(str, maxWords)
 * @desc: Limit a string in length of words
 * @param str string: the original string to limit
 * @param maxWords number: the number of words you wish to limit to
 * @return object: {output:string,remaining:number}
 * @link: https://codepen.io/AllForTheCode/pen/xjMdye
 */
window.limitLengthInWords = function (str, maxWords) {
	var wordCount = str.split(/\S+/).length - 1;
	var re = new RegExp("^\\s*\\S+(?:\\s+\\S+){0," + (maxWords - 1) + "}");
	var output = "";
	if (wordCount >= maxWords) {
		output = str.match(re);
	} else {
		output = str;
	}
	return { output: output, remaining: (maxWords - wordCount) };
}
// -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -





/**
 * @function: cleanJSONString(s)
 * @desc: Attempts to clean a json string
 * @param s string: input string
 * @link: https://codepen.io/AllForTheCode/pen/BxMRER
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
 * @function: escapeHTML(input)
 * @desc: Attempts to escape a html string
 * @param input string: the string you wish to escape
 * @link: https://codepen.io/AllForTheCode/pen/PerGRJ
 */
//
// function escapeHtml(unsafe) {
//     return unsafe
//          .replace(/&/g, "&amp;")
//          .replace(/</g, "&lt;")
//          .replace(/>/g, "&gt;")
//          .replace(/"/g, "&quot;")
//          .replace(/'/g, "&#039;");
//  }
//
window.escapeHTML = function (input) {
	if (typeof (input) != "string") { console.error("escape(arg): usage error: arg needs to be a string!"); return false; }

	var replacements = {
		"<": "&lt;",
		">": "&gt;",
		"&": "&amp;",
		"\"": "&quot;",
		"`": "&#039;"
	};
	return input.replace(/[<>&"]/g, function (character) {
		return replacements[character];
	});
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



/**
 * @function: cutStringTo(input, len)
 * @desc: sets the length of a string from left to right
 * @param input string: what string do you want to set the length of?
 * @param length number: the length you want the string to be
 * @alias: cutStringTo
 * @alias: cutString
 * @alias: cutStringLength
 * @alias: setStrLen
 * @alias: trimStringLength
 * @link: https://codepen.io/AllForTheCode/pen/VxJKEm
 */
window.cutStringTo = function (s, len) {
	return s.substring(0, len);
}
window.cutString = function (s, len) { return cutStringTo(s,len); }
window.cutStringLength = function (s, len) { return cutStringTo(s,len); }
window.setStrLen = function (s, len) { return cutStringTo(s,len); }
window.setStringLength = function (s, len) { return cutStringTo(s,len); }
window.trimStringLength = function (s, len) { return cutStringTo(s,len); }
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


/**
 * @function: trimStringBy(input, trimBy)
 * @desc: Trims the length of a string by a value
 * @param input string: The string you want to trim
 * @param trimBy number: How many characters do you want to trim off the end
 * @alias: tTrim
 * @link: https://codepen.io/AllForTheCode/pen/BxgLvr
 */
window.trimStringBy = function (str, trimBy) {
	return (str.substring(0, str.length - trimBy));
}
window.rTrim = function (str, trimBy) { return trimStringBy(str, trimBy); }


/**
 * @function: leftTrim(str, by)
 * @desc: Trims the left of a string by a specified amount
 * @param string str: The string you want to trim
 * @param number by: How many characters do you want to trim off the end
 * @alias: lTrim
 * @link: https://codepen.io/AllForTheCode/pen/wXayva
 */
window.lTrim = function (str, by) {
	return str.substring(by, str.length);
}
window.leftTrim = function (str, by) { return lTrim(str, by); }





/**
 * @function: getFileExtension(input)
 * @desc: Attempts to get the file extension from a file path string
 * @param string str: the file path string
 * @link: https://codepen.io/AllForTheCode/pen/OZeRqv
 */
window.getFileExtension = function (input) {
	var ext = input.split('.').pop();
	return ext;
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



/**
 * @function: getFileExtension2(input)
 * @desc: Attempts to get the file extension from a file path string
 * @param string str: the file path string
 * @link: https://codepen.io/AllForTheCode/pen/OZeRqv
 */
window.getFileExtension2 = function (input) {
	return input.slice((input.lastIndexOf(".") - 1 >>> 0) + 2);
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -




/**
 * @function: getLastPartOfUrl(url)
 * @desc: Gets the last part of a URL
 * @param string url: url to process
 * @link: https://codepen.io/AllForTheCode/pen/gzNwNv
 */
window.getLastPartOfUrl = function (url) {
	if (!url) {
		url = window.location.href;
	}
	var part = url.substring(url.lastIndexOf('/') + 1);
	return part;
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



/**
 * @function: removeFileFromPath(path)
 * @desc: Attempts to remove the file from a file path string
 * @param string path: path
 * @link: https://codepen.io/AllForTheCode/pen/QrXGWY
 */
window.removeFileFromPath = function (path) {
	//var pa = '/this/is/a/folder/aFile.txt';
	var r = /[^\/]*$/;
	path = path.replace(r, '');
	return path;
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


/**
 * @function: getAnchor(url)
 * @desc: Get anchor from url
 * @param string url: The url to get the anchor from
 * @link: https://codepen.io/AllForTheCode/pen/xxxxxxx
 */
window.getAnchor = function (url) {
	if (!url) { url = window.location.href; }
	var anchorAvailable = isInString("#", url);
	if (anchorAvailable) {
		return url.slice(url.lastIndexOf('#') + 1);
	} else {
		return false;
	}
}
window.getAnchorFromUrl = function (url) { return window.getAnchor(url); }
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -





/**
 * @function: String.prototype.startsWith(str)
 * @desc: ES6 supports the startsWith(), this is for pre ES6 support
 * @param string str: string to check
 * @link: https://codepen.io/AllForTheCode/pen/xxxxxxx
 */
if (typeof String.prototype.startsWith != 'function') {
	String.prototype.startsWith = function (str) {
		return this.match(new RegExp("^" + str));
	};
}

/**
 * @function: String.prototype.endsWith(str)
 * @desc: ES6 supports endsWith(), this is for pre ES6 support
 * @param string str: string to check
 * @link: https://codepen.io/AllForTheCode/pen/xxxxxxx
 */
//
if (typeof String.prototype.endsWith != 'function') {
	String.prototype.endsWith = function (str) {
		return this.match(new RegExp(str + "$"));
	};
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


/**
 * @function: getStringBetween(input,start,end)
 * @desc: Gets a string between two other strings
 * @param string input: input string to check
 * @param string start: start string marker
 * @param string end: end string marker
 * @link: https://codepen.io/AllForTheCode/pen/xxxxxxx
 */
window.getStringBetween = function (str, start, end) {
	return str.split(start).pop().split(end).shift().trim();
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



/**
 * @function: getAllStringsBetween(str,start,end)
 * @desc: Gets all strings between two other strings (multi match)
 * @param string str: input string to check
 * @param string start: start string marker
 * @param string end: end string marker
 * @link: https://codepen.io/AllForTheCode/pen/xxxxxxx
 */
window.getAllStringsBetween = function (str, start, end) {
	var orig = str;
	var results = [];
	// log(orig);
	// log("--------");

	function getBetween() {
		// log("CHECKING: " + str);
		var startMatchIndex = str.indexOf(start); // Find start match
		// log("startMatchIndex: " + startMatchIndex);
		if (startMatchIndex == -1) { return false; }

		var startCutIndex = start.length + startMatchIndex; // calc start cut index
		// log("startCutIndex: " + startCutIndex);

		str = str.substring(startCutIndex, str.length); // LTrim to start cut index
		// log("CUT: " + str);

		var endMatchIndex = str.indexOf(end); // find end match index
		// log("endMatchIndex: " + endMatchIndex);
		if (endMatchIndex == -1) { return false; }

		var between = str.substring(0, endMatchIndex); // get string between
		// log("between: " + between);
		var endCutIndex = end.length + endMatchIndex;
		//log("endCutIndex: " + endCutIndex);
		str = str.substring(endCutIndex, str.length); // cut off end string
		//log("FINAL: " + str);
		return between;
	}
	var lim = 500; // Want to loop forever? 500 seems like areasonable limit
	var pos = 0;
	var result = true;
	while (pos <= lim && result != false) {
		pos++;
		result = getBetween();
		if (result) {
			//log("between["+i+"] = " + result);
			results.push(result);
			//log("");
		}
	}
	return results;
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



/**
 * @function: radToDeg(input)
 * @desc: converts radians to degrees
 * @param input number: the radians you wish converted to degrees
 * @alias: rad2deg
 * @link: https://codepen.io/AllForTheCode/pen/wjRpBZ
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
 * @link: https://codepen.io/AllForTheCode/pen/jxXYbE
 */
window.degToRad = function (input) {
    return input * (Math.PI / 180);
}
window.deg2rad = function (arg) { return degToRad(arg); }



/**
 * @function: toHex(num)
 * @desc: Converts a number to hex
 * @param num number: decimal base 10
 * @return string: hexidecimal value
 * @link: https://codepen.io/AllForTheCode/pen/ELGoKX
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
 * @param bool boolean: the boolean you wish to convert
 * @link: https://codepen.io/AllForTheCode/pen/PeXEbg
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
 * @param bool boolean: the boolean you wish to convert
 * @link: https://codepen.io/AllForTheCode/pen/zjypZz
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
 * @param str string: the string you wish to convert
 * @link: https://codepen.io/AllForTheCode/pen/vjvpmQ
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
 * @link: https://codepen.io/AllForTheCode/pen/XqoVea
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
 * @link: https://codepen.io/AllForTheCode/pen/erbyVR
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
 * @link: https://codepen.io/AllForTheCode/pen/yjGpqM
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
 * @function: toArray(v)
 * @desc: takes an input and returns it as index[0] of an array
 * @param * arg: value to insert into array
 * @alias: convertToArray
 * @alias: valueToArray
 * @link: https://codepen.io/AllForTheCode/pen/QrzazK
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
 * @function: rgb2Hex(r,g,b)
 * @desc: rgb to hex
 * @param number r: red
 * @param number g: green
 * @param number b: blue
 * @return hex color
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
   * @return hex color
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
   * @return rgb color
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
  
/**
 * @function: getDaysBetween(startDateTime, endDateTime)
 * @desc: Gets the number of whole days between a start and end date
 * @param startDateTime DateTime: start date
 * @param endDateTime DateTime: end date
 * @alias: getNoOfDaysBetween
 * @alias: getDaysBetweenDates
 * @link: https://codepen.io/AllForTheCode/pen/pVqaGZ
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
 * @function: getUKDateFromDate(dte)
 * @desc: Formats a date in the UK format
 * @param dte Date
 * @link: https://codepen.io/AllForTheCode/pen/RyEMwp
 */
window.getUKDateFromDate = function(dte){
	var output = dte.getDay() + "-" + (dte.getMonth()+1) + "-" + dte.getFullYear();
	return output;
}


/**
 * @function: getUSDateFromDate(dte)
 * @desc: Formats a date in the US format
 * @param dte Date: date
 * @link: https://codepen.io/AllForTheCode/pen/XqoEWL
 */
window.getUSDateFromDate = function(dte){
	var output = dte.getFullYear() + "-" + (dte.getMonth()+1) + "-" + (dte.getDay()+1)
	return output;
}



/**
 * @function: getUkDateFromDbDateTime(input)
 * @desc: get a uk date from a mysql db date value
 * @param input MySQLDateTimeString: MySQL DB DateTime
 * @link: https://codepen.io/AllForTheCode/pen/BxvePW
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
 * @param input MySQLDateTimeString: MySQL DB DateTime
 * @link: https://codepen.io/AllForTheCode/pen/MGZdBB
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
 * @link: https://codepen.io/AllForTheCode/pen/wjRbEe
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
 * @param local string: options are us or do not supply for en-gb
 * @link: https://codepen.io/AllForTheCode/pen/GdPaYj
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
		case "en-GB":
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


/**
 * @function: validateEmail(email)
 * @desc: Validats an email address
 * @param string email: email address
 * @returns boolean
 * @link: https://codepen.io/AllForTheCode/pen/xjogjy
 */
window.isEmail = function (email) {
	var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email);
}
window.validateEmail = function (email) { return isEmail(email); }
window.isValidEmail = function (email) { return isEmail(email); }

/**
 * @function: isMobile()
 * @desc: Detects if the device you are using is a mobile or not
 * @return boolean
 * @link: https://codepen.io/AllForTheCode/pen/KRbLdm
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

/**
 * @function: isAndroid()
 * @desc: Detects if the device you are using is android or not
 * @return boolean
 * @link: https://codepen.io/AllForTheCode/pen/RyEmgN
 */
window.isAndroid = function(){
	var ua = navigator.userAgent.toLowerCase();
	if (/windows phone/i.test(ua)) {
		return false;
	} else {
		var isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");
		return isAndroid;
	}
}

/**
 * @function: iOS()
 * @desc: Detects if the device you are using is iOS or not
 * @return boolean
 * @link: https://codepen.io/AllForTheCode/pen/ELGzXO
 */
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
 * @link: https://codepen.io/AllForTheCode/pen/mLaYMe
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
 * @link: https://codepen.io/AllForTheCode/pen/xjmNLM
 */
window.isChrome = function () {
	//var chrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1; // FALSE POSITIVE IN OPERA
	// var chrome = !!window.chrome && !!window.chrome.webstore; // DOESNT WORK ANY LONGER

	var isChromium = window.chrome;
	var winNav = window.navigator;
	var vendorName = winNav.vendor;
	var isOpera = typeof window.opr !== "undefined";
	var isIEedge = winNav.userAgent.indexOf("Edge") > -1;
	var isIOSChrome = winNav.userAgent.match("CriOS");
	
	if (isIOSChrome) {
	   // is Google Chrome on IOS
	   return true;
	} else if(
	  isChromium !== null &&
	  typeof isChromium !== "undefined" &&
	  vendorName === "Google Inc." &&
	  isOpera === false &&
	  isIEedge === false
	) {
	   // is Google Chrome
	   return true;
	} else { 
	   // not Google Chrome 
	   return false;
	}
}


/**
 * @function: isEdge()
 * @desc: Detects Edge
 * @return boolean
 * @link: https://codepen.io/AllForTheCode/pen/aGPrLP
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
 * @link: https://codepen.io/AllForTheCode/pen/gzZJXr
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
 * @link: https://codepen.io/AllForTheCode/pen/MGZdOG
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
 * @link: https://codepen.io/AllForTheCode/pen/dewEJb
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
 * @link: https://codepen.io/AllForTheCode/pen/BxveJp
 */
window.getIEVersion = function () {
	var match = navigator.userAgent.match(/(?:MSIE |Trident\/.*; rv:)(\d+)/);
	return match ? parseInt(match[1]) : undefined;
}

/**
 * @function: getBrowser()
 * @desc: Detects browser
 * @return string
 * @link: https://codepen.io/AllForTheCode/pen/GdPaQZ
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
 * @link: https://codepen.io/AllForTheCode/pen/erbaVj
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




/**
 * @function: setHTML(elementOrId,html);
 * @desc: Quick shortcut for outputting html to an element
 * ```
 * setHTML("header","Welcome");
 * ```
 * @param elementOrId stringIdOrHtmlElement: the element or the element id you wish to set the html of
 * @param html string: the html string to insert into your element
 * @alias: html
 * @link: https://codepen.io/AllForTheCode/pen/KRbLER
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
 * @function: getElementOffsetTop(elementId)
 * @desc: Gets an elements top offset
 * @param elementId string: the element ID you wish to get the top offset of
 * @link: https://codepen.io/AllForTheCode/pen/GdPaLr
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








/**
 * @function: centerAbsoluteElement(elementId)
 * @desc: Center element that is absolute positioned
 * @param elementId string: element or id of element to center
 * @link: https://codepen.io/AllForTheCode/pen/ZRGabV
 */
window.centerAbsoluteElement = function (elementId) {
	var element = document.getElementById(elementId);
	if (!element) {
		throw ("AFTC.js > centerAbsoluteElement(elementOrElementId): ERROR! elementId supplied was not found on the DOM!");
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









/**
 * @function: scrollToElement(elementId, duration, offset)
 * @desc: Scroll to element on page
 * @param elementId string: ID of element you wish to scroll to
 * @param duration float: Duration in seconds
 * @param offset number: How much to offset scroll by
 * @link: https://codepen.io/AllForTheCode/pen/eKNeVq
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
/**
 * @function: addClass(elementOrId,classname)
 * @desc: Add a css class to a html element
 * @param elementOrId elementORstring: The elemnt or id of the html element to add a css class to
 * @param className string: the class name to add
 * @alias addClassTo
 * @link: https://codepen.io/AllForTheCode/pen/BxvYmW
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
 * @function: removeClass(elementOrId,className)
 * @desc: shortcut to remove a class from a html element
 * @param elementOrId elementORstring: The elemnt or id of the html element to add a css class to
 * @param className string: the class name to remove
 * @alias removeClassFrom
 * @link: https://codepen.io/AllForTheCode/pen/gzZvKL
 */
window.removeClass = function (elementOrId, className) {
    var element;
    if (typeof(elementOrId) == "string"){
        element = getElementById(elementOrId);
    }

    if (isArray(className)){
        for (var i=0; i < className.length; i++){
            element.classList.remove(className[i]);
        }
    } else {
        element.classList.remove(className);
    }
}
window.removeClassFrom = function(elementOrId, classNames){ removeClass(elementOrId, classNames); }


/**
 * @function: hasClass(elementOrId, cls)
 * @desc: Check to see if an element has a class attached to it
 * @param elementOrId string: The elemnt or id of the html element
 * @param cls string: class to look for
 * @link: https://codepen.io/AllForTheCode/pen/dewdwY
 */
window.hasClass = function (elementOrId, cls) {
    if (isElement(elementOrId)) {
        return elementOrId.classList.contains(cls);
    } else {
        return getElementById(elementOrId).classList.contains(cls);
    }
}
/**
 * @function: redirect(url)
 * @desc: no more typing self.location.href, just use redirect(url)
 * @param url string: the url you wish to redirect to
 * @link: https://codepen.io/AllForTheCode/pen/RyEpPY
 */
window.redirect = function (url) {
    self.location.href = url;
};


/**
 * @function: goFullScreen(element)
 * @desc: Go full screen, on an element if specified or whole browser if left out
 * @param element element: optional - html element that you want to go full screen on, leave out for whole browser
 * @link: https://codepen.io/AllForTheCode/pen/ELGWpE
 */
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


/**
 * @function: exitFullScreen()
 * @desc: Exits full screen mode
 * @link: https://codepen.io/AllForTheCode/pen/ELGWpE
 */
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
/**
 * @function: setCookie(name, value)
 * @desc: Sets a cookie by name with a value
 * @param name string: name of the cookie
 * @param value string: value of the cookie
 * @link: https://codepen.io/AllForTheCode/pen/RyBMwq
 */
window.setCookie = function (cname, cvalue,exdays) {
	// var expires = new Date();
	// expires.setTime(expires.getTime() + (1 * 24 * 60 * 60 * 1000));
	// document.cookie = name + '=' + value + ';expires=' + expires.toUTCString();
	var d = new Date();
	d.setTime(d.getTime() + (exdays*24*60*60*1000));
	var expires = "expires="+ d.toUTCString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
// -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -


/**
 * @function: getCookie(name)
 * @desc: Gets the value of a cookie by name
 * @param name string: name of the cookie to get 
 * @link: https://codepen.io/AllForTheCode/pen/RyBMwq
 */
window.getCookie = function (name) {
	//return .cookie(name);
	var keyValue = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|)');
	return keyValue ? keyValue[2] : null;
}
// -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -


/**
 * @function: isChecked(elementId)
 * @desc: Checks to if checkbox is checked or not
 * @param elementId string: element id of the form element to check
 * @link: https://codepen.io/AllForTheCode/pen/KRbjpx
 */
window.isChecked = function (id) {
	return document.getElementById(id).checked;
}
// -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -




/**
 * @function: isNumberKey(evt)
 * @desc: Checks if evt supplied (use on form input events via onkeyup or onkeydown)
 * @param evt event: html onkeyup(event) or onkeydown(event)
 * @link: https://codepen.io/AllForTheCode/pen/vjvqLg
 */
window.isNumberKey = function (evt) {
	var charCode = (evt.which) ? evt.which : event.keyCode;
	if (charCode > 31 && (charCode < 48 || charCode > 57))
		return false;

	return true;
}
// -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -







/**
 * @function: removeAllSelectOptions(elementId)
 * @desc: Removes all the options in a select
 * @param elementId string: id of select element 
 * @link: https://codepen.io/AllForTheCode/pen/mLaZEm
 * @link: https://codepen.io/AllForTheCode/pen/rvoEME
 */
window.removeAllSelectOptions = function (elementId) {
    var element = document.getElementById(elementId);
	for (var i = element.options.length - 1; i >= 0; i--) {
		element.remove(i);
	}
}
window.clearSelect = function(elementOrId) { removeAllSelectOptions(elementOrId); }
// -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -









/**
 * @function: parseJSONToSelect(j, selectElementIdOrElement, label, value)
 * @desc: parses a json object of key value pairs to a form select element
 * @param j string: the json data
 * @param selectElementIdOrElement elementOrIdString: the json data
 * @param label string: of key value pair this is the key
 * @param value string: of key value pair this is the value
 * @link: https://codepen.io/AllForTheCode/pen/rvoEME
 */
window.parseJSONToSelect = function (j, elementOrId, labelKey, valueKey) {
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
		var label = j[i][labelKey];
		var data = j[i][valueKey];

		var option = document.createElement("option");
		option.text = label;
		option.value = data;
		//log(option);
		element.add(option);
	}
}
 /**
 * @function: AFTC.Point(x,y)
 * @desc: 2D Point
 * @param x number: x coordinate
 * @param y number: y coordinate
 * @method: position: position
 * @method: clone: clone
 * @method: delta: delta
 * @method: distance: distance
 * @method: moveTo: moveTo
 * @method: moveAtAngle: moveAtAngle
 * @method: applyVelocity: applyVelocity
 * @method: angleRadians: angleRadians
 * @method: angleDeg: angleDeg
 * @method: rotate: rotate
 * @link: https://codepen.io/AllForTheCode/pen/qYLzzm
 */

AFTC.Point = function (x, y) {

    !x ? this.x = 0 : this.x = x;
    !y ? this.y = 0 : this.y = y;

    this.position = function () {
        return [this.x, this.y];
    }

    this.clone = function () {
        return new AFTC.Point(this.x, this.y);
    }

    this.delta = function (point) {
        return [this.x - point.x, this.y - point.y];
    }

    this.distance = function (point) {
        var dx = point.x - this.x;
        var dy = point.y - this.y;
        return Math.sqrt(dx * dx + dy * dy);
    }

    this.moveTo = function (x, y) {
        this.x = x;
        this.y = y;
        return this;
    }

    this.moveAtAngle = function (angle, distance) {
        this.x += Math.cos(angle) * distance;
        this.y += Math.sin(angle) * distance;
        return this;
    }

    this.applyVelocity = function (velocity) {
        this.x += velocity.vx;
        this.y += velocity.vy;
        return this;
    }

    this.angleRadians = function (point) {
        // radians = atan2(deltaY, deltaX)
        var y = point.y - this.y;
        var x = point.x - this.x;
        return Math.atan2(y, x);
    }

    this.angleDeg = function (point) {
        // degrees = atan2(deltaY, deltaX) * (180 / PI)
        var y = point.y - this.y;
        var x = point.x - this.x;
        return Math.atan2(y, x) * (180 / Math.PI);
    }

    this.rotate = function (origin, radians) {
        // rotate the point around a given origin point
        var cos = Math.cos(radians);
        var sin = Math.sin(radians);
        this.x =
            cos * (this.x - origin.x) + sin * (this.y - origin.y) + origin.x;
        this.y =
            cos * (this.y - origin.y) - sin * (this.x - origin.x) + origin.y;
        return this;
    }
}


 /**
 * @function: AFTC.Rectangle(x, y, w, h)
 * @desc: Rectangle class, allos you to set x, y, width and height or a rectangle
 * @param x number: x coordinate
 * @param y number: y coordinate
 * @param w number: w width
 * @param h number: h height
 * @method: offsetOuter: offsetOuter
 * @method: offsetInner: offsetInner
 * @method: setX: setX
 * @method: setY: setY
 * @method: setW: setW
 * @method: setH: setH
 * @return: AFTC.Rectangle
 * @link: https://codepen.io/AllForTheCode/pen/JvQRKg
 */

AFTC.Rectangle = function (x, y, w, h) {
    !x ? this.x = 0 : this.x = x;
    !y ? this.y = 0 : this.y = y;
    !w ? this.w = 0 : this.w = w;
    !h ? this.h = 0 : this.h = h;
    this.center = new AFTC.Point();

    function init() {
        this.center = setCenterPoint();
    }

    function setCenterPoint() {
        this.center = new AFTC.Point();
        this.center.x = Math.abs(this.w - this.x) / 2;
        this.center.y = Math.abs(this.h - this.y) / 2;
    }

    this.offsetOuter = function (offset) {
        var rect = new AFTC.Rectangle();
        rect.x = this.x - offset;
        rect.y = this.y - offset;
        rect.w = this.w + offset * 2;
        rect.h = this.h + offset * 2;
    }

    this.offsetInner = function (offset) {
        var rect = new AFTC.Rectangle();
        rect.x = this.x + offset;
        rect.y = this.y + offset;
        rect.w = this.w - offset * 2;
        rect.h = this.h - offset * 2;
    }

    this.setX = function (v) { this.x = v; init(); }
    this.setY = function (v) { this.y = v; init(); }
    this.setW = function (v) { this.w = v; init(); }
    this.setH = function (v) { this.h = v; init(); }

    init();
}
AFTC.Rect = AFTC.Rectangle;




 /**
 * @function: AFTC.Velocity(vx,vy)
 * @desc: AFTC.Velocity class helper
 * @param vx number: velocity vector x
 * @param vy number: velocity vector y
 * @method flip: flip
 * @method flipX: flipX
 * @method flipY: flipY
 * @method multiply: multiply
 * @method divide: divide
 * @link: https://codepen.io/AllForTheCode/pen/erxRBo
 */
AFTC.Velocity = function (vx, vy) {

    !vx ? this.vx = 0 : this.vx = vx;
    !vy ? this.vy = 0 : this.vy = vy;

    this.flip = function () {
        // reflection on both axis
        this.vx *= -1;
        this.vy *= -1;
        return this;
    }

    this.flipX = function () {
        // reflection on x axis
        this.vx *= -1;
        return this;
    }

    this.flipY = function () {
        // reflection on y axis
        this.vy *= -1;
        return this;
    }

    this.multiply = function (scalar) {
        this.vx *= scalar;
        this.vy *= scalar;
        return this;
    }

    this.divide = function (scalar) {
        this.vx /= scalar;
        this.vy /= scalar;
        return this;
    }
}

/**
 * @function: cycle(pos, max)
 * @desc: cycles from 0 to max based on pos, will cycle back to 0 if over max
 * @param pos number: position of max
 * @param max number: max number to cycle to
 * @link: https://codepen.io/AllForTheCode/pen/BxMZBZ
 */
function cycle(pos, max) {
    return (pos % max + max) % max;
}













/**
 * @function: AnimationFrameStack()
 * @desc: Gives easy access to a single requestAnimationFrame loop which you can add functions to process in each loop, note the function stack is stored on global window scope
 * @method add: add a function to the stack to be executed on animationFrameLoop
 * @method remove: remove a function from the stack
 * @method start: start the requestAnimationFrame loop
 * @method stop: stop the requestAnimationFrame loop
 * @method dispose: dispose of all functions in the function stack
 * @link:
 */
function AnimationFrameStack() {
    var me = this;

    this.init = function(){
        if (!window){
            console.error("AnimationFrameStack(): ERROR - Unable to access window!");
        } else {
            if (!window.aftcAnimStack){
                window.aftcAnimStack = {
                    firstRun: true,
                    running: true,
                    stack: [],
                    uid: Math.floor(Math.random()*99999)
                }
            }
        }

        if (window.aftcAnimStack.firstRun){
            window.aftcAnimStack.firstRun = false;
            this.processFnStack();
        }
    }

    this.start = function(){
        window.aftcAnimStack.running = true;
        this.processFnStack();
    }

    this.stop = function(){
        window.aftcAnimStack.running = false;
    }

    this.dispose = function(){
        if (window.aftcAnimStack){
            window.aftcAnimStack.running = false;
            delete window.aftcAnimStack.stack;
            window.aftcAnimStack.stack = [];
        }
    }

    this.processFnStack = function(){
        if (!window.aftcAnimStack.running){ return; }

        if (window.aftcAnimStack.stack){
            // log(window.aftcAnimStack.stack.length);
            for(var i=0; i < window.aftcAnimStack.stack.length; i++){
                window.aftcAnimStack.stack[i]();
            }
        }

        window.requestAnimationFrame(me.processFnStack);
    }

    this.add = function(fn){
        window.aftcAnimStack.stack.push(fn);
    }

    this.remove = function(fn){
        for(var i=0; i < window.aftcAnimStack.stack.length; i++){
            if (window.aftcAnimStack.stack[i] === fn){
                window.aftcAnimStack.stack = arrayRemoveIndex(window.aftcAnimStack.stack,i);
            }
        }
    }

    this.init();
}





function attachDebug(no,ele) {
    // return id's not the div create elements as these are type of object and not html element
    let ids = [];

    let debugContainer = document.createElement("div");
    debugContainer.id = "debug-container";
    debugContainer.style.zIndex = "99999";
    debugContainer.style.position = "fixed";
    debugContainer.style.right = "5px";
    debugContainer.style.top = "5px";

    for (let i = 0; i < no; i++) {
        let r = Math.round(Math.random()*9999999999);
        let id = "aftc-debug-container-" + r;
        let div = document.createElement("div");
        div.id = id;
        div.classList.add("debug");
        div.style.background = "#FFFFFF";
        div.style.color = "#000000";
        div.style.margin = "2px";
        div.style.padding = "2px";

        debugContainer.appendChild(div);
        div.addEventListener("click", function (e) {
            console.log(this.innerHTML);
        });

        ids.push(id);
    }
    if (ele){
        ele.appendChild(debugContainer);
    } else {
        document.body.appendChild(debugContainer);
    }

    return ids;
}
/**
 * @function: AFTC.Audio({options})
 * @desc: An audio player with preloading capabilities, looping abilities and loop offset capabilities
 * @params src stringOrArray: String or Array of urls/paths to sound files
 * @params cache boolean: To cache or not to cache
 * @params volume float: 0 to 1
 * @params repeat number: -1 forever, 0 play once only, or the number of times to repeat
 * @params preload boolean: true or false
 * @params offsetLoopBy float: the sample offset from the end that you wish to loop by can help remove loop gaps
 * @params onUpdate function: the function you wish to run when your sound is playing provides and info object
 * @params onReady function: the function you wish to run when your sound is ready and can play
 * @params onComplete function: the function you wish to run when your sound has finished playing
 * @params hideWarnings boolean: hides notices in console for compatibility issues when not using mp3 etc
 * @method play: Play audio
 * @method stop: Stop audio
 * @method pause: Pause audio
 * @method resume: Resume ausio
 * @link: https://codepen.io/AllForTheCode/pen/NzWrvm
 */

// Resource:
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement
// https://www.w3schools.com/jsref/dom_obj_audio.asp
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
AFTC.Audio = function () {
    if (!(this instanceof arguments.callee)) {
        var msg = "\nAFTC.Audio: USAGE ERROR: Constructor called as a function.\n";
        msg += "Please use new AFTC.Audio({params})";
        throw new Error(msg);
    }
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    // Accessor
    var me = this;

    // Vo's
    var preloaderFileVo = function () {
        var me = this;
        this.src = false;
        this.ext = false;
        this.content_type = false;
        this.base64 = false;
        this.loaded = false;
        this.xhr = new XMLHttpRequest();

        this.load = function () {
            this.ext = getFileExtension(this.src);
            this.xhr.addEventListener("load", loaded);

            // this.xhr.onreadystatechange = function () {
            // log(this.readyState);
            // if (this.readyState == 4 && this.status == 200) {}
            // };

            this.xhr.open("GET", this.src, true);
            this.xhr.send();
        }

        function loaded(e) {
            // log("LOADED");
            me.loaded = true;
            try { me.xhr.removeEventListener("load", loaded); } catch (e) { }
            me.content_type = me.xhr.getResponseHeader("content-type");
            // log("me.content_type = " + me.content_type);
            // log("me.ext = " + me.ext);
            if (isInString("text/html", me.content_type)) {
                me.base64 = true;
            }
            checkAllLoaded();
        }
    }
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


    // Args
    var args = {
        src: false,
        cache: true,
        volume: 1,
        repeat: 0,
        preload: true,
        offsetLoopBy: 0,
        loopByOffset: false,
        onUpdate: false,
        onReady: false,
        onComplete: false,
        hideWarnings: false,
    };
    argsToObject(arguments, args);
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


    // Params
    var params = {
        t: 0,
        preloader: {
            files: [], // array of preloaderFileVo's
            fileCount: 0
        },
        browser: {
            detected: false,
            isChrome: false,
            isFirefox: false,
            isOpera: false,
            isSafari: false,
            isEdge: false,
            isIE: false
        },
        compatibility: {
            ie: ["mp3"],
            edge: ["mp3", "ogg", "flac", "wav"],
            chrome: ["mp3", "ogg", "flac", "wav"],
            firefox: ["mp3", "ogg", "flac", "wav"],
            opera: ["mp3", "ogg", "flac", "wav"],
            safari: ["mp3", "wav"]
        },
        suppliedExtensions: [],
        audio: false,
        playing: false,
        playCount: 0,
        totalPlayCount: 0,
        offsetLoopDuration: 0,
        onPlayTimer: false
    };
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


    function init() {
        // Browser flags
        params.browser.detected = true;
        params.isChrome = isChrome();
        params.isFirefox = isFireFox();
        params.isOpera = isOpera();
        params.isSafari = isSafari();
        params.isEdge = isEdge();
        params.isIE = isIE();

        // Var ini
        isArray(args.src) ? params.preloader.fileCount = args.src.length : params.preloader.fileCount = 1;
        // log("params.preloader.fileCount = " + params.preloader.fileCount);

        params.offsetLoopDuration = params.audio.duration - args.offsetLoopBy;

        // Preloader
        setupPreloader();
    }
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


    function setupPreloader() {
        // Preloading
        var i;
        if (typeof (args.src) != "string") {
            // log("MUTLI FILE");
            for (i = 0; i < args.src.length; i++) {
                var vo = new preloaderFileVo();
                vo.src = args.src[i];
                if (!args.cache) {
                    vo.src = vo.src + "?r=" + getRandomInt(1, 99999999);
                }
                params.preloader.files.push(vo);
            }
        } else {
            // log("SINGLE FILE");
            var vo = new preloaderFileVo();
            vo.src = args.src;
            if (!args.cache) {
                vo.src = vo.src + "?r=" + getRandomInt(1, 99999999);
            }
            params.preloader.files.push(vo);
        }

        // Start xhr preloaders on each file path / url supplied
        for (i = 0; i < params.preloader.fileCount; i++) {
            var vo = params.preloader.files[i];
            vo.load();
            params.suppliedExtensions.push(vo.ext);
        }
    }
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


    function checkAllLoaded() {
        // log("checkAllLoaded()");
        var loaded = true;
        for (i = 0; i < params.preloader.fileCount; i++) {
            var vo = params.preloader.files[i];
            // log(vo.ext + " = " + vo.loaded);
            if (!vo.loaded) { loaded = false; }
        }
        // log("checkAllLoaded(): loaded = " + loaded);

        if (loaded) {
            advise();
        }
    }
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


    function advise(vo) {

        var msg = false;

        if (args.repeat > 0) {
            msg = "\nAFTC.Audio() > Loop Warning\n";
            msg += "When looping or repeating it is recommended that you set the offsetLoop parameter unique for each device and browser and file format as it can vary between them (if in doubt leave it at zero), it will use the classic html5 audio end event and loop timing, which doesn't always have perfect results.\n";
            msg += "\n";
        }

        msg += "AFTC.Audio() > Browser audio format compatibility checks can be found at:\n";
        msg += "FLAC: https://caniuse.com/#search=flac\n";
        msg += "WAV: https://caniuse.com/#search=wav\n";
        msg += "OGG: https://caniuse.com/#search=ogg\n";
        msg += "MP3: https://caniuse.com/#search=mp3\n";
        msg += "\n";

        msg += "TO TURN OFF THESE MESSAGES USE: hideWarnings:true\n";
        msg += "eg. new AFTC.Audio({hideWarnings:true});\n";
        msg += "\n";

        if (msg && !args.hideWarnings) {
            console.warn(msg);
        }

        setupSound();
    }
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


    function setupSound() {
        // log("setupSound()");
        params.audio = document.createElement('audio');
        params.audio.volume = args.volume;
        params.audio.preload = "auto"; // auto || metadata || none

        // params.audio.addEventListener('timeupdate', onTimeUpdate, false);
        // params.audio.addEventListener("ended", playCompleteViaEvent, false);
        // params.audio.addEventListener("canplay", function (e) {
        //     log("UNABLE TO PLAY: ");
        // });

        // params.audio.addEventListener("onloadeddata",function(){ log("LOADED"); }); // DOESNT WORK BUT SHOULD!
        // params.audio.onloadeddata = function () {
        //     params.loaded = true;
        //     log("onloadeddata()");
        // };

        // Sounds can have multiple formats attached to them, just like video
        if (params.preloader.fileCount > 1) {
            var html = "";
            for (var i = 0; i < params.preloader.fileCount; i++) {
                var vo = params.preloader.files[i];
                html += '<source src="' + vo.src + '" type="' + vo.content_type + '" />'
            }
            params.audio.innerHTML = html;
        } else {
            var vo = params.preloader.files[0];
            if (vo.base64) {
                params.audio.src = vo.xhr.responseText;
            } else {
                params.audio.setAttribute('src', vo.src);
            }
        }

        if (args.onReady){
            args.onReady();
        }
    }
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -





    // Play monitor loop
    function playBackMonitor() {
        if (!params.playing) { return false; }

        // https://www.w3schools.com/jsref/dom_obj_audio.asp
        if (args.onUpdate) {
            var info = {
                audio: params.audio,
                currentSrc: params.audio.currentSrc,
                currentTime: params.audio.currentTime,
                duration: params.audio.duration,
                offsetLoopDuration: params.offsetLoopDuration,
                ended: params.audio.ended,
                playbackRate: params.audio.playbackRate,
                volume: params.audio.volume,
                playCount: params.playCount,
                totalPlayCount: params.totalPlayCount
            };
            args.onUpdate(info);
        }

        if (params.audio.currentTime >= params.offsetLoopDuration) {
            params.playCount++;

            if (params.playCount >= params.totalPlayCount) {
                clearInterval(params.onPlayTimer);
                //params.audio.pause();
                params.onPlayTimer = false;
                params.playing = false;
                if (args.onComplete){
                    var info = {
                        audio: params.audio,
                        currentSrc: params.audio.currentSrc,
                        currentTime: params.audio.currentTime,
                        duration: params.audio.duration,
                        offsetLoopDuration: params.offsetLoopDuration,
                        ended: params.audio.ended,
                        playbackRate: params.audio.playbackRate,
                        volume: params.audio.volume,
                        playCount: params.playCount,
                        totalPlayCount: params.totalPlayCount
                    };
                    args.onComplete(info);
                }
            } else {
                params.audio.currentTime = 0;
                params.audio.play();
                params.checkInProgress = false;
            }
        }

        // if (!params.audio.ended){
        //     requestAnimationFrame(playBackMonitor);
        // }
    }




    // Utility
    function startPlaybackMonitor() {
        params.playing = true;
    }
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -




    // Public
    this.play = function (time) {
        if (!params.audio) { return false; } // Prevent params.audio usage when not available

        params.offsetLoopDuration = params.audio.duration - args.offsetLoopBy;
        params.totalPlayCount = (args.repeat + 1);
        if (args.repeat == -1){ params.totalPlayCount = 999999999999999; }
        params.playCount = 0;
        time ? time : time = 0; // true || false
        params.audio.currentTime = time;
        params.playing = true;
        params.audio.play();
        params.onPlayTimer = setInterval(playBackMonitor, 10);
    }

    this.stop = function () {
        clearInterval(params.onPlayTimer);
        params.audio.pause();
        params.onPlayTimer = false;
        if (!params.audio) { return false; } // Prevent params.audio usage when not available
        params.audio.currentTime = 0;
        params.playing = false;
    }

    this.pause = function () {
        params.audio.pause();
        clearInterval(params.onPlayTimer);
        params.onPlayTimer = false;
        params.playing = false;
        if (!params.audio) { return false; } // Prevent params.audio usage when not available
    }

    this.resume = function () {
        if (!params.audio) { return false; } // Prevent params.audio usage when not available
        params.playing = true;
        params.audio.play();
        params.onPlayTimer = setInterval(playBackMonitor, 10);
    }

    // Constructor simulation
    init();
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -








// // REF: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio
// // REF: https://www.w3schools.com/tags/ref_av_dom.asp
// // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// AFTC.Audio = function () {
//     if (!(this instanceof arguments.callee)) {
//         var msg = "\nAFTC.Audio: USAGE ERROR: Constructor called as a function.\n";
//         msg += "Please use new AFTC.Audio({params})";
//         throw new Error(msg);
//     }
//     // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

//     var me = this;
//     var args = {
//         url: false,
//         base64: false,
//         volume: 1,
//         repeat: 0,
//         preload: true,
//         onComplete: false,
//         offsetLoopBy: 0,
//     };
//     var params = {
//         audio: false,
//         loaded: false,
//         playCount: 0,
//         endTimeWithOffset: 0,
//         manualLooping: false,
//         manualLoopingComplete: false,
//         timer: false,
//         timerInterval: 50,
//         ready: false,
//         isIE: false,
//         isEdge: false,
//         isFireFox: false,
//         isChrome: false,
//         isOpera: false,
//         isSafari: false
//     };

//     new AFTC.ArgsToObject(arguments[0], args);
//     // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

//     // Constructor
//     function init() {
//         if (!args.url) {
//             throw new Error("\nAFTC.Audio: USAGE ERROR: A url to a sound file is required!");
//         }

//         // DETECT THE BROWSERS
//         params.isChrome = isChrome();
//         params.isFirefox = isFireFox();
//         params.isOpera = isOpera();
//         params.isSafari = isSafari();
//         params.isEdge = isEdge();
//         params.isIE = isIE();
//         // log("isChrome = " + params.isChrome);
//         // log("isFirefox = " + params.isFirefox);
//         // log("isOpera = " + params.isOpera);
//         // log("isSafari = " + params.isSafari);
//         // log("isEdge = " + params.isEdge);
//         // log("isIE = " + params.isIE);

//         //params.audio = new Audio();
//         // params.audio.src = args.url; // DONT WORK

//         params.audio = document.createElement('audio');
//         // params.audio.volume = args.volume;
//         params.audio.preload = "auto"; // auto || metadata || none

//         params.audio.addEventListener('timeupdate', onTimeUpdate, false);
//         params.audio.addEventListener("ended", playCompleteViaEvent, false);

//         // params.audio.addEventListener("onloadeddata",function(){ log("LOADED"); }); // DOESNT WORK BUT SHOULD!
//         params.audio.onloadeddata = function () {
//             params.loaded = true;
//             onLoadedInitAudio();
//         };

//         if (isArray(args.url)) {
//             var html = "";
//             var isOGG, isMP3, isWAV;
//             for (var i = 0; i < args.url.length; i++) {
//                 // log("file " + i + " = " + args.url[i]);
//                 isOGG = isInString("ogg", args.url[i].toLowerCase());
//                 isMP3 = isInString("mp3", args.url[i].toLowerCase());
//                 isWAV = isInString("wav", args.url[i].toLowerCase());
//                 if (isOGG && !isMP3 && !isWAV) {
//                     html += '<source src="' + args.url[i] + '" type="audio/ogg" />'
//                 } else if (!isOGG && isMP3 && !isWAV) {
//                     html += '<source src="' + args.url[i] + '" type="audio/mpeg" />'
//                 } else if (!isOGG && !isMP3 && isWAV) {
//                     html += '<source src="' + args.url[i] + '" type="audio/wave" />'
//                 } else {
//                     throw new Error("\nAFTC.Audio: USAGE ERROR: Only MP3, OGG and WAV formats are supported!");
//                 }
//             }
//             params.audio.innerHTML = html;
//             //audioElement.innerHTML = '<source src="' + '/audio/sound.mp3'+ '" type="audio/mpeg" />'
//         } else {

//             var msg = "\nAFTC.JS > AUDIO.JS > WARNING\n";
//             msg += "You are using an obsolete or incapable web browser, audio may not function correctly!\n";

//             if (params.isIE) {
//                 msg += "If you have to use a microsoft web browser please use MS Edge, however this may still not function correctly.\n";
//                 msg += "It is recommended that you use Chrome, Firefox or Opera web browsers.";
//                 console.warn(msg);
//             } else if (params.isEdge) {
//                 msg += "It is recommended that you use Chrome, Firefox or Opera web browsers.";
//                 console.warn(msg);
//             }

//             // Compatibility issue alerts/warnings
//             var isOGG = isInString("ogg", args.url.toLowerCase());
//             var isMP3 = isInString("mp3", args.url.toLowerCase());
//             var isWAV = isInString("wav", args.url.toLowerCase());
//             // log("isOGG = " + isOGG);
//             // log("isMP3 = " + isMP3);
//             // log("isWAV = " + isWAV);
//             // log("args.url = " + args.url);

//             if (params.isIE && isWAV || params.isEdge && isWAV || params.isFirefox && isWAV) {
//                 throw new Error("\nAFTC.Audio: USAGE ERROR: FireFox, EDGE & IE don't support WAV playback!\nPlease use MP3!");
//             }
//             if (params.isIE && isOGG) {
//                 throw new Error("\nAFTC.Audio: USAGE ERROR: IE doesn't support OGG playback!\nPlease use MP3!");
//             }


//             if (args.base64) {
//                 params.audio.src = args.url;
//             } else {
//                 params.audio.setAttribute('src', args.url);
//             }
//         }

//     }
//     // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



//     function onLoadedInitAudio() {
//         // log("onLoadedInitAudio()");
//         // This will force execution of the timeupdate event, which will init params.audio.duration
//         params.audio.volume = 0;
//         setTimeout(function () {
//             // WARNING: Putting params.audio.play here will ignore volume and other settings
//             playIt();
//         }, 250);
//     }
//     function playIt() {
//         params.audio.play();
//         params.timer = setInterval(checkForDuration, params.timerInterval);
//     }
//     // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



//     function checkForDuration() {
//         if (params.audio.duration > 0) {
//             params.isReady = true;
//             //log(params.audio.duration + " seconds of audio is ready for use!");
//             // setHTML("debug3", "duration = " + params.audio.duration.toFixed(3));
//             clearInterval(params.timer);
//             params.timer = null;
//             params.ready = true;
//             params.audio.pause();
//             params.audio.volume = args.volume;
//             params.audio.currentTime = 0;

//             // SET REPEAT HERE AFTER DURATION INIT HAS BEEN DONE
//             // NOTE: Edge wont loop unless src is an array of sources (BUG)
//             if (params.isEdge && !isArray(args.src)) {
//                 if (args.offsetLoopBy == 0) {
//                     args.offsetLoopBy = 0.01;
//                 }
//             } else {
//                 if (args.repeat == -1) {
//                     params.audio.loop = true;
//                 }
//             }
//         } else {
//             // setHTML("debug3", "duration = ??");
//         }

//         // log(args);
//         // log(params);
//     }
//     // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



//     function onTimeUpdate(e) {
//         // Doesn't need to do anything, but "ontimeupdate" event needs to be initialised
//         // log("onTimeUpdate()");
//         // params.currentTime = this.currentTime;
//         // params.audio.duration = this.duration;
//         // setHTML("debug2","duration = " + params.audio.duration.toFixed(3));
//     }
//     // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



//     function playCompleteViaEvent() {
//         if (params.audio.loop) {
//             // log("AUDIO is in loop mode");
//             return;
//         }

//         if (params.manualLooping) { return; }

//         params.playCount++;
//         // log("playCompleteViaEvent(): playCount = " + params.playCount + " : args.repeat = " + args.repeat);

//         params.audio.currentTime = 0;

//         if (args.repeat == -1) {
//             // repeat forever
//             params.audio.currentTime = 0;
//             params.audio.play();
//         } else {
//             if (params.playCount <= args.repeat) {
//                 // repeat
//                 params.audio.currentTime = 0;
//                 params.audio.play();
//             } else {
//                 // complete
//                 params.audio.pause();
//                 params.audio.currentTime = 0;

//                 if (args.onComplete) {
//                     args.onComplete();
//                 }
//             }
//         }

//     }
//     // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



//     function checkPlayPos() {
//         if (!params.manualLooping) { return; }

//         // setHTML("debug1", "time = " + params.audio.currentTime.toFixed(3) + "/" + params.audio.duration.toFixed(3));

//         if (params.manualLoopingComplete) {
//             // log("checkPlayPos(): manualLoopingComplete!");
//             return;
//         }
//         params.endTimeWithOffset = params.audio.duration - args.offsetLoopBy;
//         if (params.audio.currentTime >= params.endTimeWithOffset) {
//             params.playCount++;

//             if (args.repeat == -1) {
//                 // repeat forever
//                 params.audio.currentTime = 0;
//             } else if (args.repeat > 0) {
//                 if (params.playCount <= args.repeat) {
//                     // repeat
//                     params.audio.currentTime = 0;
//                 } else {
//                     // COMPELTE
//                     params.manualLoopingComplete = true;
//                     // log("COMPLETE!");
//                     clearInterval(params.timer);
//                     params.timer = null;
//                     if (args.onComplete) {
//                         args.onComplete();
//                     }
//                 }
//             }
//         }
//     }
//     // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -





//     function play() {
//         if (params.audio) {
//             if (!params.isReady) {
//                 console.warn("AFTC.Audio(): WARNING: Audio is not ready! [load has not completed, will try to play anyway!]");
//             }
//             params.playCount = 0;
//             params.manualLoopingComplete = false;
//             params.audio.currentTime = 0;

//             if (args.offsetLoopBy != 0) {
//                 params.manualLooping = true;
//                 params.timer = setInterval(checkPlayPos, params.timerInterval);
//                 params.audio.play();
//             } else {
//                 params.manualLooping = false;
//                 params.audio.play();
//             }
//         } else {
//             console.warn("AFTC.Audio(): WARNING: Audio is not ready!");
//         }
//     }
//     // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



//     function pause() {
//         if (params.audio) {
//             params.audio.pause();
//         }
//     }
//     // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


//     function resume() {
//         if (params.audio) {
//             params.audio.play();
//         }
//     }
//     // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



//     function dispose() {
//         params.audio.removeEventListener('timeupdate', onTimeUpdate, false);
//         params.audio.removeEventListener('ended', playCompleteViaEvent, false);
//         params.audio = undefined;
//     }
//     // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



//     // public
//     // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
//     this.play = function () { play(); }
//     this.pause = function () { pause(); }
//     this.stop = function () { pause(); }
//     this.resume = function () { resume(); }
//     // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
//     this.dispose = function () { dispose(); }
//     // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
//     this.getAudio = function () { return params.audio; }
//     // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
//     this.isReady = function () { return params.ready; }
//     // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



//     // Constructor simulation (run construct or init in this case)
//     init();
// }
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -





    // window.playSound = function (url, vol, loop, onComplete) {
    //     var sound = new Audio(url);
    //     vol ? sound.volume = vol : sound.volume = 1;
    //     if (loop) {
    //         sound.loop = true;
    //         // sound.addEventListener('ended', function () {
    //         //     log("ENDED!");
    //         //     this.currentTime = 0;
    //         //     this.play();
    //         // }, false);
    //     }

    //     if (onComplete) {
    //         try {
    //             sound.removeEventListener("ended", onComplete, false);
    //         } catch (e) { }
    //     }
    //     sound.play();
    //     return sound;
    // }
/*
 * Author: Darcey.Lloyd@gmail.com
 */



/**
 * @function: AFTC.Animate()
 * @version: 2.3.14
 * @requires: base.js
 * @function: AFTC.Animate(elementId, onComplete)
 * @desc: Quick and easy css animation for nearly every css element style
 * ```
 * var anim1 = new AFTC.Animate("box1", onCompleteFunction);
 * anim1.wait(2); // wait in 2 seconds
 * anim1.set("backgroundColor","RGBA(255,255,255,0.5)"); // sets background color to white 50% opacity
 * anim1.anim("fontColor","RGBA(255,0,0,1)",1.5); // animates the font color to red over 1.5 seconds
 * anim1.set(["html","paddingLeft",left"],["hello","10px","100px"],[1,2,3]); // sets innerHTML, padding-left and left position over 1, 2 and 3 seconds
 * ```
 * @link: see usage example in test/animation.htm
 * @link: https://codepen.io/AllForTheCode/pen/MXYGob
 * @link: https://codepen.io/AllForTheCode/pen/MXYPqq
 * @link: https://codepen.io/AllForTheCode/pen/xzbymv
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
            style = [style];
            value = [value];
            duration = [duration];
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





// /**
//  * @function: fadeIn(elementId, duration)
//  * @desc: fades in an element over a specified duration
//  * @param string elementId: the id of the html element you wish to fade
//  * @param number duration: how long you want the fade to run over in seconds
//  */
// window.fadeIn = function (elementId, duration) {
//     var cleanUp = function(){
//         animation = null;
//         delete(animation);
//     }
//     var animation = new AFTC.Animate(elementId,cleanUp);
//     animation.anim(["opacity"],[1],[duration]);
//     animation.start();
// }


// /**
//  * @function: fadeOut(elementId, duration)
//  * @desc: fades out an element over a specified duration
//  * @param string elementId: the id of the html element you wish to fade
//  * @param number duration: how long you want the fade to run over in seconds
//  */
// window.fadeOut = function (elementId, duration) {
//     var cleanUp = function(){
//         animation = null;
//         delete(animation);
//     }
//     var animation = new AFTC.Animate(elementId,cleanUp);
//     animation.anim(["opacity"],[0],[duration]);
//     animation.start();
// }
// // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -




// /**
//  * @function: getHSLColor(xxx)
//  * @desc: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
//  * @param string xxxx: xxxxxxxxxxxxxxxxxxxx
//  */
// window.getHSLColor = function (value) {
//   //value from 0 to 1
//   var hue = ((1 - value) * 120).toString(10);
//   return ["hsl(", hue, ",100%,50%)"].join("");
// }
// // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


/**
 * @function: AFTC.Color({params})
 * @desc: Color allows you to create, convert, lighten or darken colours and more.
 * ```
 * var color1 = new AFTC.Color(); // creates a random color
 * var color2 = new AFTC.Color({r:255,g:100,b:0}); // creates an RGB color
 * var color3 = new AFTC.Color({r:255,g:100,b:0,a:1}); // creates an RGBA color
 * log( color3.getHex() ); // Outputs the hex code of color 3
 * ```
 * @param object params: parameters object
 * @method lighten(percent,spectrum): lighten the color by precent and optional spectrum {r:bool,g;bool,b:bool}
 * @method darken(percent,spectrum): darken the color by precent and optional spectrum {r:bool,g;bool,b:bool}
 * @method randomizeColor: randomises the colour
 * @method getRGBString: returns the RGB value of the color
 * @method getRGBAString: returns the RGBA value of the color
 * @method getHexString: returns the HEX value of the color
 * @method getHex: returns the HEX value of the color
 * @method hex: returns the HEX value of the color
 * @method getRGB: returns the RGB value of the color
 * @method rgb: returns the RGB value of the color
 * @method getRGBA: returns the RGBA value of the color
 * @method rgba: returns the RGBA value of the color
 * @method setRGB: returns the RGB value of the color
 * @method setHex: returns the HEX value of the color
 * @return AFTC.Color
 * @link: https://codepen.io/AllForTheCode/pen/mLZRge
 */
AFTC.Color = function () {
    var me = this;
    var args = {
        r: false, g: false, b: false, a: false,
        hex: false
    };
    var params = {
        r: false,
        g: false,
        b: false,
        a: false,
    };

    argsToObject(arguments, args);


    function init() {
        // log(args);

        if (args.hex) {
            // log("HEX");
            params.hex = args.hex;
            initHex();
        } else if (!args.hex && !isBool(args.r) && !isBool(args.g) && !isBool(args.b) && !args.a) {
            // log("RGB");
            !args.r ? params.r = 0 : params.r = args.r;
            !args.g ? params.g = 0 : params.g = args.g;
            !args.b ? params.b = 0 : params.b = args.b;
            params.a = 1;
        } else if (!args.hex && !isBool(args.r) && !isBool(args.g) && !isBool(args.b) && !isBool(args.a)) {
            // log("RGBA");
            !args.r ? params.r = 0 : params.r = args.r;
            !args.g ? params.g = 0 : params.g = args.g;
            !args.b ? params.b = 0 : params.b = args.b;
            !args.a ? params.a = 0 : params.a = args.a;
        } else {
            // log("RANDOM");
            randomizeColor();
        }
    }


    function initHex() {
        args.hex = args.hex.replace("#", "");
        var HexBits = args.hex.match(/.{1,2}/g)
        params.r = hexToDec(HexBits[0]);
        params.g = hexToDec(HexBits[1]);
        params.b = hexToDec(HexBits[2]);
        params.a = 1;
    }


    function randomizeColor() {
        params.r = Math.round(Math.random() * 255);
        params.g = Math.round(Math.random() * 255);
        params.b = Math.round(Math.random() * 255);
        params.a = 1;
    }


    function alterByPercent(percent, r, g, b) {
        var step = 255 / 100; // step for 255 as a %

        function getValue(color, percent) {
            var currentP = parseInt((100 / 255) * color);
            var targetP = parseInt(currentP + percent);
            if (targetP > 100) {
                targetP = 100;
            }
            if (targetP < -100) {
                targetP = -100;
            }

            var newColor = Math.ceil(step * targetP);
            if (newColor > 255) {
                newColor = 255;
            }
            if (targetP < 0) {
                newColor = 0;
            }

            // log(percent + ": " + color + " = " + currentP + " > " + targetP + " = " + newColor);
            return newColor;
        }

        if (r) {
            params.r = getValue(params.r, percent);
        }
        if (g) {
            params.g = getValue(params.g, percent);
        }
        if (b) {
            params.b = getValue(params.b, percent);
        }
    }


    this.lighten = function (percent, spectrum) {
        if (!spectrum) {
            alterByPercent(percent, true, true, true);
        } else {
            var enableR = true,
                enableG = true,
                enableB = true;
            if (spectrum.r) {
                enableR = spectrum.r;
            }
            if (spectrum.g) {
                enableG = spectrum.g;
            }
            if (spectrum.b) {
                enableB = spectrum.b;
            }
            alterByPercent(percent, spectrum.r, spectrum.g, spectrum.b);
        }

    }

    this.darken = function (percent, spectrum) {
        if (!spectrum) {
            alterByPercent(-percent, true, true, true);
        } else {
            var enableR = true,
                enableG = true,
                enableB = true;
            if (spectrum.r) {
                enableR = spectrum.r;
            }
            if (spectrum.g) {
                enableG = spectrum.g;
            }
            if (spectrum.b) {
                enableB = spectrum.b;
            }
            alterByPercent(-percent, spectrum.r, spectrum.g, spectrum.b);
        }
    }


    // Utility functions
    // Calculates a number between two numbers at a specific increment
    function lerp(a, b, i) {
        return (1 - i) * a + i * b;
    };

    function hexToDec(v) {
        return parseInt(v, 16);
    }

    function decToHex(v) {
        var hex = v.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    }

    // Public function
    this.fadeTo = function(r,g,b,steps){
        let color = this.getRGB();
        return this.fadeFromTo(color.r,color.g,color.b,r,g,b,steps);
    }

    this.fadeFromTo = function(r1,g1,b1,r2,g2,b2,steps){
        let colors = [];
        let colorVo = function(){
            this.r = 0;
            this.g = 0;
            this.b = 0;
        }

        let tick = 1 / (steps);
        let distFrom1 = 0;
        for(let i=0; i <= 1; i+=tick){


            // Ensure i gets to 1
            // distFrom1 = 1-i;
            // if (distFrom1<0.05){
            //     i = 1;
            // }
            // log(i + "    distFrom1:" + distFrom1);

            let color = new colorVo();
            color.r = Math.round(lerp(r1,r2,i));
            color.g = Math.round(lerp(g1,g2,i));
            color.b = Math.round(lerp(b1,b2,i));
            colors.push(color);

            // i = Math.round ((i+tick)*100 );
            // i /= 100;
        }
        return colors;
    }

    this.randomizeColor = function () {
        randomizeColor();
    }

    this.getRGBString = function () {
        var c = "RGB(" + params.r + "," + params.g + "," + params.b + ")";
        return c;
    }
    this.getRGBAString = function () {
        var c = "RGBA(" + params.r + "," + params.g + "," + params.b + "," + params.a + ")";
        return c;
    }
    this.getHexString = function () {
        var c = "#" + decToHex(params.r) + decToHex(params.g) + decToHex(params.b);
        c = c.toUpperCase();
        return c;
    }
    this.getHex = function () {
        return this.getHexString();
    }
    this.hex = function () {
        return this.getHex();
    }
    this.getRGB = function () {
        let v = {
            r:params.r,
            g:params.g,
            b:params.b
        };
        return v;
    }
    this.rgb = function () {
        return this.getRGB();
    }
    this.getRGBA = function () {
        let o = {
            r:params.r,
            g:params.g,
            b:params.b,
            a:params.a
        }
        return o;
    }
    this.rgba = function () {
        return this.getRGBA();
    }
    this.setRGB = function (r, g, b) {
        params.r = r;
        params.g = g;
        params.b = b;
    }
    this.setHex = function (hex) {
        args.hex = hex;
        initHex();
    }
    this.setR = function (v) {
        params.r = v;
    }
    this.r = function (v) {
        params.r = v;
    }
    this.getR = function () {
        return params.r;
    }
    this.setG = function (v) {
        params.g = v;
    }
    this.g = function (v) {
        params.g = v;
    }
    this.getG = function () {
        return params.g;
    }
    this.setB = function (v) {
        params.b = v;
    }
    this.b = function (v) {
        params.b = v;
    }
    this.getB = function () {
        return params.b;
    }
    this.setA = function (v) {
        params.a = v;
    }
    this.a = function (v) {
        params.a = v;
    }
    this.getA = function () {
        return params.a;
    }

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
        onStartStyles: false,
        onCompleteStyles: false,
        animateHeight: false,
        onStartAddClassList: false,
        onStartRemoveClassList: false,
        onCompleteAddClassList: false,
        onCompleteRemoveClassList: false,
        onComplete: false
    }

    argsToObject(arguments, vars);

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
                } catch (e) { }
            }
        } else if (typeof (classList) == "string") {
            try {
                vars.element.classList.remove(classList);
            } catch (e) { }
        }
    }

    function addClassList(classList) {
        if (isArray(classList)) {
            for (var key in classList) {
                var className = classList[key];
                try {
                    vars.element.classList.add(className);
                } catch (e) { }
            }
        } else if (typeof (classList) == "string") {
            try {
                vars.element.classList.add(classList);
            } catch (e) { }
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

    function processOnStartStyles() {
        // log("processOnStartStyles()");
        if (vars.onStartStyles) {
            for (var key in vars.onStartStyles) {
                var styleObject = key;
                var value = vars.onStartStyles[key];
                try {
                    vars.element.style[key] = value;
                } catch (e) { }
            }
        }
    }

    function processOnCompleteStyles() {
        // log("processOnCompleteStyles()");
        if (vars.onCompleteStyles) {
            for (var key in vars.onCompleteStyles) {
                var styleObject = key;
                var value = vars.onCompleteStyles[key];
                try {
                    vars.element.style[key] = value;
                } catch (e) { }
            }
        }
    }

    function _hide() {
        getElement();
        if (!vars.element || !isElement(vars.element)) { return; }

        processOnStartClassLists();
        processOnStartStyles();

        function setOnCompleteState() {
            vars.element.style.transitionDuration = "0s";
            processOnCompleteClassLists();
            processOnCompleteStyles();
            if (vars.onComplete) {
                vars.onComplete();
            }
        }

        if (vars.duration) {
            // Ensure heights are set
            vars.element.style.height = getComputedStyle(vars.element).height;
            // vars.element.style.height = "0px";

            // Prevent double run with duration and opacity set at delay
            setTimeout(function () {
                vars.element.style.transitionDuration = vars.duration + "s";
                vars.element.style.opacity = 0;
            }, 25);
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
            }, (vars.delay * 1000));
        } else {
            _hide();
        }
    }


    function _show() {
        getElement();
        if (!vars.element || !isElement(vars.element)) { return; }

        processOnStartClassLists();
        processOnStartStyles();

        if (vars.element.style.display == "none" || vars.element.style.display == "") {
            vars.element.style.display = "block";
        }

        function setOnCompleteState() {
            vars.element.style.transitionDuration = "0s";
            vars.element.style.opacity = 1;
            processOnCompleteClassLists();
            processOnCompleteStyles();
            if (vars.onComplete) {
                vars.onComplete();
            }
        }

        if (vars.duration) {
            vars.element.style.opacity = 0;
            // Prevent double run with duration and opacity set at delay
            setTimeout(function () {
                vars.element.style.transitionDuration = vars.duration + "s";
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
            }, (vars.delay * 1000));
        } else {
            _show();
        }
    }
}

window.show = function () {
    if (typeof (arguments[0]) == "string") {
        var args = { id: arguments[0] }
        AFTC.Visibility(args).show();
    } else if (isElement(arguments[0])) {
        var args = { element: arguments[0] }
        AFTC.Visibility(args).show();
    } else {
        AFTC.Visibility(arguments[0]).show();
    }
}
window.fadeIn = function () { window.show(arguments[0]); }

window.hide = function () {
    if (typeof (arguments[0]) == "string") {
        var args = { id: arguments[0] }
        AFTC.Visibility(args).hide();
    } else if (isElement(arguments[0])) {
        var args = { element: arguments[0] }
        AFTC.Visibility(args).hide();
    } else {
        AFTC.Visibility(arguments[0]).hide();
    }
}
window.fadeOut = function () { window.hide(arguments[0]); }



// AFTC init
var AFTC = AFTC || {}

/* Some reading / ref material
https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState
https://developer.mozilla.org/es/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest
https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest
*/



 /**
 * @function: AFTC.XHR({options})
 * @desc: Quick and easy xhr/ajax
 * @params seelink seelink : please review link
 * @link: https://codepen.io/AllForTheCode/pen/dKodKx
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
						// log(key + " = " + args.data[key]);
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




