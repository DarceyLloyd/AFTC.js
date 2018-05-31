/*
 * Author: Darcey.Lloyd@gmail.com
 */

var AFTC = AFTC || {}



AFTC.Visibility = function () {
    // if (!(this instanceof arguments.callee)) {
    //     throw new Error("\nAFTC.Visibility: USAGE ERROR: Constructor called as a function.\nPlease use new AFTC.DOM.HideHsow({})");
    // }
    // if (!(this instanceof AFTC.Visibility)) {
    //     throw new Error("AFTC.Visibility needs to be called with the new keyword");
    // }

    var me = this;
    var vars = {
        element: false,
        id: false,
        delay: false,
        duration: false,
        display: "block",
        animateHeight: false,
        onStartAddClassList: false,
        onStartRemoveClassList: false,
        onCompleteAddClassList: false,
        onCompleteRemoveClassList: false,
        onComplete: false
    }

    argsToObject(arguments[0], vars);

    function getElement() {
        if (!vars.element && vars.id) {
            vars.element = getElementById(vars.id);
        }
    }

    function removeClassList(classList) {
        if (isArray(classList)) {
            for (var key in classList) {
                var className = classList[key];
                try {
                    vars.element.classList.remove(className);
                } catch (e){ }
            }
        } else if (typeof (classList) == "string") {
            try {
                vars.element.classList.remove(classList);
            } catch (e){ }
        }
    }

    function addClassList(classList) {
        if (isArray(classList)) {
            for (var key in classList) {
                var className = classList[key];
                try {
                    vars.element.classList.add(className);
                } catch (e){ }
            }
        } else if (typeof (classList) == "string") {
            try {
                vars.element.classList.add(classList);
            } catch (e){ }
        }
    }

    function processOnStartClassLists() {
        if (vars.onStartAddClassList) {
            addClassList(vars.onStartAddClassList);
        }
        if (vars.onStartRemoveClassList) {
            removeClassList(vars.onStartRemoveClassList);
        }
    }

    function processOnCompleteClassLists() {
        if (vars.onCompleteAddClassList) {
            addClassList(vars.onCompleteAddClassList);
        }
        if (vars.onCompleteRemoveClassList) {
            removeClassList(vars.onCompleteRemoveClassList);
        }
    }

    function _hide() {
        getElement();
        if (!vars.element || !isElement(vars.element)) { return; }

        processOnStartClassLists();

        function setOnCompleteState() {
            vars.element.style.transitionDuration = "0s";
            vars.element.style.display = "none";
            processOnCompleteClassLists();
            if (vars.onComplete) {
                vars.onComplete();
            }
        }

        if (vars.duration) {
            vars.element.style.transitionDuration = vars.duration + "s";
            vars.element.style.opacity = 0;
            vars.element.style.overflow = "hidden";
            if (vars.animateHeight){
                vars.element.style.height = getComputedStyle(vars.element).height;
                setTimeout(function () {
                    vars.element.style.height = "0px";
                    vars.element.style.marginTop = "0px";
                    vars.element.style.marginBottom = "0px";
                }, 25);
            }
            vars.element.addEventListener("transitionend", function (event) {
                setOnCompleteState();
            }, false);
        } else {
            vars.element.style.display = "none";
            setOnCompleteState();
        }
    }


    function hide() {
        if (vars.delay) {
            setTimeout(function () {
                _hide();
            }, (vars.delay*1000));
        } else {
            _hide();
        }
    }

    

    function _show() {
        getElement();
        if (!vars.element || !isElement(vars.element)) { return; }

        processOnStartClassLists();

        function setOnCompleteState() {
            vars.element.style.transitionDuration = "0s";
            vars.element.style.opacity = 1;
            vars.element.style.display = vars.display;
            processOnCompleteClassLists();
            if (vars.onComplete) {
                vars.onComplete();
            }
        }

        if (vars.duration) {
            vars.element.style.opacity = 0;
            vars.element.style.transitionDuration = vars.duration + "s";
            vars.element.style.display = vars.display;
            setTimeout(function () {
                vars.element.style.opacity = 1;
            }, 25);

            vars.element.addEventListener("transitionend", function (event) {
                setOnCompleteState();
            }, false);
        } else {
            setOnCompleteState();
        }
    }

    return {
        hide: function () {
            hide();
        },
        show: function () {
            show();
        }
    }

    function show() {
        if (vars.delay) {
            setTimeout(function () {
                _show();
            }, (vars.delay*1000));
        } else {
            _show();
        }
    }
}

window.show = function () {
    if (typeof(arguments[0]) == "string"){
        var args = { id :arguments[0] }
        AFTC.Visibility(args).show();
    } else if (isElement(arguments[0])){
        var args = { element :arguments[0] }
        AFTC.Visibility(args).show();
    } else {
        AFTC.Visibility(arguments[0]).show();
    }
}
window.fadeIn = function(){ window.show(arguments[0]); }

window.hide = function () {
    if (typeof(arguments[0]) == "string"){
        var args = { id :arguments[0] }
        AFTC.Visibility(args).hide();
    } else if (isElement(arguments[0])){
        var args = { element :arguments[0] }
        AFTC.Visibility(args).hide();
    } else {
        AFTC.Visibility(arguments[0]).hide();
    }
}
window.fadeOut = function(){ window.hide(arguments[0]); }


