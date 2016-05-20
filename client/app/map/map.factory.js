(function() {
    'use strict';

    angular
        .module('app.map')
        .factory('MapFactory', MapFactory);

    MapFactory.$inject =  ['$scope', '$geolocation', 'uiGmapGoogleMapApi'];
    function MapFactory($scope, $geolocation, uiGmapGoogleMapApi) {

    }
})();