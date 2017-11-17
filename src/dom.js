





// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
window.AFTCLockBodyParams = {
	pageYOffset: null,
	elementId: ""
};
window.lockBody = function () {
	if (arguments[0] && typeof (arguments[0]) == "object") {
		for (var key in arguments[0]) {
			if (window.AFTCLockBodyParams.hasOwnProperty(key)) {
				window.AFTCLockBodyParams[key] = arguments[0][key];
			} else {
				throw ("AFTC.js > dom.js > lockBody(): Usage Error - Unknown parameter [" + key + "]");
			}
		}
	} else {
		var usage = "\n";
		usage += "AFTC.js > dom.js > lockBody() usage:" + "\n";
		usage += "lockBody({elementId:'PageContainmentDivId'});" + "\n";
		usage += "unlockBody();" + "\n";
		throw (usage);
	}

	if (window.pageYOffset) {
		window.AFTCLockBodyParams.pageYOffset = window.pageYOffset;

		$('html, body').css({
			top: -(window.AFTCLockBodyParams.pageYOffset)
		});
	}

	$('#' + window.AFTCLockBodyParams.elementId).css({
		height: "100%",
		overflow: "hidden"
	});
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
window.unlockBody = function () {
	$('#' + window.AFTCLockBodyParams.elementId).css({
		height: "",
		overflow: ""
	});

	$('html, body').css({
		top: ''
	});

	window.scrollTo(0, window.AFTCLockBodyParams.pageYOffset);
	window.setTimeout(function () {
		window.AFTCLockBodyParams.pageYOffset = null;
	}, 0);
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -





// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
window.centerAbsoluteElement = function (eleOrEleId) {
	var element;

	if (typeof (eleOrEleId) === "string") {
		element = document.getElementById(eleOrEleId);
		if (!element) {
			throw ("AFTC.js > centerAbsoluteElement(elementOrElementId): ERROR! elementId supplied was not found on the DOM!");
		}
	}

	// var marginL = parseInt( getComputedStyle(element,null).marginLeft );
	// var marginR = parseInt( getComputedStyle(element,null).marginRight );
	// var marginT = parseInt( getComputedStyle(element,null).marginTop );
	// var marginB = parseInt( getComputedStyle(element,null).marginBottom );

	// var paddingL = parseInt( getComputedStyle(element,null).paddingLeft );
	// var paddingR = parseInt( getComputedStyle(element,null).paddingRight );
	// var paddingT = parseInt( getComputedStyle(element,null).paddingTop );
	// var paddingB = parseInt( getComputedStyle(element,null).paddingBottom );

	// var borderLeftW = parseInt( getComputedStyle(element,null).borderLeftWidth );
	// var borderRighttW = parseInt( getComputedStyle(element,null).borderRighttWidth );
	// var borderTopW = parseInt( getComputedStyle(element,null).borderTopWidth );
	// var borderBottomW = parseInt( getComputedStyle(element,null).borderBottomWidth );

	var offsetWidth = parseInt(element.offsetWidth);
	var offsetHeight = parseInt(element.offsetHeight);

	var tx = (window.innerWidth / 2) - (offsetWidth / 2);
	var ty = (window.innerHeight / 2) - (offsetHeight / 2);

	element.style.left = tx + "px";
	element.style.top = ty + "px";

	// element.css("left", tx);
	// element.css("top", ty);
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -