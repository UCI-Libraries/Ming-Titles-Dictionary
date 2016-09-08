titlesApp
  .controller('userApprovalController', ['$scope', '$timeout', '$http', '$stateParams', 'titlesService', function($scope, $timeout, $http, $stateParams, titlesService){

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
