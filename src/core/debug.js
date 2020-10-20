/**
 * @function: openDebugWindow(html)
 * @desc: open a popup window with the html you wish to display in it
 * @param html string: the html you wish to display in the popup window
 * @return:
 * @alias: stringToWindow
 * @alias: htmlToWindow
 * @link: https://codepen.io/AllForTheCode/pen/ELGWpE
 */
window.openDebugWindow = function (html) {
    var w = window.open('debug', 'debug', 'width=1200,height=400,resizeable,scrollbars');
    w.document.title = "Debug";
    w.document.write("<style>body {width:100%;}</style>");
    w.document.write("<div style='display:block;width:98%;-ms-word-wrap:break-word ;word-wrap:break-word;border:1px solid #000000;'>" + html + "</div>");
    //w.document.write("<div style='width:100%'>" + str + "</div>");
    w.document.close();
}
window.stringToWindow = function (html) { openDebugWindow(html); }
window.htmlToWindow = function (html) { openDebugWindow(html);}





function attachDebug(no,ele) {
    // return id's not the div create elements as these are type of object and not html element
    let ids = [];

    let debugContainer = document.createElement("div");
    debugContainer.id = "debug-container";
    debugContainer.style.zIndex = "99999";
    debugContainer.style.position = "fixed";
    debugContainer.style.right = "5px";
    debugContainer.style.top = "5px";

    for (let i = 0; i < no; i++) {
        let r = Math.round(Math.random()*9999999999);
        let id = "aftc-debug-container-" + r;
        let div = document.createElement("div");
        div.id = id;
        div.classList.add("debug");
        div.style.background = "#FFFFFF";
        div.style.color = "#000000";
        div.style.margin = "2px";
        div.style.padding = "2px";

        debugContainer.appendChild(div);
        div.addEventListener("click", function (e) {
            console.log(this.innerHTML);
        });

        ids.push(id);
        window["AFTCVDebugItem"+i] = div;
    }
    if (ele){
        ele.appendChild(debugContainer);
    } else {
        document.body.appendChild(debugContainer);
    }

    return ids;
}


function debugTo(index,val){
    window["AFTCVDebugItem"+index].innerHTML = val;
    // getElementById(id).innerHTML = val;
}

function debugToId(id,val){
    getElementById(id).innerHTML = val;
}