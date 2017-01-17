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
            restrict: 'E',
            scope: {},
            controller: PaginationController,
            controllerAs: 'pc',
            bindToController: {
                limit: '@',
                route: '@',
                values: '='
            },
            template: 'Showing {{ pc.values.from }} to {{ pc.values.to }} of {{ pc.values.total }} entries <br>' + 
                      '<nav>' +
                        '<ul class="pagination">' +
                          '<li ng-class="{disabled: pc.values.prev_page_url === null}"><a href="" ng-click="pc.pager(pc.values.prev_page_url)" aria-label="Previous"><span aria-hidden="true">Previous</span></a></li>' +
                          '<li ng-repeat="i in pc.getNumber(pc.values.last_page) track by $index" ng-class="{active: pc.values.current_page === $index + 1}"><a href="" ng-click="pc.changePage($index + 1)" ng-bind="{{ $index + 1 }}"></li>' +
                          '<li ng-class="{disabled: pc.values.next_page_url === null}"><a href="" ng-click="pc.pager(pc.values.next_page_url)" aria-label="Next"><span aria-hidden="true">Next</span></a></li>' +
                        '</ul>' +
                      '</nav>'
        };

        return directive;
    }

    PaginationController.$inject = ['$http'];

    function PaginationController($http) {
        var vm = this;

        vm.$onInit = function () {
            vm.pager = pager;
            vm.getNumber = getNumber;
            vm.changePage = changePage;
            vm.limit = vm.limit ? vm.limit : 15;
            vm.pageStart = vm.pageStart ? vm.pageStart : 1;
            getData(vm.pageStart, vm.limit, null);
        };

        function getData(pageNumber, limit, url) {
            var url = url !== null ? url : vm.route + '?page=' + pageNumber + '&limit=' + limit;
            $http.get(url).then(function (res) {
                vm.values = res.data;
            }, function (error) {
                console.log('ERROR:', error);
            });
        }

        function pager(url) {
            if (url !== null) {
                getData(null, null, url);
            }
        }

        function getNumber(number) {
            return new Array(number);
        }

        function changePage(pageNumber) {
            getData(pageNumber, vm.limit, null);
        }
    }
})();