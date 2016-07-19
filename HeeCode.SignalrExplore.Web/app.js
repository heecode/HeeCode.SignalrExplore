(function () {
    'use strict';

    var app = angular.module('myApp', [
        // Angular modules 
        'ngRoute',

       
        
    ]);

   app.config([
     "$routeProvider",
     function ($routeProvider) {

       

         $routeProvider
             .when("/home", {
                 templateUrl: "views/home.html",
                 controller: "homeController",
                 controllerAs: "home"
             });

         $routeProvider.otherwise({ redirectTo: "/home" });


     }
   ]);


})();