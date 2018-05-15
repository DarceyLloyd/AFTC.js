/*
 * Author: Darcey.Lloyd@gmail.com
 */


// TODO: Maybe Maybenot
// // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// window.tableToDoubleColumnAt = function (breakPoint, id) {
//     if (window.innerWidth > breakPoint) {
//         return;
//     }
//
//     var table,
//         delay = 150;
//
//     table = getElementById(id);
//     if (!id){
//         throw("AFTC.js > tableToDoubleColumnAt(): Usage error, unable to find an element on the dom with an ID of [" +id+"]");
//     }
//
//     if (typeof(arguments[2]) == "number"){
//         delay = arguments[2];
//     }
//
//     var tableToDoubleColumn = function () {
//         setTimeout(function(){
//
//             var thead = table.getElementsByTagName("thead");
//             var th = table.getElementsByTagName("th");
//
//             for (var i=0; i <= th.length; i++){
//                 log(th[i]);
//             }
//
//             // TODO: Dynamic Creation and Removal of psudo css style of data-header attribute for content: (data-header) etc
//
//
//             thead[0].style.display = "none";
//
//         },delay);
//     }
//
//     window.addEventListener("resize", tableToDoubleColumn, false);
//     window.addEventListener("orientationchange", tableToDoubleColumn, false);
//
//
//     tableToDoubleColumn();
// }
// // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -