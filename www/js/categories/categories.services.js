angular.module('app.services')
.factory('$categories', function($q, $http){

	var get = function(){
		return $http.get(CONFIG.api + 'menu/categories?key=' + CONFIG.apiKey, {cache : true});
	}

	return {

		get : get

	}

})
