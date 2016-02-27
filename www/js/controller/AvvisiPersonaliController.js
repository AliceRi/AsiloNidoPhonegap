app.controller('AvvisiPersonaliCtrl', function($scope,LoginService, AvvisiGeneraliService, $ionicPopup, $state,$http,$rootScope,$filter) { 
    
 LoginService.loginUser($rootScope.globals.currentUser.username, $rootScope.globals.currentUser.authdata).success(function(data) { 
            //inizio richiamo al service
     
     console.log($rootScope.globals);
    var utenteLoggato=$rootScope.globals.currentUser.username;
    console.log(utenteLoggato); AvvisiGeneraliService.leggiAvvisi(utenteLoggato,"no").success(
                        function(data) {
            $scope.avvisi=data;   
        }
                        );
     
            //fine richiamo service     
     
        }).error(function(data) {
            var alertPopup = $ionicPopup.alert({
                title: 'Login failed!',
                template: 'Please check your credentials!'
            });
            $state.go('/login');
        });
    $scope.Verifica = function(id) {
     $rootScope.name=id;
      console.log("ssss");
      $state.go('app.Avviso');
     
    }

})