'use strict';

angular.module('myApp.controllers',[])

  /* controller */
  .controller('dbscriptsController', function($scope, dbautomationSvcs) {
	//alert('dbscriptsController');
    $scope.productList = dbautomationSvcs.getProductList();
  })

  .controller('loginController', function($rootScope, $scope, dbautomationSvcs) {
	//alert('loginController');
	$scope.userid=null;
	$scope.password=null;
	$scope.doAuthenticate = function(userid, password) {
		alert('user: ' + userid + ', passwd: ' + password + ' signed in.');
		$rootScope.authenticated=true;
		$rootScope.userid = userid;
	}
	$scope.logout = function() {
		$rootScope.authenticated=false;
		$rootScope.userid = null;
	}
  })

  /* controller */
  .controller('dbscriptController', function($scope, $routeParams, dbautomationSvcs) {
    $scope.id = $routeParams.id;
    $scope.dbscript = dbautomationSvcs.getDbScript($scope.id);
  });