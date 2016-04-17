(function () {
    'use strict';

    angular.module('app.admin.user')
    .controller('AdminUserController', AdminUserController);

    AdminUserController.$inject = ['datacontext'];
    function AdminUserController(datacontext) {
        var vm = this;
        vm.users = datacontext.user.query();
    }

})();
