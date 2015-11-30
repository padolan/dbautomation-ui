angular.module('myApp.services', [])
  .factory('dbautomationSvcs', function($http) {

    var dbautomationApi = {};

	dbautomationApi.authenticate = function(userid,passwd) {
	}

    dbautomationApi.getProductList = function() {

	 return [
	 	{"id":"1", "name":"product 1"},
	 	{"id":"2", "name":"product 2"}
	 ];
     // return $http({
     //   method: 'GET',
     //   url: 'http://myurl.com/some.item/'+ id
     // });
    }

    dbautomationApi.getDbScript = function() {
		 return {
			"id":"1",
			"name":"product 1",
			"changelogs" : [
				{"id":"1234", "changes": [ {"sql":"create table mytable;"} ] }
			]
		 };
    }
    return dbautomationApi;
  });