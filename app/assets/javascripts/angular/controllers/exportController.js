titlesApp
  .controller('exportController', ['$scope', '$http', function($scope, $http){

  $scope.getTranslationsArray =
    $http.get('admin/translations_export.json').then(function(response) {
      return response.data;
    });

  $scope.getTitlesArray =
    $http.get('admin/titles_export.json').then(function(response) {
      return response.data;
    });

  $scope.getCommentsArray =
    $http.get('admin/comments_export.json').then(function(response) {
      return response.data;
    });

  $scope.getScholarsArray =
    $http.get('admin/scholars_export.json').then(function(response) {
      return response.data;
    });

  $scope.getInstitutionsArray =
    $http.get('admin/institutions_export.json').then(function(response) {
      return response.data;
    });

}]);
