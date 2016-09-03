titlesApp
  .controller('titlesTableController', ['$scope', '$timeout', '$http', 'NgTableParams', 'titlesService', function($scope, $timeout, $http, NgTableParams, titlesService){
  // var addItem = angular.element(document.getElementsByClassName('add-item'));
  var data = [];
  $scope.tableParams = new NgTableParams({}, { dataset: data});

  var init = function() {
    // getTitles();
    getTitles(6);
  };

  function getTitles(inst) {
    var route = 'api/titles/';
    if(!!inst || inst === '') {
      console.log("in here");
      route = 'api/titles/institution/' + inst;
    }
    $http.get(route).then(function(response) {
      console.log(response.data);
      for (var i = 0; i < response.data.length; i++) {
        response.data[i].num_translations = 0; //initialization of new property
        response.data[i].num_translations = response.data[i].translations.length;  //set the data from nested obj into new property
      }
      $scope.tableParams = new NgTableParams({}, { dataset: response.data});

    });
  }

  $scope.$on('updateTitleTable', function() {
    var inst = titlesService.getFocus();
    getTitles(inst);
  });


  init();


}]);
