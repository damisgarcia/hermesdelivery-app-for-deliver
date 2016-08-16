angular.module('starter').factory("DefaultHttpInteceptor", function($q, $location, $Cache){
  return {
    'responseError': function(rejection) {
      if(rejection.status == 401){
        $Cache.clear()
        $location.url("/login")
        return rejection
      }
      return $q.reject(rejection)
    }
  }
})
