var app = angular.module('SculptureFitness');

app.controller('addProgramsController', ['$scope', '$location', '$http', function($scope, $location, $http) {

    $scope.formData = {};

    $scope.message = 'Programs Page';

    $scope.addProgram = function () {

        $http.post('/programs', $scope.formData)
            .success(function (data) {
                $scope.Programs = data;
                $location.path('/programs');
                console.log(data);
            })
            .error(function (data) {
                console.log('Error: ' + data);
            });
    };
}]);
