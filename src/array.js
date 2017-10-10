// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
window.arrayRemoveIndex = function (array, index) {
	return array.splice(index);
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


window.isArrayInString = function ($string, $array) {
	return (new RegExp('(' + $array.join('|').replace(/\./g, '\\.') + ')$')).test($string);
}


window.isArray = function (arr) {
	if (typeof(arr) == "array"){
		return true;
	} else {
		return false;
	}
	//return arr.constructor == Array;
}
