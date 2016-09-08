

var testModule = angular.module('testmodule', []);

/*testModule
   .controller('StatusController1',
    ['$rootScope' ,'$scope', 'myservice',
    function ($rootScope, $scope, myservice) {
       	$scope.myservice = myservice;   
    }]);
testModule
   .controller('StatusController2',
    ['$rootScope' ,'$scope', 'myservice',
    function ($rootScope, $scope, myservice) {
      $scope.myservice = myservice;
    }]);
testModule
    .service('myservice', function() {
      this.xxx = "yyy";
    });*/
testModule
	.controller('StatusController3', function($scope, $rootScope) {
		$scope.counter = 0;
		$scope.count = function (inc) {
			$scope.counter += inc;
			$rootScope.test	=	$scope.counter;
			//console.log("scope >>"+$scope.counter);
		};
		
		
	 });
testModule
	.controller('StatusController4', function($scope, $rootScope) {
		//$scope.value = $rootScope.test;
	 });
