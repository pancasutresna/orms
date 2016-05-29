(function() {
    'use strict';

    angular
        .module('app.data')
        .factory('resource.category', ResourceCategory);

    ResourceCategory.$inject = [];
    function ResourceCategory() {

        return {
            create: createResource
        };

        function createResource($resource) {
            var resource = $resource('/api/categories/:_id', {
                _id: '@id'
            }, {
                query: {
                    method: 'GET',
                    cache : true,
                    isArray: true
                },
                update: {
                    method: 'PUT',
                    isArray: false
                }
            });

            return resource;
        }
    }
})();
