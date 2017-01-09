angular.module('app', ['ngRoute']);

angular.module('app').config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $routeProvider
        .when('/items/', {
            templateUrl: '/app/items/index.html',
            controller: 'ItemsController',
            controllerAs: 'vm'
        })
        .when('/', {
            templateUrl: '/app/home/index.html',
            controller: 'HomeController',
            controllerAs: 'vm'
        })
        .when('/contactUs/', {
            templateUrl: '/app/contactUs/index.html',
            controller: 'ContactUsController',
            controllerAs: 'vm'
        })
        .otherwise({
			redirectTo: '/'
		});
}]);
