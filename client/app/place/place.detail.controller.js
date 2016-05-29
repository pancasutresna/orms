(function() {
    'use strict';

    angular
        .module('app.place')
        .controller('PlaceDetailController', PlaceDetailController);

    PlaceDetailController.$inject = ['ResourcePlaceCache', '$routeParams', '$timeout', 'uiGmapGoogleMapApi', 'uiGmapIsReady', '$window'];

    function PlaceDetailController(ResourcePlaceCache, $routeParams, $timeout, uiGmapGoogleMapApi, uiGmapIsReady, $window) {
        var vm = this;
        vm.ready = false;
        vm.place = {};
        ResourcePlaceCache.query().$promise.then(function(collection) {
            collection.forEach(function(place) {
                if (place._id === $routeParams.id) {
                    vm.place = place;
                }
            });
        });

        var location = {};
        location = vm.place.location;

        vm.map = {
            zoom: 17,
            markers: [{
                id: 0,
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

        $timeout(function() {
            vm.ready = true;
        }, 1000);
    }

})();
