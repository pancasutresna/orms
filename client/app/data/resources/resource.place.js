(function() {
    'use strict';

    angular
        .module('app.data')
        .factory('resource.place', ResourcePlace);

    ResourcePlace.$inject = [];
    function ResourcePlace() {

        return {
            create: createResource
        };

        function createResource($resource) {
            var resource = $resource('/api/places/:_id', {
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
