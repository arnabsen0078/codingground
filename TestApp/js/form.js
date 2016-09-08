

/**
 * @filesource : formjs.js
 * @author : Shabeeb  <mail@shabeebk.com>
 * @abstract : controller fo HTML page
 * @package sample file 
 * @copyright (c) 2014, Shabeeb
 * shabeebk.com/blog
 * 
 *  */



var app = angular.module('formExample', []);


app.controller("formCtrl", ['$scope', '$http', function($scope, $http) {
        $scope.url = 'http://scampaigns.com/angular/login.php';
	
		/*$scope.headers	= {'Content-Type': 'application/x-www-form-urlencoded'} ;*/

        $scope.formsubmit = function(isValid) {


            if (isValid) {
              

                /*$http.post($scope.url, {"name": $scope.name, "email": $scope.email, "message": $scope.message}, {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}
    }).
                        success(function(data, status) {
                            console.log(data);
                            $scope.status = status;
                            $scope.data = data;
                            $scope.result = data; 
                        })*/
				
				  		$http({
						  method  : 'POST',
						  url     : 'http://scampaigns.com/angular/post.php',
						  data    : data, //forms user object
						  headers : {'Content-Type': 'application/x-www-form-urlencoded'} 
						 })
						  .success(function(data) {
							console.log(data);
							if (data.errors) {
							  $scope.errorName = data.errors.name;              
							} else {
							  $scope.result = data.message;
							  $rootScope.res = data.message;

							}
						  });
				
				
            }else{
                
                  alert('Form is not valid');
            }

        }

    }]); 