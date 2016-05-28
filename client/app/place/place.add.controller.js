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

        $scope.saveButtonText = 'Simpan';

        $scope.date = moment().format();
        $scope.options = {
            done: 'Ok !!',
            twelvehour: false,
            nativeOnMobile: true,
            autoclose: true
        };
        // END Clock Picker options

        // Input form values 
        $scope.listing = {
            location: {
                type: {},
                coordinates: []
            },
            operationalHour: [],
            images: []
        };
        // $scope.listing.location.type = 'Point';

        $scope.images = [];
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
                $scope.listing.images.push(response.filename);
            }
            console.info('uploaded file name: ', response.filename);
        };
        uploader.onCompleteAll = function() {
            console.info('onCompleteAll');

            // Saing new listing
            PlaceFactory.addNewPlace($scope.listing).then(function(place) {
                $location.path('/places/' + place._id);
            }, function(reason) {
                logger.error(reason);
            });
        };

        var MAX_CATEGORY_ALLOWED = 5;
        $scope.maxCategory = MAX_CATEGORY_ALLOWED;
        var categories = ResourceCategoryCache.query();
        $scope.categories = categories;
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
                options: {
                    // scrollwheel: false
                }
            };
        });

        $scope.selected = {};
        $scope.singleModel = {};
        $scope.listing.categories = [];

        $scope.$watchCollection('singleModel', function() {
            $scope.listing.categories = [];
            angular.forEach($scope.singleModel, function(value, key) {
                if (value) {
                    $scope.listing.categories.push(key); //TODO: Simpan ini ke database!!
                }
            });
        });

        // $scope.$watchCollection('uploader.queue', function() {
        //     $scope.listing.images = [];
        //     angular.forEach($scope.uploader.queue, function(value, key) {
        //         console.log('value : ' + value.file.name + ' -- key : ' + key);
        //         // if (value) {
        //         //     $scope.listing.images.push(value);
        //         // }
        //     });
        // });

        $scope.categoryValidation = function() {
            if ($scope.listing.categories.length > 0) {
                if ($scope.listing.categories.length <= MAX_CATEGORY_ALLOWED) {
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

        $scope.states = datacontext.location.query({ parent_id: '0' });
        
        $scope.getCities = function(state) {
            if (state !== null) {
                $scope.cities = datacontext.location.query({ parent_id: state._id });
            }
        };

        // Save new listing
        $scope.addNew = function() {
            $scope.saveButtonText = 'Sedang menyimpan..';

            if ($scope.listing.categories.length <= MAX_CATEGORY_ALLOWED) {
                uploader.uploadAll();
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
