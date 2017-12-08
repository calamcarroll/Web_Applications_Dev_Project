var app = angular.module('SculptureFitness');

app.controller('updateDietController', ['$scope','$http', '$location','Service', function($scope, $http, $location, Service) {
    // create a message to display in our view
    $scope.message = 'Diet Page!'


    $scope.formData = {};
    $scope.formData.Protein = Service.Protein;
    $scope.formData.Fats = Service.Fats;
    $scope.formData.Carbs = Service.Carbs;
    $scope.formData.numMeals = Service.numMeals;
    $scope.formData.MealType = Service.MealType;
    $scope.formData.MealCalories = Service.MealCalories;
    $scope.formData.MealTime = Service.MealTime;


    $scope.updateDiet = function () {

        //console.log("id from update page: "+id);

        $http.put('/diet/' + Service.identity0, $scope.formData)
            .success(function (data) {
                //$scope.Programs = data;

                $location.path('/diets');
                console.log(data);
                findAll();
            })
            .error(function (data) {
                console.log('Error: ' + data);
            });
    };

    $scope.delete = function(id) {
        if (confirm("Are you sure you want to delete this program?")) {
            console.log('Deleting id : ' + id);
            $http.delete('/programs/' + id)
                .success(function(data) {
                    console.log(data);
                    findAll();
                })
                .error(function(data) {
                    console.log('Error: ' + data);
                });
        }
    };

}
]);

