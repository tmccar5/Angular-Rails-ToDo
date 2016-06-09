angular
  .module('app')
  .config(['$stateProvider', '$urlRouterProvider', function config($stateProvider, $urlRouterProvider) {
  
  $urlRouterProvider.otherwise("/post");
	$stateProvider
		.state('post', {
			url: "/post",
			templateUrl: "post/_post.html",
			resolve: {
				postsResolve: function(Post){
                    return Post.index().$promise;
				}
			},
			controller: 'postCtrl'
		});
}]);