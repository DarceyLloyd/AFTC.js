window.scrollToElementId = function (elementId, speed, delay) {

	var $target = $("#"+elementId);
	if (!$target){
		throw("AFTC.js > animation.jquery.js: Error unable to find element with id [" + elementId + "]");
	}

	if (!speed || speed == null) {
		speed = 1;
	}
	speed *= 1000;

	if (!delay || delay == null) {
		delay = 0;
	}
	delay *= 1000;

	$('html, body').delay(delay).animate(
		{
			scrollTop: $target.offset().top
		}, speed
	);
	
}

window.scrollToElementClass = function (elementClassName, speed, delay) {
	
	var $target = $("."+elementClassName);
	if (!$target){
		throw("AFTC.js > animation.jquery.js: Error unable to find element with class name [" + elementClassName + "]");
	}

	if (!speed || speed == null) {
		speed = 1;
	}
	speed *= 1000;

	if (!delay || delay == null) {
		delay = 0;
	}
	delay *= 1000;

	$('html, body').delay(delay).animate({
		scrollTop: $target.offset().top
	}, speed);

}


