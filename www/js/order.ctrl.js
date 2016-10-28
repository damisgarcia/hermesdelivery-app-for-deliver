angular.module('starter').controller("OrderCtrl", ['$scope', '$state', '$stateParams', '$filter', '$Cache',function($scope, $state, $stateParams, $filter, $Cache){
  var self = this
  var id = parseInt($stateParams.id)

  angular.extend(self, $Cache.find($stateParams.id))

  self.total_pagamento = parseFloat(self.valor_total)
  self.desconto = self.total_pagamento * parseFloat(self.desconto) / 100
  self.valor_total = parseFloat(self.valor_total) + self.desconto

  // Rounded Models
  // self.total_pagamento = Math.round(self.total_pagamento)
  // self.valor_total = Math.round(self.valor_total)
  // self.desconto = Math.round(self.desconto)

  return self
}])
