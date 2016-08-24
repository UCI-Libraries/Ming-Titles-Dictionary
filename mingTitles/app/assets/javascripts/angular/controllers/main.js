titlesApp.controller('mainController', ['$http', '$scope', '$timeout', function($http, $scope, $timeout){

  // var reset = angular.element(document.getElementsByClassName('reset-game'));
  // var start = angular.element(document.getElementsByClassName('new-game'));

  $scope.title = "Ming Titles";
  $scope.current_user = "foo";
  $scope.badGuesses = 0;
  $scope.resetHangman = false;
  $scope.resetAlpha = false;
  $scope.init = function(str) {
    console.log(str);
    logSomeStuff(str);
  };

  $http.get('api/institutions/all_trees').then(function(response) {
    console.log(response.data);
  });

  function logSomeStuff(str) {
    $scope.current_user = str;
  }

  $scope.$evalAsync(logSomeStuff());


}]);
