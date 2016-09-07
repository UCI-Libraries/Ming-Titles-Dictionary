titlesApp
  .controller('signupFormController', ['$scope', '$timeout', 'User', 'Auth', function($scope, $timeout, User, Auth){

  var init = function() {

  };

  init();
  $scope.submitted = false;

  var clearFormFields = function() {

  };

  var displayThankYou = function() {
    $scope.submitted = true;
  };

  $scope.resetForm = function() {
    console.log("Clearing form in sign up controller");
    $scope.formData = null;
    $scope.submitted = false;
  };

  $scope.submitUser = function(data) {
    console.log(data);
    // var user = new User();
    var credentials = {
      email: data.email,
      fname: data.fname,
      lname: data.lname,
      country: data.country,
      institution: data.institution,
      research: data.research,
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
      console.log("reg complete");
      clearFormFields();
      displayThankYou();
      // TODO: message that admin is being contacted
      // TODO: clear fields
    });
  };



}]);
