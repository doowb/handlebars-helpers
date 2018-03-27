'use strict';

const handlebars = require('handlebars');
const helpers = require('../../../');
const Editor = require('./editor');
const examples = require('../../../examples');

$(() => {
  console.log('starting...');
  const collections = Object.keys(examples);
  const names = collections.reduce((acc, collection) => {
    const helpers = Object.keys(examples[collection]);
    return acc.concat(helpers.map(name => `${collection}-${name}`));
  }, []);

  const editors = names.reduce((acc, name) => {
    acc[name] = new Editor(name, {handlebars, helpers});
    return acc;
  }, {});
});
