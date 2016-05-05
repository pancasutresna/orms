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
                update: {
                    method: 'PUT',
                    isArray: false
                }
            });

            return resource;
        }
    }
})();
