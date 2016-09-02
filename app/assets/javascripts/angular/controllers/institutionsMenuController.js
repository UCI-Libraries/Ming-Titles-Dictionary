titlesApp
  .controller('institutionsMenuController', ['$scope', '$timeout', '$http', function($scope, $timeout, $http){

  $scope.offices = [];

  var init = function() {
    getOffices();
  };

  function getOffices() {
      $http.get('api/institutions/all_with_ancestry').then(function(response) {
        console.log(response.data);
        $scope.offices = response.data;
      });
  }

  init();

}]);
