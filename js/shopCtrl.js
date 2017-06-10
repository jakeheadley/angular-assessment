app.controller('shopCtrl',function ($scope, shopService, $stateParams) {

  $scope.getProducts = function () {
    return shopService.getProducts().then(function (response) {
      // console.log(response);
      $scope.products = response;
    });
  }

  $scope.getProducts();

  $scope.displayBool = true;

});
