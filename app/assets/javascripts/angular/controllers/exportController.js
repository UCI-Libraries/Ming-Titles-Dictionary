titlesApp
  .controller('exportController', ['$scope', '$http', function($scope, $http){

  var init = function() {
  };

  $scope.translationFilename = moment()+"Trans.csv";

  $scope.getTranslationsArray =
    $http.get('admin/translations_export.json').then(function(response) {
      console.log(response);
      return response.data;
    });


  init();

}]);
