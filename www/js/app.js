// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic','ngCordova','yaru22.angular-timeago'])
.config(function($stateProvider, $urlRouterProvider, $httpProvider, $ionicConfigProvider){
  // View Cache
  $ionicConfigProvider.views.maxCache(0)

  $urlRouterProvider.otherwise('/orders')

  $stateProvider
  .state('orders', {
    url: '/orders',
    templateUrl: '/templates/orders.html',
    controller: "OrdersCtrl as orders"
  })
  .state('orders.show', {
    url: '/:id',
    views:{
      "@":{
        templateUrl: '/templates/order.html',
        controller: "OrderCtrl as order"
      }
    }
  })
  .state('login', {
    url: '/login',
    templateUrl: '/templates/login.html',
    controller: "LoginCtrl as login"
  });

  $httpProvider.interceptors.push('DefaultHttpInteceptor')
})
.run(function($ionicPlatform, $backgroundGeolocation) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }

    if(window.StatusBar) {
      StatusBar.backgroundColorByHexString("#886aea"); // Royal
    }

    $backgroundGeolocation.call()
  });
});
