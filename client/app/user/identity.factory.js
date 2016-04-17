(function() {
    'use strict';

    angular
    .module('app.user')
    .factory('IdentityFactory', IdentityFactory);

    IdentityFactory.$inject = ['$window', '$cookieStore', 'datacontext'];
    function IdentityFactory($window, $cookieStore, datacontext) {

        var currentUser;
        /**
         * get currentUser object from $cookieStore
         */
        if (!!$cookieStore.get('bootstrappedUser')) {
            currentUser = new datacontext.user();
            angular.extend(currentUser, $cookieStore.get('bootstrappedUser'));
        }

        return {
            currentUser: currentUser,
            isAuthenticated: function() {
                return !!this.currentUser;
            },
            isAuthorized: function(role) {
                return !!this.currentUser && this.currentUser.roles.indexOf(role) > -1;
            }
        };
    }

})();
