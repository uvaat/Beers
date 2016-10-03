angular.module('app.controllers')
.controller('BeerCtrl', function($scope, $beers, $state, $ionicHistory) {
	
	$scope.beerId = $state.params.beerId;
	if(!$scope.beerId) $ionicHistory.goBack();

	$beers.getOne($scope.beerId)
	.then(function(response){

		console.log(response);
		if(response.data.status != 'success') return;

		$scope.beer = response.data.data;

	})

})