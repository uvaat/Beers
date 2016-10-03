angular.module('app.controllers')
.controller('BeerDayCtrl', function($scope, $beers, $state, $ionicHistory) {
	
	$scope.viewTitle = 'Beer of the day';

	$beers.getBeerDay()
	.then(function(beer){
		$scope.beer = beer;
	})

})