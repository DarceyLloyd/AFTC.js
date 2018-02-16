

/**
 * @type: object
 * @name: AFTC.ResizeManager
 * @desc: A function stack manager for resize and orientation change events
 * @function: AFTC.Resizemanager()
 * @function: enable()
 * @desc: enable function stack execution on oritentation and resize change
 * @function: disable()
 * @desc: disable function stack execution on oritentation and resize change
 * @function: add(uid,fn)
 * @desc: add function to orientation and resize stack
 * @param string uid: unique id / label of function to add from stack
 * @param function fn: function to add to stack
 * @function: remove(uid)
 * @desc: remove function from orientation and resize stack
 * @param string uid: unique id / label of function to remove from stack
 * @return:
 */
AFTC.ResizeManager = {
    running: false,
    enabled: false,
    delay: 100,
    stack: [],
    enable: function () {
        // log("AFTC.ResizeManager.enable()");
        AFTC.ResizeManager.enabled = true;
        window.addEventListener("resize", AFTC.ResizeManager.resizeHandler, false);
        window.addEventListener("orientationchange", AFTC.ResizeManager.resizeHandler, false);
    },
    disable: function () {
        // log("AFTC.ResizeManager.disable()");
        AFTC.ResizeManager.enabled = false;
        window.removeEventListener("resize", AFTC.ResizeManager.resizeHandler, false);
        window.removeEventListener("orientationchange", AFTC.ResizeManager.resizeHandler, false);
    },
    add: function (uid, fn) {
        // log("AFTC.ResizeManager.add(): " + uid);
        var stackItem = {};
        stackItem.uid = uid;
        stackItem.fn = fn;
        AFTC.ResizeManager.stack.push(stackItem);
    },
    remove: function (uid) {
        // log("AFTC.ResizeManager.remove(): " + uid);
        var len = AFTC.ResizeManager.stack.length;
        for (var i = 0; i < len; i++) {
            if (AFTC.ResizeManager.stack[i]) {
                //log(AFTC.ResizeManager.stack[i].uid);
                if (AFTC.ResizeManager.stack[i].uid == uid) {
                    AFTC.ResizeManager.stack.splice(i, 1);
                    AFTC.ResizeManager.remove(uid);
                    break;
                }
            }
        }
    },
    runStackItem: function (index, stackLength) {
        // log("runStackItem(index:"+index+")");
        window.setTimeout(function () {
            if (index == (stackLength - 1)) {
                AFTC.ResizeManager.running = false;
            }
            AFTC.ResizeManager.stack[index].fn();
        }, AFTC.ResizeManager.delay);

    },
    resizeHandler: function (e) {
        if (AFTC.ResizeManager.running) {
            return;
        }
        AFTC.ResizeManager.running = true;

        window.setTimeout(function () {
            var len = AFTC.ResizeManager.stack.length;
            for (var i = 0; i < len; i++) {
                AFTC.ResizeManager.runStackItem(i, len);
            }
        }, AFTC.ResizeManager.delay);
    }
}
// # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
// # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #

