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