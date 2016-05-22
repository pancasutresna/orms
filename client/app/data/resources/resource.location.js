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
            var resource = $resource('/api/locations/:name:docCtrl/:lat/:lng/:rad', {
                name: '@name',
                lat: '@lat',
                lng: '@lng',
                rad: '@rad',
                docCtrl: '@docCtrl'
            }, {
                query: {
                    method: 'GET',
                    cache : true,
                    isArray: true
                },
                update: {
                    method: 'PUT',
                    isArray: false
                },
                nearby: {
                    method: 'GET',
                    cache : true,
                    params: {docCtrl: 'nearby'},
                    isArray: true
                }
            });

            return resource;
        }
    }
})();
