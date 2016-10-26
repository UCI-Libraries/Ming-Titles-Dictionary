titlesApp
  .controller('contributorsController', ['$scope', '$http', function($scope, $http){

  var init = function() {
    $scope.contributors = [];
    getContributors();
  };

  function getContributors() {
    $http.get('api/users/contributors/true').then(function(response) {
      console.log(response);
      $scope.contributors = response.data;
    });
  }

  init();

}]);
