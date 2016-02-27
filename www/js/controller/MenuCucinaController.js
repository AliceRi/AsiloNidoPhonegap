app.controller('MenuCucinaCtrl', function($scope,LoginService, MenuCucinaService, $ionicPopup, $state,$http,$rootScope,$filter) { 
    $scope.example={
        value: new Date()
    };
    $scope.dataMenuSelezione=$filter('date')($scope.example.value, "yyyy-MM-dd");
 LoginService.loginUser($rootScope.globals.currentUser.username, $rootScope.globals.currentUser.authdata).success(function(data) { 
     MenuCucinaService.leggiMenu($filter('date')($scope.example.value, "yyyy-MM-dd")).success(
                        function(data) {
            $scope.menus=data;      
        }
                        );
             console.log($scope.menus);
        }).error(function(data) {
            var alertPopup = $ionicPopup.alert({
                title: 'Login failed!',
                template: 'Please check your credentials!'
            });
            $state.go('/login');
        });

        $scope.Verifica = function() { 
            MenuCucinaService.leggiMenu($filter('date')($scope.example.value, "yyyy-MM-dd")).success(
                        function(data) {
            $scope.menus=data;               
        });
    }
    
        $scope.Precedente = function(prec) {
             var myDate = $scope.example.value;
var newDay = new Date($scope.example.value);
            if(prec){
                newDay.setDate(myDate.getDate()-1);
            }else{
                newDay.setDate(myDate.getDate()+1);
            }

$scope.example.value=newDay; MenuCucinaService.leggiMenu($filter('date')(newDay, "yyyy-MM-dd")).success(
                        function(data) {
            $scope.menus=data;
                            
        }
                        );
    }

})