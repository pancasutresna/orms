(function() {
    'use strict';

    angular
        .module('app.data')
        .factory('ResourcePlaceCache', ResourcePlaceCache);

    ResourcePlaceCache.$inject = ['datacontext'];
    function ResourcePlaceCache(datacontext) {
        var placeList;

        return {
            query: function() {
                if (!placeList) {
                    placeList = datacontext.place.query();
                }

                return placeList;
            },
            extendPlaces: function(place){
                placeList.push(place);
            }
        };
    }
})();
