titlesApp
  .controller('adminController', ['$scope', function($scope){

  $scope.userAuth = true;
  $scope.translationAuth = false;
  $scope.exportAuth = false;
  $scope.titleComments = false;

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
