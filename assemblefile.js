/*!
 * handlebars-helpers <https://github.com/doowb/handlebars-helpers>
 *
 * Copyright (c) 2015, Brian Woodward.
 * Licensed under the MIT License.
 */

'use strict';

var verb = require('verb');
verb.option('dest:vfs plugin', false);
verb.emit('loaded');

var path = require('path');
var runtimes = require('composer-runtimes');
var assemble = require('assemble')();
var loader = require('assemble-loader');
assemble.use(runtimes())
  .use(loader());

assemble.helper('markdown', require('helper-markdown'));

var sourcemaps = require('gulp-sourcemaps');
var source = require('vinyl-source-stream');
var streamify = require('gulp-streamify');
var connect = require('gulp-connect');
var extname = require('gulp-extname');
var deploy = require('gulp-gh-pages');
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');

var ngAnnotate = require('browserify-ngannotate');
var browserify = require('browserify');
var debowerify = require('debowerify');
var watchify = require('watchify');

var utils = require('./docs/lib/utils');
var copy = utils.copy(assemble);

assemble.option('renameKey', function (fp) {
  return path.basename(fp, path.extname(fp));
});

assemble.task('verb', function (done) {
  return verb.src('docs/api.md')
    .pipe(verb.dest('docs/src/templates/partials'))
});

assemble.task('load', ['verb'], function (done) {
  assemble.data('docs/src/data/*.json');
  assemble.layouts.load('docs/src/templates/layouts/*.hbs');
  assemble.partials.load('docs/src/templates/partials/*.{hbs,md}');

  var api = assemble.partials.getView('api');
  api.content = api.content.replace(/\{{/g, '\\{{');
  done();
});

assemble.task('site', ['load'], function(){
  return assemble.src('docs/src/templates/pages/*.hbs')
    .pipe(assemble.renderFile())
    .pipe(extname())
    .pipe(assemble.dest('_gh_pages'))
    .pipe(connect.reload());
});

assemble.task('vendor', function (done) {
  utils.series([
    copy(['docs/vendor/bootstrap/dist/css/*.*'], '_gh_pages/assets/css'),
    copy(['docs/vendor/bootstrap/dist/fonts/*.*'], '_gh_pages/assets/fonts'),
    copy(['docs/vendor/bootstrap/dist/js/bootstrap.min.js'], '_gh_pages/assets/js'),
  ], done);
});

assemble.task('assets', function () {
  return copy('docs/src/assets/styles/**/*.*', '_gh_pages/assets/css')()
    .pipe(connect.reload());
});

assemble.task('client', function () {
  // return assemble.copy('docs/src/client/**/*.*', '_gh_pages/assets/js')
  //   .pipe(connect.reload());
  var bundler = browserify({
    entries: ['docs/src/client/app.js'],
    debug: true,
    cache: {},
    packageCache: {},
    fullPaths: false
  });

  bundler = watchify(bundler);
  bundler.on('update', function () {
    rebundle();
  });

  var transforms = [
    debowerify,
    ngAnnotate,
    'brfs',
    'bulkify'
  ];

  transforms.forEach(function (transform) {
    bundler.transform(transform);
  });

  function rebundle() {
    var stream = bundler.bundle();

    return stream.on('error', console.error)
      .pipe(source('app.js'))
      .pipe(buffer())
      .pipe(sourcemaps.init())
      // .pipe(streamify(uglify({
      //   compress: {drop_console: true}
      // })))
      .pipe(sourcemaps.write('./'))
      .pipe(assemble.dest('_gh_pages/assets/js'))
      .pipe(connect.reload());
  };

  return rebundle();
});

assemble.task('deploy', function(){
  return assemble.src('_gh_pages/**/*', {dot: true})
    .pipe(deploy());
});

assemble.task('connect', function () {
  connect.server({
    root: '_gh_pages',
    livereload: true
  });
});

assemble.task('watch', ['default'], function () {
  assemble.watch('docs/src/**/*', ['default']);
});

assemble.task('default', ['site', 'vendor', 'assets', 'client']);
assemble.task('dev', {flow: 'parallel'}, ['connect', 'watch']);

module.exports = assemble;
