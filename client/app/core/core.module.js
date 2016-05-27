(function() {
    'use strict';

    angular
        .module('app.core', [
        /*
         * Angular modules
         */
        'ngAnimate', 'ngRoute', 'ngSanitize', 'ngResource', 'ngCookies',
        /*
         * Reusable cross app code modules
         */
        'blocks.exception', 'blocks.logger', 'blocks.router',

        /*
         * 3rd Party modules
         */
        'ui.bootstrap',     // ui-bootstrap (ex: carousel, pagination, dialog)
        'breeze.angular',   // tells breeze to use $q instead of Q.js
        'breeze.directives',// breeze validation directive (zValidate)
        'ngplus',           // ngplus utilities
        'ngzWip',            // zStorage and zStorageWip
        'ivh.treeview',
        'angularFileUpload',
        'ui.router',
        'oc.lazyLoad',
        'slick',
        'uiGmapgoogle-maps',
        'ngGeolocation',
        'mgo-angular-wizard',
        'NgSwitchery'
        // 'ngFileUpload' //TODO: remove this
    ]);
})();
