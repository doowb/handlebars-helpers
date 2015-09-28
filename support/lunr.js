'use strict';

var through = require('through2');
var get = require('get-value');
var File = require('vinyl');
var lunr = require('lunr');

module.exports = function plugin(options) {
  var opts = options || {};
  var name = opts.name || 'helpers-search-index';
  var idx = opts.index || function (lunr) {
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

  var itemFn = opts.item || function (file) {
    return file;
  };

  if (typeof itemFn !== 'function') {
    var item = itemFn;
    itemFn = function (file) {
      return get(file, item);
    };
  }

  if (typeof idx === 'function') {
    idx = idx(lunr);
  }

  return through.obj(function (file, enc, cb) {
    var data = itemFn(file);
    if (Array.isArray(data)) {
      data.forEach(function (item) {
        idx.add(item);
      });
    } else {
      idx.add(data);
    }
    cb();
  }, function (cb) {
    var indexFile = new File({
      path: name + '.json',
      contents: new Buffer(JSON.stringify(idx))
    });
    this.push(indexFile);
    cb();
  });
}
