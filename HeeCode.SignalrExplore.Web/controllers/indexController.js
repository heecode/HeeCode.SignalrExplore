(function () {
    'use strict';

    var app = angular.module('myApp');
    app.controller('indexController', indexController);


    function indexController() {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'indexController';

        activate();

        function activate() { }
    }
})();
