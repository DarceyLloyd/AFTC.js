/*
 * Author: Darcey.Lloyd@gmail.com
 */


/**
 * @function: arrayRemoveIndex(arr,index)
 * @desc: remove a specified index from an array
 * @param array arr: the array you wish to remove an index on
 * @param number index: the array index you wish to remove
 * @return: array
 */
window.arrayRemoveIndex = function (arr, index) {
    arr.splice(index, 1);
    return arr;
}

/**
 * @function: isStringInArray(needle,haystack)
 * @desc: Check to see if a string is in an array
 * @param string needle: the string your looking for
 * @param array haystack: the array you wish to search
 */
window.isStringInArray = function (needle, haystack) {
    return (new RegExp('(' + haystack.join('|').replace(/\./g, '\\.') + ')$')).test(needle);
}

/**
 * @function: arrayContains(needle,haystack)
 * @desc: Check to see if your array contains something you want to find
 * @param array arr: the array you wish to search
 * @param string needle: what you want to find
 */
window.arrayContains = function (needle, haystack) {
    if (haystack.indexOf(needle) > -1) { return true; } else { return false; }
}
window.isInArray = function (needle, haystack) { return window.arrayContains(needle, haystack); }



/**
 * @function: arrayEmpty(arr)
 * @desc: clears/empties an array for garbage collection
 * @param array arr: the array to clear / empty
 * @alias: arrayClear
 */
window.arrayEmpty = function (arr) {
    while (arr.length > 0) { arr.pop(); }
}
window.arrayClear = function (arr) { window.arrayEmpty(arr); }






/**
 * @function: getMaxFromArray(arr)
 * @desc: returns the maximum value in an array
 * @param array arr: the array you wish to find the maximum value in
 * @alias: arrayGetMax
 * @alias: arrayMax
 */
window.getMaxFromArray = function (arr) {
    return Math.max.apply(Math, arr);
}
window.arrayGetMax = function (arr) { return getMaxFromArray(arr); }
window.arrayMax = function (arr) { return getMaxFromArray(arr); }




/**
 * @function: arrayGetMin
 * @desc: returns the minimum value in an array
 * @param array arr: the array you wish to find the minimum value in
 * @alias: getMinFromArray
 * @alias: arrayMin
 */
window.getMinFromArray = function (arr) {
    return Math.min.apply(Math, arr);
}
window.arrayGetMin = function (arr) { return getMinFromArray(arr); }
window.arrayMin = function (arr) { return getMinFromArray(arr); }




/**
 * @function: arrayShuffle(arr)
 * @desc: shuffles an array (method 1)
 * @param array arr: the array to shuffle
 * @alias: shuffle
 * @alias: arrayShuffle
 */
window.arrayShuffle = function (arr) {
    var currentIndex = arr.length,
        temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = arr[currentIndex];
        arr[currentIndex] = arr[randomIndex];
        arr[randomIndex] = temporaryValue;
    }

    return arr;
}
window.shuffle = function(arr){ return arrayShuffle(arr); }
window.shuffleArray = function(arr){ return arrayShuffle(arr); }


/**
 * @function: arrayShuffle2(arr)
 * @desc: shuffles an array (method 2)
 * @param array arr: the array to shuffle
 * @alias: shuffle2
 * @alias: arrayShuffle2
 */
window.arrayShuffle2 = function (a) {
    var x, t, r = new Uint32Array(1);
    for (var i = 0, c = a.length - 1, m = a.length; i < c; i++ , m--) {
        crypto.getRandomValues(r);
        x = Math.floor(r / 65536 / 65536 * m) + i;
        t = a[i], a[i] = a[x], a[x] = t;
    }

    return a;
}
window.shuffle2 = function(arr){ return arrayShuffle2(arr); }
window.shuffleArray2 = function(arr){ return arrayShuffle2(arr); }




window.arrayToSingleLineString = function (arr) {
    var html = "[";
    for (i = 0; i < arr.length; i++) {
        switch (typeof (arr[i])) {
            case "number":
                html += arr[i] + ",";
                break;
            case "string":
                html += "'" + arr[i] + "',";
                break;
            default:
                html += "" + typeof (arr[i]) + ",";
                break;
        }
    }
    html = trimStringLength(html, html.length - 1);
    html += "]";
    return html;
}