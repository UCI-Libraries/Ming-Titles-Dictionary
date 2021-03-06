titlesApp
  .controller('institutionsMenuController', ['$rootScope', '$scope', '$http', 'titlesService', function($rootScope, $scope, $http, titlesService){

  $scope.offices = [];

  var init = function() {
    getOffices();
  };

  function getOffices() {
      $http.get('api/institutions/all_with_ancestry').then(function(response) {
        $scope.offices = response.data;
      });
  }

  init();

  $scope.updateTitles = function(inst) {
    titlesService.setFocus(inst);
    $rootScope.$broadcast('updateTitleTable');
  };

}]);
