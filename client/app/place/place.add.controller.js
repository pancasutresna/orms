(function() {
    'use strict';

    angular
        .module('app.place')
        .controller('PlaceAddController', PlaceAddController);

    PlaceAddController.$inject = ['$scope', '$window', '$filter', 'PlaceFactory', 'logger', '$location',
        'FileUploader', '$timeout', 'datacontext', '$geolocation', 'moment'
    ];

    function PlaceAddController($scope, $window, $filter, PlaceFactory, logger, $location,
        FileUploader, $timeout, datacontext, $geolocation, moment) {

        // TODO: Implement controller as method
        var MAX_CATEGORY_ALLOWED = 5;
        var MAX_CATEGORY_ALLOWED_ERROR = 'Kategori yang dipilih melebihi jumlah maksimum yang ditentukan.';
        var EMPTY_CATEGORY_ERROR = 'Anda belum menentukan kategori.';
        var SAVE_BUTTON_TEXT = 'Simpan';
        var SAVING_BUTTON_TEXT = 'Menyimpan..';
        var categories = datacontext.category.query();

        // Listing object graph
        $scope.listing = {
            location: {
                type: {},
                coordinates: []
            },
            operationalHour: {},
            images: [],
            categories: []
        };
        $scope.saveButtonText = SAVE_BUTTON_TEXT; // save button text
        $scope.maxCategory = MAX_CATEGORY_ALLOWED;
        $scope.categories = categories;
        $scope.subCategory = {}; // single category
        // Clock picker options
        $scope.date = moment().format();
        $scope.options = {
            twelvehour: false,
            nativeOnMobile: true,
            autoclose: true
        };
        // File uploader configurations
        var uploader = $scope.uploader = new FileUploader({
            url: '/api/place/uploads',
            autoUpload: false,
            queueLimit: 5
        });
        uploader.filters.push({
            name: 'imageFilter',
            fn: function(item /*{File|FileLikeObject}*/ , options) {
                var type = '|' + item.type.slice(item.type.lastIndexOf('/') + 1) + '|';
                return '|jpg|png|jpeg|bmp|gif|'.indexOf(type) !== -1;
            }
        });

        uploader.onCompleteItem = function(fileItem, response, status, headers) {
            if (status === 200) {
                $scope.listing.images.push(response.filename);
            }
        };

        $geolocation.getCurrentPosition({
            timeout: 60000
        }).then(function(position) {
            $scope.map = {
                center: {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                },
                zoom: 15,
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
                                    $scope.listing.location.coordinates[0] = lon; // Longitude
                                    $scope.listing.location.coordinates[1] = lat; // Latitude
                                }
                            }
                        };
                        $scope.map.markers[0] = marker;
                        $scope.listing.location.type = 'Point';
                        $scope.listing.location.coordinates[0] = lon; // Longitude
                        $scope.listing.location.coordinates[1] = lat; // Latitude
                        $scope.$apply();
                    }
                },
                options: {}
            };
        });

        $scope.$watchCollection('subCategory', function() {
            $scope.listing.categories = [];
            angular.forEach($scope.subCategory, function(value, key) {
                if (value) {
                    $scope.listing.categories.push(key);
                }
            });
        });
        $scope.categoryValidation = function() {
            if ($scope.listing.categories.length > 0) {
                if ($scope.listing.categories.length <= MAX_CATEGORY_ALLOWED) {
                    return true;
                } else {
                    logger.error(MAX_CATEGORY_ALLOWED_ERROR);
                    return false;
                }
            } else {
                logger.error(EMPTY_CATEGORY_ERROR);
                return false;
            }
        };

        $scope.states = datacontext.location.query({ parent_id: '0' });
        $scope.getCities = function(state) {
            if (state !== null) {
                $scope.cities = datacontext.location.query({ parent_id: state });
            }
        };

        // Save new listing
        $scope.addNew = function() {
            $scope.saveButtonText = SAVING_BUTTON_TEXT;
            if ($scope.listing.categories.length <= MAX_CATEGORY_ALLOWED) {
                uploader.uploadAll(); // upload images

                // Saving new listing
                PlaceFactory.addNewPlace($scope.listing).then(function(place) {
                    $location.path('/places/' + place._id);
                }, function(reason) {
                    logger.error(reason);
                });
            } else {
                logger.error(MAX_CATEGORY_ALLOWED_ERROR);
            }
        };
    }
})();
