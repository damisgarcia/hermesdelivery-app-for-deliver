'use strict'

angular.module('starter').factory("$backgroundGeolocation", ['$http', '$Cache',function($http, $Cache){
  var httpSuccess = function(response){
    backgroundGeolocation.finish()
  }

  var httpFail = function(err){
    backgroundGeolocation.finish()
  }

  var callbackFn = function(location){
    if($Cache.get()){
      var baseurl = "http://hermesdelivery.herokuapp.com/api/v1/agents/location/access_key/" + $Cache.get().auth
      var data = { latitude: location.latitude, longitude: location.longitude }

      $http.post(baseurl, data).then(httpSuccess, httpFail)
    }
  }

  var failureFn = function(location){
    if($Cache.get()){
      var baseurl = "http://hermesdelivery.herokuapp.com/api/v1/agents/location/access_key/" + $Cache.get().auth
      var data = { latitude: location.latitude, longitude: location.longitude }

      $http.post(baseurl, data).then(httpSuccess, httpFail)
    }
  }

  return {
    call: function(){
      backgroundGeolocation.configure(callbackFn, failureFn, {
        desiredAccuracy: 10,
        stationaryRadius: 20,
        distanceFilter: 30,
        interval: 5000
      });

      backgroundGeolocation.start()
    }
  }
}])
