angular.module('starter').controller("LoginCtrl", function($scope, $state, $Cache){
  this.submit = function(e){
    e.preventDefault()
    $Cache.saveAuth(this.access_key)
    $state.go("orders")
  }
})
