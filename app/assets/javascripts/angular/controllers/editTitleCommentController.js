titlesApp
  .controller('editTitleCommentController', ['$scope', 'TitleComment', 'Auth', function($scope, TitleComment, Auth){

  $scope.resetCommentForm = function() {
    $scope.formData = null;
    $scope.myForm.$setPristine();
  };

  $scope.updateTitleComment = function(data) {
    var comment = new TitleComment();
    comment.comment_text = data;
    comment.edit($scope.current_title_comment.id).then(function(response) {
      $scope.dismiss();
    });
  };

}]);
