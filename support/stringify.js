'use strict';

var through = require('through2');
var File = require('vinyl');

module.exports = function(options) {
  options = options || {};
  var filterFn = options.filter || function () {
    return true;
  };

  if (typeof filter === 'string') {
    var filter = filterFn;
    filterFn = function (file) {
      return get(file, filter);
    };
  }

  var renameFn = options.rename || function (fp) {
    return fp;
  };
  if (typeof renameFn === 'string') {
    var rename = renameFn;
    renameFn = function () {
      return rename;
    };
  }

  var dataFn = options.data || function (file) {
    return file.data;
  };
  if (typeof dataFn === 'string') {
    var data = dataFn;
    dataFn = function (file) {
      return get(file, data);
    };
  }

  return through.obj(function (file, enc, cb) {
    if (filterFn(file) === true) {
      file.contents = new Buffer(JSON.stringify(dataFn(file), null, 2));
      file.path = renameFn(file.path);
      return cb(null, file);
    }
    cb();
  });
}
