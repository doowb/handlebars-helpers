'use strict';

var through = require('through2');
var parse = require('parse-comments');
var forOwn = require('for-own');
var path = require('path');

module.exports = function parseComments(options) {
  return through.obj(function (file, enc, cb) {
    var name = path.basename(file.path, path.extname(file.path));
    var str = file.contents.toString();
    var comments = parse(str);

    file.data = file.data || {};
    file.data.comments = [];

    forOwn(comments, function (comment, key) {
      if (comment.api && comment.api === 'public') {
        var obj = {
          id: name + ':' + comment.name,
          collection: name,
          name: comment.name,
          lead: comment.lead,
          description: comment.description,
          examples: comment.examples.map(function (example) {
            return example.code;
          })
        };
        file.data.comments.push(obj);
      }
    });

    cb(null, file);
  });
}
