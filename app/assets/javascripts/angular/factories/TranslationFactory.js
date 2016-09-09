titlesApp.factory('Translation', ['$http', function($http) {

  var Translation = function(data) {
    angular.extend(this, data);
  };

  // Translation.get = function(id) {
  //   return $http.get('/Translation/' + id).then(function(response) {
  //     return new Translation(response.data);
  //   });
  // };

  // an instance method to create a new Translation
  Translation.prototype.save = function() {
    var translation = this;
    return $http.post('/translations', translation).then(function(response) {
      console.log('RESPONSE TO POST - translation/new', response);
      translation.id = response.data.id;
      return translation;
    });
  };

  return Translation;
}]);
