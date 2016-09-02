/**
 * Created by dipanjan on 8/3/2016.
 */
angular.module('test.controller',['ngSanitize'])
    .controller('listController', function($scope,$http) {
            $http.get("http://scampaigns.com/angular/index.php").then( function(response) {
                $scope.lists = response.data.restaurents;
            });
        });
