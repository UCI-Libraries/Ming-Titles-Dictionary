titlesApp
  .controller('logInController', ['$scope', '$timeout', 'User', 'Auth', function($scope, $timeout, User, Auth){

  var init = function() {

  };

  init();

  $scope.logInUser = function(data) {
    console.log(data);
    var user = new User();
    var credentials = {
      user_handle: data.username,
      email: data.email,
      fname: data.fname,
      lname: data.lname,
      country: data.country,
      institution: data.institution,
      research: data.research,
      // approved: false,
      password: data.password
                      };

    var config = {
        headers: {
            'X-HTTP-Method-Override': 'POST'
        }
    };

    Auth.register(credentials, config).then(function(registeredUser) {
        console.log(registeredUser); // => {id: 1, ect: '...'}
    }, function(error) {
        console.log("FAILED", error);
        // Registration failed...
    });

    $scope.$on('devise:new-registration', function(event, user) {
        // ...
    });
  };






}]);
