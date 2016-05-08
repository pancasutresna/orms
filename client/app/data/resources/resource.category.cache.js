(function() {
    'use strict';

    angular
        .module('app.data')
        .factory('ResourceCategoryCache', ResourceCategoryCache);

    ResourceCategoryCache.$inject = ['datacontext'];
    function ResourceCategoryCache(datacontext) {
        var categoryList;

        return {
            query: function() {
                if (!categoryList) {
                    categoryList = datacontext.category.query();
                }
                return categoryList;
            }
        };
    }
})();
