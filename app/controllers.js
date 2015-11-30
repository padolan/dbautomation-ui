'use strict';

angular.module('myApp.controllers',[])

  /* controller */
  .controller('dbscriptsController', function($scope, dbautomationSvcs) {
	//alert('dbscriptsController');
    $scope.productList = dbautomationSvcs.getProductList();
  })

  .controller('loginController', function($rootScope, $scope, dbautomationSvcs) {
	//alert('loginController');
	$scope.doAuthenticate = function(userid, password) {
		alert('user: ' + userid + ', passwd: ' + password + ' signed in.');
		dbautomationSvcs.signin(userid,password);
		$rootScope.authentication.authenticated = true;
		$rootScope.authentication.userid = userid;
	}
	$scope.logout = function() {
		dbautomationSvcs.signout();
		$rootScope.authentication.authenticated = false;
		$rootScope.authentication.userid = null;
	}
  })

  .controller('logoutController', function($rootScope, $scope, dbautomationSvcs) {
		dbautomationSvcs.signout();
		$rootScope.authentication.authenticated = false;
		$rootScope.authentication.userid = null;
  })

  .controller('dbscriptController', function($scope, $routeParams, dbautomationSvcs) {
    $scope.id = $routeParams.id;
    $scope.dbscript = dbautomationSvcs.getDbScript($scope.id);
  });