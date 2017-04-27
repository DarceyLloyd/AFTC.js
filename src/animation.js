function scrollToElementID($id, $speed, $delay) {
	$id = $id.replace("#", ""); // Ensure we have something uniform to work with
	if (!$speed || $speed == null) {
		$speed = 1;
	}
	$speed *= 1000;

	if (!$delay || $delay == null) {
		$delay = 0;
	}
	$delay *= 1000;

	$('html, body').delay($delay).animate({
		scrollTop: $("#" + $id).offset().top
	}, $speed);
}
