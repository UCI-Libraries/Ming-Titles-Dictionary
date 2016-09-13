titlesApp
  .controller('translationsController', ['$scope', '$http', '$stateParams', 'Translation', 'Comment', 'Auth', function($scope, $http, $stateParams, Translation, Comment, Auth){

  var init = function() {
    $scope.getPosts();
  };

  $scope.title = {};
  $scope.current_translation = {};
  $scope.translations = [];

  $scope.getPosts = function() {
    console.log("in translations controller", $stateParams);
      $http.get('api/titles/'+ $stateParams.id).then(function(response) {
        $scope.title = response.data;
        $scope.translations = response.data.traslations;
      });
  };

  $scope.logCurrentTranslation = function(translation) {
    console.log("CURRENT", translation);
    $scope.current_translation = translation;
  };


  // $scope.postComment = function(data) {
  //   var comment = new Comment();
  //   Auth.currentUser().then(function(user) {
  //     comment.comment_text = data.comment_text;
  //     comment.translation_id = $scope.current_translation.id;
  //     comment.user_id = user.id;
  //     comment.save();
  //     $scope.getPosts();
  //   }, function(error) {
  //     console.log("no session, comment cannot be saved");
  //   });
  //
  // };

  init();


}]);
