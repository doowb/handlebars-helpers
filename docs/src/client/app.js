'use strict';

var angular = require('angular');
require('./controllers');

angular.element(document).ready(function () {
  var requires = ['app.controllers'];
  window.app = angular.module('ng-handlebars-helpers', requires);

  angular.bootstrap(document, ['ng-handlebars-helpers']);
});
