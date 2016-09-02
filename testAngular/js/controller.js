/**
 * Created by dipanjan on 8/3/2016.
 */
angular.module('test.controller',[])
    .controller('HomeCtrl',function($scope,$http){
        $scope.name = "Home";        
        $http.post('http://scampaigns.com/angular/index.php').then(function(data){
            console.log(data.data.restaurents);
            $scope.list = data.data.restaurents;
        });      

        

    })
    .controller('LoginCtrl',function($scope,$location){
        $scope.page_name = "Login";
        $scope.id = 1;
        $scope.goHome = function(){
            $location.path("/home");
        }
    });
