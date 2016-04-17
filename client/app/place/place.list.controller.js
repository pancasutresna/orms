(function() {
    'use strict';

    angular
    .module('app.place')
    .controller('PlaceListController', PlaceListController);

    PlaceListController.$inject =  ['ResourcePlaceCache'];
    function PlaceListController(ResourcePlaceCache) {
        var vm = this;
        vm.places = ResourcePlaceCache.query();

        vm.sortOptions = [
            {value: 'title', text: 'Sort by Title'},
            {value: 'published', text: 'Sort by publish data'}
        ];

        vm.sortOrder = vm.sortOptions[0].value;
    }

})();
