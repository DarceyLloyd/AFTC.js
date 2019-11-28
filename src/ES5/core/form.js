/**
 * @function: isChecked(elementId)
 * @desc: Checks to if checkbox is checked or not
 * @param elementId string: element id of the form element to check
 * @link: https://codepen.io/AllForTheCode/pen/KRbjpx
 */
window.isChecked = function (id) {
	return document.getElementById(id).checked;
}
// -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -




/**
 * @function: isNumberKey(evt)
 * @desc: Checks if evt supplied (use on form input events via onkeyup or onkeydown)
 * @param evt event: html onkeyup(event) or onkeydown(event)
 * @link: https://codepen.io/AllForTheCode/pen/vjvqLg
 */
window.isNumberKey = function (evt) {
	var charCode = (evt.which) ? evt.which : event.keyCode;
	if (charCode > 31 && (charCode < 48 || charCode > 57))
		return false;

	return true;
}
// -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -







/**
 * @function: removeAllSelectOptions(elementId)
 * @desc: Removes all the options in a select
 * @param elementId string: id of select element 
 * @link: https://codepen.io/AllForTheCode/pen/mLaZEm
 * @link: https://codepen.io/AllForTheCode/pen/rvoEME
 */
window.removeAllSelectOptions = function (elementId) {
    var element = document.getElementById(elementId);
	for (var i = element.options.length - 1; i >= 0; i--) {
		element.remove(i);
	}
}
window.clearSelect = function(elementOrId) { removeAllSelectOptions(elementOrId); }
// -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -









/**
 * @function: parseJSONToSelect(j, selectElementIdOrElement, label, value)
 * @desc: parses a json object of key value pairs to a form select element
 * @param j string: the json data
 * @param selectElementIdOrElement elementOrIdString: the json data
 * @param label string: of key value pair this is the key
 * @param value string: of key value pair this is the value
 * @link: https://codepen.io/AllForTheCode/pen/rvoEME
 */
window.parseJSONToSelect = function (j, elementOrId, labelKey, valueKey) {
	var element;

	if (typeof(elementOrId) == "string"){
		element = document.getElementById(elementOrId);
		if (!element){
			throw("AFTC.js > parseJSONToSelect() Usage ERROR, Unable to find anything on the DOM with an ID of [" + elementOrId + "]");
		}
	}

	if( typeof(elementOrId) == "object"){
		element = elementOrId;
	}

	if (typeof(j) == "string"){
		j = JSON.parse(j);
	}

	for (var i = 0; i < j.length; i++) {
		var label = j[i][labelKey];
		var data = j[i][valueKey];

		var option = document.createElement("option");
		option.text = label;
		option.value = data;
		//log(option);
		element.add(option);
	}
}