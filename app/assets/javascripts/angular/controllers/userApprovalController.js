titlesApp
  .controller('userApprovalController', ['$scope','$http', function($scope, $http ){

  var init = function() {
    getUsers();
  };

  $scope.users = {};

  function getUsers() {
    $http.get('admin/users_to_approve/').then(function(response) {
      console.log(response.data);
      $scope.users = response.data;
    });
  }

  init();

}]);
