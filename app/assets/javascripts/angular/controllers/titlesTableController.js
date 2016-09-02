titlesApp
  .controller('titlesTableController', ['$scope', '$timeout', '$http', 'NgTableParams', function($scope, $timeout, $http, NgTableParams){
  // var addItem = angular.element(document.getElementsByClassName('add-item'));
  $scope.tableParams = new NgTableParams({}, { dataset: data});

  var init = function() {
    getTitles();
  };

  function getTitles() {
      $http.get('titles').then(function(response) {
        console.log(response.data);
        for (var i = 0; i < response.data.length; i++) {
          response.data[i].num_translations = 0; //initialization of new property
          response.data[i].num_translations = response.data[i].translations.length;  //set the data from nested obj into new property
        }
        $scope.tableParams = new NgTableParams({}, { dataset: response.data});

      });
  }
  init();

  var self = this;
  var data = [];
  $scope.tableParams = new NgTableParams({}, { dataset: data});




}]);
