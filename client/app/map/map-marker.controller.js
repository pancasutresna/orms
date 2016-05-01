(function() {
    'use strict';

    angular
        .module('app.map')
        .controller('MapMarker', MapMarker);

    MapMarker.$inject = ['$scope', '$timeout', 'logger'];
    function MapMarker($scope, $timeout, logger) {
        var theLatitude = 40.1451;
        var theLongitude = -99.6680;

        $scope.latitude = '';
        $scope.longitude = '';
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
                                var lat = marker.getPosition().lat();
                                var lon = marker.getPosition().lng();
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


        // $scope.marker = {
        //     id: 0,
        //     coords: {
        //         latitude: theLatitude,
        //         longitude: theLongitude
        //     },
        //     options: {
        //         draggable: true
        //     },

        //     events: {
        //         dragend: function (marker, eventName, args) {
        //             // logger.info('marker dragend');
        //             var lat = marker.getPosition().lat();
        //             var lon = marker.getPosition().lng();
        //             // logger.info(lat);
        //             // logger.info(lon);

        //             $scope.marker.options = {
        //                 draggable: true
        //                 // labelContent: 'lat: ' + $scope.marker.coords.latitude + ' ' + 'lon: ' +
        //                 //     $scope.marker.coords.longitude,
        //                 // labelAnchor: '100 0',
        //                 // labelClass: 'marker-labels'
        //             };
        //         }
        //     }
        // };

        
        // $scope.options = {
        //     scrollwheel: true
        // };

        // $scope.$watchCollection('marker.coords', function(newVal, oldVal) {
        //     if (_.isEqual(newVal, oldVal)) {
        //         return;
        //     }
        //     $scope.coordsUpdates++;
        // });
        // $timeout(function() {
        //     $scope.marker.coords = {
        //         latitude: 42.1451,
        //         longitude: -100.6680
        //     };
        //     $scope.dynamicMoveCtr++;
        //     $timeout(function () {
        //         $scope.marker.coords = {
        //             latitude: 43.1451,
        //             longitude: -102.6680
        //         };
        //         $scope.dynamicMoveCtr++;
        //     }, 2000);
        // }, 1000);
    }
})();
