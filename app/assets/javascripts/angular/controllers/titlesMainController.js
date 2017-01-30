titlesApp
  .controller('titlesMainController', ['$scope', 'Auth', function($scope, Auth){
    $scope.userIsSignedIn = function() {
      return Auth.isAuthenticated();
    };
}]);
