titlesApp.controller('mainController', ['$http', '$scope', '$timeout', 'Auth', function($http, $scope, $timeout, Auth){


  $scope.title = "Ming Titles";

  var init = function(user) {
    Auth.currentUser().then(function(user) {
        // User was logged in, or Devise returned
        // previously authenticated session.
        console.log("ALREADY LOGGED IN", user); // => {id: 1, ect: '...'}
    }, function(error) {
        console.log("no session");
        // unauthenticated error
    });
    // console.log(user);
    // logUser(user);

  };

  init();

  // function logUser(str) {
  //   $scope.current_user = str;
  // }
  //
  // $scope.$evalAsync(logUser());

}]);
