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
                
            
        }
    }
})