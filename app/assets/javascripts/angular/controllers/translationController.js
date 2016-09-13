titlesApp
  .controller('translationsController', ['$scope', '$http', '$stateParams', 'Translation', 'Comment', 'Auth', function($scope, $http, $stateParams, Translation, Comment, Auth){

  var init = function() {
    getPosts();
  };

  $scope.title = {};
  $scope.current_translation = {};
  $scope.translations = [];

  function getPosts() {
    console.log("in translations controller", $stateParams);
      $http.get('api/titles/'+ $stateParams.id).then(function(response) {
        $scope.title = response.data;
        $scope.translations = response.data.traslations;
      });
  }

  $scope.logCurrentTranslation = function(translation) {
    console.log("CURRENT", translation);
    $scope.current_translation = translation;
  };

  $scope.postTranslation = function() {
    var translation = new Translation();
    translation.translation_text = 'New Title in English';
    translation.title_id = 3;
    translation.user_id = 1;
    translation.save();
  };

  $scope.postComment = function(data) {
    var comment = new Comment();
    Auth.currentUser().then(function(user) {
      comment.comment_text = data.comment_text;
      comment.translation_id = $scope.current_translation.id;
      comment.user_id = user.id;
      comment.save();
      getPosts();
    }, function(error) {
      console.log("no session, comment cannot be saved");
    });

  };

  init();


}]);
