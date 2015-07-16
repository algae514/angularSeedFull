'use strict';

angular.module('myApp.viewEvents', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/viewEvents', {
    templateUrl: 'viewEvents/viewEvents.html',
    controller: 'ViewEventsCtrl'
  });
}])

.controller('ViewEventsCtrl', ['$scope','$http','$location',function($scope,$http,$location) {
$scope.errorMessage = '';



    var url="http://localhost:9000/getEvent/"+currentCategory;
    console.log('URL built is '+url)
    
           
           
           
           var responsePromise = $http.get(url);
           
           
           
           
           

                responsePromise.success(function(data, status, headers, config) {
//                    $scope.myData = data.eventName;
console.log("data:"+data[0].eventName)

                    $scope.events = data;
                });
                responsePromise.error(function(data, status, headers, config) {
                    alert("AJAX failed!"+headers);
                    $scope.errorMessage = "failed to fetch the daya "; 
                });
        
        
        
        
        $scope.goHome = function(){
            $location.path("/home");
        }
        

}]);