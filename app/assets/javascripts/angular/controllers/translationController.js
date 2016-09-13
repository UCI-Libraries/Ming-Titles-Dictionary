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

  $scope.postTranslation = function(data, form) {
    var translation = new Translation();
    Auth.currentUser().then(function(user) {
      translation.translation_text = data.translation_text;
      translation.explanation = data.justification;
      translation.title_id = $scope.title.id;
      translation.user_id = user.id;
      translation.scholars = data.scholars;
      translation.links = data.links;
      translation.pinyin_comment = data.pinyin_comment;
      // translation.official_title_comment = data.official_title_comment;
      translation.save();
      getPosts();
    }, function(error) {
      console.log("no session, comment cannot be saved");
    });
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
