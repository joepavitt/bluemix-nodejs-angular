var app = angular.module('unilever-foundry50', [
    'ui.router'
]);

app.config(function($urlRouterProvider, $stateProvider, $locationProvider) {
    $locationProvider.html5Mode({
        enabled: true
    });

    $urlRouterProvider
        .otherwise('');

    /*$stateProvider
        .state('main', {
            url: '/',
            templateUrl: 'app/overall.html',
            controller: 'OverallCtrl'
        })*/
});

app.controller('MainCtrl', ['$scope', '$stateParams', '$state',
    function($scope, $stateParams, $state) {

    }
]);
