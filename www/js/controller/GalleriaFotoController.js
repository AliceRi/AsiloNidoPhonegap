app.controller('GalleriaFotoCtrl', function($scope,LoginService, GalleriaFotoService, $ionicPopup, $state,$http,$rootScope,$filter,$ionicBackdrop, $ionicModal, $ionicSlideBoxDelegate, $ionicScrollDelegate) { 
    
 LoginService.loginUser($rootScope.globals.currentUser.username, $rootScope.globals.currentUser.authdata).success(function(data) { 
            //inizio richiamo al service
     $scope.album=$rootScope.name;
     console.log($scope.album);
     console.log("qui inizio foto");
     var utenteLoggato=$rootScope.globals.currentUser.username;
    console.log(utenteLoggato);
     
      $scope.zoomMin = 1;

  $scope.showImages = function(index) {
    $scope.activeSlide = index;
      console.log(index);
    $scope.showModal('view/galleryZoomView.html');
  };

  $scope.showModal = function(templateUrl) {
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
     
     
     
     
     GalleriaFotoService.leggiFotoAlbum($scope.album.IDAlbum,utenteLoggato).success(
                        function(data) {
            $scope.fotos=data;   
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
     

})