// /**
//  * @function: getHSLColor(xxx)
//  * @desc: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
//  * @param string xxxx: xxxxxxxxxxxxxxxxxxxx
//  */
// window.getHSLColor = function (value) {
//   //value from 0 to 1
//   var hue = ((1 - value) * 120).toString(10);
//   return ["hsl(", hue, ",100%,50%)"].join("");
// }
// // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


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
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

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
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -





/**
 * @class: AFTC.Color({params})
 * @desc: Color allows you to create, convert, lighten or darken colours and more.
 * @param object params: parameters object
 * @return object: [AFTC.Color]
 * @link: https://codepen.io/AllForTheCode/pen/mLZRge
 */
AFTC.Color = function () {
  var me = this;
  var args = {
    r: false, g: false, b: false, a: false,
    hex: false
  };
  var params = {
    r: false,
    g: false,
    b: false,
    a: false,
  };

  if (arguments[0] && typeof (arguments[0]) == "object") {
    new AFTC.ArgsToObject(arguments[0], args);
  }


  function init() {
    // log(args);

    if (args.hex) {
      // log("HEX");
      params.hex = args.hex;
      initHex();
    } else if (!args.hex && !isBool(args.r) && !isBool(args.g) && !isBool(args.b) && !args.a) {
      // log("RGB");
      !args.r ? params.r = 0 : params.r = args.r;
      !args.g ? params.g = 0 : params.g = args.g;
      !args.b ? params.b = 0 : params.b = args.b;
      params.a = 1;
    } else if (!args.hex && !isBool(args.r) && !isBool(args.g) && !isBool(args.b) && !isBool(args.a)) {
      // log("RGBA");
      !args.r ? params.r = 0 : params.r = args.r;
      !args.g ? params.g = 0 : params.g = args.g;
      !args.b ? params.b = 0 : params.b = args.b;
      !args.a ? params.a = 0 : params.a = args.a;
    } else {
      // log("RANDOM");
      randomizeColor();
    }
  }


  function initHex() {
    args.hex = args.hex.replace("#", "");
    var HexBits = args.hex.match(/.{1,2}/g)
    params.r = hexToDec(HexBits[0]);
    params.g = hexToDec(HexBits[1]);
    params.b = hexToDec(HexBits[2]);
    params.a = 1;
  }


  function randomizeColor() {
    params.r = Math.round(Math.random() * 255);
    params.g = Math.round(Math.random() * 255);
    params.b = Math.round(Math.random() * 255);
    params.a = 1;
  }


  function alterByPercent(percent, r, g, b) {
    var step = 255 / 100; // step for 255 as a %

    function getValue(color, percent) {
      var currentP = parseInt((100 / 255) * color);
      var targetP = parseInt(currentP + percent);
      if (targetP > 100) { targetP = 100; }
      if (targetP < -100) { targetP = -100; }

      var newColor = Math.ceil(step * targetP);
      if (newColor > 255) { newColor = 255; }
      if (targetP < 0) { newColor = 0; }

      // log(percent + ": " + color + " = " + currentP + " > " + targetP + " = " + newColor);
      return newColor;
    }
    if (r) { params.r = getValue(params.r, percent); }
    if (g) { params.g = getValue(params.g, percent); }
    if (b) { params.b = getValue(params.b, percent); }
  }


  this.lighten = function (percent, spectrum) {
    if (!spectrum) {
      alterByPercent(percent, true, true, true);
    } else {
      var enableR = true,
        enableG = true,
        enableB = true;
      if (spectrum.r) { enableR = spectrum.r; }
      if (spectrum.g) { enableG = spectrum.g; }
      if (spectrum.b) { enableB = spectrum.b; }
      alterByPercent(percent, spectrum.r, spectrum.g, spectrum.b);
    }

  }

  this.darken = function (percent, spectrum) {
    if (!spectrum) {
      alterByPercent(-percent, true, true, true);
    } else {
      var enableR = true,
        enableG = true,
        enableB = true;
      if (spectrum.r) { enableR = spectrum.r; }
      if (spectrum.g) { enableG = spectrum.g; }
      if (spectrum.b) { enableB = spectrum.b; }
      alterByPercent(-percent, spectrum.r, spectrum.g, spectrum.b);
    }
  }



  // Utility functions
  function hexToDec(v) {
    return parseInt(v, 16);
  }

  function decToHex(v) {
    var hex = v.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }

  // Public function
  this.randomizeColor = function () {
    randomizeColor();
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
  this.setRGB = function (r, g, b) { params.r = r; params.g = g; params.b = b; }
  this.setHex = function (hex) { args.hex = hex; initHex(); }

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
