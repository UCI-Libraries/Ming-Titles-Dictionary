titlesApp
  .controller('profileController', ['$scope', '$http', '$stateParams', 'Auth', 'userService', function($scope, $http, $stateParams, Auth, userService){

  $scope.translationsView = true;
  $scope.commentsView = false;

  $scope.showTranslations = function() {
    $scope.translationsView = true;
    $scope.commentsView = false;
  };

  $scope.showComments = function() {
    $scope.translationsView = false;
    $scope.commentsView = true;
  };

  $scope.user = userService.getUser();

  $scope.editUser = function(data) {
    var user = {};
    user.fname = data.fname;
    user.lname = data.lname;
    user.email = data.email;
    user.research = data.research;
    user.institution = data.institution;
    user.country = data.country;
    $http.put('api/users/update_profile' , user).then(function(response) {
      $scope.dismiss();
      return user;
    });
  };


}]);
