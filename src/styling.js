



// /**
//  * @function: xxxxxx(xxx)
//  * @desc: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
//  * @param string xxxx: xxxxxxxxxxxxxxxxxxxx
//  */
// window.getStyle = function (eleOrId, style) {
//     var element;

//     if (typeof (eleOrId) == "string") {
//         element = document.getElementById(eleOrId);
//         if (!element) {
//             var msg = "getComputerStyle(elementOrId,style): usage error!";
//             msg += "elementOrId needs to be an element in the DOM or a string of the ID of an element in the DOM!";
//             throw (msg);
//         }
//     } else {
//         element = eleOrId;
//     }


//     if (!document.defaultView) {
//         var msg = "getComputerStyle(elementOrId,style): Your browser doesn't support defaultView, please upgrade your browser or try google chrome.";
//         throw (msg);
//     }

//     if (!document.defaultView.getComputedStyle) {
//         var msg = "getComputerStyle(elementOrId,style): Your browser doesn't support getComputedStyle, please upgrade your browser or try google chrome.";
//         throw (msg);
//     }

//     var sd = document.defaultView.getComputedStyle(element, null);

//     if (!sd[style]) {
//         var msg = "\n" + "getComputerStyle(elementOrId,style): Computed style for element doesn't exist!\n";
//         msg += "The element [" + eleOrId + "] doesn't have a computer style property of [" + style + "]";
//         throw (msg);
//     }

//     return sd[style];
// }
// // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -







/**
 * @function: isBreakPoint(bp)
 * @desc: Returns the breakpoint your in
 * @param array bp: [320, 480, 768, 1024] etc
 */
window.isBreakPoint = function(bp) {
    // The breakpoints that you set in your css
    var bps = [320, 480, 768, 1024];
    var w = window.innerWidth;
    var min, max;
    for (var i = 0, l = bps.length; i < l; i++) {
      if (bps[i] === bp) {
        min = bps[i-1] || 0;
        max = bps[i];
        break;
      }
    }
    return w > min && w <= max;
  }
  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -