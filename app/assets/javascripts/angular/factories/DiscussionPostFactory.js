titlesApp.factory('DiscussionPost', ['$http', function($http) {

  var DiscussionPost = function(data) {
    angular.extend(this, data);
  };

  DiscussionPost.delete = function(id) {
    return $http.delete('/discussion_posts/' + id + '.json').then(function(response) {
      console.log(response);
      return new DiscussionPost(response.data);
    });
  };

  // an instance method to create a new DiscussionPost
  DiscussionPost.prototype.save = function() {
    var discussionPost = this;
    // console.log('TRANSLATION - - - - - ', discussionPost);
    return $http.post('/discussion_posts.json', discussionPost).then(function(response) {
      // console.log('RESPONSE TO POST - discussionPost/new', response);
      discussionPost.id = response.data.id;
      return discussionPost;
    });
  };

  DiscussionPost.prototype.edit = function() {
    var discussionPost = this;
    // console.log('TRANSLATION - - - - - ', discussionPost);
    return $http.put('/discussion_posts/'+ discussionPost.id +'.json' , discussionPost).then(function(response) {
      console.log('RESPONSE TO POST - discussionPost/edit', response);
      // discussionPost.id = response.data.id;
      return discussionPost;
    });
  };

  return DiscussionPost;
}]);
