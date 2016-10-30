titlesApp
  .controller('archivedController', ['$scope', '$http', 'NgTableParams', 'titlesService', '$state', function($scope, $http, NgTableParams, titlesService, $state){
  var data = [];
  $scope.tableParams = new NgTableParams({
    sorting: {
      num_translations: "asc"
    }},
    { dataset: data});

  $scope.anyArchived = function() {
    return data.length > 0;
  };

  var init = function() {
    $scope.loading = false;
    getTitles();
  };

  function getTitles(inst) {
    var route = 'api/archived_titles.json';
    $scope.loading = true;

    $http.get(route).then(function(response) {
      for (var i = 0; i < response.data.length; i++) {
        response.data[i].num_translations = 0; //initialization of new property
        response.data[i].num_translations = response.data[i].translations.length;  //set the data from nested obj into new property
      }
      data = response.data;
      $scope.tableParams.settings({dataset: data});
      $scope.loading = false;
    });
  }

  $scope.seePosts = function(title) {
    $state.go('titles', {"id": title});
  };

  init();


}]);
