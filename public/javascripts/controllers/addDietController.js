var app = angular.module('SculptureFitness');

app.controller('addDietController', ['$scope', '$location', '$http', function($scope, $location, $http) {

    $scope.formData = {};

    $scope.message = 'Diets Page';

    $scope.addDiet = function () {

        $http.post('/diet', $scope.formData)
            .success(function (data) {
                $scope.Diet = data;
                $location.path('/diet');
                console.log(data);
            })
            .error(function (data) {
                console.log('Error: ' + data);
            });
    };
}]);
