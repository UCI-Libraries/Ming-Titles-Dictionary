titlesApp
  .controller('adminController', ['$scope', 'userService', '$http', function($scope, userService, $http){

  $scope.userAuth = false;
  $scope.translationAuth = true;
  $scope.exportAuth = false;
  $scope.titleComments = false;
  $scope.archived = false;
  $scope.newTitle = false;
  $scope.archivedPost = false;

  $scope.isSuperAdmin = userService.getUser().super_admin;

  $scope.showUsers = function() {
    $scope.translationAuth = false;
    $scope.archivedPost = false;
    $scope.titleComments = false;
    $scope.exportAuth = false;
    $scope.userAuth = true;
    $scope.archived = false;
    $scope.newTitle = false;
  };

  $scope.showTranslations = function() {
    $scope.translationAuth = true;
    $scope.archivedPost = false;
    $scope.titleComments = false;
    $scope.exportAuth = false;
    $scope.userAuth = false;
    $scope.archived = false;
    $scope.newTitle = false;
  };

  $scope.showExport = function() {
    $scope.translationAuth = false;
    $scope.archivedPost = false;
    $scope.titleComments = false;
    $scope.userAuth = false;
    $scope.exportAuth = true;
    $scope.archived = false;
    $scope.newTitle = false;
  };

  $scope.showTitleComments = function() {
    $scope.translationAuth = false;
    $scope.archivedPost = false;
    $scope.userAuth = false;
    $scope.exportAuth = false;
    $scope.titleComments = true;
    $scope.archived = false;
    $scope.newTitle = false;
  };

  $scope.showArchived = function() {
    $scope.translationAuth = false;
    $scope.archivedPost = false;
    $scope.userAuth = false;
    $scope.exportAuth = false;
    $scope.titleComments = false;
    $scope.archived = true;
    $scope.newTitle = false;
  };

  $scope.showNewTitle = function() {
    $scope.archivedPost = false;
    $scope.translationAuth = false;
    $scope.userAuth = false;
    $scope.exportAuth = false;
    $scope.titleComments = false;
    $scope.archived = false;
    $scope.newTitle = true;
  };

  $scope.showArchivedPosts = function() {
    $scope.translationAuth = false;
    $scope.userAuth = false;
    $scope.exportAuth = false;
    $scope.titleComments = false;
    $scope.archived = false;
    $scope.newTitle = false;
    $scope.archivedPost = true;
  };


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

  $scope.unarchivePost = function(postId) {
    $http.put('discussion_posts/'+ postId, { is_active: true }
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

}]);
