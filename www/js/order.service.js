angular.module('starter').factory("Order", function($http, $Cache){
  return {
    all: function(callback){
      var baseurl = "http://hermesdelivery.herokuapp.com/api/v1/agents/orders/access_key/" + $Cache.get().auth
      $http.get(baseurl).then(callback)
    }
  }
})
