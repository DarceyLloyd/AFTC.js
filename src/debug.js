//Returns true if it is a DOM node
window.isNode = function (o) {
    return (
        typeof Node === "object" ? o instanceof Node :
        o && typeof o === "object" && typeof o.nodeType === "number" && typeof o.nodeName === "string"
    );
}

//Returns true if it is a DOM element    
window.isElement = function (o) {
    return (
        typeof HTMLElement === "object" ? o instanceof HTMLElement : //DOM2
        o && typeof o === "object" && o !== null && o.nodeType === 1 && typeof o.nodeName === "string"
    );
}



var lazyLog = true;

window.log = function (arg) {
    if (console) {
        if (lazyLog) {
            console.log(arg);
        }
    }
}

window.logEnable = function () {
    lazyLog = true;
    log("log() is now enabled.");
}

window.logDisable = function () {
    lazyLog = false;
    log("log() is now disabled.");
}

window.trace = function (arg) {
    if (console) {
        console.trace(arg);
    }
}



// Persistive option states
window.AFTCLogToOptions = {
    elementId: "",
    element: null,
    clear: false,
    append: true,
    logToConsole: true,
    addLineBreaks: true
}

window.logTo = function (msg) {
    var clear = false;
    var elementIdSupplied = false;
    var elementSupplied = false;
    var argIndex = -1;

    var args = arguments;

    var getOutputElement = function () {
        var element = document.getElementById(window.AFTCLogToOptions.elementId);
        if (element) {
            window.AFTCLogToOptions.element = element;
        } else {
            throw ("AFTC.js > logTo(): Usage error. The elementId [" + window.AFTCLogToOptions.elementId + "] you supplied cannot be found on the DOM!");
        }
    }

    var parseArguments = function (objArgs) {
        //log("parsingArguments(objArgs)");
        for (var key in objArgs) {
            var val = objArgs[key];
            //log(key + " = " + val);
            if (key == "clear") {
                clear = objArgs[key];
            }

            if (key == "elementId" && val.length > 0) {
                elementIdSupplied = true;
            }

            if (key == "element") {
                elementSupplied = true;
            }

            if (window.AFTCLogToOptions.hasOwnProperty(key)) {
                window.AFTCLogToOptions[key] = objArgs[key];
                //log("SETTING: " + key + " = " + val);
            } else {
                // Disable error as user may actually be trying to log an object
                //console.error("AFTC.logTo: Usage Error - Unknown paramater [" + key + "]");
            }
        }
    }


    if (arguments[0] && typeof (arguments[0]) == "object") {
        argIndex = 0;
        parseArguments(arguments[0]);
    } else if (arguments[1] && typeof (arguments[1]) == "object") {
        argIndex = 1;
        parseArguments(arguments[1]);

    }



    // Get element if elementId or element was given (element will override elementid)
    if (elementIdSupplied) {
        getOutputElement();
    }



    // if (!msg || msg == null || msg == undefined){
    //     // User should be setting persistent variables
    // } else {
    //     // User is attempting to output
    // }


    if (!window.AFTCLogToOptions.element || window.AFTCLogToOptions.element == null || window.AFTCLogToOptions.element == undefined) {
        if (window.AFTCLogToOptions.elementId == "") {
            var errorMessage = "AFTC.js > logTo(): Usage error. logTo has no element to output too.\n";
            errorMessage += "Please specify an elementId or element via options. eg\n";
            errorMessage += "logTo({elementId:'debugOutput'});\n";
            errorMessage += "logTo({element:myElementObject});\n";
            errorMessage += "logTo('Hello World');\n";
            errorMessage += "logTo('Hello World',{elementId:'debugOutput'});\n";
            errorMessage += "logTo('Hello World',{element:myElementObject});\n";
            errorMessage += "\nIf you don't want to log to a HTML element then just use log!\n";
            throw (errorMessage);
        } else {
            getOutputElement();
        }
    }




    if (clear) {
        window.AFTCLogToOptions.element.innerHTML = "";
    }




    if (arguments[0] && typeof (arguments[0]) == "string" && arguments[0].length > 0) {
        //if (typeof(msg) === "string" && msg.length > 0){        

        if (window.AFTCLogToOptions.logToConsole) {
            log(msg);
        }

        if (window.AFTCLogToOptions.addLineBreaks) {
            msg = msg + "<br>";
        }

        if (window.AFTCLogToOptions.append) {
            window.AFTCLogToOptions.element.innerHTML += msg;
        } else {
            var oldContent = window.AFTCLogToOptions.element.innerHTML;
            window.AFTCLogToOptions.element.innerHTML = (msg + oldContent);
            var oldContent = "";
        }
    }

}





window.logObjTo = function(elementId, obj, append) {
    var element = document.getElementById(elementId);
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

    if (append){
        var oldContent = element.innerHTML;
        element.innerHTML = oldContent + "<br>" + msg;
    } else {
        var oldContent = element.innerHTML;
        element.innerHTML = msg + "<br>" + oldContent;
    }
    


    log("Logging object:\n");
    for (var key in obj) {
        log(key + " = ");
        log(obj[key] + "\n");
    }
    log(" ");
}




// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
window.debugWindow = function (input) {
    var w = window.open('debug', 'debug', 'width=1200,height=400,resizeable,scrollbars');
    w.document.title = "Debug";
    w.document.write("<style>body {width:100%;}</style>");
    w.document.write("<div style='display:block;width:98%;-ms-word-wrap:break-word ;word-wrap:break-word;border:1px solid #000000;'>" + input + "</div>");
    //w.document.write("<div style='width:100%'>" + response + "</div>");
    w.document.close();
    //console.log(response);
}
window.stringToDebugWindow = function (input) {
    debugWindow(input);
}
window.stringToPopup = function (input) {
    debugWindow(input);
}
window.stringToWindow = function (input) {
    debugWindow(input);
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -