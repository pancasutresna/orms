(function() {
    'use strict';

    angular
        .module('app.data')
        .factory('datacontext', datacontext);

    datacontext.$inject = ['$injector', '$resource'];
    function datacontext($injector, $resource) {

        var resourceNames = ['user', 'place', 'category', 'location'];
        var service = {};

        init();

        return service;

        function init() {
            defineLazyLoadResources();
        }

        function defineLazyLoadResources() {
            resourceNames.forEach(function(name) {
                Object.defineProperty(service, name, {
                    configurable: true,
                    get: function() {
                        var resource = getResource(name);
                        Object.defineProperty(service, name, {
                            value: resource,
                            configurable: true,
                            enumerable: true
                        });

                        return resource;
                    }
                });
            });
        }

        function getResource(resourceName) {
            var fullResourceName = 'resource.' + resourceName.toLowerCase();
            var factory = $injector.get(fullResourceName);

            return factory.create($resource);
        }

    }
})();
