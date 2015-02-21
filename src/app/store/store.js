angular.module('ngStoreApp.store', [
    'ui.router',
    'placeholders',
    'ui.bootstrap',
    'restangular',
    'plusOne'
])
    .constant('ngAuthSettings', {
        username: 'testUser',
        password: 'passowrdTest'
    })
    .constant('ngUrl', {
        baseUri: 'http://api.cashcreators.honeycombits.com/stores'
    })
    .config(function config($stateProvider, RestangularProvider, ngUrl, ngAuthSettings) {
        RestangularProvider.setBaseUrl(ngUrl.baseUri);
        RestangularProvider.setDefaultHeaders({ Authorization: 'Basic ' + btoa(ngAuthSettings.username + ":" + ngAuthSettings.password) });

        RestangularProvider.setErrorInterceptor(function (resp) {
            location.href = '#/store';
        });

        $stateProvider.state('store', {
            url: '/store',
            views: {
                "main": {
                    controller: 'StoreCtrl',
                    templateUrl: 'store/store.tpl.html'
                }
            },
            data: { pageTitle: 'Store' }
        });

        $stateProvider.state('create', {
            url: '/create',
            views: {
                "main": {
                    controller: 'StoreCtrl',
                    templateUrl: 'store/create.tpl.html'
                }
            },
            data: { pageTitle: 'Create Store' }
        });
    })
    .controller('StoreCtrl', function StoreController($scope, $location, Restangular) {
        //navigation
        $scope.create = function () {
            $location.path("/create");
        };

        $scope.back = function () {
            $location.path('/store');
        };

        //crud operations
        $scope.save = function () {
            Restangular.all('create').post($scope.store)
                .then(function (data) {
                    $location.path('/store');
                });
        };
    });