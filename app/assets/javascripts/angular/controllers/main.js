titlesApp.controller('mainController', ['$http', '$scope', '$timeout', function($http, $scope, $timeout){


  $scope.title = "Ming Titles";
  $scope.current_user = "foo";

  $scope.init = function(user) {
    console.log(user);
    logUser(user);
  };

  function logUser(str) {
    $scope.current_user = str;
  }

  $scope.$evalAsync(logUser());

  // $scope.updateTitles = function() {
  //   console.log("main controller");
  // };

}]);
