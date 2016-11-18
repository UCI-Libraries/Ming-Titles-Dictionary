titlesApp
  .controller('adminController', ['$scope', 'userService', function($scope, userService){

  $scope.userAuth = false;
  $scope.translationAuth = true;
  $scope.exportAuth = false;
  $scope.titleComments = false;
  $scope.archived = false;
  $scope.newTitle = false;

  $scope.isSuperAdmin = userService.getUser().super_admin;

  $scope.showUsers = function() {
    $scope.translationAuth = false;
    $scope.titleComments = false;
    $scope.exportAuth = false;
    $scope.userAuth = true;
    $scope.archived = false;
    $scope.newTitle = false;
  };

  $scope.showTranslations = function() {
    $scope.translationAuth = true;
    $scope.titleComments = false;
    $scope.exportAuth = false;
    $scope.userAuth = false;
    $scope.archived = false;
    $scope.newTitle = false;
  };

  $scope.showExport = function() {
    $scope.translationAuth = false;
    $scope.titleComments = false;
    $scope.userAuth = false;
    $scope.exportAuth = true;
    $scope.archived = false;
    $scope.newTitle = false;
  };

  $scope.showTitleComments = function() {
    $scope.translationAuth = false;
    $scope.userAuth = false;
    $scope.exportAuth = false;
    $scope.titleComments = true;
    $scope.archived = false;
    $scope.newTitle = false;
  };

  $scope.showArchived = function() {
    $scope.translationAuth = false;
    $scope.userAuth = false;
    $scope.exportAuth = false;
    $scope.titleComments = false;
    $scope.archived = true;
    $scope.newTitle = false;
  };

  $scope.showNewTitle = function() {
    $scope.translationAuth = false;
    $scope.userAuth = false;
    $scope.exportAuth = false;
    $scope.titleComments = false;
    $scope.archived = false;
    $scope.newTitle = true;
  };

}]);
