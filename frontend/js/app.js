angular.module('VahalaFoam', ['ui.router', 'VahalaFoam.controllers'])

.config(['$stateProvider', '$urlRouterProvider',
function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('home')
  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: '/views/home.html',
      controller: 'homeController',
      controllerAs: 'home'
    })
}])
