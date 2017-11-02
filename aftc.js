// Uncomment line below to add jquery to the build
//var $ = require("jquery"); // See webpack.config.js for "resolve"" path for jquery)

// Comment out the ones you don't want/need
import "./src/debug.js"; // Dependencies: none
import "./src/array.js"; // Dependencies: none
import "./src/conversion.js"; // Dependencies: none
import "./src/string.js"; // Dependencies: none
import "./src/misc.js"; // Dependencies: none
import "./src/datetime.js"; // Dependencies: none
import "./src/detection.js"; // Dependencies: none
import "./src/dom.js"; // Dependencies: none
import "./src/cookies.js"; // Dependencies: none
import "./src/form.js"; // Dependencies: none
import "./src/graphics.js"; // Dependencies: none
//import "./src/io.js"; // Dependencies: jQuery >= 1.12
import "./src/validation.js"; // Dependencies: none
import "./src/aftc.js"; // Dependencies: none
import "./src/color.js"; // Dependencies: none
import "./src/animation.gsap.js"; // Requires: TweenLite.min.js or TweenMax.min.js & ScrollToPlugin.min.js
import "./src/animation.jquery.js"; // Requires: jQuery >= 1.12





// Example on including lodash, axios etc from nodemodules via nodejs apps
//var _ = require('lodash'); // https://lodash.com/
//import "../node_modules/axios/dist/axios.min.js"; // https://github.com/mzabriskie/axios