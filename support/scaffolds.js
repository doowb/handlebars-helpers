'use strict';

var Scaffolds = require('scaffolds');
var through = require('through2');
var File = require('vinyl');


module.exports = function(props, options) {
  options = options || {};
  var scaffolds = new Scaffolds(props, options);

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

  return through.obj(function (file, enc, cb) {
    if (filterFn(file) === true) {
      scaffolds.addFile(renameFn(file.path), file.path);
    }
    return cb();
  }, function (cb) {
    try {
      var file = new File({
        path: 'scaffolds.json',
        contents: new Buffer(JSON.stringify(scaffolds, null, 2))
      });
      this.push(file);
    } catch (err) {
      this.emit('error', err);
      return cb(err);
    }
    cb();
  });
}
