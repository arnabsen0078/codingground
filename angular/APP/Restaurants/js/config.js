/**
 * Created by dipanjan on 8/3/2016.
 */
angular.module('test',['test.controller','ngRoute', 'ngSanitize', 'infinite-scroll'])

    /*================ Page routing =====================*/
    .config(function($routeProvider){
        $routeProvider.
        when('/home/:Id', {
            templateUrl: 'template/home.html',
            controller: 'HomeCtrl'
        }).
        when('/login', {
            templateUrl: 'template/login.html',
            controller: 'LoginCtrl'
        }).
        otherwise({
            redirectTo: '/login'
        });
    })

    /*================ Filter for star rating =====================*/

    .filter("ratingFilter",function(){
    return function(input){
        console.log(input);
        var ratingImg = '';
        for(var i = 0; i< 5; i++)
        {
            if(i<input){
                ratingImg +='<img class="star-img" src="img/Star-full.png"/>'
            }
            else{
                ratingImg +='<img class="star-img" src="img/Star_empty.png"/>'
            }
        }
        return ratingImg;
    }
});