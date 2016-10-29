titlesApp
  .controller('editCommentController', ['$scope', 'Comment', 'Auth', function($scope, Comment, Auth){

  $scope.resetCommentForm = function() {
    $scope.formData = null;
    $scope.myForm.$setPristine();
  };

  $scope.updateComment = function(data) {
    var comment = new Comment();
    comment.comment_text = data;
    comment.edit($scope.current_comment.id).then(function(response) {
      // console.log(response);
      $scope.dismiss();
    });
  };

}]);
