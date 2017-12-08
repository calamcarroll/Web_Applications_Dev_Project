var app = angular.module('SculptureFitness');

app.controller('programsController', ['$scope','$http', '$location', 'myService', function($scope, $http, $location, myService) {
    // create a message to display in our view
    $scope.message = 'Programs Page!';

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
    $scope.update = function (program_from_page) {

        console.log("$scope.program.ExerciseName: "+program_from_page.ExerciseName);

        myService.MuscleType0 = program_from_page.MuscleType;
        myService.ExerciseName0 = program_from_page.ExerciseName;
        myService.Sets0 = program_from_page.Sets;
        myService.Reps0 = program_from_page.Reps;
        myService.Weight0 = program_from_page.Weight;
        myService.RestTime0 = program_from_page.RestTime;
        myService.identity0 = program_from_page._id;

        
        $location.path('/updateProgram')

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
