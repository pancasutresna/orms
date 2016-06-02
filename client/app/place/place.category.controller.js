(function() {
    'use strict';

    angular
        .module('app.place')
        .controller('PlaceCategoryController', PlaceCategoryController);

        PlaceCategoryController.$inject = ['$routeParams', 'datacontext', 'logger'];
        function PlaceCategoryController($routeParams, datacontext, logger) {
            var vm = this;
            var categoriId = $routeParams.id;
            vm.places = datacontext.place.findByCategory({id: categoriId});
            // console.log('test test test');
            // vm.places = datacontext.place.findByCategory({id: categoriId});
        }
})();