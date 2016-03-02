app.controller('ElencoVideoCtrl', function($scope,LoginService, VideoService, $ionicPopup, $state,$http,$rootScope,$filter) { 
    
 /*LoginService.loginUser($rootScope.globals.currentUser.username, $rootScope.globals.currentUser.authdata).success(function(data) {*/ 
            //inizio richiamo al service
     console.log("nel controller");
      VideoService.leggiVideo().success(
                        function(data) {
            $scope.videos=data;   
                            console.log(data);
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
      $state.go('app.UnVideo');
     
    }

})

app.controller('VideoCtrl',
             function($scope,$rootScope) {
    console.log("son qui");
   $scope.detail =$rootScope.name; 
    
    
})