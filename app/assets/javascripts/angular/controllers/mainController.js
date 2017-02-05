titlesApp.controller('mainController', ['$scope', 'Auth', 'userService', '$rootScope', '$state', '$http', function($scope, Auth, userService, $rootScope, $state, $http){

  $scope.title = "Ming Government Official Titles: A Crowd-Translation Project | 明代職官中英辭典共譯共享";

  var init = function(user) {
    Auth.currentUser().then(function(user) {
        userService.setUser(user);
    }, function(error) {
        console.log("no session");
    });
    getStats();
    // $scope.numDays = 5;
  };

  function getStats() {
    $http.get('api/stats').then(function(response) {
      $scope.totalTitles = response.data.total_titles;
      $scope.untranslated = response.data.total_untranslated;
    });
  }

  init();

  $rootScope.$on('$stateChangeError', function(evt, to, toParams, from, fromParams, error) {
      // console.log('there was an error', evt, to, toParams, error);
     if (error.redirectTo) {
       $state.go(error.redirectTo);
     } else {
       $state.go('main', {status: error.status});
     }
   });

}]);
