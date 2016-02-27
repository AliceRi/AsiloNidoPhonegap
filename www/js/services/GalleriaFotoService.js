app.service('GalleriaFotoService', function($q,$http) {
    return {
        leggiFotoAlbum: function(numeroAlbum,user) {
             var deferred = $q.defer();
            var promise = deferred.promise;
            /*var deferred = $q.defer();
            var promise = deferred.promise;*/
            console.log(numeroAlbum);
            console.log(user);
            var data = {
                        Utente:user,
                        idAlbum:numeroAlbum
                    };
            var request = $http.post("http://nidoapp.altervista.org/viewFotoAlbum.php",data).success(function(response){
             
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
