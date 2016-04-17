(function() {
    'use strict';

    angular
    .module('app.place')
    .controller('PlaceDetailController', PlaceDetailController);

    PlaceDetailController.$inject = ['ResourcePlaceCache', '$routeParams'];
    function PlaceDetailController(ResourcePlaceCache, $routeParams) {
        var vm = this;
        ResourcePlaceCache.query().$promise.then(function(collection) {
            collection.forEach(function(place) {
                if (place._id === $routeParams.id) {
                    vm.place = place;
                }
            });
        });
    }

})();
