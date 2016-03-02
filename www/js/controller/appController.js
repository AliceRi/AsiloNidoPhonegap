angular.module('starter.controllers', [])

app.controller('AppCtrl', function($scope,$rootScope,$state,AUTH_EVENTS) {
$scope.logOut=function(){
        console.log("quiMenu");
      $rootScope.globals = {
                currentUser: {
                    username: "",
                    authdata:""
                }
            };
            console.log($rootScope.globals);
$rootScope.$broadcast(AUTH_EVENTS.loginSuccess);

           $state.go('login',null, {reload: true, notify:true});
    //$window.location.reload(true);
  }
})

app.directive('backImg', function(){
    return function(scope, element, attrs){
        var url = attrs.backImg;
        element.css({
            'background-image': 'url(' + url +')',
            'background-size' : 'cover'
        });
    };
});