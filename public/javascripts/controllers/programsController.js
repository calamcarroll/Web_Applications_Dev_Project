var app = angular.module('SculptureFitness');

app.controller('programsController', ['$scope','$http', function($scope, $http) {
    // create a message to display in our view
    $scope.message = 'Programs Page!';

    findAll();

    function findAll() {
        $http.get('/programs')
            .success(function (data) {
                $scope.programs = data;
                console.log(data);
            })
            .error(function (data) {
                console.log('Error: ' + data);
            });
    };

    $scope.incrementWeight = function(id){
        $http.put('/programs/' + id + '/weight')
            .success(function(data) {
                console.log(data);
                findAll();
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    }

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
