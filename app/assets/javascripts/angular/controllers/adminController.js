titlesApp
  .controller('adminController', ['$scope', function($scope){

  $scope.userAuth = true;
  $scope.translationAuth = false;

  $scope.showUsers = function() {
    $scope.translationAuth = false;
    $scope.userAuth = true;
  };

  $scope.showTranslations = function() {
    $scope.translationAuth = true;
    $scope.userAuth = false;
  };


}]);
