titlesApp
  .service('userService', function() {

    var currentUser = {};

    this.setUser = function(user) {
      currentUser =  user;
    };

    this.getUser = function() {
      return currentUser;
    };

});
