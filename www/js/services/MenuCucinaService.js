app.service('MenuCucinaService', function($q,$http) {
    return {
        leggiMenu: function(date) {
             var deferred = $q.defer();
            var promise = deferred.promise;
            /*var deferred = $q.defer();
            var promise = deferred.promise;*/
            var vero=false;
            var data = {
                        data:date
                    };
           var request = $http.post("http://nidoapp.altervista.org/viewMenu.php", data).success(function(response){
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
