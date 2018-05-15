/*
 * Author: Darcey.Lloyd@gmail.com
 */

/**
 * @function: AFTC.Canvas({id||canvas})
 * @desc:
 * ````

 * ````
 * @param string canvasId: Canvas element id to work with
 * @param number opacity: opacity of noise
 */

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
AFTC.Canvas = function () {
    if (!(this instanceof arguments.callee)) {
        throw new Error("\nAFTC.Canvas: USAGE ERROR: Constructor called as a function.\nPlease use new AFTC.DOM.HideHsow({})");
    }

    var me = this;
    var args = {
        id: false, canvas: false
    }
    var params = {
        canvas: false,
        context: false,
    };

    new AFTC.ArgsToObject(arguments[0], args);

    function init() {
        if (args.id && !args.canvas) {
            params.canvas = getElementById(args.id);
        } else if (!args.id && args.canvas) {
            params.canvas = args.canvas;
        } else {
            params.canvas = document.createElement("canvas");
        }
        params.context = params.canvas.getContext('2d');
    }

    this.drawCircle = function (args) {
        var fnArgs = {
            x: 0, y: 0, radius: 20,
            fillColor: "#FFCC00",
            borderWidth: 2,
            borderColor: "#000000"
        };
        AFTC.ArgsToObject(args, fnArgs);
        params.context.beginPath();
        params.context.arc(fnArgs.x, fnArgs.y, fnArgs.radius, 0, 2 * Math.PI, false);
        params.context.fillStyle = fnArgs.fillColor;
        params.context.fill();
        params.context.lineWidth = fnArgs.borderWidth;
        params.context.strokeStyle = fnArgs.borderColor;
        params.context.stroke();
    }

    this.drawLine = function (args) {
        var fnArgs = {
            fromX: 0, fromY: 0,
            toX: 100, toY: 1,
            color: "#FFCC00",
            lineWidth: 1
        };
        AFTC.ArgsToObject(args, fnArgs);

        params.context.beginPath();
        params.context.moveTo(fnArgs.fromX, fnArgs.fromY);
        params.context.lineTo(fnArgs.toX, fnArgs.toY);
        params.context.lineWidth = fnArgs.lineWidth;
        params.context.strokeStyle = fnArgs.color;
        params.context.stroke();
    }

    this.attachImage = function () {
        var fnArgs = {
            src: false, id: false, img: false,
            x: false, y: false, w: -1, h: -1,
            onComplete: false
        };
        var fnParams = {
            img: false,
            canvas: params.canvas,
            context: params.context
        };

        AFTC.ArgsToObject(arguments[0], fnArgs);

        if (fnArgs.src && !fnArgs.id && !fnArgs.img) {
            fnParams.img = new Image();
            fnParams.img.onload = function () {
                if (fnArgs.w != -1 && fnArgs.h != -1) {
                    fnParams.context.drawImage(this, fnArgs.x, fnArgs.y, fnArgs.w, fnArgs.h);
                } else {
                    fnParams.context.drawImage(this, fnArgs.x, fnArgs.y);
                }
            }
            fnParams.img.src = fnArgs.src;
            if (fnArgs.onComplete) { fnArgs.onComplete(); }
        } else if (!fnArgs.src && fnArgs.id && !fnArgs.img) {
            fnArgs.img = getElementById(fnArgs.id);
            if (fnArgs.w != -1 && fnArgs.h != -1) {
                fnParams.context.drawImage(fnArgs.img, fnArgs.x, fnArgs.y, fnArgs.w, fnArgs.h);
            } else {
                fnParams.context.drawImage(fnArgs.img, fnArgs.x, fnArgs.y);
            }
            if (fnArgs.onComplete) { fnArgs.onComplete(); }
        } else if (!fnArgs.src && !fnArgs.id && fnArgs.img) {
            if (fnArgs.w != -1 && fnArgs.h != -1) {
                fnParams.context.drawImage(fnArgs.img, fnArgs.x, fnArgs.y, fnArgs.w, fnArgs.h);
            } else {
                fnParams.context.drawImage(fnArgs.img, fnArgs.x, fnArgs.y);
            }
            if (fnArgs.onComplete) { fnArgs.onComplete(); }
        } else {
            console.error("AFTC.Canvas().attachImage(): Error please set the correct arguments...");
        }
    }


    this.attachText = function (args) {
        var fnArgs = {
            text: "undefined", size: 14, font: "arial",
            color: false, stroke: false, strokeSize: 1,
            x: 0, y: 0
        };
        var fnParams = {
            canvas: params.canvas,
            context: params.context
        };

        AFTC.ArgsToObject(args, fnArgs);

        fnArgs.size = parseInt(fnArgs.size);
        fnParams.context.font = fnArgs.size + "px " + fnArgs.font;
        fnParams.context.lineWidth = fnArgs.strokeSize;

        if (fnArgs.color) {
            fnParams.context.fillStyle = fnArgs.color;
            fnParams.context.fillText(fnArgs.text, fnArgs.x, fnArgs.y);
        }

        if (fnArgs.stroke) {
            fnParams.context.strokeStyle = fnArgs.stroke;
            fnParams.context.strokeText(fnArgs.text, fnArgs.x, fnArgs.y);
        }
    }

    this.getCanvas = function () { return params.canvas; }
    this.getContext = function () { return params.context; }
    this.getWidth = function () { return params.canvas.width; }
    this.getHeight = function () { return params.canvas.height; }
    this.setWidth = function (w) { params.canvas.width = w; }
    this.setHeight = function (h) { params.canvas.height = h; }
    this.setSize = function (w, h) { params.canvas.width = w; params.canvas.height = h; }
    this.getParams = function () { return params; }
    this.clear = function () { params.context.clearRect(0, 0, params.canvas.width, params.canvas.height); }

    init();
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

