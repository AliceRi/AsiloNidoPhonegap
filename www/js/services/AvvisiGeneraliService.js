app.service('AvvisiGeneraliService', function($q,$http) {
    return {
        leggiAvvisi: function(user,generale) {
             var deferred = $q.defer();
            var promise = deferred.promise;
            /*var deferred = $q.defer();
            var promise = deferred.promise;*/
            var vero=false;
            console.log(user);
            var data = {
                        Utente:user,
                        general:generale
                    };
            console.log(user);
           var request = $http.post("http://nidoapp.altervista.org/viewAvvisi.php", data).success(function(response){
             deferred.resolve( response);            
            }).error(function(err) { 
              deferred.reject(err); 
            });
          promise.success = function(fn) {
                promise.then(fn);
                return promise;
            }
            promise.error = function(fn) {
                promise.then(null, fn);
                return promise;
            }
            return promise;
                
            
        },
        
        rispondiAvviso:function(risp,idavviso,user){
            var deferred = $q.defer();
            var promise = deferred.promise;
            /*var deferred = $q.defer();
            var promise = deferred.promise;*/
            var vero=false;
            var data = {
                        risposta:risp,
                        idAvviso:idavviso,
                username:user
                    };
           var request = $http.post("http://nidoapp.altervista.org/rispondiAdAvvisi.php", data).success(function(response){
               console.log(response);
             deferred.resolve( response);            
            }).error(function(err) { 
              deferred.reject(err); 
            });
          promise.success = function(fn) {
                promise.then(fn);
                return promise;
            }
            promise.error = function(fn) {
                promise.then(null, fn);
                return promise;
            }
            return promise;
                
        },
        leggiRisposte:function(idAvv){
             var deferred = $q.defer();
            var promise = deferred.promise;
            /*var deferred = $q.defer();
            var promise = deferred.promise;*/
            var vero=false;
            var data = {
                        idAvviso:idAvv
                    };
            console.log("leggi risposte");
           var request = $http.post("http://nidoapp.altervista.org/letturaRisposteAvvisi.php", data).success(function(response){
             deferred.resolve(response);            
            }).error(function(err) { 
              deferred.reject(err); 
            });
          promise.success = function(fn) {
                promise.then(fn);
                return promise;
            }
            promise.error = function(fn) {
                promise.then(null, fn);
                return promise;
            }
            return promise;
                
        }
    }
})