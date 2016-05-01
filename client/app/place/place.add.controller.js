(function() {
    'use strict';

    angular
        .module('app.place')
        .controller('PlaceAddController', PlaceAddController);

    PlaceAddController.$inject = ['$scope', 'PlaceFactory', 'logger', '$location', 'IdentityFactory'];
    function PlaceAddController($scope, PlaceFactory, logger, $location, IdentityFactory) {

        $scope.map = {
            center: {
                latitude: 40.1451,
                longitude: -99.6680
            },
            zoom: 4,
            /* TODO: Need to check if it's the best solution to solve this problem
               Will come back later */
            markers: [],
            events: {
                click: function(map, eventName, args) {
                    var e = args[0];
                    var lat = e.latLng.lat();
                    var lon = e.latLng.lng();

                    var marker = {
                        id: 0,
                        coords: {
                            latitude: lat,
                            longitude: lon
                        },
                        options: {
                            draggable: true
                        },
                        events: {
                            dragend: function (marker, eventName, args) {
                                lat = marker.getPosition().lat();
                                lon = marker.getPosition().lng();
                                $scope.latitude = lat;
                                $scope.longitude = lon;
                            }
                        }
                    };

                    $scope.map.markers[0] = marker;
                    $scope.latitude = lat;
                    $scope.longitude = lon;
                    $scope.$apply();
                }
            }
        };

        $scope.addNew = function() {
            var newPlaceData = {
                title: $scope.title,
                latitude: $scope.latitude,
                longitude: $scope.longitude,
                tags: $scope.tags //TODO: Insert into database
            };

            PlaceFactory.addNewPlace(newPlaceData).then(function(place) {
                $location.path('/places/' + place._id);
            }, function(reason) {
                logger.error(reason);
            });
        };

        // if (!IdentityFactory.isAuthenticated()) {
        //     $location.path('/places');
        //     return;
        // }
    }
})();
