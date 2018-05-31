/**
 * @function: validateEmail(email)
 * @desc: Validats an email address
 * @param string email: email address
 * @returns boolean
 */
window.isEmail = function (email) {
	var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email);
}
window.validateEmail = function (email) { return isEmail(email); }
window.isValidEmail = function (email) { return isEmail(email); }
