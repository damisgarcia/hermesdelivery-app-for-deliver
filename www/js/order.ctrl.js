angular.module('starter').controller("OrderCtrl", ['$scope', '$state', '$stateParams', '$filter', '$Cache',function($scope, $state, $stateParams, $filter, $Cache){
  var self = this
  var id = parseInt($stateParams.id)

  angular.extend(self, $Cache.find($stateParams.id))

  self.total_pagamento = parseFloat(self.valor_total) + parseFloat(self.frete)
  self.total_pagamento -= self.total_pagamento * parseFloat(self.desconto)

  return self
}])
