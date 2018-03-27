'use strict';

var Handlebars = require('handlebars');
var helpers = require('../')();
var examples = require('./');

Handlebars.registerHelper(helpers);

Object.keys(examples).forEach(function(collection) {
  console.log('Collection: ' + collection);
  Object.keys(examples[collection]).forEach(function(name) {
    var data = examples[collection][name].data;
    var template = examples[collection][name].template;
    console.log('  Helper: ' + name);
    console.log('    Description: ' + examples[collection][name].config.description);
    console.log('    Data: ' + JSON.stringify(data));
    console.log('    Template: ' + template);
    try {
      console.log('    Output: ' + Handlebars.compile(template)(data));
    } catch (err) {
      console.log('    Error (' + collection + '.' + name + '): ' + err.message);
    }
    console.log();
  });
  console.log();
});
