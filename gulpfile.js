var gulp = require('gulp');
var plumber = require('gulp-plumber');
var rename = require('gulp-rename');
var livereload = require('gulp-livereload');

const SCRIPTS_ENTRY = 'entry.react.js';
const STYLES_ENTRY = 'entry.scss';
const PUBLIC_DIR = 'public/';
const SERVER_PORT = process.env.PORT || 8080;

var browserify = require('gulp-browserify');
var reactify = require('reactify');
var uglify = require('gulp-uglify');

gulp.task('scripts', function() {
  return gulp.src(SCRIPTS_ENTRY)
    .pipe(plumber())
    .pipe(browserify({ transform: [reactify] }))
    .pipe(uglify())
    .pipe(rename('bundle.js'))
    .pipe(gulp.dest(PUBLIC_DIR))
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
    .pipe(gulp.dest(PUBLIC_DIR))
    .pipe(livereload());
});

gulp.task('watch', function() {
  gulp.watch([SCRIPTS_ENTRY, 'screens.js'], ['scripts']);
  gulp.watch(STYLES_ENTRY, ['styles']);
});

var http = require('http');
var ecstatic = require('ecstatic');
var open = require('open');

gulp.task('serve', function() {
  var server = http.createServer(ecstatic({ root: PUBLIC_DIR }));
  server.listen(SERVER_PORT, function() {
    console.log('Server listening on port', SERVER_PORT);
    open('http://localhost:'+SERVER_PORT);
  });
});

gulp.task('default', ['scripts', 'styles', 'watch', 'serve']);