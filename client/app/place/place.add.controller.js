(function() {
    'use strict';

    angular
        .module('app.place')
        .controller('PlaceAddController', PlaceAddController);

    PlaceAddController.$inject = ['$scope', 'PlaceFactory', 'logger', '$location', 'IdentityFactory'];
    function PlaceAddController($scope, PlaceFactory, logger, $location, IdentityFactory) {

        // if (!IdentityFactory.isAuthenticated()) {
        //     $location.path('/places');
        //     return;
        // }

        $scope.addNew = function() {
            var newPlaceData = {
                title: $scope.title,
                tags: $scope.tags //TODO: Insert into database
            };

            PlaceFactory.addNewPlace(newPlaceData).then(function(place) {
                $location.path('/places/' + place._id);
            }, function(reason) {
                logger.error(reason);
            });
        };
    }
})();
