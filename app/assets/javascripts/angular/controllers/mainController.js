titlesApp.controller('mainController', ['$scope', 'Auth', 'userService', '$rootScope', '$state', '$http', 'matchmedia', function($scope, Auth, userService, $rootScope, $state, $http, matchmedia){
  $scope.smallScreen = matchmedia.isPhone();

  $scope.title = "Ming Government Official Titles: A Crowd-Translation Project | 明代職官中英辭典共譯共享";

  var init = function(user) {
    Auth.currentUser().then(function(user) {
        userService.setUser(user);
    }, function(error) {
        console.log("no session");
    });
    getStats();
  };

  function getStats() {
    var a = moment([2017, 6, 06]);
    var b = moment();
    var diffInDays = a.diff(b, 'days');
    $scope.countdown = diffInDays;
    $scope.projectOver = diffInDays <= 0;

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
