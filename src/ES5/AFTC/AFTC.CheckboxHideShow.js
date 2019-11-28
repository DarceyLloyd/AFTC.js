

/**
 * @function: checkboxToggleContent(xxx)
 * @desc: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
 * @param string xxxx: xxxxxxxxxxxxxxxxxxxx
 */
window.checkboxToggleContent = function (cb, ids, showOnCheck) {
	var msg = "aftc.js > checkboxShowHide > incorrect usage!\n";
	msg += "checkboxHideShow(arg1,arg2,arg3)" + "\n";
	msg += "arg1 = checkbox element || checkbox element id" + "\n";
	msg += "arg2 = elementIdToShowHideToggle || ArrayOfElementIdsToShowHide toggle" + "\n";
	msg += "arg3 (optional) = boolean : true (default) = show items on check || false = hide items on check" + "\n";

	var checkbox;

	if (typeof (cb) == "string") {
		checkbox = document.getElementById(cb);
		if (!cb) {
			log("checkboxShowHide argument 1 ID was not found on the DOM! Check for typos")
			throw (msg);
		}
	}

	if (cb.type && cb.type != 'checkbox') {
		log("checkboxShowHide argument 1 was not a checkbox element or id of a checkbox!")
		throw (msg);
	}


	if (!ids || ids == '' || ids.length < 1) {
		log("checkboxShowHide argument 2 is not valid!")
		throw (msg);
	}


	if (typeof (showOnCheck) == "undefined") {
		showOnCheck = true;
	}

	var itemsToShowHide = [];

	if (typeof (ids) == "string") {
		var element = document.getElementById(ids);
		if (!element) {
			log("Unable to find elemnt id [" + ids + "] on page!\n" + msg);
		}
		itemsToShowHide.push(element);

	} else if (isArray(ids)) {
		// log("PARSING ARRAY");
		for (var index = 0; index < ids.length; index++) {
			var id = ids[index];
			// log("going to look for element with id of [" + id + "]");
			var element = document.getElementById(id);
			if (!element) {
				throw ("Unable to find elemnt id [" + id + "] on page!\n" + msg);
			}
			itemsToShowHide.push(element);
		}

	}


	// Take note of each elements style.display value as we will want to restore it
	//.setAttribute('data', "icon:
	//document.getElementById('item1').dataset.icon


	for (var index = 0; index < itemsToShowHide.length; index++) {
		var element = itemsToShowHide[index];
		var currentDisplayStyle = element.style.display;
		var originalDisplayStyle = element.getAttribute("data-display");
		if (!element.dataset.display) {
			//displayStyle = getStyle(element,"display"); // This would make it dependent on misc.js
			var sd = document.defaultView.getComputedStyle(element, null);
			currentDisplayStyle = sd.display;
			originalDisplayStyle = currentDisplayStyle;
			element.setAttribute("data-display", originalDisplayStyle);
		}

		var style = "";

		if (cb.checked && showOnCheck) {
			style = originalDisplayStyle;
		} else if (cb.checked && !showOnCheck) {
			style = "none";
		} else if (!cb.checked && showOnCheck) {
			style = "none";
		} else {
			style = originalDisplayStyle;
		}

		//log("Setting [" + element.id + "] style.display to [" + style + "]");
		element.style.display = style;

	}

	// log("---");
	// log("currentDisplayStyle = [" + currentDisplayStyle + "]");
	// log("originalDisplayStyle = [" + originalDisplayStyle + "]");

	// show by elementId
	var elementToShow = document.getElementById(ids);
	if (elementToShow) {


	}

	/*
	var $state = jQuery('input[name="' + $checkboxID + '"]:checked').val();
	$state = $state.toLowerCase();

	if ($state.checked) {
		jQuery("#" + $elementIdForHideShow).slideDown();
	} else {
		jQuery("#" + $elementIdForHideShow).slideUp();
	}
	*/
}
// -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -





