titlesApp
  .controller('translationsController', ['$scope', '$http', '$stateParams', 'Translation', function($scope, $http, $stateParams, Translation){

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

  $scope.postTranslation = function() {
    var translation = new Translation();
    translation.translation = 'New Title in English';
    translation.save();
  };

  init();


}]);
