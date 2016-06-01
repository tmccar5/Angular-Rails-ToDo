angular
	.module('app', ['ui.router','templates'])
	.factory('posts', ['$http', function($http){
		var o = {
			posts: []
		};
		// return o;
		o.getall = function(){
			return $http.get('/posts.json').success(function(data){
				angular.copy(data, o.posts);
			});
		};
		o.create = function(post) {
			return $http.post('/posts.json', post).success(function(data){
				o.posts.push(data);
			});
		};
		return o;
	}]);