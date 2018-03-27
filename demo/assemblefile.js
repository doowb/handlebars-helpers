'use strict';

const fs = require('fs');
const del = require('delete');
const watch = require('base-watch');
const assemble = require('assemble');
const buffer = require('vinyl-buffer');
const browserify = require('browserify');
const ghPages = require('gulp-gh-pages');
const source = require('vinyl-source-stream');
const browserSync = require('browser-sync').create();
const helpers = require('../');

const app = assemble();
app.use(watch());

app.option('layout', 'default');
app.helpers(helpers());

app.task('browserify', function() {
  const b = browserify({
    entries: './src/client/index.js',
    debug: true,
    // Tell browserify about libraries that are already loaded
    external: ['jquery', '$']
  })
    .transform('babelify', {presets: ['es2015']})
    .transform('brfs');

  return b.bundle()
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(app.dest('_gh_pages/assets/js'))
    .pipe(browserSync.stream());
});

app.task('clean', function(cb) {
  del('_gh_pages', cb);
});

app.task('cleanPublish', function(cb) {
  del('.publish', {force: true}, cb);
});

app.task('push', function() {
  return app.src('_gh_pages/**/*')
    .pipe(ghPages());
});

app.task('deploy', app.series(['push', 'cleanPublish']));

app.task('copy-assets', function() {
  return app.copy(['src/assets/**/*'], '_gh_pages/assets');
});

app.task('copy-bootstrap-css', function() {
  return app.copy(['node_modules/bootstrap/dist/css/*.*'], '_gh_pages/assets/css/bootstrap');
});

app.task('copy-bootstrap-js', function() {
  return app.copy(['node_modules/bootstrap/dist/js/*.*'], '_gh_pages/assets/js/bootstrap');
});

app.task('copy-codemirror-css', function() {
  return app.copy(['node_modules/codemirror/{lib,theme}/*.css'], '_gh_pages/assets/css/codemirror');
});

app.task('copy-jquery', function() {
  return app.copy(['node_modules/jquery/dist/*.*'], '_gh_pages/assets/js/jquery');
});

app.task('copy-open-iconic-css', function() {
  return app.copy(['node_modules/open-iconic/font/css/open-iconic-bootstrap.{css,min.css}'], '_gh_pages/assets/css');
});

app.task('copy-open-iconic-font', function() {
  return app.copy(['node_modules/open-iconic/font/fonts/*.*'], '_gh_pages/assets/fonts');
});

app.task('copy-popper', function() {
  return app.copy(['node_modules/popper.js/dist/umd/*.*'], '_gh_pages/assets/js/popper.js');
});

app.task('copy', ['copy-*']);

app.task('load-data', function(cb) {
  const examples = require('../examples');
  const collections = Object.keys(examples);
  const data = collections.map(collection => {
    const obj = {name: collection};
    const helpers = Object.keys(examples[collection]);
    obj.helpers = helpers.map(name => {
      const helper = examples[collection][name];
      return {name: name, ...helper};
    });
    return obj;
  }, []);

  app.data({collections: data});
  cb();
});

app.task('load', ['load-data'], function(cb) {
  app.layouts('layouts/*.hbs', {cwd: 'src/templates'});
  app.partials('partials/*.hbs', {cwd: 'src/templates'});
  app.partials('components/*.hbs', {cwd: 'src/templates'});
  app.pages('pages/*.hbs', {cwd: 'src/templates'});
  app.data({site: {title: 'Handlebars Helpers Demo'}});
  cb();
});

app.task('build', ['clean', 'copy', 'browserify', 'load'], function() {
  return app.toStream('pages')
    .pipe(app.renderFile())
    .pipe(app.dest(function(file) {
      file.extname = '.html';
      return '_gh_pages';
    }))
    .pipe(browserSync.stream());
});

app.task('serve', function(cb) {
  browserSync.init({
    port: 8080,
    startPath: 'index.html',
    server: {
      baseDir: '_gh_pages'
    }
  }, cb);
});

app.task('watch', function() {
  app.watch(['./src/**/*'], ['build']);
});

app.task('dev', app.series('build', app.parallel(['serve', 'watch'])));
app.task('default', ['build']);

module.exports = app;
