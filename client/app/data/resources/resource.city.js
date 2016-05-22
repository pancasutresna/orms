(function() {
    'use strict';

    angular
        .module('app.data')
        .factory('resource.city', ResourceCity);

    ResourceCity.$inject = [];

    function ResourceCity() {
        return {
            create: createResource
        };

        function createResource($resource) {
            var resource = $resource('/api/cities/:docCtrl/:lat/:lng/:rad', {
                lat: '@lat',
                lng: '@lng',
                rad: '@rad',
                docCtrl: '@docCtrl'
            }, {
                nearby: {
                    method: 'GET',
                    params: {docCtrl: 'nearby'},
                    isArray: true
                }
            });

            return resource;
        }
    }
})();
