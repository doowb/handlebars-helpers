'use strict';

var path = require('path');
var parse = require('parse-comments');
var through = require('through2');
var File = require('vinyl');
var lunr = require('lunr');

module.exports = function search (options) {
  var idx = lunr(function () {
    this.ref('id');
    this.field('collection', { boost: 10 });
    this.field('name', { boost: 10 });
    this.field('lead', { boost: 100 });
    this.field('examples');

    // allow searching for words like `is` and `has`
    this.pipeline.remove(lunr.stopWordFilter);
  });

  var nav = {};

  return through.obj(function (file, enc, cb) {
    var name = path.basename(file.path, path.extname(file.path));
    nav[name] = nav[name] || {};
    var str = file.contents.toString();
    var comments = parse(str);
    comments.forEach(function (comment) {
      if (comment.api && comment.api === 'public') {
        var obj = {
          id: name + ':' + comment.name,
          collection: name,
          name: comment.name,
          lead: comment.lead,
          examples: comment.examples.map(function (example) {
            return example.code;
          })
        };
        idx.add(obj);
        nav[name][comment.name] = obj.id;
      }
    });
    cb();
  }, function (cb) {
    var indexFile = new File({
      path: 'helpers-search-index.json',
      contents: new Buffer(JSON.stringify(idx))
    });
    this.push(indexFile);

    var navFile = new File({
      path: 'helpers-nav.json',
      contents: new Buffer(JSON.stringify(nav, null, 2))
    });
    this.push(navFile);
    cb();
  });
};
