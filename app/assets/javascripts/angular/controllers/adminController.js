titlesApp
  .controller('adminController', ['$scope', function($scope){

  $scope.userAuth = true;
  $scope.translationAuth = false;
  $scope.export = false;

  $scope.showUsers = function() {
    $scope.translationAuth = false;
    $scope.export = false;
    $scope.userAuth = true;
  };

  $scope.showTranslations = function() {
    $scope.translationAuth = true;
    $scope.export = false;
    $scope.userAuth = false;
  };

  $scope.showExport = function() {
    $scope.translationAuth = false;
    $scope.userAuth = false;
    $scope.export = true;
  };


}]);
