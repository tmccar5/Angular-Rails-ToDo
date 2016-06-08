angular
  .module('app')
  .controller('postCtrl', ['$scope', 'posts','$stateParams', function($scope, posts, $stateParams) {


		$scope.posts = posts.posts;


		$scope.addPost = function(input){
			posts.create({
				title: input
			});
			$scope.post.title = "";
		};
		// $scope.deletePost = function(num){
		// 	posts.destory({
		// 		id: num
		// 	});
		// 	console.log(num);
		// };
		$scope.editPost = function(input){
			posts.edit({
				title: input,
			});
		};
}]);

