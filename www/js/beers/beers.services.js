angular.module('app.services')
.factory('$beers', function($q, $http){

	var getByCategorie = function(catName, page){

		if(typeof page == 'undefined') page = 1;
		return $http.get(CONFIG.api + 'search?key=' + CONFIG.apiKey + '&q=' + catName + '&type=beer&p=' + page);

	}

	var getOne = function(id){

		return $http.get(CONFIG.api + 'beer/' + id + '?key=' + CONFIG.apiKey, {cache : true});

	}

	var getRand = function(){

		return $http.get(CONFIG.api + 'beer/random/?key=' + CONFIG.apiKey, {cache : true});

	}

	var getBeerDay = function(){

		var d = $q.defer();

		CONFIG.db.get('beer')
		.then(function(doc) {

			var tomorrow = new Date();
			tomorrow.setDate(doc.datas.day + 1);

			if(tomorrow.getTime() < Date.now()){

				getRand()
				.then(function(response){

					if(response.data.status != 'success') d.resolve('nobeer');

					var beerDay = response.data.data;
					beerDay.day = Date.now();

					doc.datas = beerDay;

					CONFIG.db.put(doc);

					d.resolve(beerDay);

				})

			}else{

				d.resolve(doc.datas);

			}

		})
		.catch(function (err) {

			getRand()
			.then(function(response){

				if(response.data.status != 'success') d.resolve('nobeer');

				var beerDay = response.data.data;
				console.log(beerDay);
				
				beerDay.day = Date.now();
				CONFIG.db.put({_id : 'beer', datas : beerDay});

				d.resolve(beerDay);

			})

		});

		return d.promise;

	}


	return {

		getByCategorie : getByCategorie,
		getOne         : getOne,
		getRand        : getRand,
		getBeerDay     : getBeerDay

	};
})
