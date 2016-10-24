titlesApp
  .controller('newTitleCommentController', ['$scope', 'TitleComment', 'Auth', function($scope, TitleComment, Auth){

  $scope.resetTitleCommentForm = function() {
    $scope.formData = null;
    $scope.myForm.$setPristine();
  };

  $scope.postTitleComment = function(data) {
    var title_comment = new TitleComment();
    Auth.currentUser().then(function(user) {
      title_comment.comment_text = data.comment_text;
      title_comment.title_id = $scope.title.id;
      title_comment.user_id = user.id;
      title_comment.save().then(function() {
        $scope.getPosts();
        $scope.resetTitleCommentForm();
        $scope.dismiss();
      });
    }, function(error) {
      console.log("no session, comment cannot be saved");
    });
  };

}]);
