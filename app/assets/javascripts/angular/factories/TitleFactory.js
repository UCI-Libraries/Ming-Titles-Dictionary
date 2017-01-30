titlesApp.factory('Title', ['$http', function($http) {

  var Title = function(data) {
    angular.extend(this, data);
  };

  // an instance method to create a new Title
  Title.prototype.save = function() {
    var title = this;
    return $http.post('api/titles.json', title).then(function(response) {
      title.id = response.data.id;
      return title;
    });
  };

  return Title;
}]);
