var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');


// WARNING: Ensure essentials.js and debug.js are first and second as the others may depend on them

// Configure your build!
var jsFiles = [
    //"./node_modules/jquery/dist/jquery.min.js", //People are far too reliant on this library
    //"./node_modules/gsap/src/minified/TweenMax.min.js", //113kb (The GOD of JavaScript Animation libraries)
    //"./node_modules/gsap/src/minified/TweenLite.min.js", //13kb (The DemiGOD of JavaScript Animation libraries)
    "./src/essentials.js", // Dependencies: none
    "./src/debug.js", // Dependencies: none
    "./src/misc.js", // Dependencies: none
    "./src/string.js", // Dependencies: none
    "./src/random.js", // Dependencies: none
    "./src/array.js", // Dependencies: none
    "./src/conversion.js", // Dependencies: none
    "./src/datetime.js", // Dependencies: none
    "./src/detection.js", // Dependencies: none
    "./src/styling.js", // Dependencies: none
    "./src/dom.js", // Dependencies: none
    "./src/cookies.js", // Dependencies: none
    "./src/form.js", // Dependencies: none
    "./src/graphics.js", // Dependencies: none
    "./src/animation.js", // Dependencies: none
    //"./src/io.js", // Dependencies: jQuery >= 1.12
    "./src/validation.js", // Dependencies: none
    './src/color.js', // Dependencies: none
];



gulp.task('build-dev', function () {
    //gulp.src('./src/**/*.js')
    gulp.src(jsFiles)
        .pipe(concat('aftc.js'))
        .on("error",function(e){
            console.log(e.toString());
            this.emit("end");
        })
        .pipe(gulp.dest('./dist/'));
});

gulp.task('build-dist', function () {
    gulp.src(jsFiles)
        .pipe(concat('aftc.min.js'))
        .pipe(uglify())
        .on("error",function(e){
            console.log(e.toString());
            this.emit("end");
        })
        .pipe(gulp.dest('./dist/'));
});



gulp.task('build', ['build-dev', 'build-dist']);

gulp.task('watch', function () {
    gulp.watch(jsFiles, ['build','build-dev']);
});




