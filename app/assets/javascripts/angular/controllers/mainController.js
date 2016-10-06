titlesApp.controller('mainController', ['$scope', 'Auth', 'userService', function($scope, Auth, userService){

  $scope.title = "Ming Government Official Titles: A Crowd-Translation Project";

  var init = function(user) {
    Auth.currentUser().then(function(user) {
        userService.setUser = user;
    }, function(error) {
        console.log("no session");
    });
  };

  init();

}]);
