app.controller('AttivitaCtrl', function($scope,LoginService, AttivitaService, $ionicPopup, $state,$http,$rootScope,$filter) { 
    $scope.example={
        value: new Date()
    };
    $scope.dataMenuSelezione=$filter('date')($scope.example.value, "yyyy-MM-dd");
 LoginService.loginUser($rootScope.globals.currentUser.username, $rootScope.globals.currentUser.authdata).success(function(data) { 
     var myDate = $scope.example.value;
     var newDay = new Date($scope.example.value);
            newDay.setDate(myDate.getDate()-5);
            console.log($filter('date')(newDay, "yyyy-MM-dd"));
     AttivitaService.leggiAttivita($filter('date')($scope.example.value, "yyyy-MM-dd"),$filter('date')(newDay, "yyyy-MM-dd")).success(
                        function(data) {
                            console.log(data);
            $scope.attivita=data;      
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
            AttivitaService.leggiAttivita($filter('date')($scope.example.value, "yyyy-MM-dd")).success(
                        function(data) {
            $scope.attivita=data;               
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

$scope.example.value=newDay; AttivitaService.leggiAttivita($filter('date')(newDay, "yyyy-MM-dd")).success(
                        function(data) {
            $scope.attivita=data;
                            
        }
                        );
    };
    $scope.AttivaAttivita = function(id) {
        console.log(id);
     $rootScope.name=id;
      $state.go('app.UnAttivita');
     
    }

})
app.controller('UnAttivitaCtrl',
             function($scope,$rootScope,$ionicBackdrop, $ionicModal, $ionicSlideBoxDelegate) {
    console.log("son qui");
   $scope.detail =$rootScope.name;
     $scope.zoomMin = 1;
      $scope.showImages = function(index,path) {
    $scope.activeSlide = 0;
          $scope.path=path;
      console.log(path);
    $scope.showModal('view/zoomFoto.html');
  };

  $scope.showModal = function(templateUrl) {
      console.log($scope);
    $ionicModal.fromTemplateUrl(templateUrl, {
      scope: $scope
    }).then(function(modal) {
      $scope.modal = modal;
      $scope.modal.show();  
    });
  }

  $scope.closeModal = function() {
    $scope.modal.hide();
    $scope.modal.remove()
  };

  $scope.updateSlideStatus = function(slide) {
    var zoomFactor = $ionicScrollDelegate.$getByHandle('scrollHandle' + slide).getScrollPosition().zoom;
    if (zoomFactor == $scope.zoomMin) {
      $ionicSlideBoxDelegate.enableSlide(true);
    } else {
      $ionicSlideBoxDelegate.enableSlide(false);
    }
  };
})