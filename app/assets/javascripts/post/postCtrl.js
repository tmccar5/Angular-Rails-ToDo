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


		$scope.addPost = function(input){
			posts.create({
				title: input
			});
			$scope.post.title = "";
		};
}]);

