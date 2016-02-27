app.service('LoginService', function($q,$http) {
    return {
        loginUser: function(name, pw) {
            var deferred = $q.defer();
            var promise = deferred.promise;
            var vero=false;
            var data = {
                        user: name,
                        password:pw
                    };
             console.log(name);
            var request = $http.post("http://nidoapp.altervista.org/login.php", data).success(function(response){
                if(response==1){
                    vero=true;
                }else{
                    vero=false;
                }
                console.log("sono qui2");
                console.log(response);
                if (vero) {
                    console.log(name);
                deferred.resolve('Welcome ' + name + '!');
            } else {
                deferred.reject('Wrong credentials.');
            }
            
            })
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