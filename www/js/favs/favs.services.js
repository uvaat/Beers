angular.module('app.services')
.factory('$favs', function($q, $http){

	var getAll = function(){

		var d = $q.defer();

		CONFIG.db.get('beers')
		.then(function(doc){

			d.resolve(doc.datas);

		})
		.catch(function(){

			d.reject('nobeer');

		})

		return d.promise;

	}

	var remove = function(beer){

		CONFIG.db.get('beers')
		.then(function(doc){

			var beers = doc.datas;

			for(var i in beers){
				if(beers[i] && beers[i].id == beer.id){
					doc.datas.splice(i, 1);
				}
			}
			
			CONFIG.db.put(doc);

		})

	}


	var save = function(beer){

		CONFIG.db.get('beers')
		.then(function(doc){

			var beers = doc.datas;

			isBeer = false;
			for(var i in beers){
				if(beers[i] && beers[i].id == beer.id) isBeer = true;
			}

			if(!isBeer){
				
				doc.datas.push(beer);
				CONFIG.db.put(doc);

			}

		})
		.catch(function(){

			var beers = [beer];
			CONFIG.db.put({_id : 'beers', datas : beers});

		})

	}

	return {

		getAll : getAll,
		save   : save,
		remove : remove

	}

})
