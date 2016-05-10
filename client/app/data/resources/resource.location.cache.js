(function() {
    'use strict';

    angular
        .module('app.data')
        .factory('ResourceLocationCache', ResourceLocationCache);

    ResourceLocationCache.$inject = ['$filter', 'datacontext'];
    function ResourceLocationCache($filter, datacontext) {
        var locationList;

        return {
            query: function(parent) {
                if (!locationList) {
                    locationList = datacontext.location.query(parent.id);
                } else {
                    locationList = ($filter('filter')(locationList, {parent: parent.id}, true));
                    if (!locationList) {
                        // get new list items from parent
                        var listItems = datacontext.location.query(parent.id);
                        // push into caches
                        locationList.push(listItems);
                    }
                    // TODO: Find inside list
                }

                return locationList;
            }
        };
    }
})();