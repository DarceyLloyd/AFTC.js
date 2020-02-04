/**
 * @function: getRandomInt(min,max)
 * @desc: returns a random number / int betwen your specified min and max values
 * @param min number: the minimum your random number is allowed to go
 * @param max number: the maximum your random number is allowed to go
 * @alias: getRandom
 * @link: https://codepen.io/AllForTheCode/pen/PeVqLp
 */
window.getRandomInt = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
window.randomInt = function (min, max) { return getRandomInt(min, max); }
window.getRandom = function (min, max) { return getRandomInt(min, max); }
window.random = function (min, max) { return getRandomInt(min, max); }



/**
 * @function: getRandomThatsNot(min,max,not)
 * @desc: returns a random int betwen your specified min and max values but never the not value
 * @param min number: the minimum your random number is allowed to go
 * @param max number: the maximum your random number is allowed to go
 * @alias: getRandom
 * @link: https://codepen.io/AllForTheCode/pen/yEBZNq
 */
window.getRandomThatsNot = function(min,max,not){
    var r = not; var lim = 100; var runs = 0;
    while (r==not && runs < lim){
        runs++;
        r = getRandomInt(min,max);
    }
    if (runs>=lim){
        return false;
    } else {
        return r;
    }
}


/**
 * @function: getRandomFloat(min,max)
 * @desc: returns a random floating point number betwen your specified min and max values
 * @param min number: min value
 * @param max number: max value
 * @link: https://codepen.io/AllForTheCode/pen/gzqaYm
 */
window.getRandomFloat = function (min, max) {
    return (Math.random() * (max - min) + min);
};
window.randomFloat = function (min, max) { return getRandomFloat(min, max); }


/**
 * @function: randomString(length)
 * @desc: get a random string of a specified length
 * @param length number: the length of the string you wish to generate
 * @alias: getRandomString
 * @link: https://codepen.io/AllForTheCode/pen/QrYjwr
 */
window.randomString = function (length) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
}
window.getRandomString = function (len) { return randomString(len); }

