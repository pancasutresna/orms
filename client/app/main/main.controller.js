(function() {
    'use strict';

    angular
    .module('app.main')
    .config(['uiGmapGoogleMapApiProvider', function(uiGmapGoogleMapApiProvider) {
            uiGmapGoogleMapApiProvider.configure({
                key:'AIzaSyDQTpXj82d8UpCi97wzo_nKXL7nYrd4G70',
                v: '3',
                libraries:'weather,geometry,visualization,places'
            });
        }])
    .controller('MainController', MainController);

    MainController.$inject = ['$scope', '$geolocation', 'uiGmapGoogleMapApi', 'uiGmapIsReady', 'ResourcePlaceCache', 'ResourceCategoryCache', 'datacontext'];
    function MainController($scope, $geolocation, uiGmapGoogleMapApi, uiGmapIsReady, ResourcePlaceCache, ResourceCategoryCache, datacontext) {
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
        vm.locationName;
        $scope.map;
        $scope.mapControl = {};

        // uiGmapIsReady.promise().then(function(maps) {
        //     var mapControl = $scope.mapControl.getGMap();
        //     var placeServices = google.maps.places.PlacesService(mapControl);
        //     var request = {
        //         location: new google.maps.LatLng(37.78,-122.41),
        //         radius: '500',
        //         types: ['store']
        //     };
        //     placeServices.nearbySearch(request, function(result, status) {
        //         console.log('RESULT: ' + placeServices);
        //     });
        // });

        // uiGmapGoogleMapApi.then(function(maps) {
        //     maps.places.PlacesService(); // -> here you can search for something
        //     $scope.map = { center: { latitude: 37.78, longitude: -122.41 }, zoom: 15 };
        // });

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

                        vm.locations = datacontext.location.query({name: city.long_name});
                        vm.locationName = city.long_name;
                        //city data
                        console.log(city.short_name + ' ' + city.long_name);

                    } else {
                        console.log('Location not found');
                    }
                } else {
                    console.log('Geocoder failed due to: ' + status);
                }
            });


            uiGmapGoogleMapApi.then(function (maps) {
                $scope.map = {
                    center: {
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude
                    },
                    zoom: 13,
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
                        // styles: [{'elementType':'geometry','stylers':[{'hue':'#ff4400'},{'saturation':-68},{'lightness':-4},{'gamma':0.72}]},{'featureType':'road','elementType':'labels.icon'},{'featureType':'landscape.man_made','elementType':'geometry','stylers':[{'hue':'#0077ff'},{'gamma':3.1}]},{'featureType':'water','stylers':[{'hue':'#00ccff'},{'gamma':0.44},{'saturation':-33}]},{'featureType':'poi.park','stylers':[{'hue':'#44ff00'},{'saturation':-23}]},{'featureType':'water','elementType':'labels.text.fill','stylers':[{'hue':'#007fff'},{'gamma':0.77},{'saturation':65},{'lightness':99}]},{'featureType':'water','elementType':'labels.text.stroke','stylers':[{'gamma':0.11},{'weight':5.6},{'saturation':99},{'hue':'#0091ff'},{'lightness':-86}]},{'featureType':'transit.line','elementType':'geometry','stylers':[{'lightness':-48},{'hue':'#ff5e00'},{'gamma':1.2},{'saturation':-23}]},{'featureType':'transit','elementType':'labels.text.stroke','stylers':[{'saturation':-64},{'hue':'#ff9100'},{'lightness':16},{'gamma':0.47},{'weight':2.7}]}]
                    }
                };
            });
        });

        // uiGmapGoogleMapApi is a promise.
        // The 'then' callback function provides the google.maps object.

        vm.places = ResourcePlaceCache.query();
        vm.categories = ResourceCategoryCache.query();
        vm.locations = datacontext.location.query({name: $scope.administrativeAreaLevel1});

        // console.log('categories : ' + vm.categories);
    }
})();
