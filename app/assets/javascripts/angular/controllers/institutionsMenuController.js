titlesApp
  .controller('institutionsMenuController', ['$rootScope', '$scope', '$timeout', '$http', 'titlesService', function($rootScope, $scope, $timeout, $http, titlesService){

  $scope.offices = [];

  var init = function() {
    getOffices();
  };

  function getOffices() {
      $http.get('api/institutions/all_with_ancestry').then(function(response) {
        console.log(response.data);
        $scope.offices = response.data;
      });
  }

  init();

  $scope.updateTitles = function(inst) {
    titlesService.setFocus(inst);
    $rootScope.$broadcast('updateTitleTable');
  };

}]);
