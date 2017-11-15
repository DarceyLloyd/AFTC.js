// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
window.arrayRemoveIndex = function (array, index) {
	return array.splice(index);
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
window.isArrayInString = function (string, array) {
	return (new RegExp('(' + array.join('|').replace(/\./g, '\\.') + ')$')).test(string);
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
Array.prototype.contains = function (needle) {
	var len = this.length;
	for (var i=0; i < len; i++){
		if (this[i] == needle){
			return true;
			break;
		}
	}
	return false;
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -




// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
window.getMaxFromArray = function (arr) {
	return Math.max.apply(Math, arr);
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
window.getMinFromArray = function (arr) {
	return Math.min.apply(Math, arr);
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -





// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
window.shuffleArray = function (array) {
	var methodNo = getRandom(1, 2);
	return window["arrayShuffle" + methodNo](array);
	var fn = "arrayShuffle" + methodNo;
	//log(fn);
	//fn();
}
window.arrayShuffle = function (arr) {
	return shuffleArray(arr);
}



window.arrayShuffle1 = function (array) {
	var currentIndex = array.length,
		temporaryValue, randomIndex;

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {

		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;
}


window.arrayShuffle2 = function (a) {
	var x, t, r = new Uint32Array(1);
	for (var i = 0, c = a.length - 1, m = a.length; i < c; i++, m--) {
		crypto.getRandomValues(r);
		x = Math.floor(r / 65536 / 65536 * m) + i;
		t = a[i], a[i] = a[x], a[x] = t;
	}

	return a;
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -