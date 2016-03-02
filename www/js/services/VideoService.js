app.service('VideoService', function($q,$http) {
    return {
        leggiVideo: function() {
             var deferred = $q.defer();
            var promise = deferred.promise;
            /*var deferred = $q.defer();
            var promise = deferred.promise;*/
            var vero=false;
            var data = {
                        Utente:"",
                        general:""
                    };
           var request = $http.post("http://nidoapp.altervista.org/viewVideo.php", data).success(function(response){
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