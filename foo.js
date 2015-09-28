'use strict';

var search = process.argv.slice(2)[0] || 'is';

var lunr = require('lunr');
// var idx = lunr(function () {
//   this.ref('id');
//   this.field('collection', { boost: 10 });
//   this.field('name', { boost: 10 });
//   this.field('lead', { boost: 100 });
//   this.field('examples');
// });

var idx = lunr.Index.load(require('./docs/search/helpers-search-index.json'));

console.log(idx.search(search))
