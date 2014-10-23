var gulp = require('gulp');
var plumber = require('gulp-plumber');
var rename = require('gulp-rename');
var livereload = require('gulp-livereload');

const SCRIPTS_ENTRY = 'entry.react.js';
const STYLES_ENTRY = 'entry.scss';

var browserify = require('gulp-browserify');
var reactify = require('reactify');

gulp.task('scripts', function() {
  return gulp.src(SCRIPTS_ENTRY)
    .pipe(plumber())
    .pipe(browserify({ transform: [reactify] }))
    .pipe(rename('bundle.js'))
    .pipe(gulp.dest('public/'))
    .pipe(livereload());
});

var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('styles', function() {
  return gulp.src(STYLES_ENTRY)
    .pipe(plumber())
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(rename('bundle.css'))
    .pipe(gulp.dest('public/'))
    .pipe(livereload());
});

gulp.task('watch', function() {
  gulp.watch(SCRIPTS_ENTRY, ['scripts']);
  gulp.watch(STYLES_ENTRY, ['styles']);
});

gulp.task('default', ['scripts', 'styles', 'watch']);