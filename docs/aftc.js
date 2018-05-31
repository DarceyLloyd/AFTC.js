/*
 * Author: darcey@aftc.io || darcey.lloyd@gmail.com
 */

// AFTC Core
var AFTC = AFTC || {}


/**
 * @function: ArgsToObject(args, obj)
 * @desc: Quick and easy args to object
 * and then
 * there was more
 * @param args object: arguments
 * @param obj object: object to parse into
 * @param strict boolean: console.warn any args that have been supplied that don't exist in args
 * @method start(time): start the clock at a specified time
 * @method stop(): stops the clock
 * @method resume(): restarts the clock
 * @return: null
 * @alias: argsTo
 * @alias: parseArgsToObject
 * @link: www.google.com
 * @link: www.google.co.uk
 */
AFTC.ArgsToObject = function (args, obj, strict) {
    if (!strict){ strict = true; }
    if (args && typeof (args) == "object") {
        for (var key in args) {
            if (strict){
                if (obj.hasOwnProperty(key)) {
                    obj[key] = args[key];
                } else {
                    console.warn("AFTC.ArgsToObject(): Argument [" + key + "] is not supported.");
                }
            } else {
                obj[key] = args[key];
            }
        }
    }
}

