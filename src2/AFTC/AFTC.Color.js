/*
 * Author: Darcey.Lloyd@gmail.com
 */

/**
 * @function: getHSLColor(xxx)
 * @desc: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
 * @param string xxxx: xxxxxxxxxxxxxxxxxxxx
 */
window.getHSLColor = function (value) {
    //value from 0 to 1
    var hue = ((1 - value) * 120).toString(10);
    return ["hsl(", hue, ",100%,50%)"].join("");
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


/**
 * @function: rgb2Hex(r,g,b)
 * @desc: rgb to hex
 * @param number r: red
 * @param number g: green
 * @param number b: blue
 * @return string: hex color
 */
window.rgb2Hex = function (r, g, b) {
    return ((r << 16) | (g << 8) | b).toString(16);
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

/**
 * @function: rgbToHex(r,g,b)
 * @desc: rgb to hex
 * @param number r: red
 * @param number g: green
 * @param number b: blue
 * @return string: hex color
 */
window.rgbToHex = function (r, g, b) {
    function getHex(c) {
        var hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    }
    var hex = "#" + getHex(r) + getHex(g) + getHex(b);
    hex = hex.toUpperCase();
    return hex;
}



/**
 * @function: hexToRgb(hex)
 * @desc: hexToRgb
 * @param string hex: hex color
 * @return string: rgb color
 */
window.hexToRgb = function (hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}
window.hex2Rgb = function (hex) { return window.hexToRgb(hex); }
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -






AFTC.Color = function () {
    var me = this;
    var args = {
        r: false, g: false, b: false, a: false,
        hex: false
    };
    var params = {
        random: true,
        r: false,
        g: false,
        b: false,
        a: false,
    };

    if (arguments[0] && typeof (arguments[0]) == "object") {
        new AFTC.ArgsToObject(arguments[0], args);
        params.random = false;
    }

    function init() {
        if (params.random) {
            me.randomizeColor();
        } else {
            if (args.hex) {
                // log("HEX");
                params.hex = args.hex;
                args.hex = args.hex.replace("#", "");
                var HexBits = args.hex.match(/.{1,2}/g)
                params.r = hexToDec(HexBits[0]);
                params.g = hexToDec(HexBits[1]);
                params.b = hexToDec(HexBits[2]);
                params.a = 1;
            } else if (!args.hex && !args.a) {
                // log("RGB");
                !args.r ? params.r = 0 : params.r = args.r;
                !args.g ? params.g = 0 : params.g = args.g;
                !args.b ? params.b = 0 : params.b = args.b;
                params.a = 1;
            } else if (!args.hex && args.a) {
                // log("RGBA");
                !args.r ? params.r = 0 : params.r = args.r;
                !args.g ? params.g = 0 : params.g = args.g;
                !args.b ? params.b = 0 : params.b = args.b;
                !args.a ? params.a = 0 : params.a = args.a;
            } else {
                console.log("AFTC.Color(): Invalid color or arguments supplied! Use {r:0,g:0,b:0} or {r:0,g:0,b:0,a:1} or {hex:'#FFFFFF'}");
                me.randomizeColor();
                params.random = true;
            }
        }
        // log(args);
        // log(params);
    }

    function hexToDec(v) {
        return parseInt(v, 16);
    }

    function decToHex(v) {
        var hex = v.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    }

    this.randomizeColor = function () {
        params.r = Math.round(Math.random() * 255);
        params.g = Math.round(Math.random() * 255);
        params.b = Math.round(Math.random() * 255);
        params.a = 1;
    }

    this.getRGBSstring = function () {
        var c = "RGB(" + params.r + "," + params.g + "," + params.b + ")";
        return c;
    }
    this.getRGBASstring = function () {
        var c = "RGBA(" + params.r + "," + params.g + "," + params.b + "," + params.a + ")";
        return c;
    }
    this.getHexString = function () {
        var c = "#" + decToHex(params.r) + decToHex(params.g) + decToHex(params.b);
        c = c.toUpperCase();
        return c;
    }
    this.getHex = function () { return this.getHexString(); }
    this.hex = function () { return this.getHex(); }
    this.getRGB = function () { return this.getRGBSstring(); }
    this.rgb = function () { return this.getRGB(); }
    this.getRGBA = function () { return this.getRGBASstring(); }
    this.rgba = function () { return this.getRGBA(); }

    init();
}





/**
 * @function: getRandomColor()
 * @desc: returns a random RGB object o.r, o.g, o.g
 */
window.getRandomColor = function () {
    var c = new AFTC.Color();
    return c;
}
window.getRandomHexColor = function () {
    var c = new AFTC.Color();
    return c.getHex();
}
window.getRandomRGBString = function () {
    var c = new AFTC.Color();
    return c.getRGB();
}
window.getRandomRGBAString = function () {
    var c = new AFTC.Color();
    return c.getRGBA();
}
window.getRandomRGBColor = function () {
    var c = new AFTC.Color();
    return c.getRGB();
}
