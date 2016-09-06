titlesApp.factory('User', ['$http', function($http) {

  var User = function(data) {
    angular.extend(this, data);
  };

  User.get = function(id) {
    return $http.get('/User/' + id).then(function(response) {
      return new User(response.data);
    });
  };

  // an instance method to create a new User
  User.prototype.save = function() {
    var user = this;
    console.log(user);
    return $http.post('/auth/register', user).then(function(response) {
      console.log('RESPONSE TO POST - /auth/register', response);
      user.id = response.data.id;
      return user;
    });
  };

  return User;
}]);
