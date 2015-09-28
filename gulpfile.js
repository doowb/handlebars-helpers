'use strict';

// var plugin = require('./support/');
var stylish = require('jshint-stylish');
var istanbul = require('gulp-istanbul');
var jshint = require('gulp-jshint');
var mocha = require('gulp-mocha');
var gulp = require('gulp');
var search = require('./docs/search.js');

var lint = ['index.js', 'lib/*.js'];

gulp.task('lint', function () {
  return gulp.src(lint)
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
});

gulp.task('coverage', function () {
  return gulp.src(lint)
    .pipe(istanbul())
    .pipe(istanbul.hookRequire());
});

gulp.task('test', ['coverage'], function () {
  return gulp.src('test/*.js')
    .pipe(mocha({reporter: 'spec'}))
    .pipe(istanbul.writeReports())
    .pipe(istanbul.writeReports({
      reporters: [ 'text' ],
      reportOpts: {dir: 'coverage', file: 'summary.txt'}
    }))
});

gulp.task('search', function () {
  gulp.src(['lib/*.js'])
    .pipe(search())
    .pipe(gulp.dest('docs/src/data'));
});

// gulp.task('organize', function () {
//   return gulp.src('lib/*.js')
//     .pipe(organize())
//     .pipe(gulp.dest('lib/'));
// });

// gulp.task('namify', function () {
//   return gulp.src(['lib/*.js'])
//     .pipe(plugin.namify())
//     .pipe(gulp.dest('lib/'));
// });

// gulp.task('modularize', function () {
//   return gulp.src(['lib/*.js'])
//     .pipe(plugin.modularize())
//     .pipe(gulp.dest('lib/tmp'));
// });

// gulp.task('comments', function () {
//   return gulp.src(['lib/*.js'])
//     .pipe(plugin.comments())
//     .pipe(gulp.dest('lib/'));
// });

gulp.task('methods', function () {
  return gulp.src(['lib/*.js'])
    .pipe(plugin.methods({name: 'helpers', cwd: 'lib'}))
    .pipe(plugin.toc())
    // .pipe(gulp.dest('lib/'));
});

gulp.task('comments:lint', function () {
  return gulp.src(['lib/object.js'])
    .pipe(plugin.lint())
    // .pipe(gulp.dest('lib/'));
});

gulp.task('default', ['lint', 'test']);
