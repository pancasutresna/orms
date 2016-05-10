(function() {
    'use strict';

    angular
        .module('app.data')
        .factory('ResourceLocationCache', ResourceLocationCache);

    ResourceLocationCache.$inject = ['$filter', 'datacontext'];
    function ResourceLocationCache($filter, datacontext) {
        var locationList;

        return {
            query: function(parentId) {
                // if (!locationList) {
                locationList = datacontext.location.query({parentId: parentId});
                // } else {
                // locationList = ($filter('filter')(locationList, {parent: parentId}, true));
                // if (!locationList) {
                // get new list items from parent
                // var listItems = datacontext.location.query(parent.id);
                // push into caches
                // locationList.push(listItems);
                // }
                // TODO: Find inside list
                // }

                return locationList;
            }
        };
    }
})();
