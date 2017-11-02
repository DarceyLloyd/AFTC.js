



// -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
window.redirect = function (url) {
	self.location.href = url;
};
// -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
window.dumpArgs = function () {
	if (arguments[0] && typeof (arguments[0]) == "object") {
		for (var key in arguments[0]) {
			console.log("Argument[" + key + "] = " + arguments[0][key]);
		}
	}
};
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
window.getArgs = function () {
	if (arguments[0] && typeof (arguments[0]) == "object") {
		return arguments[0];
	} else {
		return null;
	}
};
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
window.getRandomInt = function (min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
function getFunctionName(fn) {
	var name = fn.toString();
	var reg = /function ([^\(]*)/;
	return reg.exec(name)[1];
};
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
window.getWeightedRandom = function (odds, iterations) {
	if (!odds) {
		odds = [
			0.68, // 0
			0.69, // 1
			0.698, // 2
			0.6909, // 3
			0.68, // 4
			0.58, // 5
			0.57, // 6
			0.56, // 7
			0.4, // 8
			0.3, // 9
		];
	}
	var weights = [];
	var r = 0;
	var iMax = 0;
	var wMax = 0;

	for (var i in odds) {
		if (!weights[i]) {
			weights[i] = 0;
		}

		for (var x = 0; x < iterations; x++) {
			r = Math.random();
			//log(r.toFixed(3) + "   " + odds[i].toFixed(3));
			if (r <= odds[i]) {
				weights[i] += odds[i];
			}
		}

		if (weights[i] > wMax) {
			wMax = weights[i];
			iMax = i;
		}

	}

	//log(weights);
	//log("wMax = " + wMax + "   iMax = " + iMax);
	return iMax;
};
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -





window.getStyle = function (eleOrId, style) {
	var element;

	if (typeof (eleOrId) == "string") {
		element = document.getElementById(eleOrId);
		if (!element) {
			var msg = "getComputerStyle(elementOrId,style): usage error!";
			msg += "elementOrId needs to be an element in the DOM or a string of the ID of an element in the DOM!";
			throw (msg);
		}
	} else {
		element = eleOrId;
	}


	if (!document.defaultView) {
		var msg = "getComputerStyle(elementOrId,style): Your browser doesn't support defaultView, please upgrade your browser or try google chrome.";
		throw (msg);
	}

	if (!document.defaultView.getComputedStyle) {
		var msg = "getComputerStyle(elementOrId,style): Your browser doesn't support getComputedStyle, please upgrade your browser or try google chrome.";
		throw (msg);
	}

	var sd = document.defaultView.getComputedStyle(element, null);

	if (!sd[style]) {
		var msg = "\n" + "getComputerStyle(elementOrId,style): Computed style for element doesn't exist!\n";
		msg += "The element [" + eleOrId + "] doesn't have a computer style property of [" + style + "]";
		throw (msg);
	}


	return sd[style];



}