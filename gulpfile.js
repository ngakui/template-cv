// Gulpfile for project
"use strict";


// Declaration of gulp's modules
const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', function () {
    return gulp.src(['./scss/main.scss'])
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./final_template'))
        .pipe(gulp.dest('./'));
})

gulp.task('html', function () {
    return gulp.src(['./index.html'])
        .pipe(gulp.dest('./final_template'));
})

gulp.task('compile', function() {
    gulp.watch('./scss/**/*.scss', gulp.series('sass'))
    gulp.watch('./index.html', gulp.series('html'))
})

// gulp.task('default', function() {
//     gulp.start('sass');
//     gulp.start('html');
//     gulp.start('watch');
// });