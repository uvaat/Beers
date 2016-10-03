angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider

    .state('tab', {
        url         : '/tab',
        abstract    : true,
        templateUrl : 'templates/tabs.html'
    })

    .state('tab.beerday', {
        url: '/beer-day',
        views: {
            'tab-beerday': {
                templateUrl: 'templates/tab-beer.html',
                controller: 'BeerDayCtrl'
            }
        }
    })

    .state('tab.categories', {
        url: '/categories',
        views: {
            'tab-categories': {
                templateUrl: 'templates/tab-categories.html',
                controller: 'CategoriesCtrl'
            }
        }
    }).state('tab.categories_beers', {
        url: '/categories/:catName',
        views: {
            'tab-categories': {
                templateUrl: 'templates/tab-categories-beers.html',
                controller: 'BeersCtrl'
            }
        }
    }).state('tab.categories_beer', {
        url: '/beer/:beerId',
        views: {
            'tab-categories': {
                templateUrl: 'templates/tab-beer.html',
                controller: 'BeerCtrl'
            }
        }
    })

    .state('tab.favs', {
        url: '/favs',
        views: {
            'tab-favs': {
                templateUrl: 'templates/tab-favs.html',
                controller: 'FavsCtrl'
            }
        }
    })

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/tab/beer-day');

});
