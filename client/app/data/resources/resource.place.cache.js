(function() {
    'use strict';

    angular
        .module('app.data')
        .factory('ResourcePlaceCache', ResourcePlaceCache);

    ResourcePlaceCache.$inject = ['datacontext'];
    function ResourcePlaceCache(datacontext) {
        var placeList;

        return {
            query: function(offset, limit) {
                if (!placeList) {
                    placeList = datacontext.place.query(offset, limit);
                }

                return placeList;
            }
        };
    }
})();
