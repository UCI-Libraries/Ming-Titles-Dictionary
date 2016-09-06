titlesApp
  .controller('translationsController', ['$scope', '$timeout', '$http', '$stateParams', 'titlesService', function($scope, $timeout, $http, $stateParams, titlesService){

  var init = function() {
    getPosts();
  };

  $scope.title = {};

  function getPosts() {
    console.log("in translations controller", $stateParams);
      $http.get('api/titles/'+ $stateParams.id).then(function(response) {
        $scope.title = response.data;
      });
  }

  init();


}]);
