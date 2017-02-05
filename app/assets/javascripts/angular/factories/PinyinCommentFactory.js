titlesApp.factory('PinyinComment', ['$http', function($http) {

  var PinyinComment = function(data) {
    angular.extend(this, data);
  };

  PinyinComment.prototype.edit = function(id) {
    var pinyin_comment = this;
    return $http.put('/pinyin_comments/' + id +'.json', pinyin_comment).then(function(response) {
      return new PinyinComment(response.data);
    });
  };

  // an instance method to create a new PinyinComment
  PinyinComment.prototype.save = function() {
    var pinyin_comment = this;
    return $http.post('/pinyin_comments.json', pinyin_comment).then(function(response) {
      pinyin_comment.id = response.data.id;
      return pinyin_comment;
    });
  };

  PinyinComment.prototype.delete = function(id) {
    var pinyin_comment = this;
    return $http.delete('/pinyin_comments/'+ id +'.json').then(function(response) {
      pinyin_comment.id = response.data.id;
      return pinyin_comment;
    });
  };

  return PinyinComment;
}]);
