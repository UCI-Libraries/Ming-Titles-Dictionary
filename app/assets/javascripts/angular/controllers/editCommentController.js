titlesApp
  .controller('editCommentController', ['$scope', 'Comment', 'Auth', function($scope, Comment, Auth){

  $scope.resetCommentForm = function() {
    $scope.formData = null;
    $scope.myForm.$setPristine();
  };

  $scope.updateComment = function(data) {
    var comment = new Comment();
    console.log(comment);
    comment.comment_text = data.comment_text;
    comment.edit($scope.current_comment.id).then(function(response) {
      console.log(response);
    });
    // console.log(comment);
    // Auth.currentUser().then(function(user) {
    //   comment.comment_text = data.comment_text;
    //   comment.translation_id = $scope.current_translation.id;
    //   comment.user_id = user.id;
    //   comment.save().then(function() {
    //     $scope.getPosts();
    //     $scope.resetCommentForm();
    //     $scope.dismiss();
    //   });
    // }, function(error) {
    //   console.log("no session, comment cannot be saved");
    // });
  };

}]);
