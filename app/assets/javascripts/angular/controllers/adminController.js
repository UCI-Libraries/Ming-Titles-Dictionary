titlesApp
  .controller('adminController', ['$scope', 'userService', function($scope, userService){

  $scope.userAuth = true;
  $scope.translationAuth = false;
  $scope.exportAuth = false;
  $scope.titleComments = false;

  $scope.isSuperAdmin = userService.getUser().super_admin;

  $scope.showUsers = function() {
    $scope.translationAuth = false;
    $scope.titleComments = false;
    $scope.exportAuth = false;
    $scope.userAuth = true;
  };

  $scope.showTranslations = function() {
    $scope.translationAuth = true;
    $scope.titleComments = false;
    $scope.exportAuth = false;
    $scope.userAuth = false;
  };

  $scope.showExport = function() {
    $scope.translationAuth = false;
    $scope.titleComments = false;
    $scope.userAuth = false;
    $scope.exportAuth = true;
  };

  $scope.showTitleComments = function() {
    $scope.translationAuth = false;
    $scope.userAuth = false;
    $scope.exportAuth = false;
    $scope.titleComments = true;
  };


}]);
