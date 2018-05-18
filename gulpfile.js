var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');


// Configure your build!
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
    "./src/io.js", // Dependencies: none
    "./src/misc.js", // Dependencies: none

    // Common 3rd party libraries which I often require (You may find them useful also)
    //"./node_modules/jquery/dist/jquery.min.js", //People are far too reliant on this library and for no reason
    //"./node_modules/gsap/src/minified/TweenMax.min.js", //113kb (The GOD of JavaScript Animation libraries)
    //"./node_modules/gsap/src/minified/TweenLite.min.js", //13kb (The DemiGOD of JavaScript Animation libraries)
];



var js2 = [
    // The core
    "./src2/aftc.js",
    // The base, the essentials, the foundations, stuff I can't live without
    "./src2/core/debug.js",
    "./src2/core/events.js",
    "./src2/core/array.js",
    "./src2/core/get.js",
    "./src2/core/is.js",
    "./src2/core/random.js",
    "./src2/core/string.js",
    "./src2/core/conversion.js",
    "./src2/core/datetime.js",
    "./src2/core/validation.js",
    "./src2/core/detection.js",
    "./src2/core/dom.js",
    "./src2/core/css.js",
    "./src2/core/browser.js",
    "./src2/core/cookies.js",
    "./src2/core/form.js",
    "./src2/core/geometry.js",
    "./src2/core/video.js",
    "./src2/core/misc.js",
    // Nice to have, but not essential
    "./src2/AFTC/AFTC.Audio.js", // Enables new AFTC.Audio() and playSound()
    "./src2/AFTC/AFTC.Animate.js", // Enables new AFTC.Animate()
    // "./src2/AFTC/AFTC.AR.js", // EMPTY
    // "./src2/AFTC/AFTC.Benchmark.js", // Meh
    "./src2/AFTC/AFTC.Canvas.js", // Enables new AFTC.Canvas();
    // "./src2/AFTC/AFTC.CheckboxHideShow.js",
    "./src2/AFTC/AFTC.Color.js", // Enables new AFTC.Color();
    "./src2/AFTC/AFTC.Visibility.js", // Enables hide(), show(), fade(), fadeIn() & fadeOut()
    // "./src2/AFTC/AFTC.ResizeManager.js", // Debating whether or not to remove
    // "./src2/AFTC/AFTC.VR.js", // EMPTY
    "./src2/AFTC/AFTC.XHR.js", // Everyone needs some IO, I know I do...
    
];


gulp.task('build-new', function () {
    gulp.src(js2)
        .pipe(concat('aftc.new.js'))
        // .pipe(uglify())
        .on("error", function (e) {
            console.log(e.toString());
            this.emit("end");
        })
        .pipe(gulp.dest('./dist/'));

    gulp.src(js2)
        .pipe(concat('aftc.new.min.js'))
        .pipe(uglify())
        .on("error", function (e) {
            console.log(e.toString());
            this.emit("end");
        })
        .pipe(gulp.dest('./dist/'));
});


gulp.task('build-dev', function () {
    //gulp.src('./src/**/*.js')
    gulp.src(jsFiles)
        .pipe(concat('aftc.js'))
        .on("error", function (e) {
            console.log(e.toString());
            this.emit("end");
        })
        .pipe(gulp.dest('./dist/'));
});

gulp.task('build-dist', function () {
    gulp.src(jsFiles)
        .pipe(concat('aftc.min.js'))
        .pipe(uglify())
        .on("error", function (e) {
            console.log(e.toString());
            this.emit("end");
        })
        .pipe(gulp.dest('./dist/'));
});



gulp.task('build', ['build-dev', 'build-dist']);

gulp.task('watch', function () {
    gulp.watch(jsFiles, ['build', 'build-dev']);
});




