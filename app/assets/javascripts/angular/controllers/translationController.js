titlesApp
  .controller('translationsController', ['$scope', '$http', '$stateParams', 'Translation', 'Comment', 'PinyinComment', 'TitleComment', 'Auth', 'userService', function($scope, $http, $stateParams, Translation, Comment, PinyinComment, TitleComment, Auth, userService){

  var init = function() {
    $scope.getPosts();
    $scope.title = {};
    $scope.current_translation = {};
    $scope.current_comment = {};
    $scope.current_pinyin_comment = {};
    $scope.current_title_comment = {};
    $scope.translations = {};
    $scope.translations.unofficial = [];
    $scope.translations.official = [];
    $scope.pinyin_comments = [];
    $scope.title_comments = [];
  };

  function formatTimestamps(translations) {
    translations.forEach(function(translation){
      translation.comments.forEach(function(comment){
        var date = moment(comment.created_at.slice(0,10)+" "+ comment.created_at.slice(11,19))
                        .subtract(6, 'hours')
                        .format('MM-DD-YY h:mm a');
        comment.formatted_date = date;
      });
    });
    return translations;
  }

  function formatCommentTimestamps(comments) {
    comments.forEach(function(comment){

        var date = moment(comment.created_at.slice(0,10)+" "+ comment.created_at.slice(11,19))
                        .subtract(6, 'hours')
                        .format('MM-DD-YY h:mm a');
        comment.formatted_date = date;
      });
    return comments;
  }

  function sortByAuthorized(translations) {
    $scope.translations.unofficial = [];
    $scope.translations.official = [];
    translations.forEach( function(translation) {
      if (translation.approved) {
        $scope.translations.official.push(translation);
      } else {
        $scope.translations.unofficial.push(translation);
      }
    });
  }

  $scope.ifComments = function(comments) {
    return comments.length > 0;
  };

  $scope.titleIsArchived = function() {
    return $scope.archived;
  };

  $scope.getPosts = function() {
    $http.get('api/titles/'+ $stateParams.id).then(function(response) {
      $scope.title = response.data;
      $scope.archived = response.data.archived;
      console.log("DATA", response.data, response.data.archived);
      var translations = formatTimestamps(response.data.translations);
      $scope.pinyin_comments = formatCommentTimestamps(response.data.pinyin_comments);
      $scope.title_comments = formatCommentTimestamps(response.data.title_comments);
      sortByAuthorized(translations);
    });
  };

  $scope.deleteTranslation = function(id) {
    Translation.delete(id).then(function() {
      $scope.getPosts();
    });
  };

  $scope.noOfficialTranslations = function() {
    return $scope.translations.official.length === 0;
  };

  $scope.noUnofficialTranslations = function() {
    return $scope.translations.unofficial.length === 0;
  };

  $scope.noPinyinComments = function() {
    return $scope.pinyin_comments.length === 0;
  };

  $scope.logCurrentTranslation = function(translation) {
    $scope.current_translation = translation;
  };

  $scope.logCurrentComment = function(comment) {
    $scope.current_comment = comment;
  };

  $scope.logCurrentPinyinComment = function(comment) {
    $scope.current_pinyin_comment = comment;
  };

  $scope.logCurrentTitleComment = function(comment) {
    $scope.current_title_comment = comment;
  };

  $scope.deleteComment = function(id) {
    var comment = new Comment();
    comment.delete(id).then(function(response) {
      $scope.getPosts();
    });

  };

  $scope.deletePinyinComment = function(id) {
    var comment = new PinyinComment();
    comment.delete(id).then(function(response) {
      $scope.getPosts();
    });
  };

  $scope.deleteTitleComment = function(id) {
    var comment = new TitleComment();
    comment.delete(id).then(function(response) {
      $scope.getPosts();
    });
  };

  $scope.userCanEdit = function(post) {
    var currentUser = userService.getUser();
    if (currentUser.id === post.user_id) {
      return true;
    }
    return false;
  };

  $scope.userIsAdmin = function() {
    var currentUser = userService.getUser();
    return currentUser.is_admin;
  };

  $scope.userCanDelete = function(post) {
    var currentUser = userService.getUser();
    if (currentUser.is_admin === true) {
      return true;
    } else if (currentUser.id === post.user_id) {
      return true;
    }
    return false;
  };

  $scope.userCanViewAuthor = function(translation) {
    var currentUser = userService.getUser();
    if (currentUser.is_admin === true ||
        // 2 is the Charles Hucker account from the seeded data
        translation.user_id === 2 ||
        translation.user_id === currentUser.id ) {
      return true;
    }
    return false;
  };

  $scope.userCanArchive = function() {
    var currentUser = userService.getUser();
    if (currentUser.is_admin === true) {
      return true;
    }
    return false;
  };

  $scope.archiveTitle = function() {
    $http.put('admin/titles/'+ $scope.title.id, {"archived": true}
    ).then(function(response) {
      $scope.archived = true;
    });
  };

  $scope.unarchiveTitle = function() {
    $http.put('admin/titles/'+ $scope.title.id, {"archived": false}
    ).then(function(response) {
      $scope.archived = false;
    });
  };


  init();


}]);
