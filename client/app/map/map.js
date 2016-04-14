(function() {
    'use strict';

    angular
        .module('app.map')
        .config(['uiGmapGoogleMapApiProvider', function(uiGmapGoogleMapApiProvider) {
            uiGmapGoogleMapApiProvider.configure({
                //    key: 'your api key',
                v: '3.x', //defaults to latest 3.X anyhow
                libraries: 'weather,geometry,visualization'
            });
        }])
        .controller('Map', ['$scope', 'uiGmapGoogleMapApi', function($scope, uiGmapGoogleMapApi) {
            // Do stuff with your $scope.
            // Note: Some of the directives require at least something to be defined originally!
            // e.g. $scope.markers = []
            $scope.map = {
                center: {
                    latitude: 45,
                    longitude: -73
                },
                zoom: 8
            };

            // uiGmapGoogleMapApi is a promise.
            // The "then" callback function provides the google.maps object.
            uiGmapGoogleMapApi.then(function(maps) {

            });
        }]);
})();
