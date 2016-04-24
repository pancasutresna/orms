(function() {
    'use strict';

    angular
        .module('app.place')
        .factory('PlaceFactory', PlaceFactory);

    PlaceFactory.$inject = ['$http', '$q', '$rootScope', 'datacontext'];
    function PlaceFactory($http, $q, $rootScope, datacontext) {

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
            }, function(response) {
                dfd.reject(response.data.reason);
            });

            // TODO: remove this
            // console.log('new place: ' + newPlace);
            // console.log('new place: ' + newPlace.id);
            // console.log('new place: ' + newPlace._id);

            return dfd.promise;
        }
    }
})();