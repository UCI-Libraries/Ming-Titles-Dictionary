titlesApp
  .controller('editPinyinCommentController', ['$scope', 'PinyinComment', 'Auth', function($scope, PinyinComment, Auth){

  $scope.resetCommentForm = function() {
    $scope.formData = null;
    $scope.myForm.$setPristine();
  };

  $scope.updatePinyinComment = function(data) {
    var comment = new PinyinComment();
    comment.comment_text = data;
    comment.edit($scope.current_comment.id).then(function(response) {
      $scope.dismiss();
    });
  };

}]);
