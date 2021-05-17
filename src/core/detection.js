/**
 * @function: isMobile()
 * @desc: Detects if the device you are using is a mobile or not
 * @return boolean
 * @link: https://codepen.io/AllForTheCode/pen/KRbLdm
 */
window.isMobile = function(){
    // Windows Phone must come first because its UA also contains "Android"!
    let ua = navigator.userAgent.toLowerCase();
    if (/windows phone/i.test(ua)) {
        return true;
    } else {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            return true;
        } else {
            return false;
        }
    }
}

/**
 * @function: isAndroid()
 * @desc: Detects if the device you are using is android or not
 * @return boolean
 * @link: https://codepen.io/AllForTheCode/pen/RyEmgN
 */
window.isAndroid = function(){
    let ua = navigator.userAgent.toLowerCase();
    if (/windows phone/i.test(ua)) {
        return false;
    } else {
        let isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");
        return isAndroid;
    }
}

/**
 * @function: iOS()
 * @desc: Detects if the device you are using is iOS or not
 * @return boolean
 * @link: https://codepen.io/AllForTheCode/pen/ELGzXO
 */
window.iOS = function() {
	var iDevices = [
	  'iPad Simulator',
	  'iPhone Simulator',
	  'iPod Simulator',
	  'iPad',
	  'iPhone',
	  'iPod'
	];

	if (!!navigator.platform) {
	  while (iDevices.length) {
		if (navigator.platform === iDevices.pop()){ return true; }
	  }
	}

	return false;
  }


/**
 * @function: isFireFox()
 * @desc: Detects FireFox
 * @return boolean
 * @link: https://codepen.io/AllForTheCode/pen/mLaYMe
 */
window.isFireFox = function () {
	// var is_firefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
	// return is_firefox;
	return (typeof InstallTrigger !== 'undefined');
}

/**
 * @function: isChrome()
 * @desc: Detects Chrome
 * @return boolean
 * @link: https://codepen.io/AllForTheCode/pen/xjmNLM
 */
window.isChrome = function () {
    var isChromium = window.chrome;
    var winNav = window.navigator;
    var vendorName = winNav.vendor;
    var isOpera = typeof window.opr !== "undefined";
    var isIEedge = winNav.userAgent.indexOf("Edge") > -1;
    var isIOSChrome = winNav.userAgent.match("CriOS");

    // Have to detect edge first as it's now chromium based
    if (/Edge|Edg\/\d./i.test(navigator.userAgent)) {
    // if (/Edge\/\d./i.test(navigator.userAgent)) {
        return false;
    }

    if (isIOSChrome) {
        // is Google Chrome on IOS
        return true;
    } else if (
        isChromium !== null &&
        typeof isChromium !== "undefined" &&
        vendorName === "Google Inc." &&
        isOpera === false &&
        isIEedge === false
    ) {
        // is Google Chrome
        return true;
    } else {
        // not Google Chrome
        return false;
    }
}

/**
 * @function: isIOS()
 * @desc: Detects iOS
 * @return boolean
 */
window.isIOS = function() {
    let ua = navigator.userAgent;
    if (/iPad Simulator|iPhone Simulator|iPod Simulator|iPad|iPod|iPhone/i.test(ua)) {
        return true;
    } else {
        return false;
    }
}




/**
 * @function: isEdge()
 * @desc: Detects Edge
 * @return boolean
 * @link: https://codepen.io/AllForTheCode/pen/aGPrLP
 */
window.isEdge = function () {
    //let isEdge = !isIE && !!window.StyleMedia; // Edge 20+
    let edge = false;

    if (/Edge|Edg\/\d./i.test(navigator.userAgent)) {
        edge = true;
    }
    return edge;
}


/**
 * @function: isSafari()
 * @desc: Detects Safari
 * @return boolean
 * @link: https://codepen.io/AllForTheCode/pen/gzZJXr
 */
window.isSafari = function () {
    // let is_safari = navigator.userAgent.toLowerCase().indexOf('safari') > -1;
    // return is_safari;
    // return /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));
    if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
        return true;
    } else {
        return false;
    }
}

/**
 * @function: isIE()
 * @desc: Detects IE
 * @return boolean
 * @link: https://codepen.io/AllForTheCode/pen/MGZdOG
 */
window.isIE = function () {
	// var is_ie = navigator.userAgent.toLowerCase().indexOf('MSIE') > -1;
	// return is_ie;
	// params.isIE = navigator.userAgent.match(/MSIE|Trident/);
	// params.isIE = document.documentMode; // IS9 and above
	return /*@cc_on!@*/false || !!document.documentMode; // Internet Explorer 6-11
}


/**
 * @function: isOpera()
 * @desc: Detects Opera
 * @return boolean
 * @link: https://codepen.io/AllForTheCode/pen/dewEJb
 */
window.isOpera = function() {
    // let isChromium = window.chrome;
    // let isOpera = window.navigator.userAgent.indexOf("OPR") > -1 || window.navigator.userAgent.indexOf("Opera") > -1;
    // let isOpera = (navigator.userAgent.match(/Opera|OPR\//) ? true : false);
    let isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
    return isOpera;
}

/**
 * @function: getIEVersion()
 * @desc: Gets version of IE
 * @return float
 * @link: https://codepen.io/AllForTheCode/pen/BxveJp
 */
window.getIEVersion = function () {
	var match = navigator.userAgent.match(/(?:MSIE |Trident\/.*; rv:)(\d+)/);
	return match ? parseInt(match[1]) : undefined;
}

/**
 * @function: getBrowser()
 * @desc: Detects browser
 * @return string
 * @link: https://codepen.io/AllForTheCode/pen/GdPaQZ
 */
window.getBrowser = function () {
	var ua = navigator.userAgent, tem, M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
	if (/trident/i.test(M[1])) {
		tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
		return 'IE';
	}
	if (M[1] === 'Chrome') {
		tem = ua.match(/\bOPR\/(\d+)/);
		if (tem != null) {
			return 'Opera';
		}
	}
	M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
	if ((tem = ua.match(/version\/(\d+)/i)) != null) {
		M.splice(1, 1, tem[1]);
	}
	return M[0];
}
// -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -



/**
 * @function: getOS()
 * @desc: Attempts to get the os from the user agent or the test user agent
 */
window.getOS = function() {
    var userAgent = window.navigator.userAgent,
        platform = window.navigator.platform,
        macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
        windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
        iosPlatforms = ['iPhone', 'iPad', 'iPod'],
        os = null;

    if (macosPlatforms.indexOf(platform) !== -1) {
        os = 'Mac OS';
    } else if (iosPlatforms.indexOf(platform) !== -1) {
        os = 'iOS';
    } else if (windowsPlatforms.indexOf(platform) !== -1) {
        os = 'Windows';
    } else if (/Android/.test(userAgent)) {
        os = 'Android';
    } else if (!os && /Linux/.test(platform)) {
        os = 'Linux';
    }

    return os;
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
