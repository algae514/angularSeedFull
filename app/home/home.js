'use strict';

angular.module('myApp.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'home/home.html',
    controller: 'HomeCtrl'
  });
}])

.controller('HomeCtrl', [function() {

$scope.addEvent = function() {
    alert("Test App addCategoryNGClick")
    };

$scope.showCricket = function() {
    alert("Test App addCategoryNGClick")
    currentCategory = 'cricket';
    $location.path = "/viewEvents"
    };

$scope.showChess = function() {
    alert("Test App addCategoryNGClick")
    currentCategory = 'chess';
    
    $location.path = "/viewEvents"
    };

$scope.showFancyDress = function() {
    alert("Test App addCategoryNGClick")
    currentCategory = 'FancyDress';
    $location.path = "/viewEvents"
    };




}]);