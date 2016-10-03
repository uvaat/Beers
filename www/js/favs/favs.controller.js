angular.module('app.controllers')
.controller('FavsCtrl', function($scope, $favs, $rootScope) {

	var getAll = function(){

		console.log('lala');
		
		$favs.getAll()
		.then(function(favs){

			$scope.favs = favs;
			

		}, function(){

			$scope.noData = "true";

		})

	}

	$rootScope.$on('fav:change', getAll);
	getAll();
	

})