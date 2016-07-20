(function () {
    'use strict';

    var app = angular.module('myApp', [
        // Angular modules 
        'ngRoute'

       
        
    ]);

    app.provider("game", function () {
        var type;
        return {
            setType: function (value) {
                type = value;
            },
            $get: function () {
                return {
                    title: type + "Craft"
                };
            }
        };
    });

    

    //config(["messageProvider", function (messageProvider) {
    //    messageProvider.setText("Hello world!");
    //}])

   app.config([
     "$routeProvider", "gameProvider",
     function ($routeProvider, gameProvider) {

         gameProvider.setType("War");

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