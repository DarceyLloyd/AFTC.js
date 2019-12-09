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
 * @function: loadJS(url, onComplete, location)
 * @desc: cycles from 0 to max based on pos, will cycle back to 0 if over max
 * @param url string: Path to javascript file to load
 * @param onComplete function: The function you wish to call once the script has loaded
 * @link:
 */
var loadJS = function (src, onComplete) {
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

    script.src = src;

    script.onreadystatechange = function () {
        if (this.readyState == 'complete' || this.readyState == 'loaded') {
            if (onComplete) {
                onComplete();
            }
        }
    };

    script.onload = function () {
        if (onComplete) {
            onComplete();
        }
    };

    head.appendChild(script);

};

