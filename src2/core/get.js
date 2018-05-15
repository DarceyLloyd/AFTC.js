/*
 * Author: Darcey.Lloyd@gmail.com
 */



/**
 * @function: getFunctionName(fn)
 * @desc: tries to get the function name of a suppled function
 * @param function fn: the function wish to get the name of
 */
function getFunctionName(fn) {
    var name = fn.toString();
    var reg = /function ([^\(]*)/;
    return reg.exec(name)[1];
};