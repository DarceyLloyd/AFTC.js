/**
 * @function: isMobile()
 * @desc: isMobile
 * @return boolean
 */
window.isMobile = function(){
	// Windows Phone must come first because its UA also contains "Android"!
	var ua = navigator.userAgent.toLowerCase();
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

window.isAndroid = function(){
	var ua = navigator.userAgent.toLowerCase();
	if (/windows phone/i.test(ua)) {
		return false;
	} else {
		var isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");
		return isAndroid;
	}
}

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
 */
window.isFireFox = function () {
	var is_firefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
	return is_firefox;
}

/**
 * @function: isChrome()
 * @desc: Detects Chrome
 * @return boolean
 */
window.isChrome = function () {
	var is_chrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
	return is_chrome;
}

/**
 * @function: isSafari()
 * @desc: Detects Safari
 * @return boolean
 */
window.isSafari = function () {
	var is_safari = navigator.userAgent.toLowerCase().indexOf('safari') > -1;
	return is_safari;
}

/**
 * @function: isIE()
 * @desc: Detects IE
 * @return boolean
 */
window.isIE = function () {
	var is_ie = navigator.userAgent.toLowerCase().indexOf('MSIE') > -1;
	return is_ie;
}


/**
 * @function: isOpera()
 * @desc: Detects Opera
 * @return boolean
 */
window.isOpera = function() {
	var isChromium = window.chrome;
	// var isOpera = window.navigator.userAgent.indexOf("OPR") > -1 || window.navigator.userAgent.indexOf("Opera") > -1;
	var isOpera = (navigator.userAgent.match(/Opera|OPR\//) ? true : false);
	if(isChromium !== null && isOpera == true) {
		// is Opera (chromium)
	} else { 
		// not Opera (chromium) 
	}
	if (isOpera){
		return true;
	} else {
		return false;
	}
}

/**
 * @function: getIEVersion()
 * @desc: Gets version of IE
 * @return float
 */
window.getIEVersion = function () {
	var match = navigator.userAgent.match(/(?:MSIE |Trident\/.*; rv:)(\d+)/);
	return match ? parseInt(match[1]) : undefined;
}

/**
 * @function: getBrowser()
 * @desc: Detects browser
 * @return string
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
 * @function: getOS(testUserAgent)
 * @desc: Attempts to get the os from the user agent or the test user agent
 * @param string testUserAgent: test user agent string
 */
window.getOS = function (testAgent) {
	var userAgent;

	if (!testAgent){
		userAgent = navigator.userAgent || navigator.vendor || window.opera;
	} else {
		userAgent = testAgent;
	}

	userAgent = userAgent.toLowerCase();

	


	// Windows Phone must come first because its UA also contains "Android"!
	if (/windows phone/i.test(userAgent)) {
		return {
			os:"windows phone",
			userAgent:userAgent
		}
	}

	// Samsung Browser detection S8
	if (/samsungbrowser/i.test(userAgent)) {
		return {
			os:"android",
			userAgent:userAgent
		}
	}



	if (/android/i.test(userAgent)) {
		return {
			os:"android",
			userAgent:userAgent
		}
	}

	if (/ipad|iphone|ipod/i.test(userAgent)) {
		return {
			os:"ios",
			userAgent:userAgent
		}
	}



	// Windows Phone must come first because its UA also contains "Android"
	if (/win64|win32|win16|win95|win98|windows 2000|windows xp|msie|windows nt 6.3; trident|windows nt|windows/i.test(userAgent)) {
		return {
			os:"windows",
			userAgent:userAgent
		}
	}


	if (/os x/i.test(userAgent)) {
		return {
			os:"osx",
			userAgent:userAgent
		}
	}

	if (/macintosh|osx/i.test(userAgent)) {
		return {
			os:"osx",
			userAgent:userAgent
		}
	}

	if (/openbsd/i.test(userAgent)) {
		return {
			os:"open bsd",
			userAgent:userAgent
		}
	}


	if (/sunos/i.test(userAgent)) {
		return {
			os:"sunos",
			userAgent:userAgent
		}
	}






	if (/crkey/i.test(userAgent)) {
		return {
			os:"chromecast",
			userAgent:userAgent
		}
	}

	if (/appletv/i.test(userAgent)) {
		return {
			os:"apple tv",
			userAgent:userAgent
		}
	}

	if (/wiiu/i.test(userAgent)) {
		return {
			os:"nintendo wiiu",
			userAgent:userAgent
		}
	}

	if (/nintendo 3ds/i.test(userAgent)) {
		return {
			os:"nintendo 3ds",
			userAgent:userAgent
		}
	}

	if (/playstation/i.test(userAgent)) {
		return {
			os:"playstation",
			userAgent:userAgent
		}
	}

	if (/kindle/i.test(userAgent)) {
		return {
			os:"amazon kindle",
			userAgent:userAgent
		}
	}

	if (/ cros /i.test(userAgent)) {
		return {
			os:"chrome os",
			userAgent:userAgent
		}
	}



	if (/ubuntu/i.test(userAgent)) {
		return {
			os:"ubuntu",
			userAgent:userAgent
		}
	}


	if (/googlebot/i.test(userAgent)) {
		return {
			os:"google bot",
			userAgent:userAgent
		}
	}

	if (/bingbot/i.test(userAgent)) {
		return {
			os:"bing bot",
			userAgent:userAgent
		}
	}

	if (/yahoo! slurp/i.test(userAgent)) {
		return {
			os:"yahoo bot",
			userAgent:userAgent
		}
	}



	return {
		os: false,
		userAgent:userAgent
	};
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



