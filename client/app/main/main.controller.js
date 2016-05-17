(function() {
    'use strict';

    angular
    .module('app.main')
    .controller('MainController', MainController);

    MainController.$inject = ['ResourcePlaceCache', 'ResourceCategoryCache'];
    function MainController(ResourcePlaceCache, ResourceCategoryCache) {
        // MainController.$inject = ['$scope', '$location', 'ResourcePlaceCache'];
        // function MainController($scope, $location, ResourcePlaceCache) {
        // $scope.$on('$routeChangeError', function(evt,current,previous,rejection) {
        //     console.log('rejection is : ' + rejection);
        //     if (rejection === 'Not authorized') {
        //         $location.path('/places');
        //     }
        // });
        var vm = this;
        vm.places = ResourcePlaceCache.query();
        vm.categories = ResourceCategoryCache.query();

        console.log('categories : ' + vm.categories);
    }

})();
