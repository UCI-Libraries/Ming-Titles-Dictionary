titlesApp.factory('Title', ['$http', function($http) {

  var Title = function(data) {
    angular.extend(this, data);
  };

  // an instance method to create a new Title
  Title.prototype.save = function() {
    var title = this;
    // console.log('TITLE - - - - - ', title);
    return $http.post('api/titles.json', title).then(function(response) {
      // console.log('RESPONSE TO POST - title/new', response);
      title.id = response.data.id;
      return title;
    });
  };

  return Title;
}]);
