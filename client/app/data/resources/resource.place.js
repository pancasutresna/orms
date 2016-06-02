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
            var resource = $resource('/api/places/:docCtrl:page/:id:limit', {
                id: '@id',
                page: '@page',
                limit: '@limit',
                docCtrl: '@docCtrl'
            }, {
                query: {
                    method: 'GET',
                    cache: true,
                    isArray: false
                },
                findOne: {
                    method: 'GET',
                    cache: true,
                    params: {docCtrl: 'detail'},
                    isArray: false
                },
                findByCategory: {
                    method: 'GET',
                    cache: true,
                    params: {docCtrl: 'category'},
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
