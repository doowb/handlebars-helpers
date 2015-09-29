'use strict';

var helpersModule = require('./');
var toc = require('../../../../support/utils/toc.js');

function link() {
  return function (obj, type) {
    return toc[type](obj.name, obj);
  };
}

helpersModule.filter('link', link);
