(function () {
    'use strict';
    var app = angular.module("gameModule",[]);

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

  

});