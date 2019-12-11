const gulp = require('gulp');


// Uglify
// const uglify = require('gulp-uglify'); // https://www.npmjs.com/package/gulp-uglify
const terser = require('gulp-terser'); // Supports ES5 and ES6

const concat = require('gulp-concat');
const inject = require('gulp-inject-string'); // Prepends string to top of builds
// const plumber = require("gulp-plumber"); // Pipe sequence
// const rename = require("gulp-rename");
// const sass = require("gulp-sass");
const pump = require('pump');


const fs = require('fs')
const json = JSON.parse(fs.readFileSync('package.json', 'utf8'))
const version = json.version;

function log(arg) {
    console.log(arg);
}

var msg = "// AFTC.JS Version " + version + "\n"
msg += "// Author: Darcey@aftc.io" + "\n";


// The core, the base, the essentials, the foundations, the stuff I can't live without
var aftc_core = [
    "./src/aftc.js",
    "./src/core/debug.js",
    "./src/core/events.js",
    "./src/core/array.js",
    "./src/core/get.js",
    "./src/core/is.js",
    "./src/core/random.js",
    "./src/core/string.js",
    "./src/core/conversion.js",
    "./src/core/datetime.js",
    "./src/core/validation.js",
    "./src/core/detection.js",
    "./src/core/dom.js",
    "./src/core/css.js",
    "./src/core/browser.js",
    "./src/core/cookies.js",
    "./src/core/form.js",
    "./src/core/geometry.js",
    "./src/core/video.js",
    "./src/core/misc.js"
];

// The extras, the modules, the ooo or to some, the bloat
// Nice to have, but not essential
var aftc_modules = [
    // The AFTC Core (required) START
    "./src/aftc.js",
    "./src/core/debug.js",
    "./src/core/events.js",
    "./src/core/array.js",
    "./src/core/get.js",
    "./src/core/is.js",
    "./src/core/random.js",
    "./src/core/string.js",
    "./src/core/conversion.js",
    "./src/core/datetime.js",
    "./src/core/validation.js",
    "./src/core/detection.js",
    "./src/core/dom.js",
    "./src/core/css.js",
    "./src/core/browser.js",
    "./src/core/cookies.js",
    "./src/core/form.js",
    "./src/core/geometry.js",
    "./src/core/video.js",
    "./src/core/misc.js",
    // The AFTC Core (required) END
    "./src/AFTC/AFTC.Audio.js", // Enables new AFTC.Audio() and playSound()
    "./src/AFTC/AFTC.Animate.js", // Enables new AFTC.Animate()
    // "./src/AFTC/AFTC.Canvas.js", // Enables new AFTC.Canvas(); (WORK IN PROGRESS);
    // "./src/AFTC/AFTC.CheckboxHideShow.js", // Up for review - to be updated or removed
    "./src/AFTC/AFTC.Color.js", // Enables new AFTC.Color();
    "./src/AFTC/AFTC.Visibility.js", // Enables hide(), show(), fade(), fadeIn() & fadeOut()
    // "./src/AFTC/AFTC.ResizeManager.js", // Up for review - to be updated or removed
    "./src/AFTC/AFTC.XHR.js", // Everyone needs some IO, I know I do...
];


function buildCore(done) {
    gulp.src(aftc_core)
        .pipe(concat('aftc.core.js'))
        .pipe(inject.prepend(msg))
        .on("error", function (e) {
            console.log(e.toString());
            this.emit("end");
        })
        .pipe(gulp.dest('./dist/'));
    done();
}

function buildCoreMin(done) {
    pump([
            gulp.src(aftc_core),
            concat('aftc.core.min.js'),
            terser(),
            inject.prepend(msg),
            gulp.dest('./dist/')
        ],
        done
    );
}


function buildDev(done) {
    gulp.src(aftc_modules)
        .pipe(concat('aftc.js'))
        .pipe(inject.prepend(msg))
        .on("error", function (e) {
            console.log(e.toString());
            this.emit("end");
        })
        .pipe(gulp.dest('./dist/'));
    done();
}


function buildDist(done) {
    pump([
            gulp.src(aftc_modules),
            concat('aftc.min.js'),
            terser(),
            inject.prepend(msg),
            gulp.dest('./dist/')
        ],
        done
    );
}




gulp.task("build", gulp.parallel(buildCore, buildCoreMin, buildDev, buildDist));