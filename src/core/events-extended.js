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
