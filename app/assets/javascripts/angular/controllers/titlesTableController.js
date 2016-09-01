titlesApp
  .controller('titlesTableController', ['$scope', '$timeout', '$http', function($scope, $timeout, $http){
  // var addItem = angular.element(document.getElementsByClassName('add-item'));
  $scope.titles = [];


  var init = function() {
    getTitles();
  };

  function getTitles() {
      $http.get('titles').then(function(response) {
        console.log(response.data);
        $scope.titles = response.data;
      });
  }

  init();


}]);
