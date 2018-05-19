
/**
 * @function: isChecked(xxx)
 * @desc: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
 * @param string xxxx: xxxxxxxxxxxxxxxxxxxx
 */
window.isChecked = function (id) {
	return document.getElementById(id).checked;
}
// -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -




/**
 * @function: isNumberKey(event)
 * @desc: Checks if evt supplied (use on form input events via onkeyup or onkeydown)
 * @param event evt: html onkeyup(event) or onkeydown(event)
 */
window.isNumberKey = function (evt) {
	var charCode = (evt.which) ? evt.which : event.keyCode;
	if (charCode > 31 && (charCode < 48 || charCode > 57))
		return false;

	return true;
}
// -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -







/**
 * @function: removeAllSelectOptions(elementOrId)
 * @desc: Removes all the options in a select
 * @param element || string: element or id string
 */
window.removeAllSelectOptions = function (elementOrId) {
    var element;
	if (typeof(elementOrId) == "string"){
		element = document.getElementById(elementOrId);
		if (!element){
			throw("AFTC.js > parseJSONToSelect() Usage ERROR, Unable to find anything on the DOM with an ID of [" + elementOrId + "]");
		}
	}

	if (element) {
		for (var i = element.options.length - 1; i >= 0; i--) {
			element.remove(i);
		}
	}

}
window.clearSelect = function(elementOrId) { removeAllSelectOptions(elementOrId); }
// -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -









/**
 * @function: parseJSONToSelect(j, selectElementIdOrElement, label, value)
 * @desc: parses a json object of key value pairs to a form select element
 * @param string j: the json data
 * @param multi selectElementIdOrElement: the json data
 * @param string label: of key value pair this is the key
 * @param string value: of key value pair this is the value
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