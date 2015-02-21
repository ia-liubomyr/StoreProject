describe('AppCtrl', function () {
    describe('isCurrentUrl', function () {
        var AppCtrl, $location, $scope, customModule;

        beforeEach(module('ngStoreApp'));

        beforeEach(module('ngStoreApp.store'));

        beforeEach(inject(function () {
            customModule = angular.module("ngStoreApp.store");
        }));

        it("should be registered", function () {
            expect(customModule).not.toEqual(null);
        });

        beforeEach(inject(function ($controller, _$location_, $rootScope) {
            $location = _$location_;
            $scope = $rootScope.$new();
            AppCtrl = $controller('AppCtrl', { $location: $location, $scope: $scope });
        }));
    });
});
