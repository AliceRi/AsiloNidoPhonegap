app.controller('AvvisiCtrl', function($scope,LoginService, AvvisiGeneraliService, $ionicPopup, $state,$http,$rootScope,$filter) { 
    
 /*LoginService.loginUser($rootScope.globals.currentUser.username, $rootScope.globals.currentUser.authdata).success(function(data) {*/ 
            //inizio richiamo al service
     
      AvvisiGeneraliService.leggiAvvisi($rootScope.globals.username,"si").success(
                        function(data) {
            $scope.avvisi=data;   
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
  $scope.Verifica = function(id) {
     $rootScope.name=id;
      $state.go('app.Avviso');
     
    }

})

app.controller('AvvisoCtrl',
             function($scope,$rootScope) {
    console.log("son qui");
   $scope.detail =$rootScope.name; 
    
    
})