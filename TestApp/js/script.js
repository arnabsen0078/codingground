

var testModule = angular.module('testmodule', []);

testModule
   .controller('StatusController1',
    ['$rootScope' ,'$scope', 'myservice',
    function ($rootScope, $scope, myservice) {
       	$scope.myservice = myservice;   
		$scope.counter = 0;
		$scope.count = function (inc) {
			$scope.counter += inc;
			$rootScope.marker = $scope.counter
			console.log("scope >> "+$scope.counter);
			
		};
		
    }]);
testModule
   .controller('StatusController2',
    ['$rootScope' ,'$scope', 'myservice',
    function ($rootScope, $scope, myservice) {
      $scope.myservice = myservice;
    }]);
testModule
   .controller('StatusController3',
    ['$rootScope' ,'$scope',
    function ($rootScope, $scope, myservice) {
		var a = $rootScope.marker;
		console.log("rootscope >> "+a);
      	$scope.value = a;
    }]);
testModule
    .service('myservice', function() {
      this.xxx = "yyy";
    });
