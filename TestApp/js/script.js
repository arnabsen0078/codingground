

var testModule = angular.module('testmodule', []);

testModule
   .controller('StatusController1',
    ['$rootScope', '$scope', 'myservice',
    function ($rootScope, $scope, myservice) {
       $scope.myservice = myservice;   
    }]);

testModule
   .controller('StatusController2',
    ['$rootScope', '$scope', 'myservice',
    function ($rootScope, $scope, myservice) {
      $scope.myservice = myservice;
    }]);
    
testModule
    .service('myservice', function() {
      this.xxx = "yyy";
    });
