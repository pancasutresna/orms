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
        'IdentityFactory', 'ResourceCategoryCache', 'ivhTreeviewBfs', 'FileUploader', '$timeout',
        'ResourceLocationCache'];
    function PlaceAddController($scope, $filter, PlaceFactory, logger, $location,
        IdentityFactory, ResourceCategoryCache, ivhTreeviewBfs, FileUploader, $timeout,
        ResourceLocationCache) {
        var images = [];
        // File uploader configurations
        var uploader = $scope.uploader = new FileUploader({
            url: '/api/place/uploads',
            autoUpload: true,
            queueLimit: 5
        });

        uploader.filters.push({
            name: 'imageFilter',
            fn: function(item /*{File|FileLikeObject}*/, options) {
                var type = '|' + item.type.slice(item.type.lastIndexOf('/') + 1) + '|';
                return '|jpg|png|jpeg|bmp|gif|'.indexOf(type) !== -1;
            }
        });

        uploader.onWhenAddingFileFailed = function(item /*{File|FileLikeObject}*/, filter, options) {
            console.info('onWhenAddingFileFailed', item, filter, options);
        };
        uploader.onAfterAddingFile = function(fileItem) {
            console.info('onAfterAddingFile', fileItem);
        };
        uploader.onAfterAddingAll = function(addedFileItems) {
            console.info('onAfterAddingAll', addedFileItems);
        };
        uploader.onBeforeUploadItem = function(item) {
            console.info('onBeforeUploadItem', item);
        };
        uploader.onProgressItem = function(fileItem, progress) {
            console.info('onProgressItem', fileItem, progress);
        };
        uploader.onProgressAll = function(progress) {
            console.info('onProgressAll', progress);
        };
        uploader.onSuccessItem = function(fileItem, response, status, headers) {
            console.info('onSuccessItem', fileItem, response, status, headers);
        };
        uploader.onErrorItem = function(fileItem, response, status, headers) {
            console.info('onErrorItem', fileItem, response, status, headers);
        };
        uploader.onCancelItem = function(fileItem, response, status, headers) {
            console.info('onCancelItem', fileItem, response, status, headers);
        };
        uploader.onCompleteItem = function(fileItem, response, status, headers) {
            console.info('onCompleteItem', fileItem, response, status, headers);
            if (status === 200) {
                images.push(response.filename);
            }
            console.info('uploaded file name: ', response.filename);
        };
        uploader.onCompleteAll = function() {
            console.info('onCompleteAll');
        };

        var MAX_CATEGORY_ALLOWED = 5;
        var categories = ResourceCategoryCache.query();
        $scope.categories = categories;
        console.log('categories: ' + $scope.categories);
        $scope.categoryCounter = 0;

        $scope.map = {
            center: {
                latitude: -6.209778538009775,
                longitude: 106.73840641829884
            },
            zoom: 17,
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
            },
            options: {
                // scrollwheel: false
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

            if (isSelected && $scope.categoryCounter > MAX_CATEGORY_ALLOWED) {
                logger.warning('Number of allowed categories exceeded');
            }
        };

        var countries = ResourceLocationCache.query('100000000000000000000000');
        $scope.countries = countries;

        $scope.states = [];
        $scope.getStates = function (country) {
            if (country !== null) {
                var states = ResourceLocationCache.query(country._id);
                $scope.states = states;
            }
        };

        $scope.cities = [];
        $scope.getCities = function (state) {
            if (state !== null) {
                var cities = ResourceLocationCache.query(state._id);
                $scope.cities = cities;
            }
        };

        $scope.strCountry = '';
        $scope.strState = '';

        // $scope.getSelectedCountry = function (item) {
        //     if (item !== null) {
        //         $scope.strCountry = item.country;
        //     }
        // };

        // $scope.getSelectedState = function (item) {
        //     if (item !== null) {
        //         $scope.strState = item.state;
        //     }
        // };

        $scope.addNew = function() {
            var selectedCategories = [];

            ivhTreeviewBfs($scope.categories, function(node) {
                if (node.selected) {
                    if (node.children.length <= 0) {
                        selectedCategories.push(node._id);
                    }
                }
            });

            console.log('selected categories: ');
            selectedCategories.forEach(function(category) {
                console.log(category);
            });

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
                    categories: selectedCategories,
                    images: images,
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
