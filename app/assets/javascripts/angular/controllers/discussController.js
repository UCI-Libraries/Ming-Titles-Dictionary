titlesApp
  .controller('discussController', ['$scope', '$http', '$state', 'DiscussionPost', 'DiscussionComment', 'Auth', 'userService', function($scope, $http, $state, DiscussionPost, DiscussionComment, Auth, userService){

  var init = function() {
    $scope.posts = [];
    getTopics();
  };

  function getTopics() {
    $http({
        url: '/discussion_posts',
        method: "GET",
     }).then(function(response) {
       response.data.forEach( function(post) {
         post.formatted_date = formatTimestamp(post.created_at);
         post.discussion_comments.forEach( function(comment) {
           comment.formatted_date = formatTimestamp(comment.created_at);
         });
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
      getTopics();
    });
  };

  $scope.deleteComment = function(comment) {
    $http.delete('discussion_comments/'+ comment.id
    ).then(function() {
      getTopics();
    });
  };

  $scope.postDiscussionComment = function(data, form, postId) {
    var comment = new DiscussionComment();
    Auth.currentUser().then(function(user) {
      comment.post = data.comment;
      comment.user_id = user.id;
      comment.post_id = postId;
      comment.save().then(function() {
        data.comment = "";
        form.$setPristine(true);
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
      post.title_id = data.titleId;
      post.save().then(function() {
        data.post = "";
        data.title = "";
        data.titleId = "";
        form.$setPristine(true);
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
    var currentUser = userService.getUser();
    if (currentUser.super_admin === true) {
      return true;
    }
    return false;
  };

  $scope.userCanDelete = function(comment) {
    var currentUser = userService.getUser();
    if (currentUser.id === comment.user_id) {
      return true;
    }
    return false;
  };

  $scope.toggle = function() {
    $scope.checked = !$scope.checked;
  };

  $scope.mockRouteChange = function () {
    $scope.$broadcast('$locationChangeStart');
  };

  $scope.onopen = function() {
    alert('Open');
  };

  $scope.onclose = function() {
    alert('Close');
  };

  $scope.$on('toggleDiscuss', function() {
    $scope.checked = !$scope.checked;
  });

  $scope.seeTitle = function(id) {
    $state.go('titles', {"id": id});
  };
}]);
