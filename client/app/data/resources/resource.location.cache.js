(function() {
    'use strict';

    angular
        .module('app.data')
        .factory('ResourceLocationCache', ResourceLocationCache);

    ResourceLocationCache.$inject = ['datacontext'];
    function ResourceLocationCache(datacontext) {
        var locationList;

        return {
            query: function(parentId) {
                var locationsList = [];
                locationList = datacontext.location.query({parentId: parentId});

                return locationList;
            }
        };
    }
})();
