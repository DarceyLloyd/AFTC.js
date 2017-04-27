var lazyLog = true;

function log(arg) {
    if (console) {
        if (lazyLog) {
            console.log(arg);
        }
    }
}

function logEnable() {
    lazyLog = true;
    log("log() is now enabled.");
}

function logDisable() {
    lazyLog = false;
    log("log() is now disabled.");
}

function trace(arg) {
    if (console) {
        console.trace(arg);
    }
}

function logTo($id, $msg) {
    $($id).html($msg);
}




// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
function debugWindow($input) {
	var w = window.open('debug', 'debug', 'width=1200,height=400,resizeable,scrollbars');
	w.document.title = "Debug";
	w.document.write("<style>body {width:100%;}</style>");
	w.document.write("<div style='display:block;width:98%;-ms-word-wrap:break-word ;word-wrap:break-word;border:1px solid #000000;'>" + $input + "</div>");
	//w.document.write("<div style='width:100%'>" + $response + "</div>");
	w.document.close();
	//console.log($response);
}
function stringToDebugWindow($input) {
    debugWindow($input);
}
function stringToPopup($input) {
    debugWindow($input);
}
function stringToWindow($input) {
    debugWindow($input);
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
