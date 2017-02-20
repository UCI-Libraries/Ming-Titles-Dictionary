titlesApp
  .controller('assignmentController', ['$scope', '$http', 'Auth', function($scope, $http, Auth){

  function getAdmins() {
    $http({
        url: 'api/users',
        method: "GET",
        params: {is_admin: true}
     }).then(function(response) {
        response.data.forEach(function(user) {
          user.fullName = user.fname + " " + user.lname;
        });
        $scope.admins = response.data;
     });
  }

  $scope.resetForm = function() {
    $scope.formData = null;
    $scope.myForm.$setPristine();
  };

  $scope.assignTranslation = function(data) {
    $http({
        url: 'admin/assign',
        method: "GET",
        params: {
          message: data.message,
          user_id: data.assignee.id,
          translation_id: $scope.assignedTranslation.id
        }
     }).then(function(response) {
        $scope.resetForm();
        $scope.dismiss();
     });
  };

  getAdmins();

}]);
