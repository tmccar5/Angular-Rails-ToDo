angular
  .module('app')
  .controller('postCtrl', ['$scope', 'posts','$stateParams', function($scope, posts, $stateParams) {
		$scope.greeting = '';
		$scope.customGreeting = '';


		$scope.english = function(){
			$scope.greeting = "hello";
		};

		$scope.spanish = function(){
			$scope.greeting = "hola'!";
		};
		$scope.greet = function(phrase){
			$scope.greeting = phrase;
		};
		$scope.firstname = "";



		$scope.posts = posts.posts;

		$scope.post = {title: ""};

		$scope.save = function(title){
			$scope.posts.push(title);
			$scope.post.title = "";
		};

}]);

