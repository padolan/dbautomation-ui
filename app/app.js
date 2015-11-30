'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.services',
  'myApp.controllers',
  'myApp.version'
])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  	.when("/login", {templateUrl: "views/login.html", controller: "loginController"})
  	.when("/dbscripts", {templateUrl: "views/dbscripts.html", controller: "dbscriptsController"})
  	.when("/dbscripts/:id", {templateUrl: "views/dbscript.html", controller: "dbscriptController"})
  	.otherwise({redirectTo: '/login'});
}])
.run(function($rootScope) {
	//alert('initialized');
	$rootScope.authentication = {
		"authenticated":false,
		"userid": null
	};
})
;
