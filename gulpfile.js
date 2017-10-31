var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');


// Configure your build!
var jsFiles = [
    "./node_modules/jquery/dist/jquery.min.js",
    //"./node_modules/gsap/src/minified/TweenMax.min.js", //113kb (if you need more powerfull animation capabilities)
    //"./node_modules/gsap/src/minified/TweenLite.min.js", //13kb (basic animation only)
    //"./node_modules/gsap/src/minified/plugins/ScrollToPlugin.min.js", //4kb
    "./src/debug.js",
    "./src/array.js",
    "./src/conversion.js", 
    "./src/string.js", // Dependencies: none
    "./src/misc.js", // Dependencies: none
    //"./src/cordova.js", 
    "./src/datetime.js",  
    "./src/detection.js", 
    "./src/dom.js", 
    "./src/cookies.js", 
    "./src/form.js", // Dependencies: jQuery >= 1.12
    "./src/graphics.js", // Dependencies: none
    "./src/io.js", // Dependencies: jQuery >= 1.12
    "./src/validation.js", // Dependencies: none
    './src/aftc.js',
    './src/color.js',
    //"./src/animation.gsap.js", // Requires: TweenLite.min.js || TweenMax.min.js & ScrollToPlugin.min.js
    "./src/animation.jquery.js", // Requires: jQuery >= 1.12
];



gulp.task('build-dev', function () {
    //gulp.src('./src/**/*.js')
    gulp.src(jsFiles)
        .pipe(jslint({ /* this object represents the JSLint directives being passed down */ }))
        .pipe(jslint.reporter('default'))
        .pipe(concat('aftc.js'))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('build-dist', function () {
    gulp.src(jsFiles)
        .pipe(concat('aftc.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/'));
});



gulp.task('build', ['build-dev', 'build-dist']);

gulp.task('watch', function () {
    gulp.watch(jsFiles, ['build','build-dev']);
});




