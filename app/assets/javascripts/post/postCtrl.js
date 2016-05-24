angular
  .module('app')
  .controller('postCtrl', ['$scope', function($scope) {
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



		$scope.names = ["tom","bob","sam"];

		$scope.user = {name: ""};

		$scope.save = function(name){
			$scope.names.push(name);
		};

}]);

