'use strict';

var lunr = require('lunr');
var controllersModule = require('./');
var comments = require('../../data/comments.json');
var idx = lunr.Index.load(require('../../data/helpers-search-index.json'));
var toc = require('../../../../support/utils/toc.js');

function link() {
  return function (obj, type) {
    return toc[type](obj.name, obj);
  };
}

/**
 * @ngInject
 */
function HelpersListCtrl($scope, $location, $anchorScroll) {

  $anchorScroll.yOffset = 50;
  $scope.searchResults = [];
  $scope.link = link();
  $scope.scrollTo = function (id) {
    $anchorScroll(id);
  };

  // build up an object to use in the sidebar
  $scope.collections = Object.keys(comments.methods)
    .map(function (col) {
      var collection = comments.methods[col];
      collection.helpers = [];
      if (collection.data && collection.data.methods) {
        collection.helpers = Object.keys(collection.data.methods)
          .map(function (key) {
            var helper = collection.data.methods[key];
            helper.key = collection.name + ':' + helper.name;
            return helper;
          });
      }
      return collection;
    });

  // make sure everything is shown
  showAll();

  // filter out collections that don't match the search
  $scope.collectionSearch = function (collection) {
    return $scope.searchResults.filter(function (item) {
      return item.split(':')[0] === collection.name;
    }).length > 0;
  };

  // filter out helpers that don't match the search
  $scope.helperSearch = function (helper) {
    return $scope.searchResults.filter(function (item) {
      return item === helper.key;
    }).length > 0;
  };

  $scope.noparams = function (line) {
    return line.indexOf('@') === -1;
  };

  // use lunr to find helpers based on the search string
  $scope.search = '';
  $scope.find = function () {
    if ($scope.search.length === 0) {
      return showAll();
    }

    $scope.searchResults = idx.search($scope.search)
      .map(function (item) {
        return item.ref;
      });
  };

  function showAll () {
    $scope.searchResults = [];
    $scope.collections.forEach(function (collection) {
      collection.helpers.forEach(function (helper) {
        $scope.searchResults.push(helper.key);
      });
    });
  }
}

controllersModule.controller('HelpersListCtrl', HelpersListCtrl);
