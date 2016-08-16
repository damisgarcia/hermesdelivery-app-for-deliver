angular.module('starter').controller("OrdersCtrl", function($scope, $state, $timeout, $Cache, $ionicLoading, Order){
  var self = this

  $ionicLoading.show({
    template: "Carregando"
  })

  Order.all(function(response){
    self.list = $Cache.save(response.data).data
    $timeout($ionicLoading.hide, 400)
  },function(error){
    $timeout($ionicLoading.hide, 400)
  })

  return this
})
