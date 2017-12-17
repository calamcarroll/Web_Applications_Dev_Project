

var app = angular.module('SculptureFitness');


app.controller('findGymController', function($scope) {

    $scope.message = 'Maps to be displayed here';
    function initMap() {}

    initMap = function() {
        var uluru = {lat: 52.263072, lng: -7.116338};
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 4,
            center: uluru
        });

        var marker = new google.maps.Marker({
            position: uluru,
            map: map
        });
    }





});



