(function() {
    'use strict';

    angular
    .module('app.place')
    .run(routeConfig);

    routeConfig.$inject = ['$location', 'routehelper', 'IdentityFactory'];
    function routeConfig($location, routehelper, IdentityFactory) {

        var routes = [
            {
                url: '/places',
                config: {
                    templateUrl: '/app/place/place-list.html',
                    controller: 'PlaceListController',
                    controllerAs: 'vm'
                }
            },
            {
                url: '/places/:id',
                config: {
                    templateUrl: '/app/place/place-detail.html',
                    controller: 'PlaceDetailController',
                    controllerAs: 'vm'
                }
            },
            {
                url: '/places_add',
                config: {
                    templateUrl: '/app/place/place-add.html',
                    controller: 'PlaceAddController',
                    controllerAs: 'vm',
                    resolve: {
                        auth: function() {
                            if (!IdentityFactory.isAuthenticated()) {
                                //TODO: Change this url to login page url
                                $location.path('/places');
                                return;
                            }
                        }
                    }
                }
            }
        ];

        routehelper.configureRoutes(routes);
    }

})();
