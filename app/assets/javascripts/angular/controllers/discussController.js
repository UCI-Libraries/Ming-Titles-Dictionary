titlesApp
  .controller('discussController', ['$scope', '$http', 'DiscussionPost', 'DiscussionComment', 'Auth', function($scope, $http, DiscussionPost, DiscussionComment, Auth){

  var init = function() {
    $scope.posts = [];
    getTopics();
  };

  function getTopics() {
    $http({
        url: '/discussion_posts',
        method: "GET",
     }).then(function(response) {
       console.log(response, response.data);
       response.data.forEach( function(post) {
         console.log(post);
         post.formatted_date = formatTimestamp(post.created_at);
       });
      $scope.posts = response.data;
    });
  }

  function formatTimestamp(timestamp) {
    return moment(timestamp.slice(0,10)+" "+ timestamp.slice(11,19))
                    .subtract(7, 'hours')
                    .format('MM-DD-YY');
  }

  init();

  $scope.isCollapsed = true;
  $scope.checked = false;
  $scope.size = '300px';

  $scope.archivePost = function(postId) {
    $http.put('discussion_posts/'+ postId, { is_active: false }
    ).then(function(response) {
      console.log("done archiving");
    });
  };

  $scope.deleteComment = function(commentId) {
    console.log("delete inactive");
    // $http.delete('discussion_comments/'+ commentId
    // ).then(function(response) {
    //   console.log("done deleting");
    // });
  };

  $scope.postDiscussionComment = function(data, form, postId) {
    var comment = new DiscussionComment();
    Auth.currentUser().then(function(user) {
      comment.post = data.comment;
      comment.user_id = user.id;
      comment.post_id = postId;
      comment.save().then(function() {
        getTopics();
      });
    }, function(error) {
      console.log("no session, translation cannot be saved");
    });
  };

  $scope.postDiscussionPost = function(data, form) {
    var post = new DiscussionPost();
    Auth.currentUser().then(function(user) {
      post.post = data.post;
      post.title = data.title;
      post.user_id = user.id;
      post.save().then(function() {
        getTopics();
        $scope.isCollapsed = true;
      });
    }, function(error) {
      console.log("no session, translation cannot be saved");
    });
  };

  $scope.postsPresent = function() {
    return $scope.posts.length > 0;
  };

  $scope.userCanArchive = function() {
    return true;
  };

  $scope.userCanDelete = function(comment) {
    return true;
  };

  $scope.toggle = function() {
    $scope.checked = !$scope.checked;
  };

  $scope.mockRouteChange = function () {
    $scope.$broadcast('$locationChangeStart');
  };

  $scope.onopen = function () {
    alert('Open');
  };

  $scope.onclose = function () {
    alert('Close');
  };

  $scope.$on('toggleDiscuss', function() {
    $scope.checked = !$scope.checked;
  });

}]);
