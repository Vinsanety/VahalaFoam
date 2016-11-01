angular.module('VahalaFoam.controllers', [])

.controller('homeController', ['$http', '$scope',
function($http, $scope) {
  angular.element(document).ready(function() {

    $('.dropdown-button').dropdown({
      inDuration: 300,
      outDuration: 225,
      constrain_width: false, // Does not change width of dropdown to that of the activator
      hover: true, // Activate on hover
      gutter: 0, // Spacing from edge
      belowOrigin: true, // Displays dropdown below the button
      alignment: 'left', // Displays dropdown with edge aligned to the left of button
      closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
      }
    );

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $('.carousel').carousel();
    $('.collapsible').collapsible({
      accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });

  })
}])
