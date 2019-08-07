'use strict';

// Declare app level module which depends on views, and core components
angular.module('myApp', [
        'ngRoute',
        'ngMaterial',
        'ngMessages',
        'myApp.home',
        'myApp.view1',
        'myApp.view2',
        'myApp.version'
    ])
    .constant('API_Endpopoint', 'http://localhost:8090')

.config(['$locationProvider', '$routeProvider', '$mdThemingProvider', function($locationProvider, $routeProvider, $mdThemingProvider) {
    $locationProvider.hashPrefix('!');


    $routeProvider.otherwise({ redirectTo: '/home' });




}]);