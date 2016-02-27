// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app=angular.module('nido-app', ['ionic', 'starter.controllers'])


app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})


app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/login')

  $stateProvider.state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "view/Menu.html",
      controller:"AppCtrl"
    })      
  .state('app.home', {
    url: '/',
    templateUrl: 'view/Home.html'
  })
   .state('login', {
      url: '/login',
      templateUrl: 'view/login.html',
      controller: 'LoginCtrl'
  })
  .state('app.home2', {
    url: '/home2',
      views:{
          'menuContent':{  
                templateUrl: 'view/Home.html',
                controller: 'MenuCtrl'
          }
      }
  })
  .state('app.menuCucina',{
      url:'/menuCucina',
      views:{
          'menuContent':{
              templateUrl:'view/MenuCucina.html',
              controller:'MenuCucinaCtrl'
          }
      }
  })
   .state('app.AvvisiGenerali',{
      url:'/avvisiG',
      views:{
          'menuContent':{
              templateUrl:'view/AvvisiGenerali.html',
              controller:'AvvisiCtrl'
          }
      }
  })
   .state('app.AvvisiPersonali',{
      url:'/avvisiP',
      views:{
          'menuContent':{
              templateUrl:'view/AvvisiGenerali.html',
              controller:'AvvisiPersonaliCtrl'
          }
      }
  })
   .state('app.Avviso',{
      url:'/avvisoG',
      views:{
          'menuContent':{
              templateUrl:'view/Avviso.html',
              controller:'AvvisoCtrl'
          }
      }
  })
  .state('app.Attivita',{
      url:'/attivita',
      views:{
          'menuContent':{
              templateUrl:'view/Attivita.html',
              controller:'AttivitaCtrl'
          }
      }
  })
    .state('app.Album',{
      url:'/album',
      views:{
          'menuContent':{
              templateUrl:'view/GalleriaAlbum.html',
              controller:'GalleriaCtrl'
          }
      }
  })
  .state('app.fotoAlbum',{
      url:'/fotoAlbum',
      views:{
          'menuContent':{
              templateUrl:'view/GalleriaFoto.html',
              controller:'GalleriaFotoCtrl'
          }
      }
  })
.state('app.UnAttivita',{
      url:'/unattivita',
      views:{
          'menuContent':{
              templateUrl:'view/UnAttivita.html',
              controller:'UnAttivitaCtrl'
          }
      }
  })
  
})
