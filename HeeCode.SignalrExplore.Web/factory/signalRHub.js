(function () {

    angular.module('myApp')
        .factory('SignalRHub', ['$rootScope',
            function ($rootScope, apiRouteService) {
                var apiUrl = "http://localhost:38410";
                return function (hubName) {
                    var connection = $.hubConnection(apiUrl);
                   // hubName = 'updateHub';
                    var proxy = connection.createHubProxy(hubName);
                    connection.logging = true;
                    connection.start().done(function () {
                        console.log("SignalR connection started");
                    });

                    return {
                        on: function (eventName, callback) {
                            proxy.on(eventName, function (result) {
                                console.log(eventName + " event received.");
                                $rootScope.$apply(function () {
                                    if (callback) {
                                        callback(result);
                                    }
                                });
                            });
                        }
                    };
                };

            }
        ]);

})();