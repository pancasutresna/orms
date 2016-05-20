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
        .controller('Map', ['$scope', '$geolocation', 'uiGmapGoogleMapApi', function($rootScope, $scope, $geolocation, uiGmapGoogleMapApi) {
            // Do stuff with your $scope.
            // Note: Some of the directives require at least something to be defined originally!
            // e.g. $scope.markers = []

            $geolocation.getCurrentPosition({
                timeout: 60000
            }).then(function(position) {
                var geocoder = new google.maps.Geocoder();
                var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

                geocoder.geocode({'latLng': latlng}, function (results, status) {
                    if (status === google.maps.GeocoderStatus.OK) {
                        if (results[1]) {
                            console.log(results[1].formatted_address); // details address
                            //find country name
                            var city;
                            for (var i = 0 ; i < results[0].address_components.length; i++) {
                                for (var b = 0 ; b < results[0].address_components[i].types.length;b++) {
                                    //there are different types that might hold a city
                                    //admin_area_lvl_1 usually does in come cases looking
                                    //for sublocality type will be more appropriate
                                    if (results[0].address_components[i].types[b] === 'administrative_area_level_1') {
                                        //this is the object you are looking for
                                        city = results[0].address_components[i];
                                        break;
                                    }
                                }
                            }
                            //city data
                            console.log(city.short_name + ' ' + city.long_name);

                        } else {
                            console.log('Location not found');
                        }
                    } else {
                        console.log('Geocoder failed due to: ' + status);
                    }
                });

                $scope.map = {
                    center: {
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude
                    },
                    zoom: 15,
                    markers: [
                        {
                            id: 0,
                            coords: {
                                latitude: position.coords.latitude,
                                longitude: position.coords.longitude
                            },
                            options: {
                                animation: google.maps.Animation.DROP,
                                draggable: true,
                            }
                        }
                    ],
                    options: {
                        scrollwheel: false,
                        // Style for Google Maps
                        styles: [{'elementType':'geometry','stylers':[{'hue':'#ff4400'},{'saturation':-68},{'lightness':-4},{'gamma':0.72}]},{'featureType':'road','elementType':'labels.icon'},{'featureType':'landscape.man_made','elementType':'geometry','stylers':[{'hue':'#0077ff'},{'gamma':3.1}]},{'featureType':'water','stylers':[{'hue':'#00ccff'},{'gamma':0.44},{'saturation':-33}]},{'featureType':'poi.park','stylers':[{'hue':'#44ff00'},{'saturation':-23}]},{'featureType':'water','elementType':'labels.text.fill','stylers':[{'hue':'#007fff'},{'gamma':0.77},{'saturation':65},{'lightness':99}]},{'featureType':'water','elementType':'labels.text.stroke','stylers':[{'gamma':0.11},{'weight':5.6},{'saturation':99},{'hue':'#0091ff'},{'lightness':-86}]},{'featureType':'transit.line','elementType':'geometry','stylers':[{'lightness':-48},{'hue':'#ff5e00'},{'gamma':1.2},{'saturation':-23}]},{'featureType':'transit','elementType':'labels.text.stroke','stylers':[{'saturation':-64},{'hue':'#ff9100'},{'lightness':16},{'gamma':0.47},{'weight':2.7}]}]
                    }
                };
            });

            // uiGmapGoogleMapApi is a promise.
            // The 'then' callback function provides the google.maps object.
            uiGmapGoogleMapApi.then(function(maps) {

            });
        }]);
})();
