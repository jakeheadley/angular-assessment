app.service('shopService', function ($http) {

  var baseUrl = 'https://practiceapi.devmountain.com/products/';

  this.getProducts = function () {
    return $http.get(baseUrl).then(function(response) {
      return response.data
    })
  }

  this.getProductDetails = function (id) {
    return $http.get(baseUrl + id).then(function (details){
      return details.data;
    })
  }

});
