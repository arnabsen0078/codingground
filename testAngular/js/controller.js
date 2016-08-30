/**
 * Created by dipanjan on 8/3/2016.
 */
angular.module('test.controller',[])
    .controller('HomeCtrl',function($scope,$routeParams,$http,Reddit){
        $scope.name = "Home";
        console.log($routeParams.Id);
        $http.post('http://scampaigns.com/angular/index.php').then(function(data){
            console.log(data.data.restaurents);
            $scope.list = data.data.restaurents;
        });
        $scope.images = [1, 2, 3, 4, 5, 6, 7, 8];

        $scope.loadMore = function() {
            var last = $scope.images[$scope.images.length - 1];
            for(var i = 1; i <= 8; i++) {
                $scope.images.push(last + i);
            }
        };

        $scope.reddit = new Reddit();

    })
    .controller('LoginCtrl',function($scope,$location){
        $scope.page_name = "Login";
        $scope.id = 1;
        $scope.goHome = function(){
            $location.path("/home/"+1);
        }
    }).factory('Reddit', function($http) {
    var Reddit = function() {
        this.items = [];
        this.busy = false;
        this.after = '';
    };

    Reddit.prototype.nextPage = function() {
        if (this.busy) return;
        this.busy = true;

        var url = "https://api.reddit.com/hot?after=" + this.after + "&jsonp=JSON_CALLBACK";
        $http.jsonp(url).success(function(data) {
            var items = data.data.children;
            for (var i = 0; i < items.length; i++) {
                this.items.push(items[i].data);
            }
            this.after = "t3_" + this.items[this.items.length - 1].id;
            this.busy = false;
        }.bind(this));
    };

    return Reddit;
});
