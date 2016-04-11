/* jshint -W117, -W030 */
describe('AdminUserController', function() {

    var scope, UserResource, ctrl, spy;
    var routehelper;
    var UserFactory;

    beforeEach(module('app.admin.user'));

    beforeEach(module(function($provide) {
        $provide.constant('UserResource', {
            query: sinon.stub()
        });

        $provide.constant('routehelper', {
            configureRoutes: sinon.stub()
        });
        $provide.constant('UserFactory', {
            authorize : {
                admin: sinon.stub()
            }
        });
    }));

    beforeEach(inject(function($controller, $rootScope, _UserResource_, _routehelper_, _UserFactory_) {
        scope = $rootScope.$new();
        routehelper = _routehelper_;
        UserFactory = _UserFactory_;

        UserResource = _UserResource_;

        ctrl = $controller('AdminUserController', {
            $scope: scope,
            UserResource : UserResource
        });
    }));

    it('should have a dummy test', function() {
        expect(true).to.be.true;
    });

    it('should call UserResource.query', function() {
        scope.user;
        expect(UserResource.query.calledOnce).to.be.true;
    });

});
