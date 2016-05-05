(function() {
    'use strict';

    angular
        .module('app.place')
        .controller('PlaceAddController', PlaceAddController)
        .config(['ivhTreeviewOptionsProvider', function(ivhTreeviewOptionsProvider) {
            ivhTreeviewOptionsProvider.set({
                defaultSelectedState: false,
                validate: true,
                expandToDepth: -1
            });
        }]);

    PlaceAddController.$inject = ['$scope', '$filter', 'PlaceFactory', 'logger', '$location',
        'IdentityFactory', 'ResourceCategoryCache', 'ivhTreeviewBfs'];
    function PlaceAddController($scope, $filter, PlaceFactory, logger, $location,
        IdentityFactory, ResourceCategoryCache, ivhTreeviewBfs) {

        const MAX_CATEGORY_ALLOWED = 5;
        var categories = ResourceCategoryCache.query();
        $scope.categories = categories;
        $scope.categoryCounter = 0;

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

        $scope.changeCallback = function(node, isSelected, tree) {
            $scope.categoryCounter = 0;
            ivhTreeviewBfs($scope.categories, function(node) {
                if (node.selected) {
                    if (node.children.length <= 0) {
                        $scope.categoryCounter++;
                    }
                }
            });

            // TODO: Change max category counter as constant
            if (isSelected && $scope.categoryCounter > MAX_CATEGORY_ALLOWED) {
                logger.warning('Number of allowed categories exceeded');
            }
        };

        $scope.addNew = function() {
            var selectedCategories = [];

            ivhTreeviewBfs($scope.categories, function(node) {
                if (node.selected) {
                    if (node.children.length <= 0) {
                        selectedCategories.push(node.label);
                    }
                }
            });

            console.log('selected categories: ');
            selectedCategories.forEach(function(category) {
                console.log(category);
            });

            // TODO: Change max category counter as constant
            if ($scope.categoryCounter <= MAX_CATEGORY_ALLOWED) {
                var newPlaceData = {
                    title: $scope.title,
                    description: $scope.description,
                    telephone: $scope.telephone,
                    email: $scope.email,
                    website: $scope.website,
                    latitude: $scope.latitude,
                    longitude: $scope.longitude,
                    tags: $scope.tags, //TODO: Insert into database
                    categories: selectedCategories
                };

                PlaceFactory.addNewPlace(newPlaceData).then(function(place) {
                    $location.path('/places/' + place._id);
                }, function(reason) {
                    logger.error(reason);
                });
            } else {
                logger.warning('Exceed maximum category!');
            }
        };

        // if (!IdentityFactory.isAuthenticated()) {
        //     $location.path('/places');
        //     return;
        // }
    }
})();
