var app = angular.module('SculptureFitness', ['ngRoute']);

app.service('myService', function(){
    var myService = {
        MuscleType0: '',
        ExerciseName0: '',
        Sets0: 0,
        Reps0: 0,
        RestTime0: 0,
        Weight0:0,
        identity0:""
    }
    return myService;
});
app.service('myOtherService', function(){
    var myOtherService = {
        Protein1: 0,
        Fats1: 0,
        Carbs1: 0,
        numMeals1: 0,
        MealType1: '',
        MealCalories1:0,
        MealTime1:0,
        identity1: 0
    }
    return myOtherService;
});


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

        //route for the add programs page
        .when('/addProgram', {
            templateUrl : 'pages/addprogram.ejs',
            controller  : 'addProgramsController'
        })
        .when('/updateProgram', {
            templateUrl : 'pages/updateProgram.ejs',
            controller  : 'updateController'
        })
        .when('/findGym', {
            templateUrl : 'pages/findGym.ejs',
            controller  : 'findGymController'
        })
        .when('/addDiet', {
            templateUrl : 'pages/addDiet.ejs',
            controller  : 'addDietController'
        })
        .when('/updateDiet', {
            templateUrl : 'pages/updateDiet.ejs',
            controller  : 'updateDietController'
        })
        .when('/Register',{
            templateUrl : 'pages/Register.ejs',
            controller : 'registerController'
        })
        .when('/Login',{
            templateUrl : 'pages/Login.ejs',
            controller : 'loginController'
        })

        // route for the diet page
        .when('/diet', {
            templateUrl : 'pages/diet.ejs',
            controller  : 'dietController'
        });

        // route for the add programs page

});


  


