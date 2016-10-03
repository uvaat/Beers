angular.module('app.configs', [])

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider, $httpProvider) {

    $httpProvider.defaults.headers.common['Content-Type'] = 'application/json';
    $httpProvider.defaults.useXDomain = true;
    $ionicConfigProvider.backButton.text('').icon('ion-ios-arrow-left');

})





