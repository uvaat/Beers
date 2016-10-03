angular.module('app.directives', [])
.directive('fav', function($favs, $rootScope, $timeout){

    return {

        template: '<i class="icon {{ icon }}"></i>',
        link: function(scope, element, attrs){

            scope.$watch('beer', function(newValue, oldValue) {

                if(oldValue == newValue) return;

                isBeer = false;

                $favs.getAll()
                .then(function(favs){

                    for(var i in favs){
                        if(favs[i] && favs[i].id == newValue.id) isBeer = true;
                    }

                    if(isBeer) scope.icon = "ion-ios-heart";
                    else scope.icon = "ion-ios-heart-outline";

                }, function(){

                    scope.icon = "ion-ios-heart-outline";

                })

            });

            element.on('click', function(e) {
                
                beer = JSON.parse(attrs.beer);

                if(isBeer){

                    $favs.remove(beer);
                    scope.icon = "ion-ios-heart-outline";

                }else{
            	   
                   $favs.save(beer);
                    scope.icon = "ion-ios-heart";
                    
                }
                
                $timeout(function(){
                    $rootScope.$broadcast('fav:change');
                }, 300);

                scope.$apply();

            });

        }

    };

});