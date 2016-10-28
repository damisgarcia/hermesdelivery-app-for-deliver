// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic','ngCordova','yaru22.angular-timeago'])
.config(function($stateProvider, $urlRouterProvider, $httpProvider, $ionicConfigProvider){
  // View Cache
  $ionicConfigProvider.views.maxCache(0)

  $stateProvider
  .state('orders', {
    url: '/orders',
    templateUrl: 'templates/orders.html',
    controller: "OrdersCtrl as orders"
  })
  .state('orders.show', {
    url: '/:id',
    views:{
      "@":{
        templateUrl: 'templates/order.html',
        controller: "OrderCtrl as order"
      }
    }
  })
  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: "LoginCtrl as login"
  });

  // dont use otherwise
  // $urlRouterProvider.otherwise('/orders')

  $httpProvider.interceptors.push('DefaultHttpInteceptor')
})
.run(function($ionicPlatform, $backgroundGeolocation, $state) {
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

    if(window.StatusBar && cordova.platformId == 'android') {
      // StatusBar.backgroundColorByHexString("#886aea"); // Royal
      StatusBar.backgroundColorByHexString("#654db5");
    }

    // use transitionTo with option
    $state.transitionTo('orders');

    $backgroundGeolocation.call()
  });
});
