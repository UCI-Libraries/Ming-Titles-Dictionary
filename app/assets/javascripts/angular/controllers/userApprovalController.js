titlesApp
  .controller('userApprovalController', ['$scope','$http', 'NgTableParams', function($scope, $http, NgTableParams){

  var init = function() {
    getUsers();
  };

  var data = [];
  $scope.tableParams = new NgTableParams({}, { dataset: data});
  $scope.approvedFilter = [{title: 'approved', id: true},{title: 'unapproved', id: false}];

  function getUsers() {
    $http.get('admin/all_users').then(function(response) {
      $scope.tableParams.settings({dataset: response.data});
    });
  }
  $scope.approveUser = function(user) {
    console.log(user, user.id);
    $http.put('admin/approve_user/'+ user.id +'.json', {"approved": true}).then(function(response) {
      console.log("Saved!", response.data);
      getUsers();
    });
  };

  $scope.revokeUser = function(user) {
    console.log(user, user.id);
    $http.put('admin/approve_user/'+ user.id +'.json', {"approved": false}).then(function(response) {
      console.log("Revoked!", response.data);
      getUsers();
    });
  };

  init();

}]);
