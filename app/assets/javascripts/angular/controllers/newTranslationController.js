titlesApp
  .controller('newTranslationController', ['$scope', function($scope){

  $scope.errors = "";

  $scope.logInUser = function(data) {
    console.log(data);

    // $scope.dismiss();

    var config = {
        headers: {
            'X-HTTP-Method-Override': 'POST'
        }
    };

  };

}]);
