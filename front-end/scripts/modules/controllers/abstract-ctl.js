'use strict';

module.exports = [
    '$scope',
    '$mdDialog',
    '$rootScope',
    '$timeout',
    function($scope, $mdDialog, $rootScope, $timeout) {
        // body...
        var vm = this;
        vm.text = 'Hello';
        vm.showLoader = false;

        var originatorEv;
        vm.openMenu = function($mdOpenMenu, ev) {
            originatorEv = ev;
            $mdOpenMenu(ev);
        };

        $rootScope.$on('$stateChangeStart', function() {
            vm.showLoader = true;
        });

        $rootScope.$on('setLoader', function(data) {
            vm.showLoader = data.loader;
        });

        $rootScope.$on('$stateChangeSuccess', function() {
            $timeout(function(){
            	vm.showLoader = false;
            },1000);
        });

        $rootScope.$on('$stateChangeError', function() {
            $timeout(function(){
            	vm.showLoader = false;
            },1000);
        });
    }
];
