titlesApp
  .controller('newPinyinCommentController', ['$scope', 'PinyinComment', 'Auth', function($scope, PinyinComment, Auth){

  $scope.resetPinyinCommentForm = function() {
    $scope.formData = null;
    $scope.myForm.$setPristine();
  };

  $scope.postPinyinComment = function(data) {
    var pinyin_comment = new PinyinComment();
    Auth.currentUser().then(function(user) {
      pinyin_comment.comment_text = data.comment_text;
      pinyin_comment.title_id = $scope.title.id;
      pinyin_comment.user_id = user.id;
      pinyin_comment.save().then(function() {
        $scope.getPosts();
        $scope.resetPinyinCommentForm();
        $scope.dismiss();
      });
    }, function(error) {
      console.log("no session, comment cannot be saved");
    });
  };

}]);
