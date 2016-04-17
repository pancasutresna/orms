(function () {
    'use strict';

    angular
        .module('app.data')
        .factory('resource.user', ResourceUser);

    ResourceUser.$inject = [];
    function ResourceUser() {

        return {
            create: createResource
        };

        function createResource($resource) {
            var userResource = $resource('/api/users/:id', {
                _id: '@id'
            }, {
                update: {
                    method: 'PUT',
                    isArray: false
                }
            });

            userResource.prototype.isAdmin  = function() {
                return this.roles && this.roles.indexOf('admin') > -1;
            };

            return userResource;
        }
    }

})();
