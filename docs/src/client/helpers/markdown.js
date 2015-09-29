'use strict';

var helpersModule = require('./');
var Remarkable = require('remarkable');
var defaults = require('remarkable-defaults');

/**
 * @ngInject
 */
function markdown($sce) {
  return function (str, options) {
    var md = new Remarkable(defaults(options));
    return $sce.trustAsHtml(md.render(str));
  };
}

helpersModule.filter('markdown', markdown);
