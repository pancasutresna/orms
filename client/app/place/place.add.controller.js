(function() {
    'use strict';

    angular
        .module('app.place')
        .controller('PlaceAddController', PlaceAddController)
        .config(['ivhTreeviewOptionsProvider', function(ivhTreeviewOptionsProvider) {
            ivhTreeviewOptionsProvider.set({
                defaultSelectedState: false,
                validate: true,
                expandToDepth: 0,
                twistieCollapsedTpl: '<i class="fa fa-plus-square" aria-hidden="true"></i>&nbsp;',
                twistieExpandedTpl: '<i class="fa fa-minus-square" aria-hidden="true"></i>&nbsp;',
                twistieLeafTpl: ''
            });
        }]);

    PlaceAddController.$inject = ['$scope', '$window', '$filter', 'PlaceFactory', 'logger', '$location',
        'IdentityFactory', 'ResourceCategoryCache', 'ivhTreeviewBfs', 'FileUploader', '$timeout', '$q',
        'datacontext', '$geolocation', 'moment'
    ];

    function PlaceAddController($scope, $window, $filter, PlaceFactory, logger, $location,
        IdentityFactory, ResourceCategoryCache, ivhTreeviewBfs, FileUploader, $timeout, $q,
        datacontext, $geolocation, moment) {

        $scope.date = moment('now');
        $scope.options = {
            done: 'Ok !!',
            twelvehour: false,
            nativeOnMobile: true,
            autoclose: true
        };
        // END Clock Picker options

        $scope.checkToggle = function(index) {

        }

        var images = [];
        // File uploader configurations
        var uploader = $scope.uploader = new FileUploader({
            url: '/api/place/uploads',
            autoUpload: true,
            queueLimit: 5
        });

        uploader.filters.push({
            name: 'imageFilter',
            fn: function(item /*{File|FileLikeObject}*/ , options) {
                var type = '|' + item.type.slice(item.type.lastIndexOf('/') + 1) + '|';
                return '|jpg|png|jpeg|bmp|gif|'.indexOf(type) !== -1;
            }
        });

        uploader.onWhenAddingFileFailed = function(item /*{File|FileLikeObject}*/ , filter, options) {
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
        $scope.maxCategory = MAX_CATEGORY_ALLOWED;
        var categories = ResourceCategoryCache.query();
        $scope.categories = categories;
        console.log('categories: ' + $scope.categories);
        $scope.categoryCounter = 0;

        $geolocation.getCurrentPosition({
            timeout: 60000
        }).then(function(position) {
            $scope.map = {
                center: {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                },
                zoom: 15,
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
                                dragend: function(marker, eventName, args) {
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
        });

        $scope.selected = {};
        $scope.singleModel = {};
        $scope.checkResults = [];

        $scope.$watchCollection('singleModel', function() {
            $scope.checkResults = [];
            angular.forEach($scope.singleModel, function(value, key) {
                if (value) {
                    $scope.checkResults.push(key); //TODO: Simpan ini ke database!!
                }
            });
        });

        $scope.categoryValidation = function() {
            if ($scope.checkResults.length > 0) {
                if ($scope.checkResults.length <= MAX_CATEGORY_ALLOWED) {
                    return true;
                } else {
                    logger.error('Kategori yang dipilih melebihi jumlah maksimum yang ditentukan.');
                    return false;
                }
            } else {
                logger.error('Anda belum menentukan kategori.');
                return false;
            }

        };

        // $scope.changeCallback = function(node, isSelected, tree) {
        //     $scope.categoryCounter = 0;
        //     ivhTreeviewBfs($scope.categories, function(node) {
        //         if (node.selected) {
        //             if (node.children.length <= 0) {
        //                 $scope.categoryCounter++;
        //             }
        //         }
        //     });

        //     if (isSelected && $scope.categoryCounter > MAX_CATEGORY_ALLOWED) {
        //         logger.warning('Number of allowed categories exceeded');
        //     }
        // };

        $scope.states = datacontext.location.query({ parent_id: '0' });

        $scope.getCities = function(state) {
            if (state !== null) {
                $scope.cities = datacontext.location.query({ parent_id: state._id });
            }
        };



        $scope.addNew = function() {
            var selectedCategories = [];

            ivhTreeviewBfs($scope.categories, function(node) {
                if (node.selected) {
                    if (node.children.length <= 0) {
                        selectedCategories.push(node._id);
                    }
                }
            });

            if ($scope.checkResults.length <= MAX_CATEGORY_ALLOWED) {
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
                    address: {
                        state: $scope.state,
                        city: $scope.city
                    }
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
