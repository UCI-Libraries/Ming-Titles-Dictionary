titlesApp
  .controller('passwordChangeController', ['$scope', 'Auth', '$http', function($scope, Auth, $http){
  $scope.approved = false;
  $scope.resetMessage = function() {
    $scope.approved = false;
  };
  $scope.changePassword = function(data) {
      $http.put('api/users/change_password', {
        "password": data.password
      }).then(function(response) {
        if (response.data.response === "password updated") {
          $scope.approved = true;
          $scope.formData = null;
          $scope.myForm.$setPristine();
        }
      });
  };
}]);
