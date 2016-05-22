(function() {
    'use strict';

    angular
        .module('app.main')
        .config(['uiGmapGoogleMapApiProvider', function(uiGmapGoogleMapApiProvider) {
            uiGmapGoogleMapApiProvider.configure({
                key: 'AIzaSyDQTpXj82d8UpCi97wzo_nKXL7nYrd4G70',
                v: '3',
                libraries: 'weather,geometry,visualization,places'
            });
        }])
        .controller('MainController', MainController);

    MainController.$inject = ['$scope', '$window', '$geolocation', 'uiGmapGoogleMapApi', 'uiGmapIsReady', 'ResourcePlaceCache', 'ResourceCategoryCache', 'datacontext'];

    function MainController($scope, $window, $geolocation, uiGmapGoogleMapApi, uiGmapIsReady, ResourcePlaceCache, ResourceCategoryCache, datacontext) {
        // MainController.$inject = ['$scope', '$location', 'ResourcePlaceCache'];
        // function MainController($scope, $location, ResourcePlaceCache) {
        // $scope.$on('$routeChangeError', function(evt,current,previous,rejection) {
        //     console.log('rejection is : ' + rejection);
        //     if (rejection === 'Not authorized') {
        //         $location.path('/places');
        //     }
        // });  
        var vm = this;
        vm.locations;
        $scope.mapControl = {};

        $geolocation.getCurrentPosition({
            timeout: 60000
        }).then(function(position) {
            uiGmapIsReady.promise().then(function(maps) {
                vm.locations = datacontext.location.nearby({ lat: position.coords.latitude, lng:position.coords.longitude, rad:8});
            });

            uiGmapGoogleMapApi.then(function(maps) {
                $scope.map = {
                    center: {
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude
                    },
                    zoom: 15,
                    markers: [{
                        id: 0,
                        coords: {
                            latitude: position.coords.latitude,
                            longitude: position.coords.longitude
                        },
                        options: {
                            animation: $window.google.maps.Animation.DROP,
                            draggable: true,
                        }
                    }],
                    options: {
                        scrollwheel: false,
                        // styles: [{'elementType':'geometry','stylers':[{'hue':'#ff4400'},{'saturation':-68},{'lightness':-4},{'gamma':0.72}]},{'featureType':'road','elementType':'labels.icon'},{'featureType':'landscape.man_made','elementType':'geometry','stylers':[{'hue':'#0077ff'},{'gamma':3.1}]},{'featureType':'water','stylers':[{'hue':'#00ccff'},{'gamma':0.44},{'saturation':-33}]},{'featureType':'poi.park','stylers':[{'hue':'#44ff00'},{'saturation':-23}]},{'featureType':'water','elementType':'labels.text.fill','stylers':[{'hue':'#007fff'},{'gamma':0.77},{'saturation':65},{'lightness':99}]},{'featureType':'water','elementType':'labels.text.stroke','stylers':[{'gamma':0.11},{'weight':5.6},{'saturation':99},{'hue':'#0091ff'},{'lightness':-86}]},{'featureType':'transit.line','elementType':'geometry','stylers':[{'lightness':-48},{'hue':'#ff5e00'},{'gamma':1.2},{'saturation':-23}]},{'featureType':'transit','elementType':'labels.text.stroke','stylers':[{'saturation':-64},{'hue':'#ff9100'},{'lightness':16},{'gamma':0.47},{'weight':2.7}]}]
                    }
                };
            });

        });

        vm.places = ResourcePlaceCache.query();
        vm.categories = ResourceCategoryCache.query();
    }
})();
