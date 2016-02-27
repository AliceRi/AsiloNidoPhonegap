app.controller('LoginCtrl', function($scope, LoginService, $ionicPopup, $state,$http,AUTH_EVENTS,$rootScope) {
   
    $scope.data = {};

     
   $scope.login = function() {
        LoginService.loginUser($scope.data.username, $scope.data.password).success(function(data) {
            $rootScope.globals = {
                currentUser: {
                    username: $scope.data.username,
                    authdata: $scope.data.password
                }
            };
            console.log($rootScope.globals);

            $state.go('app.home2');
            $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
        }).error(function(data) {
            $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
            var alertPopup = $ionicPopup.alert({
                title: 'Login failed!',
                template: 'Please check your credentials!'
            });
        });
       console.log($rootScope.globals);
    }
        console.log($rootScope.globals);
   
  
 /*  authService.isAuthenticated = function () {
       write.log(Session.userId);
    return !!Session.userId;
  };*/
    
    /*var alertPopup = $ionicPopup.alert({
                title: 'Login failed!',
                template: 'Please check your credentials!'
            });*/
})