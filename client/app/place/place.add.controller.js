(function() {
    'use strict';

    angular
        .module('app.place')
        .controller('PlaceAddController', PlaceAddController);

    PlaceAddController.$inject = ['$scope', 'PlaceFactory', 'ResourcePlaceCache', 'logger', '$location'];
    function PlaceAddController($scope, PlaceFactory, ResourcePlaceCache, logger, $location) {

        $scope.addNew = function() {
            var newPlaceData = {
                title: $scope.title,
                tags: $scope.tags //TODO: Insert into database
            };

            PlaceFactory.addNewPlace(newPlaceData).then(function(place) {
                ResourcePlaceCache.extendPlaces(place);
                $location.path('/places/' + place._id);
            }, function(reason) {
                logger.error(reason);
            });
        };
    }
})();
