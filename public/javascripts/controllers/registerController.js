var app = angular.module('SculptureFitness');

app.controller('registerController', ['$scope','$http', '$location', function($scope, $http, $location) {
    $scope.message = 'Register here';
    $scope.formData = {};

    $scope.addUser = function () {


        $http.post('/users', $scope.formData)
            .success(function (data) {
                alert('Congratulations ' + $scope.formData.fName + ' You have successfully registered ');
                $scope.Users = data;
                $location.path('/');
                console.log(data);
            })
            .error(function (data) {
                console.log('Error: ' + data);
            });
    };
}]);