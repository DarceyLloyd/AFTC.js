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