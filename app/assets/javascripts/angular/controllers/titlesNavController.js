titlesApp
  .controller('titlesNavController', ['$scope', 'Auth', '$state', 'userService', function($scope, Auth, $state, userService){

  $scope.logOutUser = function() {
    var config = {
            headers: {
                'X-HTTP-Method-Override': 'DELETE'
            }
        };
        Auth.logout(config).then(function(oldUser) {
          if (oldUser) {
            alert("you're signed out now.");
            userService.setUser = {};
          }

        }, function(error) {
            console.log(error,"could not log out");
            // An error occurred logging out.
        });

        $scope.$on('devise:logout', function(event, oldCurrentUser) {
            // ...
            $state.go('main');
        });

  };

  $scope.userIsSignedIn = function() {
    return Auth.isAuthenticated();
  };

  $scope.userIsAdmin = function() {
    // console.log("ADMIN", Auth._current_user.is_admin);
    return true;
  };

}]);
