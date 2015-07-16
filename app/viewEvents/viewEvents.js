'use strict';

angular.module('myApp.viewEvents', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/viewEvents', {
    templateUrl: 'viewEvents/viewEvents.html',
    controller: 'ViewEventsCtrl'
  });
}])

.controller('ViewEventsCtrl','http', [$http,function() {
$scope.errorMessage = '';



    var url="http://157.227.99.1:9000/getEvent/"+currentCategory;
   $http.get(url).success( function(response) {
$scope.events = response; 
console.log(" the users list is as belwo : "+response);
}).failure( function(){
    console.log(" failed to fetch the data : ");
    $scope.errorMessage = "failed to fetch the daya "; 
});




function getDataFromServer(){
    var url="http://157.227.99.1:9000/getEvent/"+currentCategory;
   $http.get(url).success( function(response) {
//                           $scope.students = response; 
console.log(" the users list is as belwo : "+response);
                        });
}

}]);