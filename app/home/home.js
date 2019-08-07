'use strict';

angular.module('myApp.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/home', {
        templateUrl: 'home/home.html',
        controller: 'HomeCtrl'
    });
}])

.controller('HomeCtrl', ['$scope', 'API_Endpopoint', function($scope, API_Endpopoint) {

    $scope.variableGlobal = API_Endpopoint;

    $scope.lstTasks = TASKS;
    console.log(TASKS);

}]);