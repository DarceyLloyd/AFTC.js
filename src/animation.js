// This is for animations that have no dependancies (functions that use jquery and gsap have their own files)


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
window.AFTCFadeObjects = [];
window.fadeIn = function () {
    log("fadeIn()");

    var animVo = {
        elementId: "",
        element: false,
        speed: 1000,
        opacity: 0,
        displayStyle: "",
        addClass: "",
        removeClass: ""
    }

    var usageInstructions = "\n";
    usageInstructions += "AFTC.js > animation.js > fadeIn(): Usage instructions:\n";

    if (arguments[0] && typeof (arguments[0]) == "object") {
        for (var key in arguments[0]) {
            if (animVo.hasOwnProperty(key)) {
                if (key == "speed") {
                    animVo[key] = arguments[0][key] * 1000;
                } else {
                    animVo[key] = arguments[0][key];
                }

            }
        }
    } else {
        // Show error message and usage instructions
        var errorMessage = "AFTC.js > animation.js > fadeIn(): Usage error. fadeIn() requires an paramaters object, you gave it nothing!\n";
        errorMessage += usageInstructions;
        throw (errorMessage);
    }


    // handle elementId
    if (animVo.elementId != "") {
        animVo.element = document.getElementById(animVo.elementId);
        if (!animVo.element) {
            // Show error message and usage instructions
            var errorMessage = "AFTC.js > animation.js > fadeIn(): Usage error. Unable to find the elementId [" + animVo.elementId + "] on the DOM!\n";
            errorMessage += usageInstructions;
            throw (errorMessage);
        }
    }


    animVo.element.style.opacity = 0;
    var opacity = getComputedStyle(animVo.element,null).opacity;
    animVo.opacity = opacity;

    AFTCFadeObjects.push(animVo);

    fadeInAnimate(animVo.elementId);

}

window.fadeInAnimate = function (elementId) {
    //log("fadeInAnimate(elementId): elementId = " + elementId);

    var idx = false;

    for (var i = 0; i < AFTCFadeObjects.length; i++) {
        //log(AFTCFadeObjects[i]);
        if (AFTCFadeObjects[i].elementId == elementId) {
            idx = i;
            break;
        }
    }

    if (idx != false){
        log("vo not found!");
        return;
    }

    if (AFTCFadeObjects[idx].opacity < 1){
        var targetOpacity = parseFloat(AFTCFadeObjects[idx].opacity) + 0.01;
        log("Setting opacity to "+ targetOpacity);
        AFTCFadeObjects[idx].opacity = targetOpacity;
        AFTCFadeObjects[idx].element.style.opacity = targetOpacity;
        // setTimeout(function(){
        //     fadeInAnimate(elementId);
        // },AFTCFadeObjects[idx].speed);
        requestAnimationFrame(function(){
                fadeInAnimate(elementId);
            });
    }
}


window.fadeOut = function (elementOrElementId, targetOpacity, setDisplayTo) {
    log("fadeOut()");
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -