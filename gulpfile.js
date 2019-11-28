const gulp = require('gulp');


// Uglify
const uglify = require('gulp-uglify'); // https://www.npmjs.com/package/gulp-uglify
const terser = require('gulp-terser'); // Supports ES5 and ES6

const concat = require('gulp-concat');
const inject = require('gulp-inject-string'); // Prepends string to top of builds
const plumber = require("gulp-plumber"); // Pipe sequence
const rename = require("gulp-rename");
const sass = require("gulp-sass");
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
    "./src/ES5/aftc.js",
    "./src/ES5/core/debug.js",
    "./src/ES5/core/events.js",
    "./src/ES5/core/array.js",
    "./src/ES5/core/get.js",
    "./src/ES5/core/is.js",
    "./src/ES5/core/random.js",
    "./src/ES5/core/string.js",
    "./src/ES5/core/conversion.js",
    "./src/ES5/core/datetime.js",
    "./src/ES5/core/validation.js",
    "./src/ES5/core/detection.js",
    "./src/ES5/core/dom.js",
    "./src/ES5/core/css.js",
    "./src/ES5/core/browser.js",
    "./src/ES5/core/cookies.js",
    "./src/ES5/core/form.js",
    "./src/ES5/core/geometry.js",
    "./src/ES5/core/video.js",
    "./src/ES5/core/misc.js"
];

// The extras, the modules, the ooo or to some, the bloat
// Nice to have, but not essential
var aftc_modules = [
    // The AFTC Core (required) START
    "./src/ES5/aftc.js",
    "./src/ES5/core/debug.js",
    "./src/ES5/core/events.js",
    "./src/ES5/core/array.js",
    "./src/ES5/core/get.js",
    "./src/ES5/core/is.js",
    "./src/ES5/core/random.js",
    "./src/ES5/core/string.js",
    "./src/ES5/core/conversion.js",
    "./src/ES5/core/datetime.js",
    "./src/ES5/core/validation.js",
    "./src/ES5/core/detection.js",
    "./src/ES5/core/dom.js",
    "./src/ES5/core/css.js",
    "./src/ES5/core/browser.js",
    "./src/ES5/core/cookies.js",
    "./src/ES5/core/form.js",
    "./src/ES5/core/geometry.js",
    "./src/ES5/core/video.js",
    "./src/ES5/core/misc.js",
    // The AFTC Core (required) END
    "./src/ES5/AFTC/AFTC.Audio.js", // Enables new AFTC.Audio() and playSound()
    "./src/ES5/AFTC/AFTC.Animate.js", // Enables new AFTC.Animate()
    // "./src/ES5/AFTC/AFTC.Canvas.js", // Enables new AFTC.Canvas(); (WORK IN PROGRESS);
    // "./src/ES5/AFTC/AFTC.CheckboxHideShow.js", // Up for review - to be updated or removed
    "./src/ES5/AFTC/AFTC.Color.js", // Enables new AFTC.Color();
    "./src/ES5/AFTC/AFTC.Visibility.js", // Enables hide(), show(), fade(), fadeIn() & fadeOut()
    // "./src/ES5/AFTC/AFTC.ResizeManager.js", // Up for review - to be updated or removed
    "./src/ES5/AFTC/AFTC.XHR.js", // Everyone needs some IO, I know I do...
];



function buildCore(done) {
    gulp.src(aftc_core)
        .pipe(concat('aftc.core.js'))
        // .pipe(uglify())
        .pipe(inject.prepend(msg))
        .on("error", function (e) {
            console.log(e.toString());
            this.emit("end");
        })
        .pipe(gulp.dest('./dist/'));
    done();
}

function buildCoreMin(done) {
    gulp.src(aftc_core)
        .pipe(concat('aftc.core.min.js'))
        .pipe(uglify())
        .pipe(inject.prepend(msg))
        .on("error", function (e) {
            console.log(e.toString());
            this.emit("end");
        })
        .pipe(gulp.dest('./dist/'));
    done();
}


function buildDev(done) {
    gulp.src(aftc_modules)
        .pipe(concat('aftc.js'))
        // .pipe(uglify())
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
    // done();
}



// const beautify = require('gulp-beautify');
const beautify = require('gulp-jsbeautifier');

const es6_module_files = [
    "./src/ES6/aftc-module.js"
];

function buildES6Modules(done){
    pump([
        gulp.src(es6_module_files),
        // concat('aftc.min.js'),
        terser({
            mangle: false
        }),
        beautify(),
        inject.prepend(msg),
        gulp.dest('./dist/')
      ],
      done
    );
}




gulp.task("build", gulp.parallel(buildCore, buildCoreMin, buildDev, buildDist, buildES6Modules));

gulp.task("build-dist",gulp.series(buildDist));