window.scrollToElementId = function (elementId, speed, delay, offset) {
	//scrollToElement($("#"+elementId), speed, delay); // jQuery

	// Check dependancies
	if (typeof (TweenLite) == "undefined" && typeof (TweenMax) == "undefined") {
		throw ("AFTC.js > animation.tweenlite.js: Error - Missing dependancy TweenLite.min.js!");
		return false;
	}
	if (typeof (ScrollToPlugin) == "undefined") {
		throw ("AFTC.js > animation.tweenlite.js: Error - Missing dependancy ScrollToPlugin.min.js!");
		return false;
	}

	if (!speed) {
		speed = 1;
	}

	if (!delay) {
		delay = 0;
	}

	if (!offset) {
		offset = 0;
	} else {
		offset = -offset;
	}

	// GSAP TweenLite || TweenMax with ScrollToPlugin
	TweenLite.to(window, speed, {
		delay: delay,
		scrollTo: {
			y: ("#" + elementId),
			offsetY: offset
		}
	});
}

window.scrollToElementClass = function ($class, speed, delay, offset) {
	//scrollToElement($("."+$class), speed, delay); // jQuery

	// Check dependancies
	if (typeof (TweenLite) == "undefined" && typeof (TweenMax) == "undefined") {
		throw ("AFTC.js > animation.tweenlite.js: Error - Missing dependancy TweenLite.min.js!");
		return false;
	}
	if (typeof (ScrollToPlugin) == "undefined") {
		throw ("AFTC.js > animation.tweenlite.js: Error - Missing dependancy ScrollToPlugin.min.js!");
		return false;
	}

	if (!speed) {
		speed = 1;
	}

	if (!delay) {
		delay = 0;
	}

	if (!offset) {
		offset = 0;
	} else {
		offset = -offset;
	}


	var element = document.getElementsByClassName($class);
	if (!element) {
		console.error("scrollToElementClass(): Cannot find element with class [" + $class + "]");
	} else {
		// GSAP TweenLite || TweenMax with ScrollToPlugin
		TweenLite.to(window, speed, {
			delay: delay,
			scrollTo: {
				y: ("." + $class),
				offsetY: offset
			}
		});
	}
}


