// AFTC init
var AFTC = AFTC || {}

/* Some reading / ref material
https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState
https://developer.mozilla.org/es/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest
https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest
*/


/**
 * @type: class
 * @name: AFTC.XHR()
 * @version: 1.0.0
 * @requires: base.js
 * @function: AFTC.XHR(args)
 * @desc: Quick and easy xhr/ajax
 * ````
	var data = "mode=json2";
	xhr1 = AFTC.XHR({
		url: "./request.php",
		method: "post",
		data: data,
		dataType: "form",
		onComplete: function (response) {
			logTo("debug", response);
			response = JSON.parse(response);
			// Iterate
			// for (var index in response) {
			//     var jObject = response[index];
			//     logTo("debug", jObject);
			//     for (var key in jObject) {
			//         log(key + " = " + response[index][key]);
			//     }
			// }
		}
	});
 * ````
 * @param string url: url or file you wish to load
 * @param string method: post, get, put, delete etc
 * @param * data: array, object, formdata, string or json data you wish to send to the url
 * @param string dataType: data type of data object array, object, formdata, form and json
 * @param function onComplete: on a successfull xhr request this is the function that will be called
 * @return object data;
 * @link: see usage example in tests/xhr/xhr.htm
 */
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
AFTC.XHR = function () {
	var args = {
		url: false,
		method: false,
		data: false,
		dataType: false,
		responseType: false,
		onComplete: false,
		onError: false,
		onProgress: false,
		onCancel: false
	};

	// Process arguments
	if (arguments[0] && typeof (arguments[0]) == "object") {
		for (var key in arguments[0]) {
			if (args.hasOwnProperty(key)) {
				args[key] = arguments[0][key];
			}
		}
	}

	var params = {
		url: false,
		requestHeader: false,
		xhr: false,
		readyState: false,
		status: false,
		responseType: false,
		response: null
	};
	// - - - - - - - - - - - - - - - - - - -

	function updateProgress(e) {
		var percentComplete = 0;
		if (e.lengthComputable) {
			percentComplete = e.loaded / e.total;
		}
		if (args.onProgress){
			args.onProgress(percentComplete);
		}
	}
	function transferComplete(e) {
		if (args.onComplete){
			args.onComplete(params.xhr.responseText);
		}
	}
	function transferFailed(e) {
		if (args.onError){
			args.onError(e);
		}
	}
	function transferCanceled(e) {
		if (args.onCancel){
			args.onCancel(e);
		}
	}




	// - - - - - - - - - - - - - - - - - - -
	function init() {
		if (window.XMLHttpRequest) {
			// code for IE7+, Firefox, Chrome, Opera, Safari
			params.xhr = new XMLHttpRequest();
		} else {
			// code for IE6, IE5
			params.xhr = new ActiveXObject("Microsoft.XMLHTTP");
		}

		params.xhr.addEventListener("progress", updateProgress);
		params.xhr.addEventListener("load", transferComplete);
		params.xhr.addEventListener("error", transferFailed);
		params.xhr.addEventListener("abort", transferCanceled);


		// format and check args
		if (!args.method) {
			args.method = "GET";
		} else {
			args.method = String(args.method).toUpperCase();
		}

		if (!args.dataType) {
			args.dataType = "form";
		} else {
			args.dataType = String(args.dataType).toLowerCase();
		}

		if (args.method == "GET" && args.dataType != "form") {
			msg = "AFTC.XHR: ERROR: GET only supports the 'form' data type (key value pairs eg a=1&b=2)";
			console.error(msg);
			if (args.onError) {
				args.onError(msg);
			}
			return false;
		} else if (args.dataType != "form" && args.dataType != "formdata" && args.dataType != "json" && args.dataType != "array" && args.dataType != "object") {
			msg = "AFTC.XHR: ERROR: The dataType option only supports 'form', 'formdata', 'json', 'array' or 'object'";
			console.error(msg);
			if (args.onError) {
				args.onError(msg);
			}
			return false;
		}


		if (!args.url) {
			msg = "AFTC.XHR: ERROR: Please specify a URL!";
			console.error(msg);
			if (args.onError) {
				args.onError(msg);
			}
			return false;
		}
		// - - - -

		// Setup onReadStateChange
		params.xhr.onreadystatechange = function (e) {
			params.readyState = this.readyState;
			params.status = this.status;

			if (this.readyState == 4) {
				if (this.status == 200) {
					// log("###### RESPONSE:");
					// logTo("debug", params.xhr.getResponseHeader("Content-Type"));

					if (String(params.xhr.responseType).toLowerCase() == "json") {
						params.response = this.response;
					} else {
						params.response = this.responseText;
					}

					if (args.onComplete) {
						args.onComplete(params.response);
					}
				} else {
					console.error(this.statusText);
					if (args.onError) {
						args.onError(this.statusText);
					}
					return false;
				}
			}
		};
		// - - - -

		// Set response headers
		if (args.responseType) {
			args.responseType = String(args.responseType).toLowerCase();
			if (args.responseType.indexOf("json") != -1) {
				params.xhr.responseType = 'json';
			}
		}
		// - - - -

		// Open, setRequestHeader, Send
		if (!args.data) {
			params.xhr.open(args.method, args.url, true);
			params.xhr.send();

			if (request.status == 0) {
				alert("HERE");
				msg = "AFTC.XHR: ERROR: Please specify a URL!";
				console.error(msg);
				if (args.onError) {
					args.onError(msg);
				}
				return false;
			}
		} else {
			processData();

			if (args.dataType == "form") {
				params.requestHeader = "application/x-www-form-urlencoded; charset=utf-8";
			} else if (args.dataType == "formdata") {
				//params.requestHeader = "multipart/form-data";
			} else if (args.dataType == "json") {
				params.requestHeader = "application/json; charset=utf-8";
			} else {

			}


			// log("######### SEND ##########");
			// log("args.method = " + args.method);
			// log("args.url = " + args.url);
			// log("args.dataType = " + args.dataType);
			// log("args.data = " + args.data);
			// log("params.requestHeader = " + params.requestHeader);
			// log("----------------------------------");


			params.xhr.open(args.method, args.url, true);
			if (params.requestHeader) {
				params.xhr.setRequestHeader("Content-Type", params.requestHeader);
			}


			switch (args.method) {
				case "GET":
					params.xhr.send();
					break;
				default:
					params.xhr.send(args.data);
					break;
			}

			log("getResponseHeader = " + params.xhr.getResponseHeader("Content-Type"));

		}
		// - - - -

	}
	// - - - - - - - - - - - - - - - - - - -



	// - - - - - - - - - - - - - - - - - - -
	function cleanUpEventListeners() {
		try {
			params.xhr.removeEventListener("progress", updateProgress);
		} catch (e) { }
		try {
			params.xhr.removeEventListener("load", transferComplete);
		} catch (e) { }
		try {
			params.xhr.removeEventListener("error", transferFailed);
		} catch (e) { }
		try {
			params.xhr.removeEventListener("abort", transferCanceled);
		} catch (e) { }
	}
	// - - - - - - - - - - - - - - - - - - -




	// - - - - - - - - - - - - - - - - - - -
	function processData() {
		if (args.method == "GET" && args.data != false) {
			args.url = args.url + "?" + args.data;
			return true;
		}

		if (args.method == "POST") {
			if (args.data.append) {
				args.dataType = "formdata";
			} else {
				if (isArray(args.data) || typeof (args.data) == "object") {
					// Array || Object
					var data = "";
					var formData = new FormData();
					for (var key in args.data) {
						log(key + " = " + args.data[key]);
						formData.append(key, args.data[key]);
						data += "&" + key + "=" + args.data[key];
					}
					args.dataType = "form";
					args.data = data;
					return true;
				}
			}

		}


		// default
		return true;
	}
	// - - - - - - - - - - - - - - - - - - -


	// // - - - - - - - - - - - - - - - - - - -
	// function processData() {
	// 	// Process data
	// 	if (!args.data) {
	// 		params.xhr.send();
	// 		return true;
	// 	}

	// 	// Prevent json on get
	// 	if (args.method == "get" && args.dataType != "form" && args.dataType != "formdata") {
	// 		console.error("AFTC.XHR: ERROR: GET only supports data types of 'form' and 'formdata', [" + args.dataType + "] was set!");
	// 		return false;
	// 		// dataType:form and typeof(data):string
	// 		if (args.dataType == "form" && typeof (args.data) == "string") {
	// 			// add string to url
	// 			params.getURL = params.getURL + "?" + args.data;
	// 			return true;
	// 		}
	// 	}


	// 	// Tests
	// 	// GET Requires string data to be appended to url
	// 	// args.method = "get";
	// 	// args.dataType = "argon";
	// 	// args.data = "a=1&b=2&mode=test";
	// 	// args.data = [];
	// 	// args.data["name"] = "Darcey";
	// 	// args.data["email"] = "Darcey@AllForTheCode.co.uk";
	// 	// args.data = new FormData();
	// 	// args.data.append("name", "Darcey Lloyd");
	// 	// args.data.append("email", "darcey.lloyd@gmail.com");


	// 	var urlParams = "";

	// 	// GET only data parsers
	// 	if (args.method == "get") {
	// 		// GET sends variables via url string
	// 		if (args.dataType == "form" && typeof (args.data) == "string") {
	// 			params.data = args.data; // params is final data, args is arg / original data
	// 			params.url = args.url + "?" + params.data;
	// 			return true;
	// 		}

	// 		// GET sends variables via url string, iterate through FormData appending to url string
	// 		if (args.data.append || args.dataType == "formdata") {
	// 			// FormData
	// 			urlParams = "";
	// 			log(args.data.entries());
	// 			for (var pair of args.data.entries()) {
	// 				if (urlParams != "") {
	// 					urlParams += "&";
	// 				}
	// 				urlParams += pair[0] + "=" + pair[1];
	// 				// log(pair[0] + ', ' + pair[1]);
	// 			}
	// 			params.dataType = "form";
	// 			params.url = args.url + "?" + urlParams;
	// 			return true;
	// 		}

	// 		// GET sends variables via url string, iterate through array/object appending to url string
	// 		if (isArray(args.data) || typeof (args.data) == "object") {
	// 			// Array || Object
	// 			urlParams = "";
	// 			for (var key in args.data) {
	// 				if (urlParams != "") {
	// 					urlParams += "&";
	// 				}
	// 				urlParams += key + "=" + args.data[key];
	// 			}
	// 			params.dataType = "form";
	// 			params.url = args.url + "?" + urlParams;
	// 			return true;
	// 		}
	// 	} else {
	// 		// POST sends variables via string, formdata or json, iterate through array/object creating FormData object
	// 		if (isArray(args.data) || typeof (args.data) == "object") {
	// 			// Array || Object
	// 			params.data = new FormData();
	// 			for (var key in args.data) {
	// 				params.data.append(key, args.data[key]);
	// 			}
	// 			params.dataType = "formdata";
	// 			params.url = args.url;
	// 			return true;
	// 		}
	// 	}

	// 	// default
	// 	params.dataType = args.dataType;
	// 	params.url = args.url;
	// 	return true;
	// }
	// // - - - - - - - - - - - - - - - - - - -





	// Constructor simulation
	init();
	// - - - - - - - - - - - - - - - - - - -


	// Return
	return {
		url: args.url,
		method: args.method,
		data: args.data,
		dataType: args.dataType,
		xhr: params.xhr,
		readyState: params.readyState,
		status: params.status,
		response: params.response,
		responseType: params.responseType
	}
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -







// -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
// window.AJAXLoad = function($url, $method, $data, $callback) {

// 	$.ajax({
// 		method: $method,
// 		url: $url,
// 		data: $data,
// 		success: function (response) {
// 			$callback(response);
// 			//return response;
// 		},
// 		error: function (jqXHR, textStatus) {
// 			var msg = "";
// 			msg += "AFTC.JS: AJAXLoad(): ERROR\n";
// 			msg += "\t" + "URL: [" + $url + "]\n";
// 			msg += "\t" + "method: [" + $method + "]\n";
// 			msg += "\t" + "data: [" + $data + "]\n";
// 			msg += "\t" + "status: [" + ajax.status + "]\n";
// 			msg += "\t" + "statusText: [" + ajax.statusText + "]\n";
// 			msg += "\t" + "jqXHR: [" + jqXHR + "]\n";
// 			msg += "\t" + "textStatus: [" + textStatus + "]\n";
// 			log(msg);
// 		}
// 	});
// }
// -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -



// window.loadJSONFile = function($url, $callback) {
// 	/*
// 	 var $data = $.getJSON($file, function(result){
// 	 $.each(result, function(key, val){
// 	 //$("div").append(field + " ");
// 	 //log(val);
// 	 });
// 	 return result;
// 	 });
// 	 */

// 	var ajax = $.ajax({
// 		dataType: "json",
// 		url: $url,
// 		global: false,
// 		success: function (data) {
// 			$callback(data);
// 		},
// 		error: function (data) {
// 			var msg = "";
// 			msg += "loadJSONFile: ERROR\n";
// 			msg += "\t" + "URL: [" + $url + "]\n";
// 			//msg += "\t" + "ID: [" + $id + "]\n";
// 			//msg += "\t" + "method: [" + $method + "]\n";
// 			msg += "\t" + "data: [" + data + "]\n";
// 			msg += "\t" + "status: [" + ajax.status + "]\n";
// 			msg += "\t" + "statusText: [" + ajax.statusText + "]\n";
// 			log(msg);
// 		}
// 	});
// }

