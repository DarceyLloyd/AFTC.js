// This is for animations that have no dependancies (functions that use jquery and gsap have their own files)

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
                    setTimeout(chain[0],100)
                    
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
                setTimeout(chain[0],100)
            }
        }

    }

    function processOnComplete() {
        if (typeof (onComplete) != "undefined") {
            // prevent multi run
            // animating some styles will result in the TransitionEnd firing multiple times!!!
            if (!hasOnCompleteRun){
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


    function getSuffixFromValueAndStyle(style,targetValue) {
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



    var onTransitionEndHandler = function(){
        // log("--- EVENT: TransitionEnd ---");
        element.removeEventListener("transitionend", onTransitionEndHandler, false);
        removeDuration();
        processChain("complete");
    }




    var animate = function (style, targetValue, duration) {
        //log("animate()");



        if (!element.style.hasOwnProperty(style)){
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
                if (!isNumeric(keyFloat)){
                    msg += "\t" + key + "\n";        
                }
            }
            throw (msg);
            return;
        }

        var suffix = getSuffixFromValueAndStyle(style,targetValue);
        
        // Ensure targetValue is a number / float for everything but colors #
        if (suffix != "#"){
            targetValue = parseFloat(targetValue);
        }
        
        var currentValue = element.style[style];
        var computedValue = getComputedStyle(element,null)[style];

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
            if (currentValue.length == 0){
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
            setTimeout(function(){
                element.style[style] = styleValue;
            },50);
            
            // log("\n\n\n");
        });
        return publicFunctions;
    }


    function set(style,value){
        processChain("add", function () {
            element.style[style] = value;
            processChain("complete");
        });
        return publicFunctions;
    }


    function delay(duration){
        processChain("add", function () {
            setTimeout(function(){
                processChain("complete");
            },(duration*1000));

        });
        return publicFunctions;
    }




    var publicFunctions = {
        delay: function (duration) {
            return delay(duration);
        },
        set: function (style,value) {
            return set(style,value);
        },
        opacity: function (targetValue, duration) {
            return animate("opacity", targetValue, duration);
        },
        prop: function (style,targetValue, duration) {
            return animate(style, targetValue, duration);
        }
    }



    return publicFunctions;
}



// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
window.fadeIn = function (elementQuery, duration) {
    window.fade("in", elementQuery, duration, arguments[2]);
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
window.fadeOut = function (elementQuery, duration) {
    window.fade("out", elementQuery, duration, arguments[2]);
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
