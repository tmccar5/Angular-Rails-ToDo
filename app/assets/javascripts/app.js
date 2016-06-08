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
		o.edit = function(post) {
			return $http.put('/posts/12.json', post).success(function(data){
				// data = post.title;
				o.posts.push(data);
				// angular.copy(data, o.posts);
			});
		};
		// o.destroy = function(post) {
		// 	return $http.delete('/posts/8.json' + post.id).success(function(data){
		// 		angular.copy(data, o.posts);
		// 	});
		// };
		return o;
	}]);