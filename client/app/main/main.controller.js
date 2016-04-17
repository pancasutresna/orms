(function() {
    'use strict';

    angular
    .module('app.main')
    .controller('MainController', MainController);

    MainController.$inject = ['ResourcePlaceCache'];
    function MainController(ResourcePlaceCache) {
        var vm = this;
        vm.places = ResourcePlaceCache.query();
    }

})();
