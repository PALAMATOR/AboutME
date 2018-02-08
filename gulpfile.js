var gulp = require('gulp'),
    stylus = require('gulp-stylus'),
    pug = require('gulp-pug'),
    htmlmin = require('gulp-htmlmin'),
    plumber = require('gulp-plumber'),
    autoprefixer = require('gulp-autoprefixer'),
    cssmin = require('gulp-cssmin'),
    rename = require('gulp-rename'),
    concatCss = require('gulp-concat-css'),
    concatJS = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin');

gulp.task('Stylus', function () {
    return gulp.src('src/style.styl')
        .pipe(plumber())
        .pipe(stylus())
        .pipe(autoprefixer(['last 3 versions']))
        .pipe(cssmin())
        .pipe(gulp.dest('dist'))
});

gulp.task('Pug', function () {
  return gulp.src('src/index.pug')
        .pipe(plumber())
        .pipe(pug())
        .pipe(htmlmin())
        .pipe(gulp.dest('dist'))
});

gulp.task('CompressJS', function () {
    return gulp.src('src/**/*.js')
      .pipe(concatJS('scrypt.js'))
      //.pipe(uglify())
      .pipe(gulp.dest('dist'));
});

gulp.task('CompressIMG', function () {
    return gulp.src('src/**/*.png')
        .pipe(imagemin(
            imagemin.optipng({optimizationlevel: 7})
        ))
        .pipe(gulp.dest('dist/res/img'))
});

gulp.task('UBER Watch', ['Stylus', 'Pug', 'CompressJS', 'CompressIMG'], function () {
    gulp.watch('src/**/*.styl', ['Stylus']);
    gulp.watch('src/**/*.pug', ['Pug']);
    gulp.watch('src/**/*.js', ['CompressJS']);
    gulp.watch('src/**/*.png', ['CompressIMG']);
});
