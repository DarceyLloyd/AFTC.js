/**
 * @function: addClass(elementOrId,classname)
 * @desc: Add a css class to a html element
 * @param elementOrId elementORstring: The elemnt or id of the html element to add a css class to
 * @param className string: the class name to add
 * @alias addClassTo
 * @link: https://codepen.io/AllForTheCode/pen/BxvYmW
 */
window.addClass = function (elementOrId, classNames) {
    var element;
    if (typeof(elementOrId) == "string"){
        element = getElementById(elementOrId);
    }

    if (isArray(classNames)){
        for (var i=0; i < classNames.length; i++){
            element.classList.add(classNames[i]);
        }
    } else {
        element.classList.add(classNames);
    }
}
window.addClassTo = function(elementOrId, classNames){ addClass(elementOrId, classNames); }

/**
 * @function: removeClass(elementOrId,className)
 * @desc: shortcut to remove a class from a html element
 * @param elementOrId elementORstring: The elemnt or id of the html element to add a css class to
 * @param className string: the class name to remove
 * @alias removeClassFrom
 * @link: https://codepen.io/AllForTheCode/pen/gzZvKL
 */
window.removeClass = function (elementOrId, className) {
    var element;
    if (typeof(elementOrId) == "string"){
        element = getElementById(elementOrId);
    }

    if (isArray(className)){
        for (var i=0; i < className.length; i++){
            element.classList.remove(className[i]);
        }
    } else {
        element.classList.remove(className);
    }
}
window.removeClassFrom = function(elementOrId, classNames){ removeClass(elementOrId, classNames); }


/**
 * @function: hasClass(elementOrId, cls)
 * @desc: Check to see if an element has a class attached to it
 * @param elementOrId string: The elemnt or id of the html element
 * @param cls string: class to look for
 * @link: https://codepen.io/AllForTheCode/pen/dewdwY
 */
window.hasClass = function (elementOrId, cls) {
    if (isElement(elementOrId)) {
        return elementOrId.classList.contains(cls);
    } else {
        return getElementById(elementOrId).classList.contains(cls);
    }
}