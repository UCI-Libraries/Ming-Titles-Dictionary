titlesApp.factory('Comment', ['$http', function($http) {

  var Comment = function(data) {
    angular.extend(this, data);
  };

  Comment.get = function(id) {
    return $http.get('/Comment/' + id).then(function(response) {
      return new Comment(response.data);
    });
  };

  // an instance method to create a new Comment
  Comment.prototype.save = function() {
    var comment = this;
    return $http.post('/comments.json', comment).then(function(response) {
      console.log('RESPONSE TO POST - comment/new', response);
      comment.id = response.data.id;
      return comment;
    });
  };

  return Comment;
}]);
