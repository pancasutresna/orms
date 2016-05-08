(function() {
    'use strict';

    angular
    .module('app.place')
    .run(routeConfig);

    routeConfig.$inject = ['routehelper', 'UserFactory'];
    function routeConfig(routehelper, UserFactory) {

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
                    resolve: UserFactory.authorize.user
                }
            }
        ];

        routehelper.configureRoutes(routes);
    }

})();
