
/**
 * @function: loadJS(url, onComplete, location)
 * @desc: cycles from 0 to max based on pos, will cycle back to 0 if over max
 * @param url string: Path to javascript file to load
 * @param onComplete function: The function you wish to call once the script has loaded
 * @alians loadScript
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
    req.addEventListener("progress", function (event) {
        if (event.lengthComputable) {
            var percentComplete = event.loaded / event.total;
            // console.log(percentComplete);
            if (onProgress) {
                onProgress(percentComplete);
            }
        } else {
            // Unable to compute progress information since the total size is unknown
            if (onProgress) {
                onProgress(false);
            }
        }
    }, false);

    // load responseText into a new script element
    req.addEventListener("load", function (e) {
        script.innerHTML = e.target.responseText;
        document.documentElement.appendChild(script);

        if (onComplete) {
            onComplete();
        }

        script.addEventListener("load", function () {
            // this runs after the new script has been executed...
        });
    }, false);

    req.open("GET", src);
    req.send();

};
var loadScript = function (src, onComplete, onProgress) {
    loadJS(src, onComplete, onProgress);
}



/**
 * @function: loadCss(href,onComplete)
 * @desc: Loads a CSS file
 * @param string:href, function:onComplete (optional)
 * @alias:
 * @link:
 */

var loadCss = function (href, onComplete) {
    var link = document.createElement("link");
    link.onload = function () {
        if (onComplete) {
            onComplete();
        }
    }
    link.href = href;
    link.type = "text/css";
    link.rel = "stylesheet";
    link.media = "screen,print";
    document.getElementsByTagName("head")[0].appendChild(link);
}