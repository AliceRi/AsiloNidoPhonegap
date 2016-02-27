app.controller('GalleriaCtrl', function($scope,LoginService, GalleriaService, $ionicPopup, $state,$http,$rootScope,$filter) { 
    
 /*LoginService.loginUser($rootScope.globals.currentUser.username, $rootScope.globals.currentUser.authdata).success(function(data) { */
            //inizio richiamo al service
     console.log("qui inizio");
      GalleriaService.leggiAlbum().success(
                        function(data) {
            $scope.albums=data;   
        }
                        );
     
            //fine richiamo service     
     
        /*}).error(function(data) {
            var alertPopup = $ionicPopup.alert({
                title: 'Login failed!',
                template: 'Please check your credentials!'
            });
            $state.go('/login');
        });*/
    $scope.Visualizza = function(id) {
     $rootScope.name=id;
      $state.go('app.fotoAlbum');
     
    }

})