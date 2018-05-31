var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');


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
    "./dist/aftc.core.js", // The AFTC Core (required)
    "./src/AFTC/AFTC.Audio.js", // Enables new AFTC.Audio() and playSound()
    "./src/AFTC/AFTC.Animate.js", // Enables new AFTC.Animate()
    // "./src/AFTC/AFTC.Canvas.js", // Enables new AFTC.Canvas(); (WORK IN PROGRESS);
    // "./src/AFTC/AFTC.CheckboxHideShow.js", // Up for review - to be updated or removed
    "./src/AFTC/AFTC.Color.js", // Enables new AFTC.Color();
    "./src/AFTC/AFTC.Visibility.js", // Enables hide(), show(), fade(), fadeIn() & fadeOut()
    // "./src/AFTC/AFTC.ResizeManager.js", // Up for review - to be updated or removed
    "./src/AFTC/AFTC.XHR.js", // Everyone needs some IO, I know I do...
];





gulp.task('build', function () {
    gulp.src(aftc_core)
        .pipe(concat('aftc.core.js'))
        // .pipe(uglify())
        .on("error", function (e) {
            console.log(e.toString());
            this.emit("end");
        })
        .pipe(gulp.dest('./dist/'));

    gulp.src(aftc_core)
        .pipe(concat('aftc.core.min.js'))
        .pipe(uglify())
        .on("error", function (e) {
            console.log(e.toString());
            this.emit("end");
        })
        .pipe(gulp.dest('./dist/'));

    gulp.src(aftc_modules)
        .pipe(concat('aftc.js'))
        // .pipe(uglify())
        .on("error", function (e) {
            console.log(e.toString());
            this.emit("end");
        })
        .pipe(gulp.dest('./dist/'));

    gulp.src(aftc_modules)
        .pipe(concat('aftc.min.js'))
        .pipe(uglify())
        .on("error", function (e) {
            console.log(e.toString());
            this.emit("end");
        })
        .pipe(gulp.dest('./dist/'));
});




// gulp.task('build-new', function () {
//     gulp.src(js2)
//         .pipe(concat('aftc.new.js'))
//         // .pipe(uglify())
//         .on("error", function (e) {
//             console.log(e.toString());
//             this.emit("end");
//         })
//         .pipe(gulp.dest('./dist/'));

//     gulp.src(js2)
//         .pipe(concat('aftc.new.min.js'))
//         .pipe(uglify())
//         .on("error", function (e) {
//             console.log(e.toString());
//             this.emit("end");
//         })
//         .pipe(gulp.dest('./dist/'));
// });


// gulp.task('build-dev', function () {
//     //gulp.src('./src/**/*.js')
//     gulp.src(jsFiles)
//         .pipe(concat('aftc.js'))
//         .on("error", function (e) {
//             console.log(e.toString());
//             this.emit("end");
//         })
//         .pipe(gulp.dest('./dist/'));
// });

// gulp.task('build-dist', function () {
//     gulp.src(jsFiles)
//         .pipe(concat('aftc.min.js'))
//         .pipe(uglify())
//         .on("error", function (e) {
//             console.log(e.toString());
//             this.emit("end");
//         })
//         .pipe(gulp.dest('./dist/'));
// });



// gulp.task('build', ['build-dev', 'build-dist']);

// gulp.task('watch', function () {
//     gulp.watch(jsFiles, ['build', 'build-dev']);
// });




