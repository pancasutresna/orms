(function() {
    'use strict';

    angular
    .module('app.place')
    .controller('PlaceListController', PlaceListController);

    PlaceListController.$inject =  ['$scope', 'datacontext'];
    function PlaceListController($scope, datacontext) {
        var vm = this;
        vm.currentPage;
        vm.places = datacontext.place.query({page: 1, limit: 5});

        vm.sortOptions = [
            {value: 'title', text: 'Sort by Title'},
            {value: 'published', text: 'Sort by publish data'}
        ];

        vm.sortOrder = vm.sortOptions[0].value;

        vm.gotoPage = function(page, pageSize, total){
            vm.places = datacontext.place.query({page: page, limit: pageSize});
        }
    }

})();
