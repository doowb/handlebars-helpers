'use strict';

var lunr = require('lunr');
var controllersModule = require('./');
var nav = require('../../data/helpers-nav.json');
var idx = lunr.Index.load(require('../../data/helpers-search-index.json'));


/**
 * @ngInject
 */
function HelpersListCtrl($scope, $location, $q) {

  $scope.data = [];
  allData();

  $scope.collections = Object.keys(nav).map(function (col) {
    var collection = {name: col};
    collection.helpers = Object.keys(nav[col]).map(function (key) {
      return {name: key, col: col, key: [col, key].join(':')};
    });
    return collection;
  });

  $scope.collectionSearch = function (collection) {
    return $scope.data.filter(function (item) {
      return item.split(':')[0] === collection.name;
    }).length > 0;
  };

  $scope.helperSearch = function (helper) {
    return $scope.data.filter(function (item) {
      return item === helper.key;
    }).length > 0;
  };

  $scope.search = '';
  $scope.find = function () {
    if ($scope.search.length === 0) {
      return allData();
    }

    $scope.data = idx.search($scope.search)
      .map(function (item) {
        return item.ref;
      });
  };

  function allData () {
    $scope.data = [];
    Object.keys(nav)
      .forEach(function (col) {
        Object.keys(nav[col])
          .forEach(function (helper) {
            $scope.data.push(nav[col][helper]);
          });
      });
  }
}

controllersModule.controller('HelpersListCtrl', HelpersListCtrl);
