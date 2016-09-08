titlesApp
  .controller('translationsController', ['$scope', '$http', '$stateParams', function($scope, $http, $stateParams){

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
