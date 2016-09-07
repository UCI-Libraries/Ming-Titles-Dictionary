titlesApp
  .controller('translationsController', ['$scope', '$timeout', '$http', '$stateParams', 'titlesService', function($scope, $timeout, $http, $stateParams, titlesService){

  var init = function() {
    getPosts();
  };

  $scope.title = {};
  $scope.translations = [];

  function getPosts() {
    console.log("in translations controller", $stateParams);
      $http.get('api/titles/'+ $stateParams.id).then(function(response) {
        $scope.title = response.data;
        $scope.translations = response.data.traslations;
      });
  }

  init();


}]);
