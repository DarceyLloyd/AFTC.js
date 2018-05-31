/**
 * @function: getFunctionName(fn)
 * @desc: tries to get the function name of a suppled function
 * @param fn function: the function wish to get the name of
 * @link: https://codepen.io/AllForTheCode/pen/YLBKRy
 */
function getFunctionName(fn) {
    var name = fn.toString();
    var reg = /function ([^\(]*)/;
    return reg.exec(name)[1];
};