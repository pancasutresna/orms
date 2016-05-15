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
                zoom: 11,
                options: {
                    scrollwheel: false,
                    // Style for Google Maps
                    mapTypeId: google.maps.MapTypeId.ROADMAP,
                    styles: [{"elementType":"geometry","stylers":[{"hue":"#ff4400"},{"saturation":-68},{"lightness":-4},{"gamma":0.72}]},{"featureType":"road","elementType":"labels.icon"},{"featureType":"landscape.man_made","elementType":"geometry","stylers":[{"hue":"#0077ff"},{"gamma":3.1}]},{"featureType":"water","stylers":[{"hue":"#00ccff"},{"gamma":0.44},{"saturation":-33}]},{"featureType":"poi.park","stylers":[{"hue":"#44ff00"},{"saturation":-23}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"hue":"#007fff"},{"gamma":0.77},{"saturation":65},{"lightness":99}]},{"featureType":"water","elementType":"labels.text.stroke","stylers":[{"gamma":0.11},{"weight":5.6},{"saturation":99},{"hue":"#0091ff"},{"lightness":-86}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"lightness":-48},{"hue":"#ff5e00"},{"gamma":1.2},{"saturation":-23}]},{"featureType":"transit","elementType":"labels.text.stroke","stylers":[{"saturation":-64},{"hue":"#ff9100"},{"lightness":16},{"gamma":0.47},{"weight":2.7}]}]
                }
            };

            // uiGmapGoogleMapApi is a promise.
            // The 'then" callback function provides the google.maps object.
            uiGmapGoogleMapApi.then(function(maps) {

            });
        }]);
})();
