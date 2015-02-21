angular.module('ngStoreApp', [
    'templates-app',
    'templates-common',
    'ngStoreApp.store',
    'ui.router'
])

.config(function myAppConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/store');
})

.run(function run() {
})

.controller('AppCtrl', function AppCtrl($scope, $location) {
    $scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
        if (angular.isDefined(toState.data.pageTitle)) {
            $scope.pageTitle = toState.data.pageTitle + ' | honeycombits';
        }
    });
});