(function() {
    'use strict';

    angular
        .module('app.data')
        .factory('resource.location', ResourceLocation);

    ResourceLocation.$inject = [];
    function ResourceLocation() {

        return {
            create: createResource
        };

        function createResource($resource) {
            var resource = $resource('/api/locations/:name', {
                name: '@name'
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
