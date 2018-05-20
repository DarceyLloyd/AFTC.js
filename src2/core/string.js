/**
 * @function: limitLengthInWords(str, maxWords)
 * @desc: Limit a string in length of words
 * @param string str: the original string to limit
 * @param number maxWords: the number of words you wish to limit to
 * @return object: {output:string,remaining:number}
 */
window.limitLengthInWords = function (str, maxWords) {
	var wordCount = str.split(/\S+/).length - 1;
	var re = new RegExp("^\\s*\\S+(?:\\s+\\S+){0," + (maxWords - 1) + "}");
	var output = "";
	if (wordCount >= maxWords) {
		output = str.match(re);
	} else {
    output = str;
  }
	return {output:output,remaining:(maxWords - wordCount)};
}
// -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -





/**
 * @function: cleanJSONString(s)
 * @desc: Attempts to clean a json string
 * @param string s: input string
 */
window.cleanJSONString = function (s) {
	// preserve newlines, etc - use valid JSON
	s = s.replace(/\\n/g, "\\n")
		.replace(/\\'/g, "\\'")
		.replace(/\\"/g, '\\"')
		.replace(/\\&/g, "\\&")
		.replace(/\\r/g, "\\r")
		.replace(/\\t/g, "\\t")
		.replace(/\\b/g, "\\b")
		.replace(/\\f/g, "\\f");
	// remove non-printable and other non-valid JSON chars
	s = s.replace(/[\u0000-\u0019]+/g, "");
	return s;
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


/**
 * @function: escapeHTML(input)
 * @desc: Attempts to escape a html string
 * @param string xxxx: xxxxxxxxxxxxxxxxxxxx
 */
/*
function escapeHtml(unsafe) {
    return unsafe
         .replace(/&/g, "&amp;")
         .replace(/</g, "&lt;")
         .replace(/>/g, "&gt;")
         .replace(/"/g, "&quot;")
         .replace(/'/g, "&#039;");
 }
*/
window.escapeHTML = function (input) {
	var replacements = {
		"<": "&lt;",
		">": "&gt;",
		"&": "&amp;",
		"\"": "&quot;",
		"`": "&#039;"
	};
	return text.replace(/[<>&"]/g, function (character) {
		return replacements[character];
	});
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



/**
 * @function: trimStringLength(input, length)
 * @desc: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
 * @param string xxxx: xxxxxxxxxxxxxxxxxxxx
 */
window.trimStringLength = function (input, length) {
	return input.substring(0, length);
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


/**
 * @function: trimStringBy(input, trimBy)
 * @desc: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
 * @param string xxxx: xxxxxxxxxxxxxxxxxxxx
 */
window.trimStringBy = function(str,trimBy){
	return ( str.substring(0, str.length - trimBy) );
}
window.rTrim = function(str,trimBy){ return trimStringBy(str,trimBy); }





/**
 * @function: getFileExtension(str)
 * @desc: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
 * @param string xxxx: xxxxxxxxxxxxxxxxxxxx
 */
window.getFileExtension = function (str) {
	var ext = str.split('.').pop();
	return str;
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



/**
 * @function: getFileExtension2(input)
 * @desc: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
 * @param string xxxx: xxxxxxxxxxxxxxxxxxxx
 */
window.getFileExtension2 = function (input) {
	return input.slice((input.lastIndexOf(".") - 1 >>> 0) + 2);
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -




/**
 * @function: getLastPartOfUrl()
 * @desc: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
 * @param string xxxx: xxxxxxxxxxxxxxxxxxxx
 */
window.getLastPartOfUrl = function () {
	var url = window.location.href;
	var part = url.substring(url.lastIndexOf('/') + 1);
	return part;
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



/**
 * @function: removeFileFromPath(path)
 * @desc: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
 * @param string xxxx: xxxxxxxxxxxxxxxxxxxx
 */
window.removeFileFromPath = function (path) {
	//var pa = '/this/is/a/folder/aFile.txt';
	var r = /[^\/]*$/;
	path = path.replace(r, '');
	return path;
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


/**
 * @function: getAnchorFromUrl(url)
 * @desc: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
 * @param string xxxx: xxxxxxxxxxxxxxxxxxxx
 */
window.getAnchorFromUrl = function (url) {
	return url.slice(url.lastIndexOf('#') + 1);
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -





/**
 * @function: String.prototype.startsWith(str)
 * @desc: ES6 supports the startsWith(), this is for pre ES6 support
 * @param string xxxx: xxxxxxxxxxxxxxxxxxxx
 */
if (typeof String.prototype.startsWith != 'function') {
	String.prototype.startsWith = function (str) {
		return this.match(new RegExp("^" + str));
	};
}

/**
 * @function: String.prototype.endsWith(str)
 * @desc: ES6 supports endsWith(), this is for pre ES6 support
 * @param string xxxx: xxxxxxxxxxxxxxxxxxxx
 */
//
if (typeof String.prototype.endsWith != 'function') {
	String.prototype.endsWith = function (str) {
		return this.match(new RegExp(str + "$"));
	};
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


/**
 * @function: getStringBetween(str,start,end)
 * @desc: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
 * @param string xxxx: xxxxxxxxxxxxxxxxxxxx
 */
window.getStringBetween = function (str, start, end) {
	return str.split(start).pop().split(end).shift().trim();
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



/**
 * @function: getAllStringsBetween(str,start,end)
 * @desc: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
 * @param string xxxx: xxxxxxxxxxxxxxxxxxxx
 */
window.getAllStringsBetween = function (str, start, end) {
	//return str.match(new RegExp(start + "(.*)" + end));
	// var regExString = new RegExp("(?:"+start+")(.*?)(?:"+end+")", "ig"); //set ig flag for global search and case insensitive
	// return regExString.exec(str);
	for (var i = 0; i < str.length; ++i) {
		log(str[i]);
	}
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -




/*
window.getAllStringsBetween = function(str,start,end){
	var arr = str.split(/[:;]/);
}


test.match(new RegExp(firstvariable + "(.*)" + secondvariable));

or

var regExString = new RegExp("(?:"+firstvariable+")(.*?)(?:"+secondvariable+")", "ig"); //set ig flag for global search and case insensitive

var testRE = regExString.exec("My cow always gives milk.");
if (testRE && testRE.length > 1) //RegEx has found something and has more than one entry.
{
    alert(testRE[1]); //is the matched group if found
}
*/