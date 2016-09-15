titlesApp
  .controller('titlesTableController', ['$scope', '$http', 'NgTableParams', 'titlesService', '$state', function($scope, $http, NgTableParams, titlesService, $state){

  var data = [];
  $scope.tableParams = new NgTableParams({}, { dataset: data});

  var init = function() {
    getTitles();
  };

  function getTitles(inst) {
    var route = 'api/titles/';
    if(!!inst || inst === '') {
      route = 'api/titles/institution/' + inst;
    }
    $http.get(route).then(function(response) {
      // console.log(response.data);
      for (var i = 0; i < response.data.length; i++) {
        response.data[i].num_translations = 0; //initialization of new property
        // console.log(response.data[i].translations);

        response.data[i].num_translations = response.data[i].translations.length;  //set the data from nested obj into new property
      }
      // $scope.tableParams = new NgTableParams({}, { dataset: response.data});
      $scope.tableParams.settings({dataset: response.data});

    });
  }

  $scope.$on('updateTitleTable', function() {
    var inst = titlesService.getFocus();
    getTitles(inst);
  });

  $scope.seePosts = function(title) {
    // console.log(title);
    $state.go('titles', {"id": title});
  };

  init();


}]);
