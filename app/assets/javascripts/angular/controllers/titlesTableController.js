titlesApp
  .controller('titlesTableController', ['$scope', '$timeout', '$http', 'NgTableParams', function($scope, $timeout, $http, NgTableParams){
  // var addItem = angular.element(document.getElementsByClassName('add-item'));
  $scope.titles = [];
  $scope.tableParams = new NgTableParams({}, { dataset: data});

  var init = function() {
    getTitles();
  };

  function getTitles() {
      $http.get('titles').then(function(response) {
        console.log(response.data);
        $scope.titles = response.data;
        $scope.tableParams = new NgTableParams({}, { dataset: response.data});

      });
  }
  init();

  var self = this;
  var data = [];
  $scope.tableParams = new NgTableParams({}, { dataset: data});




}]);
