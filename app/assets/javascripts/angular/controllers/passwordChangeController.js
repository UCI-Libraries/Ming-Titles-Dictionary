titlesApp
  .controller('passwordChangeController', ['$scope', 'Auth', '$http', function($scope, Auth, $http){

  $scope.changePassword = function(data) {
      $http.put('api/users/change_password', {
        "password": data.password
      }).then(function(response) {
        console.log("Approved!", response);
      });
  };

}]);
