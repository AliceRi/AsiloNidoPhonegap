app.service('AttivitaService', function($q,$http) {
    return {
        leggiAttivita: function(date,daData) {
             var deferred = $q.defer();
            var promise = deferred.promise;
            /*var deferred = $q.defer();
            var promise = deferred.promise;*/
            var vero=false;
            console.log(date);
            console.log(daData);
            var data = {
                        data:date,
                        daData:daData
                    };
           var request = $http.post("http://nidoapp.altervista.org/viewAttivita.php", data).success(function(response){
             
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
                
            
        }
    }
})
