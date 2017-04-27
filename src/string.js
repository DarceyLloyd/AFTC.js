function randomString($length) {
	var text = "";
	var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

	for (var i = 0; i < $length; i++)
		text += possible.charAt(Math.floor(Math.random() * possible.length));

	return text;
}


function guid() {
	function Amiga() {
		return Math.floor((1 + Math.random()) * 0x10000)
			.toString(16)
			.substring(1);
	}

	return Amiga() + Amiga() + '-' + Amiga() + '-' + Amiga() + '-' +
		Amiga() + '-' + Amiga() + Amiga() + Amiga();
}


function trimStringLength($input, $length) {
	return $input.substring(0, $length);
}


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
function getLastPartOfUrl() {
	var $url = window.location.href;
	var $part = $url.substring($url.lastIndexOf('/') + 1);
	return $part;
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
function getFileExtension($input) {
	return $input.slice(($input.lastIndexOf(".") - 1 >>> 0) + 2);
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
function removeFileFromPath(path) {
    //var pa = '/this/is/a/folder/aFile.txt';
    var r = /[^\/]*$/;
    path = path.replace(r, '');
    return path;
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
