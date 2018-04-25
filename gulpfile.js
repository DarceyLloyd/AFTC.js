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




