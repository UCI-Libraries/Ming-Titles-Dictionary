titlesApp
  .controller('discussController', ['$scope', '$http', function($scope, $http){

  // var init = function() {
  //   $scope.contributors = [];
  //   getContributors();
  // };
  //
  // function getContributors() {
  //   $http.get('api/users/contributors/true').then(function(response) {
  //     $scope.contributors = response.data;
  //   });
  // }
  //
  // init();
  $scope.checked = false;
  $scope.size = '100px';

  $scope.toggle = function() {
      $scope.checked = !$scope.checked;
  };

  $scope.mockRouteChange = function () {
      $scope.$broadcast('$locationChangeStart');
  };

  $scope.onopen = function () {
      alert('Open');
  };

  $scope.onclose = function () {
      alert('Close');
  };

  $scope.$on('toggleDiscuss', function() {
    $scope.checked = !$scope.checked;
  });

}]);
