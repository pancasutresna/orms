(function() {
    'use strict';

    angular
        .module('app.session')
        .run(routeConfig);

    routeConfig.$inject = ['routehelper'];
    /* @ngInject */
    function routeConfig(routehelper) {
        return [
            {
                url: '/session',
                config: {
                    title: 'sessions',
                    templateUrl: '/app/session/sessions.html'
                }
            },
            {
                url: '/session/search/:search',
                config: {
                    title: 'session-search',
                    templateUrl: 'app/session/sessions.html'
                }
            },
            {
                url: '/session/:id',
                config: {
                    templateUrl: 'app/session/sessionDetail.html',
                    title: 'session'
                }
            }
        ];
    }
}
)();
