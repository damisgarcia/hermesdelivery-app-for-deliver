angular.module('starter').controller("LoginCtrl", ['$scope', '$state', '$Cache',function($scope, $state, $Cache){
  this.submit = function(e){
    e.preventDefault()
    $Cache.saveAuth(this.access_key)
    $state.go("orders")
  }
}])
