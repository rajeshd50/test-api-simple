'use strict';

module.exports =
    window.angular.module('StarterApp.modules', [	
    ])
    .config([
        '$stateProvider',
        '$urlRouterProvider',
        '$locationProvider',
        function(
            $stateProvider,
            $urlRouterProvider,
            $locationProvider
        ) {
            $urlRouterProvider.when('/', '/home');
            $urlRouterProvider.when('', '/home');
            $urlRouterProvider.otherwise('/404');

            $locationProvider.hashPrefix('!');
            
            // $locationProvider.html5Mode(true);
            
            $stateProvider
            .state('home', {
                url: '/home',
                template: require('./templates/home.html'),
                controller: 'homeCtl',
                controllerAs: 'vm',
                resolve: {
                    userList: ['apiService','$q',function(apiService, $q){
                        var defered = $q.defer();
                        apiService.getUserList()
                        .then(function(data){
                            defered.resolve(data);
                        },function(error){
                            defered.reject(error);
                        })
                        return defered.promise;
                    }] 
                }
            })
            .state('add', {
                url: '/add',
                template: require('./templates/add.html'),
                controller: 'addCtl',
                controllerAs: 'vm'
                // resolve: {
                //     user: ['apiService','$q',function(apiService, $q){
                //         var defered = $q.defer();
                //         apiService.getUserDetails()
                //         .then(function(data){
                //             defered.resolve(data);
                //         },function(error){
                //             defered.reject(error);
                //         })
                //         return defered.promise;
                //     }] 
                // }
            });
        }
    ])
    .directive('abstractDir',require('./directives/abstract-directive.js'))
    .controller('abstractCtl',require('./controllers/abstract-ctl.js'))
    .controller('homeCtl',require('./controllers/home-ctrl.js'))
    .controller('addCtl',require('./controllers/add-ctrl.js'))
    .service('apiService',require('./services/api-services.js'));