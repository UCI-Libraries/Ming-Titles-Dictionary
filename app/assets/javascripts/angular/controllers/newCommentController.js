titlesApp
  .controller('newCommentController', ['$scope', 'Comment', 'Auth', function($scope, Comment, Auth){

  $scope.resetCommentForm = function() {
    $scope.formData = null;
    $scope.myForm.$setPristine();
  };

  $scope.postComment = function(data) {
    var comment = new Comment();
    Auth.currentUser().then(function(user) {
      comment.comment_text = data.comment_text;
      comment.translation_id = $scope.current_translation.id;
      comment.user_id = user.id;
      comment.save().then(function() {
        $scope.getPosts();
        $scope.resetCommentForm();
        $scope.dismiss();
      });
    }, function(error) {
      console.log("no session, comment cannot be saved");
    });
  };

}]);
