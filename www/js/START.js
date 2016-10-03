var APP = function(){};
APP.start = function(){

    // if(CONFIG.debug) PouchDB.debug.enable('*');
    angular.bootstrap(document, [CONFIG.applicationName]);

}

//PouchDB.debug.disable();
console.log('DEBUG : ' + CONFIG.debug);

if(!CONFIG.debug){
    
    
    document.addEventListener('deviceready', function(){
        
        setTimeout(function() {

            APP.start();

        }, 400);

    }, false)

}else{

    setTimeout(function() {

        APP.start();

    }, 400);

}

angular.module(CONFIG.applicationName, CONFIG.modules)