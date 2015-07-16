'use strict';

angular.module('myApp.viewEvents', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/viewEvents', {
    templateUrl: 'viewEvents/viewEvents.html',
    controller: 'ViewEventsCtrl'
  });
}])

.controller('ViewEventsCtrl', ['$scope','$http',function($scope,$http) {
$scope.errorMessage = '';



    var url="http://localhost:9000/getEvent/"+currentCategory;
    console.log('URL built is '+url)
    
           var responsePromise = $http.get(url);

                responsePromise.success(function(data, status, headers, config) {
                    $scope.myData.fromServer = data.title;
                    $scope.events = data;
                });
                responsePromise.error(function(data, status, headers, config) {
                    alert("AJAX failed!"+headers);
                    $scope.errorMessage = "failed to fetch the daya "; 
                });
        
        





}]);