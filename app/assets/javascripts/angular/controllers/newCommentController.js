titlesApp
  .controller('newCommentController', ['$scope', function($scope){

  $scope.errors = "";

  $scope.logInUser = function(data) {
    console.log(data);

    var credentials = {
    email: 'clwoods@uci.edu',
    password: 'orange7A'
    };

    // $scope.dismiss();

    var config = {
        headers: {
            'X-HTTP-Method-Override': 'POST'
        }
    };

  };

  $scope.resetCommentForm = function() {
    $scope.formData = null;
    $scope.myForm.$setPristine();
  };

}]);
