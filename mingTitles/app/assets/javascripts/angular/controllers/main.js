titlesApp.controller('mainController', ['$scope', '$timeout', function($scope, $timeout){

  // var reset = angular.element(document.getElementsByClassName('reset-game'));
  // var start = angular.element(document.getElementsByClassName('new-game'));

  $scope.title = "Ming Titles";
  $scope.badGuesses = 0;
  $scope.resetHangman = false;
  $scope.resetAlpha = false;


}]);
