(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function() {
    'use strict';

    angular.module('tmjPagination', []);
})();
(function() {
    'use strict';

    angular.module('tmjPagination')
        .directive('pagination', pagination);
    pagination.$inject = [];

    function pagination() {
        var directive = {
            link: link,
            restrict: 'E',
            template: '<nav>' +
                        '<ul class="pagination">' +
                          '<li><a href="#" aria-label="Previous"><span aria-hidden="true">&laquo;</span></a></li>' +
                          '<li><a href="#">1</a></li>' +
                          '<li><a href="#">2</a></li>' +
                          '<li><a href="#">3</a></li>' +
                          '<li><a href="#">4</a></li>' +
                          '<li><a href="#">5</a></li>' +
                          '<li><a href="#" aria-label="Next"><span aria-hidden="true">&raquo;</span></a></li>' +
                        '</ul>' +
                      '</nav>',
            scope: {}
        };

        return directive;

        function link(scope, element, attrs) {}
    }
})();
},{}]},{},[1]);
