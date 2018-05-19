/*
 * Author: Darcey.Lloyd@gmail.com
 */



// # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
// Styling shortcuts
// # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
/**
 * @function: addClass(elementOrId,classname)
 * @desc: shortcut to add a css class to a html element
 * @param elementORstring elementOrId: The elemnt or id of the html element to add a css class to
 * @param string className: the class name to add
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
 * @func: removeClass(elementOrId,className)
 * @desc: shortcut to remove a class from a html element
 * @param elementORstring elementOrId: The elemnt or id of the html element to add a css class to
 * @param string className: the class name to remove
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
 * @param string elementOrId: The elemnt or id of the html element
 * @param string cls: class to look for
 */
window.hasClass = function (elementOrId, cls) {
    if (isElement(elementOrId)) {
        return elementOrId.classList.contains(cls);
    } else {
        return getElementById(elementOrId).classList.contains(cls);
    }
}
// # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
// # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #




