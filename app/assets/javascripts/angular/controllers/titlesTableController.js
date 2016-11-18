titlesApp
  .controller('titlesTableController', ['$scope', '$http', 'NgTableParams', 'titlesService', '$state', function($scope, $http, NgTableParams, titlesService, $state){
  $scope.loading = false;

  var data = [];
  $scope.tableParams = new NgTableParams({
    sorting: {
      num_translations: "asc"
    }},
    { dataset: data});

  var init = function() {
    $scope.loading = false;
    getTitles();
  };

  function getTitles(inst) {
    if (!!inst || inst === '') {
      if (inst > 0 && titlesService.titles[inst]) {
        $scope.tableParams.settings({dataset: titlesService.titles[inst]});
      } else {
        var titles_by_inst_route = 'api/titles/institution/' + inst;
        $scope.loading = true;
        $http.get(titles_by_inst_route).then(function(response) {
          for (var i = 0; i < response.data.length; i++) {
            response.data[i].num_translations = 0; //initialization of new property
            response.data[i].num_translations = response.data[i].translations.length;  //set the data from nested obj into new property
          }
          titlesService.titles[inst] = response.data;
          $scope.tableParams.settings({dataset: response.data});
          $scope.loading = false;
        });
      }
    } else {
      if (titlesService.titles.all) {
        $scope.tableParams.settings({dataset: titlesService.titles.all});
      } else {
        $scope.loading = true;
        var titles_route = 'api/titles/';

        $http.get(titles_route).then(function(response) {
          for (var i = 0; i < response.data.length; i++) {
            response.data[i].num_translations = 0; //initialization of new property
            response.data[i].num_translations = response.data[i].translations.length;  //set the data from nested obj into new property
          }
          titlesService.titles.all = response.data;
          $scope.tableParams.settings({dataset: response.data});
          $scope.loading = false;
        });
      }
    }
  }

  $scope.$on('updateTitleTable', function() {
    var inst = titlesService.getFocus();
    getTitles(inst);
  });

  $scope.seePosts = function(title) {
    var url = $state.href('titles', {"id": title});
    window.open(url,'_blank');
  };

  init();


}]);
