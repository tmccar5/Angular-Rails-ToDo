angular
  .module('app')
  .config(['$stateProvider', '$urlRouterProvider', function config($stateProvider, $urlRouterProvider) {
  
  $urlRouterProvider.otherwise("/posts");

	$stateProvider
		.state('post', {
			url: "/post",
			templateUrl: "post/_post.html",
			controller: 'postCtrl',
			resolve: {
				postPromise: ['posts', function(posts){
					return posts.getall();
				}]
			}
		})
		.state('child', {
			url: "/post",
			templateUrl: "post/_child.html",
			controller: 'postCtrl'
		});
	$urlRouterProvider.otherwise("post");
}]);