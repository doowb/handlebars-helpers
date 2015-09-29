/*!
 * handlebars-helpers <https://github.com/doowb/handlebars-helpers>
 *
 * Copyright (c) 2015, Brian Woodward.
 * Licensed under the MIT License.
 */

'use strict';
var path = require('path');
var runtimes = require('composer-runtimes');
var assemble = require('assemble');

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

var plugin = require('./support');
var utils = require('./docs/lib/utils');

var app = assemble();
var loader = require('assemble-loader');
app.use(runtimes())
  .use(loader())
  .on('error', function (err) {
    console.log(err);
  });

var copy = utils.copy(app);

app.option('renameKey', function (fp) {
  return path.basename(fp, path.extname(fp));
});

app.task('search', function () {
  var opts = {};

  // function to create lunr index collection
  opts.index = function (lunr) {
    return lunr(function () {
      this.ref('id');
      this.field('collection', { boost: 10 });
      this.field('name', { boost: 10 });
      this.field('lead', { boost: 100 });
      this.field('examples');

      // allow searching for words like `is` and `has`
      this.pipeline.remove(lunr.stopWordFilter);
    });
  };

  // property to add to the index
  opts.item = 'data.comments';

  // name of the file to save the index to
  opts.name = 'helpers-search-index';

  return app.src(['lib/*.js'])
    .pipe(plugin.parseComments())
    .pipe(plugin.lunr(opts))
    .pipe(app.dest('docs/src/data'));
});

app.task('comments', function () {
  var opts = {
    rename: 'comments.json'
  };

  opts.filter = function (file) {
    var res = /summary\.md/.exec(file.path);
    return res == null ? false : true;
  };

  return app.src(['lib/*.js'])
    .pipe(plugin.methods({name: 'helpers', cwd: 'lib'}))
    .pipe(plugin.stringify(opts))
    .pipe(app.dest('docs/src/data'));
});

app.task('load', ['search', 'comments'], function (done) {
  app.data('docs/src/data/*.json');
  app.layouts.load('docs/src/templates/layouts/*.hbs');
  app.partials.load('docs/src/templates/partials/*.{hbs,md}');
  done();
});

app.task('site', ['load'], function(){
  return app.src('docs/src/templates/pages/*.hbs')
    .pipe(app.renderFile())
    .pipe(extname())
    .pipe(app.dest('_gh_pages'))
    .pipe(connect.reload());
});

app.task('vendor', function (done) {
  utils.series([
    copy(['docs/vendor/bootstrap/dist/css/*.*'], '_gh_pages/assets/css'),
    copy(['docs/vendor/bootstrap/dist/fonts/*.*'], '_gh_pages/assets/fonts'),
    copy(['docs/vendor/bootstrap/dist/js/bootstrap.min.js'], '_gh_pages/assets/js'),
  ], done);
});

app.task('assets', function () {
  return copy('docs/src/assets/styles/**/*.*', '_gh_pages/assets/css')()
    .pipe(connect.reload());
});

app.task('client', function () {
  // return app.copy('docs/src/client/**/*.*', '_gh_pages/assets/js')
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
      .pipe(app.dest('_gh_pages/assets/js'))
      .pipe(connect.reload());
  };

  return rebundle();
});

app.task('deploy', function(){
  return app.src('_gh_pages/**/*', {dot: true})
    .pipe(deploy());
});

app.task('connect', function () {
  connect.server({
    root: '_gh_pages',
    livereload: true
  });
});

app.task('watch', ['default'], function () {
  app.watch('docs/src/**/*', ['default']);
});

app.task('default', ['site', 'vendor', 'assets', 'client']);
app.task('dev', {flow: 'parallel'}, ['connect', 'watch']);

module.exports = app;
