// AFTC init
var AFTC = AFTC || {}

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



// AFTC.totParams = {
//     startTime:0,
//     endTime:0,
//     startValue:0,
//     endValue:0,
//     duration:0,
//     active:false,
//     step:0,
//     range:0,
//     onUpdate:false,
//     onComplete:false
// }
// window.tweenValueOverTime = function(start,end,duration,onUpdate,onComplete){
//     if(AFTC.totParams.active){
//         console.warn("tweenValueOverTime(): Error: Already running, if you require more advanced value tweening please use AFTC.Animate()");
//         return;
//     }
    
//     AFTC.totParams.active = true;
//     AFTC.totParams.duration = duration * 1000;
//     AFTC.totParams.startTime = new Date().getTime();
//     AFTC.totParams.endTime = AFTC.totParams.startTime + AFTC.totParams.duration;
//     AFTC.totParams.startValue = start;
//     AFTC.totParams.endValue = end;
//     AFTC.totParams.range = AFTC.totParams.endValue-AFTC.totParams.startValue;
//     AFTC.totParams.step = AFTC.totParams.range/(duration*1000);
//     AFTC.totParams.onUpdate = onUpdate;
//     AFTC.totParams.onComplete = onComplete;
//     log(AFTC.totParams);
//     AFTCTweenValueEngine();
// }
// window.AFTCTweenValueEngine = function(){
//     var c = new Date().getTime() - AFTC.totParams.startTime;
//     var v = 0;
//     if (c < AFTC.totParams.duration){
//         v = AFTC.totParams.startValue + AFTC.totParams.step * c;
//         log(c + " v=" + v);
//         if (onUpdate){
//             onUpdate(v);
//         }
//         requestAnimationFrame(AFTCTweenValueEngine);
//     } else {
//         v = AFTC.totParams.endValue;
//         log(c + " v=" + v);
//         log("COMPELTE");
//         if (onUpdate){
//             onComplete(v);
//         }
//     }
    
// }



/**
 * @function: fadeIn(elementId, duration)
 * @desc: fades in an element over a specified duration
 * @param string elementId : the id of the html element you wish to fade
 * @param number duration : how long you want the fade to run over in seconds
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
 * @param string elementId : the id of the html element you wish to fade
 * @param number duration : how long you want the fade to run over in seconds
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
 * @function: getElementOffsetTop(elementIdOrQuery)
 * @desc: Gets an elements top offset
 * @param string elementId: the element ID you wish to get the top offset of
 */
window.getElementOffsetTop = function (elementId) {
    var element = getElementById(elementId);
    var curtop = 0;
    if (isElement(element)){
        if (element.offsetParent) {
            do {
                curtop += element.offsetTop;
            } while (element = element.offsetParent);
            return parseFloat([curtop]);
        }
    }
    
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
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -