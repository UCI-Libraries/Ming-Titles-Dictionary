titlesApp
  .controller('titlesNavController', ['$scope', '$timeout', 'Auth', function($scope, $timeout, Auth){

  var init = function() {

  };

  init();

  $scope.logOutUser = function() {
    console.log("log out");
    var config = {
            headers: {
                'X-HTTP-Method-Override': 'DELETE'
            }
        };
        // Log in user...
        // ...
        Auth.logout(config).then(function(oldUser) {
          if (oldUser) {
            alert(oldUser + "you're signed out now.");
          }

        }, function(error) {
            console.log(Auth._current_user);

            console.log(error,"could not log out");
            // An error occurred logging out.
        });

        $scope.$on('devise:logout', function(event, oldCurrentUser) {
            // ...
            console.log("log out success");
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
