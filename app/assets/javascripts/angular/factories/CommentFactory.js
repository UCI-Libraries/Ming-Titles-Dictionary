titlesApp.factory('Comment', ['$http', function($http) {

  var Comment = function(data) {
    angular.extend(this, data);
  };

  Comment.prototype.edit = function(id) {
    var comment = this;
    return $http.put('/comments/' + id +'.json', comment).then(function(response) {
      return new Comment(response.data);
    });
  };

  // an instance method to create a new Comment
  Comment.prototype.save = function() {
    var comment = this;
    return $http.post('/comments.json', comment).then(function(response) {
      comment.id = response.data.id;
      return comment;
    });
  };

  Comment.prototype.delete = function(id) {
    var comment = this;
    return $http.delete('/comments/'+ id +'.json').then(function(response) {
      comment.id = response.data.id;
      return comment;
    });
  };

  return Comment;
}]);
