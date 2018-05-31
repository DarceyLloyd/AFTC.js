/**
 * @function: redirect(url)
 * @desc: no more typing self.location.href, just use redirect(url)
 * @param string url: the url you wish to redirect to
 * @link: https://codepen.io/AllForTheCode/pen/xxxxxxx
 */
window.redirect = function (url) {
    self.location.href = url;
};


/**
 * @function: goFullScreen(element)
 * @desc: Go full screen, on an element if specified or whole browser if left out
 * @param element element: optional - html element that you want to go full screen on, leave out for whole browser
 * @link: https://codepen.io/AllForTheCode/pen/ELGWpE
 */
window.goFullScreen = function (element) {
    var target = document.body;
    if (element != undefined){
        if (isElement(element)) {
            target = element;
        }
    }
    
    if (target.requestFullscreen) {
        target.requestFullscreen();
    } else if (target.webkitRequestFullscreen) {
        target.webkitRequestFullscreen();
    } else if (target.mozRequestFullScreen) {
        target.mozRequestFullScreen();
    } else if (target.msRequestFullscreen) {
        target.msRequestFullscreen();
    } else {
        console.error('Fullscreen API is not supported.');
    }
}


/**
 * @function: exitFullScreen()
 * @desc: Exits full screen mode
 * @link: https://codepen.io/AllForTheCode/pen/ELGWpE
 */
window.exitFullScreen = function () {
	if (document.exitFullscreen) {
		document.exitFullscreen();
	} else if (document.webkitExitFullscreen) {
		document.webkitExitFullscreen();
	} else if (document.mozCancelFullScreen) {
		document.mozCancelFullScreen();
	} else if (document.msExitFullscreen) {
		document.msExitFullscreen();
	} else {
		console.error('Fullscreen API is not supported.');
	}
}