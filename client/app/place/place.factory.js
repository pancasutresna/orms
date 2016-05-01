(function() {
    'use strict';

    angular
        .module('app.place')
        .factory('PlaceFactory', PlaceFactory);

    PlaceFactory.$inject = ['$http', '$q', '$rootScope', 'datacontext', 'ResourcePlaceCache'];
    function PlaceFactory($http, $q, $rootScope, datacontext, ResourcePlaceCache) {

        var service = {
            addNewPlace: addNewPlace
        };

        return service;

        /////////////////////////////////////////////////////////

        function addNewPlace(newPlaceData) {
            var newPlace = new datacontext.place(newPlaceData);
            var dfd = $q.defer();

            newPlace.$save().then(function(place) {
                dfd.resolve(place);
                ResourcePlaceCache.query().push(place);
            }, function(response) {
                dfd.reject(response.data.reason);
            });

            return dfd.promise;
        }
    }
})();
