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
        // File uploader configurations
        var uploader = $scope.uploader = new FileUploader({
            url: '/api/place/uploads'
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
        };
        uploader.onCompleteAll = function() {
            console.info('onCompleteAll');
        };

        console.info('uploader', uploader);

        // $scope.$watch('files', function() {
        //     $scope.upload($scope.files);
        // });

        // $scope.log = '';

        // $scope.upload = function(files) {
        //     if (files && files.length) {
        //         for (var i = 0; i < files.length; i++) {
        //             var file = files[i];
        //             if (!file.$error) {
        //                 Upload.upload({
        //                     url: '/api/place/uploads',
        //                     method: 'POST',
        //                     data: {
        //                         file: file
        //                     }
        //                 }).then(function(resp) {
        //                     $timeout(function() {
        //                         $scope.log = 'file ' + resp.config.data.file.name +
        //                         ', Response: ' + JSON.stringify(resp.data) +
        //                         '\n' + $scope.log;
        //                     });
        //                 }, null, function(evt) {
        //                     var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
        //                     $scope.log = 'progress: ' + progressPercentage +
        //                     '% ' + evt.config.data.file.name + '\n' +
        //                     $scope.log;
        //                 });
        //             }
        //         }
        //     }
        // };

        const MAX_CATEGORY_ALLOWED = 5;
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
