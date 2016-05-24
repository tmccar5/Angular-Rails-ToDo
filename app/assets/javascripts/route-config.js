angular
  .module('app')
  .config(['$stateProvider', '$urlRouterProvider', function config($stateProvider, $urlRouterProvider) {
  
  $urlRouterProvider.otherwise("/posts");

	$stateProvider
		.state('post', {
			url: "/post",
			templateUrl: "post/_post.html",
			controller: 'postCtrl'
		})
		.state('child', {
			url: "/post",
			templateUrl: "post/_child.html",
			controller: 'postCtrl'
		});
	$urlRouterProvider.otherwise("post");
}]);