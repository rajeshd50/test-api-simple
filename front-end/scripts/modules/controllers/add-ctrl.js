'use strict';

module.exports = [
    'apiService',
    '$rootScope',
    '$mdToast',
    '$state',
    function(apiService, $rootScope, $mdToast, $state) {
        // body...
        var vm = this;

        vm.user = {
            name: '',
            details: ''
        };

        vm.addUpdateUser = function(argument) {
            __addUser();
        }

        function __addUser() {
            setLoader(true);
            apiService.addUser(vm.user)
                .then(function(data) {
                    var toast = $mdToast.simple()
                        .textContent('Added new user')
                        .action('OK')
                        .highlightAction(false)
                        .position('top right');
                    $mdToast.show(toast).then(function(response) {
                        if (response == 'ok') {
                            $state.go('home');
                        }
                    });
                }, function(error) {
                    $mdToast.show(
                        $mdToast.simple()
                        .textContent('There was error deleting the user')
                        .position('top right')
                        .hideDelay(3000)
                    );
                })
                .finally(function() {
                    setLoader(false);
                })
        }

        function setLoader(loader) {
            $rootScope.$broadcast('setLoader', { data: loader });
        }
    }
];
