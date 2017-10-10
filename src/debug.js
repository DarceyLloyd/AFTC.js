//Returns true if it is a DOM node
window.isNode = function(o) {
	return (
		typeof Node === "object" ? o instanceof Node :
			o && typeof o === "object" && typeof o.nodeType === "number" && typeof o.nodeName === "string"
	);
}

//Returns true if it is a DOM element    
window.isElement = function(o) {
	return (
		typeof HTMLElement === "object" ? o instanceof HTMLElement : //DOM2
			o && typeof o === "object" && o !== null && o.nodeType === 1 && typeof o.nodeName === "string"
	);
}



var lazyLog = true;

window.log = function(arg) {
    if (console) {
        if (lazyLog) {
            console.log(arg);
        }
    }
}

window.logEnable = function() {
    lazyLog = true;
    log("log() is now enabled.");
}

window.logDisable = function() {
    lazyLog = false;
    log("log() is now disabled.");
}

window.trace = function(arg) {
    if (console) {
        console.trace(arg);
    }
}

window.logTo = function ($id, $msg) {
    if (isElement($id)) {
        $id.innerHTML = $msg;
    } else {
        if ($("#" + $id)) {
            $("#"+$id).html($msg);
        } else {
            $("."+$id).html($msg);
        }
    }
}




// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
window.debugWindow = function($input) {
	var w = window.open('debug', 'debug', 'width=1200,height=400,resizeable,scrollbars');
	w.document.title = "Debug";
	w.document.write("<style>body {width:100%;}</style>");
	w.document.write("<div style='display:block;width:98%;-ms-word-wrap:break-word ;word-wrap:break-word;border:1px solid #000000;'>" + $input + "</div>");
	//w.document.write("<div style='width:100%'>" + $response + "</div>");
	w.document.close();
	//console.log($response);
}
window.stringToDebugWindow = function($input) {
    debugWindow($input);
}
window.stringToPopup = function($input) {
    debugWindow($input);
}
window.stringToWindow = function($input) {
    debugWindow($input);
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
