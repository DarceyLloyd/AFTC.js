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
                    console.error("AFTC.ArgsToObject(): Argument [" + key + "] is not supported.");
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
                    console.error("log(arg) ERROR: Your log variable (arg) is \"undefined\"!");
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