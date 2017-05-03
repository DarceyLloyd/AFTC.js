window.toggleVisibilityOnClass = function($class) {
	$("." + $class).toggle();
}

window.slideToggleOnClass = function($class) {
	$("." + $class).slideToggle();
}


window.getHSLColor = function(value) {
	//value from 0 to 1
	var hue = ((1 - value) * 120).toString(10);
	return ["hsl(", hue, ",100%,50%)"].join("");
}

window.getRandomRGBString = function() {
	var $r = Math.round(Math.random() * 255);
	var $g = Math.round(Math.random() * 255);
	var $b = Math.round(Math.random() * 255);
	var rgb = "rgb(" + $r + "," + $g + "," + $b + ")";
	return rgb;
}

window.getRandomHexColor = function() {
	var hex = Math.floor(Math.random() * 0xFFFFFF);
	return "#" + ("000000" + hex.toString(16)).substr(-6);
}



// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
window.rgbToHex = function(r, g, b) {
	if (r > 255 || g > 255 || b > 255)
		throw "Invalid color component";
	return ((r << 16) | (g << 8) | b).toString(16);
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
window.generateNoise = function(canvasId, width, height, arg_opacity) {
	var canvas = document.getElementById(canvasId),
		ctx = canvas.getContext('2d'),
		x, y,
		number,
		opacity = arg_opacity || .2;

	canvas.width = width;
	canvas.height = height;

	for (x = 0; x < canvas.width; x++) {
		for (y = 0; y < canvas.height; y++) {
			number = Math.floor(Math.random() * 60);

			ctx.fillStyle = "rgba(" + number + "," + number + "," + number + "," + opacity + ")";
			ctx.fillRect(x, y, 1, 1);
		}
	}

	//document.body.style.backgroundImage = "url(" + canvas.toDataURL("image/png") + ")";
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


