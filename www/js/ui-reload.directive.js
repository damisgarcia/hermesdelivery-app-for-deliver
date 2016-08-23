angular.module('starter').directive("uiReload", ['$state', '$stateParams', '$timeout', '$ionicLoading', function($state, $stateParams, $timeout, $ionicLoading){
  return{
    restrict: "A",
    link: function(scope, element, attrs){
      element.on("click",function(e){
        $ionicLoading.show({template: "Recarregando"})
        $state.transitionTo($state.current, $stateParams, {
          reload: true, inherit: false, notify: false
        })
        $timeout($ionicLoading.hide, 1000)
      })
    }
  }
}])
