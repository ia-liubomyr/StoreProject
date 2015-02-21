describe('store section', function () {
    var StoreCtrl, $location, $scope, customModule;

    //mock
    var mockService = {
        stores: [{ "name": "store45", "data.keyword": "test45" }, { "name": "store2", "data.keyword": "test23" }],
        get: function () {
            return this.notes;
        },
        post: function (content) {
            this.stores.push(content);
        },
        del: function (content) {
            this.stores.pop(content);
        },
        all: function () {
            return {
                post: function post(store) {
                    return {
                        then: function then(result) {
                            mockService.stores.push(store);

                            return mockService.stores;
                        }
                    };
                }
            };
        }
    };

    beforeEach(module('ngStoreApp.store'));

    beforeEach(inject(function () {
        customModule = angular.module("ngStoreApp.store");
    }));

    beforeEach(inject(function ($controller, _$location_, $rootScope) {
        $location = _$location_;
        $scope = $rootScope.$new();
        StoreCtrl = $controller('StoreCtrl', { $location: $location, $scope: $scope });
    }));

    it('should return new store',
        inject(function ($rootScope, $controller) { //injects the dependencies
            // while creating the controller we have to inject the dependencies too.
            $controller('StoreCtrl', { $scope: $scope, Restangular: mockService });

            // the initial count should be two
            expect(mockService.stores.length).toBe(2);

            $scope.store = { "name": "store1", "data.keyword": "test" };
            $scope.save();
            
            expect(mockService.stores.length).toEqual(3);
        }));

    it("should be '/create' url", function () {
        $scope.create();
        var url = $location.path();
        expect(url).toEqual('/create');
    });

    it("should be '/store' url", function () {
        $scope.create();
        $scope.back();
        var url = $location.path();
        expect(url).toEqual('/store');
    });

    it("should be const", function () {
        expect(customModule.constant()).not.toEqual(null);
    });

    it("should be registered", function () {
        expect(customModule).not.toEqual(null);
    });

    it("should be scope", function () {
        expect($scope).not.toEqual(null);
    });

    it("should be controller", function () {
        expect(customModule.controller()).not.toEqual(null);
        expect(StoreCtrl).not.toEqual(null);
    });

    it("should be config", function () {
        expect(customModule.config()).not.toEqual(null);
    });
});