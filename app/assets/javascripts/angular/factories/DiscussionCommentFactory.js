titlesApp.factory('DiscussionComment', ['$http', function($http) {

  var DiscussionComment = function(data) {
    angular.extend(this, data);
  };

  DiscussionComment.delete = function(id) {
    return $http.delete('/discussion_comments/' + id + '.json').then(function(response) {
      return new DiscussionComment(response.data);
    });
  };

  // an instance method to create a new DiscussionComment
  DiscussionComment.prototype.save = function() {
    var discussionComment = this;
    return $http.post('/discussion_comments.json', discussionComment).then(function(response) {
      discussionComment.id = response.data.id;
      return discussionComment;
    });
  };

  DiscussionComment.prototype.edit = function() {
    var discussionComment = this;
    return $http.put('/discussion_comments/'+ discussionComment.id +'.json' , discussionComment).then(function(response) {
      console.log('RESPONSE TO POST - discussionComment/edit', response);
      return discussionComment;
    });
  };

  return DiscussionComment;
}]);
