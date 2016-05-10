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
        'IdentityFactory', 'ResourceCategoryCache', 'ivhTreeviewBfs', 'FileUploader', '$timeout'];
    function PlaceAddController($scope, $filter, PlaceFactory, logger, $location,
        IdentityFactory, ResourceCategoryCache, ivhTreeviewBfs, FileUploader, $timeout) {
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

        // Alamat lengkap
        // $scope.countries = [
        //                 {
        //                     country: 'India',
        //                     states: [{
        //                         state: 'Maharashtra',
        //                         city: ['Pune', 'Mumbai', 'Nagpur', 'Akola']
        //                     },
        //                     {
        //                         state:  'Madhya Pradesh',
        //                         city: ['Indore', 'Bhopal', 'Jabalpur']
        //                     },
        //                     {
        //                         state: 'Rajasthan',
        //                         city: ['Jaipur', 'Ajmer', 'Jodhpur']
        //                     }]
        //                 },
        //                 {
        //                     country: 'USA',
        //                     states: [{
        //                         state: 'Alabama',
        //                         city: ['Montgomery', 'Birmingham']
        //                     },
        //                     {
        //                         state: 'California',
        //                         city: ['Sacramento', 'Fremont']
        //                     },
        //                     {
        //                         state: 'Illinois',
        //                         city: ['Springfield', 'Chicago']
        //                     }]
        //                 },
        //                 {
        //                     country: 'Australia',
        //                     states: [{
        //                         state: 'New South Wales',
        //                         city: ['Sydney']
        //                     },
        //                     {
        //                         state: 'Victoria',
        //                         city: ['Melbourne']
        //                     }]
        //                 }
        //             ];

        var locationList = [
            {'id': 1, name: 'USA', parent: 0},
            {'id': 2, name: 'Canada', parent: 0},
            {'id': 3, name: 'India', parent: 0},
            {'id': 4, name: 'Alaska', parent: 1},
            {'id': 5, name: 'California', parent: 1},
            {'id': 6, name: 'New York', parent: 1},
            {'id': 7, name: 'New Brunswick', parent: 2},
            {'id': 8, name: 'Manitoba', parent: 2},
            {'id': 9, name: 'Delhi', parent: 3},
            {'id': 10, name: 'Bombay', parent: 3},
            {'id': 11, name: 'Calcutta', parent: 3},
            {'id': 12, name: 'Anchorage', parent: 4},
            {'id': 13, name: 'Fairbanks', parent: 4},
            {'id': 14, name: 'Lakes', parent: 4},
            {'id': 15, name: 'Palmer', parent: 4},
            {'id': 16, name: 'Adelanto', parent: 5},
            {'id': 17, name: 'Artesia', parent: 5},
            {'id': 18, name: 'Benicia', parent: 5},
            {'id': 19, name: 'Clovis', parent: 5},
            {'id': 20, name: 'Dublin', parent: 5},
            {'id': 21, name: 'Manhattan', parent: 6},
            {'id': 22, name: 'Bronx', parent: 6},
            {'id': 23, name: 'Brooklyn', parent: 6},
            {'id': 24, name: 'Queens', parent: 6},
            {'id': 25, name: 'Staten Island', parent: 6},
            {'id': 26, name: 'Bathurst', parent: 7},
            {'id': 27, name: 'Campbellton', parent: 7},
            {'id': 28, name: 'Dieppe', parent: 7},
            {'id': 29, name: 'Edmundston', parent: 7},
            {'id': 30, name: 'Fredericton', parent: 7},
            {'id': 31, name: 'Miramichi', parent: 7},
            {'id': 32, name: 'Moncton', parent: 7},
            {'id': 33, name: 'Brandon', parent: 8},
            {'id': 34, name: 'Dauphin', parent: 8},
            {'id': 35, name: 'Flin Flon', parent: 8},
            {'id': 36, name: 'Morden', parent: 8},
            {'id': 37, name: 'Portage la Prairie', parent: 8},
            {'id': 38, name: 'Selkirk', parent: 8},
            {'id': 39, name: 'Steinbach', parent: 8},
            {'id': 40, name: 'Thompson', parent: 8},
            {'id': 41, name: 'Winkler', parent: 8},
            {'id': 42, name: 'South Delhi', parent: 9},
            {'id': 43, name: 'North Delhi', parent: 9},
            {'id': 44, name: 'East Delhi', parent: 9},
            {'id': 45, name: 'West Delhi', parent: 9},
            {'id': 46, name: 'Old Delhi', parent: 9},
            {'id': 47, name: 'New Delhi', parent: 9},
            {'id': 48, name: 'Yamuna Paar', parent: 9},
            {'id': 49, name: 'Chembur', parent: 10},
            {'id': 50, name: 'Borivali West', parent: 10},
            {'id': 51, name: 'Ghatkopar West', parent: 10},
            {'id': 52, name: 'Juhu', parent: 10},
            {'id': 53, name: 'Mira Road', parent: 10},
            {'id': 54, name: 'Powai', parent: 10},
            {'id': 55, name: 'Virar West', parent: 10},
            {'id': 56, name: 'Rajarhat', parent: 11},
            {'id': 57, name: 'Park Street', parent: 11},
            {'id': 58, name: 'Golpark', parent: 11},
            {'id': 59, name: 'Chandan Nagar', parent: 11}
        ];

        $scope.countries = ($filter('filter')(locationList, {parent: 0}, true));

        $scope.states;
        $scope.getStates = function (country) {
            if (country !== null) {
                $scope.states = ($filter('filter')(locationList, {parent: country.id}, true));
            }
        }

        $scope.cities;
        $scope.getCities = function (state) {
            if (state !== null) {
                $scope.cities = ($filter('filter')(locationList, {parent: state.id}, true));
            }
        }

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
