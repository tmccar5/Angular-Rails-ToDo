angular
  .module('app')
  .controller('postCtrl', ['$scope', 'Post','$stateParams', 'postsResolve', function($scope, Post, $stateParams, postsResolve) {


		$scope.posts = Post.index();

		// $scope.posts = postsResolve;
	

		$scope.addPost = function(input){
		
			Post.create({title: input});
			$scope.post = null;
		};

		$scope.editPost = function(title, id){

			Post.update({id: id, title: title});
			// $scope.post.newTitle = "";
		};

		$scope.deletePost = function(id){
			Post.destory({id: id});
		};

}]);

