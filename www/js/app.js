// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic','yaru22.angular-timeago'])
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
.run(function($ionicPlatform, $http) {
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
      StatusBar.styleDefault();
    }

    var bgGeo = window.BackgroundGeolocation;

    //This callback will be executed every time a geolocation is recorded in the background.
    var callbackFn = function(location, taskId) {
        var coords = location.coords;
        var lat    = coords.latitude;
        var lng    = coords.longitude;
        var baseurl = "http://hermesdelivery.herokuapp.com/api/v1/agents/location/access_key/" + $Cache.get().auth
        // var baseurl = "http://192.168.25.11:3000/api/v1/agents/location/access_key/" + $Cache.get().auth
        console.log('- Location: ', JSON.stringify(location));
        $http.post(baseurl, location.coords).success(function(data){
          console.log("- Storage Location in Hermes:", data)
        })

        // Must signal completion of your callbackFn.
        bgGeo.finish(taskId);
    };

    // This callback will be executed if a location-error occurs.  Eg: this will be called if user disables location-services.
    var failureFn = function(errorCode) {
        console.warn('- BackgroundGeoLocation error: ', errorCode);
    }

    // Listen to location events & errors.
    bgGeo.on('location', callbackFn, failureFn);

    // Fired whenever state changes from moving->stationary or vice-versa.
    bgGeo.on('motionchange', function(isMoving) {
      console.log('- onMotionChange: ', isMoving);
    });

    // BackgroundGeoLocation is highly configurable.
    bgGeo.configure({
        // Geolocation config
        desiredAccuracy: 0,
        distanceFilter: 10,
        stationaryRadius: 50,
        locationUpdateInterval: 1000,
        fastestLocationUpdateInterval: 5000,

        // Activity Recognition config
        activityType: 'AutomotiveNavigation',
        activityRecognitionInterval: 5000,
        stopTimeout: 5,

        // Application config
        debug: true,
        stopOnTerminate: false,
        startOnBoot: true,
    }, function(state) {
        // This callback is executed when the plugin is ready to use.
        console.log('BackgroundGeolocation ready: ', state);
        if (!state.enabled) {
            bgGeo.start();
        }
    });

    bgGeo.start()
  });
})
