(function () {
    'use strict';

    var app =  angular.module('myApp');
    app.controller('homeController',["$scope","$http","SignalRHub", homeController]);

    

    function homeController($scope,$http, SignalRHub) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'homeController';

        activate();

        var connection = $.hubConnection('http://localhost:38410');
        var updateHub = connection.createHubProxy('updateHub');

       // var updateHubProxy = SignalRHub('updateHub');
        updateHub.on('getUpdates', function () {
            var date = new Date();
            var message = "hoi hoi";
          
            $scope.$apply(function () {
                vm.updateDate = "hai hai" + date;
            });
            
            $('#message').append('<li>' + message + '</li>');
        });
        

        updateHub.on('send', function (message) {
            $('#message').append('<li>' + message + '</li>');
        });

        connection.logging = true;

        vm.updateDateFunc= function () {
            vm.updateDate = new Date();
        }

        var apiUrl = "http://localhost:38410/";

        vm.updateDateService = function () {
            // vm.updateDate = new Date();
            $http.post(apiUrl + 'api/updates')
        }

        vm.updateSignalRInvoke = function () {
            // vm.updateDate = new Date();
          
                updateHub.invoke('send', vm.message);
           
        }

        connection.start().done(function () {
            vm.updateSignalRInvoke();
        });

        function activate() {
            vm.updateDate = new Date();


        }
    }
})();
