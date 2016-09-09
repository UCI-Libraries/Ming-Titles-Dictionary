titlesApp
  .controller('profileController', ['$scope', '$http', '$stateParams', function($scope, $http, $stateParams){

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
  // $scope.userAuth = true;
  // $scope.translationAuth = false;
  //
  // $scope.showUsers = function() {
  //   $scope.translationAuth = false;
  //   $scope.userAuth = true;
  // };
  //
  // $scope.showTranslations = function() {
  //   $scope.translationAuth = true;
  //   $scope.userAuth = false;
  // };


}]);
