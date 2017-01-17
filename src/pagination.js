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