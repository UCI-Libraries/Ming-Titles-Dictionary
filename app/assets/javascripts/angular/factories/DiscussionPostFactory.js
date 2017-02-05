titlesApp.factory('DiscussionPost', ['$http', function($http) {

  var DiscussionPost = function(data) {
    angular.extend(this, data);
  };

  DiscussionPost.delete = function(id) {
    return $http.delete('/discussion_posts/' + id + '.json').then(function(response) {
      return new DiscussionPost(response.data);
    });
  };

  // an instance method to create a new DiscussionPost
  DiscussionPost.prototype.save = function() {
    var discussionPost = this;
    return $http.post('/discussion_posts.json', discussionPost).then(function(response) {
      discussionPost.id = response.data.id;
      return discussionPost;
    });
  };

  DiscussionPost.prototype.edit = function() {
    var discussionPost = this;
    return $http.put('/discussion_posts/'+ discussionPost.id +'.json' , discussionPost).then(function(response) {
      return discussionPost;
    });
  };

  return DiscussionPost;
}]);
