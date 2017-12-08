var app = angular.module('SculptureFitness');

app.controller('updateDietController', ['$scope','$http', '$location','myOtherService', function($scope, $http, $location, myOtherService) {
    // create a message to display in our view
    $scope.message = 'Diet Page!'


    $scope.formData = {};
    $scope.formData.Protein = myOtherService.Protein;
    $scope.formData.Fats = myOtherService.Fats;
    $scope.formData.Carbs = myOtherService.Carbs;
    $scope.formData.numMeals = myOtherService.numMeals;
    $scope.formData.MealType = myOtherService.MealType;
    $scope.formData.MealCalories = myOtherService.MealCalories;
    $scope.formData.MealTime = myOtherService.MealTime;


    $scope.updateDiet = function () {

        //console.log("id from update page: "+id);

        $http.put('/diet/' + myOtherService.identity1, $scope.formData)
            .success(function (data) {

                $location.path('/diet');
                console.log(data);
            })
            .error(function (data) {
                console.log('Error: ' + data);
            });
    };


}
]);

