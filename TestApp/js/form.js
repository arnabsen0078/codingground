

var app = angular.module('formExample', []);


app.controller("formCtrl", ['$scope', '$http', function($scope, $http, $templateCache) {

        $scope.formsubmit = function(isValid) {
			
			 $scope.url = "http://scampaigns.com/angular/login.php";
			$scope.method	=	"POST";
			$scope.FormData	=	{"name": $scope.name, "email": $scope.email, "message": $scope.message};
			console.log(isValid);
			console.log($scope.FormData);//return false;
			

            if (isValid) {
              

                $http({
				  method: "POST",
				  url: "http://scampaigns.com/angular/login.php",
				  data: {"name": $scope.name, "email": $scope.email, "message": $scope.message},
				  headers: {'Content-Type': 'application/x-www-form-urlencoded'},
				  cache: $templateCache
				}).
				success(function(response) {
					console.log(response);return false;
					$scope.codeStatus = response.data;
				}).
				error(function(response) {
					console.log(response);return false;
					$scope.codeStatus = response || "Request failed";
				});
				
				
            }else{
                
                  alert('Form is not valid');
            }

        }

    }]); 