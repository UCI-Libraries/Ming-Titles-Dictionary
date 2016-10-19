titlesApp.factory('Translation', ['$http', function($http) {

  var Translation = function(data) {
    angular.extend(this, data);
  };

  // Translation.get = function(id) {
  //   return $http.get('/translation/' + id).then(function(response) {
  //     return new Translation(response.data);
  //   });
  // };
  //
  // Translation.index = function(id) {
  //   return $http.get('/translations.json').then(function(response) {
  //     return new Translation(response.data);
  //   });
  // };

  Translation.delete = function(id) {
    return $http.delete('/translations/' + id + '.json').then(function(response) {
      console.log(response);
      return new Translation(response.data);
    });
  };

  // an instance method to create a new Translation
  Translation.prototype.save = function() {
    var translation = this;
    // console.log('TRANSLATION - - - - - ', translation);
    return $http.post('/translations.json', translation).then(function(response) {
      // console.log('RESPONSE TO POST - translation/new', response);
      translation.id = response.data.id;
      return translation;
    });
  };

  Translation.prototype.edit = function() {
    var translation = this;
    // console.log('TRANSLATION - - - - - ', translation);
    return $http.put('/translations.json' , translation).then(function(response) {
      console.log('RESPONSE TO POST - translation/edit', response);
      // translation.id = response.data.id;
      return translation;
    });
  };


  return Translation;
}]);
