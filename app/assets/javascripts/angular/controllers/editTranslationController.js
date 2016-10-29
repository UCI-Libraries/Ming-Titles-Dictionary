titlesApp
  .controller('editTranslationController', ['$scope', 'Translation', 'Auth', function($scope, Translation, Auth){

  $scope.errors = "";

  $scope.resetTranslationForm = function() {
    $scope.formData = null;
    $scope.myForm.$setPristine();
  };

  $scope.updateTranslation = function(data) {
    var translation = new Translation();
    Auth.currentUser().then(function(user) {
      translation.id = data.id;
      translation.translation_text = data.translation_text;
      translation.explanation = data.explanation;
      translation.title_id = $scope.title.id;
      translation.user_id = user.id;
      translation.scholars = data.scholars;
      translation.edit().then(function() {
        $scope.getPosts();
        $scope.resetTranslationForm();
        $scope.dismiss();
      });
    }, function(error) {
      console.log("no session, translation cannot be saved");
    });
  };

}]);
