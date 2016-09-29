angular.module('VahalaFoam.controllers', [])

.controller('homeController', ['$http', '$scope',
function($http, $scope) {
  angular.element(document).ready(function() {
    console.log('Home Route Hit');

    $(".button-collapse").sideNav();
    $('.parallax').parallax();

  })
}])
