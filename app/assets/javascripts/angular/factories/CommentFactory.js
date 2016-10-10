titlesApp.factory('Comment', ['$http', function($http) {

  var Comment = function(data) {
    angular.extend(this, data);
  };

  Comment.prototype.edit = function(id) {
    var comment = this;
    console.log(comment);
    return $http.put('/comments/' + id +'.json', comment).then(function(response) {
      // console.log(response);
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
