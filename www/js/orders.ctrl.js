angular.module('starter').controller("OrdersCtrl", ['$scope', '$state', '$timeout', '$Cache', '$ionicLoading', 'Order', function($scope, $state, $timeout, $Cache, $ionicLoading, Order){
  // @private
  $load = function() {
    $ionicLoading.show({
      template: "Carregando"
    })

    Order.all(function(response){
      self.list = $Cache.save(response.data).data
      $timeout($ionicLoading.hide, 400)
       $scope.$broadcast('scroll.refreshComplete')
    },function(error){
      $timeout($ionicLoading.hide, 400)
       $scope.$broadcast('scroll.refreshComplete')
    })
  }
  // @public
  var self = this

  self.refresh = $load

  $load()

  return this
}])
