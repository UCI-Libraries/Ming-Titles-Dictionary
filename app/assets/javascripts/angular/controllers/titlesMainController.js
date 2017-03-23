titlesApp
  .controller('titlesMainController', ['$scope', 'Auth', 'matchmedia', function($scope, Auth, matchmedia){
    $scope.smallScreen = matchmedia.isPhone();
    $scope.userIsSignedIn = function() {
      return Auth.isAuthenticated();
    };
}]);
