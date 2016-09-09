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
    translation.translation_text = 'New Title in English';
    translation.title_id = 3;
    translation.user_id = 1;
    translation.save();
  };

  init();


}]);
