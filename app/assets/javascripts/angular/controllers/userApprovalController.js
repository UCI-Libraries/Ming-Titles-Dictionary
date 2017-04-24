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
    $http.put('admin/approve_user/'+ user.id +'.json', {approved: true}).then(function(response) {
      getUsers();
    });
  };

  $scope.revokeUser = function(user) {
    $http.put('admin/approve_user/'+ user.id +'.json', {approved: false, is_admin: false, super_admin: false}).then(function(response) {
      getUsers();
    });
  };

  $scope.makeAdmin = function(user) {
    $http.put('admin/approve_admin/'+ user.id +'.json', {is_admin: true}).then(function(response) {
      getUsers();
    });
  };

  $scope.revokeAdmin = function(user) {
    $http.put('admin/approve_admin/'+ user.id +'.json', {is_admin: false, super_admin: false}).then(function(response) {
      getUsers();
    });
  };

  $scope.makeSAdmin = function(user) {
    $http.put('admin/approve_admin/'+ user.id +'.json', {super_admin: true, is_admin: true}).then(function(response) {
      getUsers();
    });
  };

  $scope.revokeSAdmin = function(user) {
    $http.put('admin/approve_admin/'+ user.id +'.json', {super_admin: false}).then(function(response) {
      getUsers();
    });
  };

  init();

}]);
