titlesApp
  .controller('logInController', ['$scope', '$timeout', 'User', 'Auth', function($scope, $timeout, User, Auth){

  var init = function() {

  };

  init();

  $scope.logInUser = function(data) {
    console.log(data);

    var credentials = {
    email: 'clwoods@uci.edu',
    password: 'orange7A'
    };

    var config = {
        headers: {
            'X-HTTP-Method-Override': 'POST'
        }
    };

    Auth.login(credentials, config).then(function(user) {
        console.log(user); // => {id: 1, ect: '...'}
    }, function(error) {
      console.log("FAIL STATE", error);
        // Authentication failed...
    });

    $scope.$on('devise:login', function(event, currentUser) {
        // after a login, a hard refresh, a new tab
        console.log(currentUser, "LOGGED IN");
    });

    $scope.$on('devise:new-session', function(event, currentUser) {
        // user logged in by Auth.login({...})
        console.log(currentUser, "NEW SESSION");

    });
  };








}]);
