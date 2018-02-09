const webpack = require('webpack');
var path = require('path');


var jsFiles = [
    
  // The base, the essentials, the foundations, stuff I can't live without
  "./src/base.js", // Dependencies: none

  // Dev assist utility functions / tools (comment out the files you dont want in your aftc.min.js build)
  "./src/string.js", // Dependencies: none
  "./src/random.js", // Dependencies: none
  "./src/datetime.js", // Dependencies: none
  "./src/cookies.js", // Dependencies: none
  "./src/validation.js", // Dependencies: none
  "./src/graphics.js", // Dependencies: none

  // Utilities / tools which focus on a specific area / task(s), the larger things (comment out the files you dont want in your aftc.min.js build)
  "./src/animation.js", // Dependencies: none
  './src/color.js', // Dependencies: none
  "./src/detection.js", // Dependencies: none
  "./src/dom.js", // Dependencies: none
  "./src/styling.js", // Dependencies: none
  "./src/form.js", // Dependencies: none
  // "./src/io.js", // Dependencies: jQuery >= 1.12
  
  // Common 3rd party libraries which I often require (You may find them useful also)
  //"./node_modules/jquery/dist/jquery.min.js", //People are far too reliant on this library
  //"./node_modules/gsap/src/minified/TweenMax.min.js", //113kb (The GOD of JavaScript Animation libraries)
  //"./node_modules/gsap/src/minified/TweenLite.min.js", //13kb (The DemiGOD of JavaScript Animation libraries)
];

module.exports = {
  entry: {
    myPages:jsFiles
  },
  resolve: {
    
  },
  output: {
    filename: 'aftc.min.js',
    path: path.resolve(__dirname, 'dist')
  },
  //devtool: 'source-map'
};