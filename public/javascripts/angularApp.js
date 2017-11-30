var app = angular.module('SculptureFitness', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider

    // route for the home page
        .when('/', {
            templateUrl : 'pages/home.ejs',
            controller  : 'mainController'
        })


        // route for the programs page
        .when('/programs', {
            templateUrl : 'pages/programs.ejs',
            controller  : 'programsController'
        })


        // route for the donate page
        .when('/diet', {
            templateUrl : 'pages/diet.ejs',
            controller  : 'dietController'
        })

        // route for the donations page
        .when('/donations', {
            templateUrl : 'pages/donations.ejs',
            controller  : 'donationsController'
        });
});


  


