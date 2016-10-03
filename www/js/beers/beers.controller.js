angular.module('app.controllers')

.controller('BeersCtrl', function($scope, $beers, $state, $ionicHistory, $ionicModal, $ionicLoading) {

	$scope.catName = $state.params.catName;
	if(!$scope.catName) $ionicHistory.goBack();

	var page = 1;

	$beers.getByCategorie($scope.catName, page)
	.then(function(response){

		if(response.data.status != 'success'){
			$scope.noData = true;
			return;
		}

		page++;
		$scope.beers = response.data.data;

	})

	$scope.loadMore = function(){

		$beers.getByCategorie($scope.catName, page)
		.then(function(response){

			$scope.$broadcast('scroll.infiniteScrollComplete');

			if(response.data.status != 'success'){
				$scope.noData = true;
				return;
			}

			page++;

			$scope.beers = $scope.beers.concat(response.data.data);

		});

	}


})