
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
window.argsToObject = function (fArgs, obj, strict) {
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
window.argsTo = function (args, obj, strict) { argsToObject(args, obj, strict); }




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