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

                // TODO: Remove this
                console.log('place list: ' + placeList);

                return placeList;
            }
        };
    }
})();
