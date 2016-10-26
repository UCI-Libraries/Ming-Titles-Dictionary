titlesApp
  .controller('exportController', ['$scope', '$http', function($scope, $http){

  var init = function() {
  };

  console.log("is this on?");

  $scope.getTranslations = function() {
    console.log("getting csv");

    $http.get('admin/translations_export.csv').then(function(response) {
      console.log(response);
    });
  };

  init();

}]);
