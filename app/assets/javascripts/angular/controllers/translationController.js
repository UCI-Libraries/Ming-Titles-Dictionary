titlesApp
  .controller('translationsController', ['$scope', '$timeout', '$http', '$stateParams', 'titlesService', function($scope, $timeout, $http, $stateParams, titlesService){

  var init = function() {
    getPosts();
  };

  function getPosts() {
    console.log("in translations controller", $stateParams);
      $http.get('api/titles/1').then(function(response) {
        console.log(response.data);
      });
  }

  init();

  // $scope.updateTitles = function(inst) {
  //   titlesService.setFocus(inst);
  // };

}]);
