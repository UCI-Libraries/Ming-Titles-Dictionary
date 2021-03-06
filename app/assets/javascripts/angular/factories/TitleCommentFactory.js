titlesApp.factory('TitleComment', ['$http', function($http) {

  var TitleComment = function(data) {
    angular.extend(this, data);
  };

  TitleComment.prototype.edit = function(id) {
    var title_comment = this;
    return $http.put('/title_comments/' + id +'.json', title_comment).then(function(response) {
      return new TitleComment(response.data);
    });
  };

  // an instance method to create a new TitleComment
  TitleComment.prototype.save = function() {
    var title_comment = this;
    return $http.post('/title_comments.json', title_comment).then(function(response) {
      title_comment.id = response.data.id;
      return title_comment;
    });
  };

  TitleComment.prototype.delete = function(id) {
    var title_comment = this;
    return $http.delete('/title_comments/'+ id +'.json').then(function(response) {
      title_comment.id = response.data.id;
      return title_comment;
    });
  };

  return TitleComment;
}]);
