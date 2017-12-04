var app = angular.module('SculptureFitness');

app.controller('updateController', ['$scope','$http', '$location','myService', function($scope, $http, $location, myService) {
    // create a message to display in our view
    $scope.message = 'Programs Page!'

    console.log("adsfasd myService.MuscleType0: "+myService.MuscleType0);

    $scope.formData = {};
    $scope.formData.MuscleType = myService.MuscleType0;
    $scope.formData.ExerciseName = myService.ExerciseName0;
    $scope.formData.Sets = myService.Sets0;
    $scope.formData.Reps = myService.Reps0;
    $scope.formData.Weight = myService.Weight0;
    $scope.formData.RestTime = myService.RestTime0;



    findAll();
    $scope.changeRoute = function(newRoute){

        $location.path(newRoute);

    };


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
    $scope.update = function () {

        //console.log("id from update page: "+id);

        $http.put('/programs/' + myService.identity0, $scope.formData)
            .success(function (data) {
                //$scope.Programs = data;

                $location.path('/programs');
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

