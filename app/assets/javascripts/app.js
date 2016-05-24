angular
	.module('app', ['ui.router','templates'])
	.factory('posts', [function(){
		var o = {
			posts: []
		};
		return o;
	}]);