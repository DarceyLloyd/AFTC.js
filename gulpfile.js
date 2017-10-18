var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');


// Utility files first (window.) aka global scope functions
var jsFiles = [
    "./node_modules/jquery/dist/jquery.min.js",
    "./src/debug.js",
    "./src/animation.js",
    "./src/conversion.js", 
    "./src/cookies.js", 
    "./src/cordova.js", 
    "./src/datetime.js",  
    "./src/detection.js", 
    "./src/dom.js", 
    "./src/form.js", 
    "./src/graphics.js", 
    "./src/io.js", 
    "./src/misc.js", 
    "./src/string.js", 
    "./src/validation.js", 
    './src/aftc.js',
    './src/color.js',
];

gulp.task('build-dev', function () {
    //gulp.src('./src/**/*.js')
    gulp.src(jsFiles)
        .pipe(concat('aftc.js'))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('watch-dev', function () {
    gulp.watch(jsFiles, ['build-dev']);
});





gulp.task('build', function () {
    gulp.src(AFTCThreeJSFiles)
        .pipe(concat('aftc.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/'));
});

gulp.task('watch', function () {
    gulp.watch(jsFiles, ['build']);
});







// I've left this in encase I ever want to start using sass/scss
// var sass = require('gulp-ruby-sass');
// var autoprefixer = require('gulp-autoprefixer');
// var minifyCss = require('gulp-minify-css');

// gulp.task('sass', function () {
//     gulp.src('src/sass/styles.scss')
//         .pipe(sass())
//         .pipe(autoprefixer())
//         .pipe(minifyCss())
//         .pipe(gulp.dest('dest'));
// });

// gulp.task('default', ['scripts', 'sass'], function () {
//     gulp.watch('src/js/**/*.js', ['scripts']);
//     gulp.watch('src/sass/**/*.{sass,scss}', ['sass']);
// });