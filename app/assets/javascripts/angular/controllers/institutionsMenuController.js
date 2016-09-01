titlesApp
  .controller('institutionsMenuController', ['$scope', '$timeout', '$http', function($scope, $timeout, $http){
  // var addItem = angular.element(document.getElementsByClassName('add-item'));
  $scope.offices = [];


  var init = function() {
    getOffices();
  };

  function getOffices() {
      $http.get('api/institutions/all_trees').then(function(response) {
        console.log(response.data);
        $scope.offices = response.data;
      });
  }

  init();


}]);
