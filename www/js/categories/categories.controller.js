angular.module('app.controllers')

.controller('CategoriesCtrl', function($scope, $categories) {

	$categories.get()
	.success(function(response){

		if(response.status != 'success'){

			$scope.noData = true;
			return;

		}

		$scope.categories = response.data

	})

})