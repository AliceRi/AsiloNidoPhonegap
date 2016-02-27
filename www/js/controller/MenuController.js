/*app.controller('MenuCtrl', function($scope,$http) {
     var data = {};
    console.log("MENU");
 //lkj
    $http.post("http://nidoapp.altervista.org/viewMenu.php", data).success(function(response)
    {
        console.log(response);
    })
     
   
})*/

app.controller('MenuCtrl', function($scope, MenuCucinaService, $ionicPopup, $state,$http,$rootScope) {
    $scope.data = {};
    $scope.Verifica = function() {
        MenuCucinaService.loginUser($rootScope.globals.currentUser.username, $rootScope.globals.currentUser.authdata).success(function(data) {
            $state.go('/');
        }).error(function(data) {
            var alertPopup = $ionicPopup.alert({
                title: 'Login failed!',
                template: 'Please check your credentials!'
            });
        });
    }
    
    /*var alertPopup = $ionicPopup.alert({
                title: 'Login failed!',
                template: 'Please check your credentials!'
            });*/
})