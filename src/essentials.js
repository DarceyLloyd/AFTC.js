// Functions / Utilities

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
window.addEvent = function (obj, type, callback, eventReturn) {
    if (obj == null || typeof (obj) == 'undefined') return;
    if (obj.addEventListener) {
        //obj.addEventListener(type, callback, false);
        obj.addEventListener(type, callback, eventReturn ? true : false);
    } else if (obj.attachEvent) {
        obj.attachEvent("on" + type, callback);
    } else {
        obj["on" + type] = callback;
    }
};
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
window.isArray = function (obj) {
    return !!obj && obj.constructor === Array;
    //return arr.constructor == Array;
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -




// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
function getFunctionName(fn) {
    var name = fn.toString();
    var reg = /function ([^\(]*)/;
    return reg.exec(name)[1];
};
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -





// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
window.AFTCElementQueryCache = [];
window.getElementById = function (id) {
    if (window.AFTCElementQueryCache[id] != undefined) {
        return window.AFTCElementQueryCache[id];
    } else {
        var element = document.getElementById(id);
        if (element){
            window.AFTCElementQueryCache[id] = element;
        }
        window.AFTCElementQueryCache[id] = document.getElementById(id);
        return element;
    }
}


window.querySelector = function (id) {
    if (window.AFTCElementQueryCache[id] != undefined) {
        return window.AFTCElementQueryCache[id];
    } else {
        var element = document.querySelector(id);
        if (element){
            window.AFTCElementQueryCache[id] = element;
        }
        return element;
    }
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
window.getElement = function(elementOrElementIdOrElementQuery){
    var element;
    if (isElement(elementOrElementIdOrElementQuery)){
        return elementIdOrQuery;
    }

    element = getElementById(elementOrElementIdOrElementQuery);
    if (element){
        return element;
    }

    element = querySelector(elementOrElementIdOrElementQuery);
    if (element){
        return element;
    }

    // If you get here there
    return false;
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


// TODO: Will return an object of elements
// eg params.dom can be popuplated by single function
window.getDomElements = function (obj) {
    var dom = {}
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -




window.isElement = function(element) {
    // works on major browsers back to IE7
    return element instanceof Element;  
}