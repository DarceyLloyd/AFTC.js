// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
window.arrayRemoveIndex = function (array, index) {
	return array.splice(index);
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


window.isArrayInString = function ($string, $array) {
	return (new RegExp('(' + $array.join('|').replace(/\./g, '\\.') + ')$')).test($string);
}