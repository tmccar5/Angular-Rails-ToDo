angular
	.module('app', ['ui.router','templates', 'ngResource'])
	.factory('Post', ['$resource', function($resource){
		return $resource("/posts/:id", {id: "@id"},
			{
				'create': {method: 'POST'},
				'index': {method: 'GET', isArray: true},
				'show': {method: 'GET', isArray: false},
				'update': {method: 'PUT'},
				'destory': {method: 'DELETE'}
			}
		);
		
	}]);
