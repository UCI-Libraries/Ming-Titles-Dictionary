titlesApp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  var mainState = {
    name: 'main',
    url: '/',
    template: '<titles-main></titles-main>'
  };

  var aboutState = {
    name: 'about',
    url: '/about',
    template: '<about-info></about-info>'
  };

  var admin = {
    name: 'admin',
    url: '/admin',
    template: '<admin></admin>',
    resolve: {
      auth: ['Auth','$q', function(Auth, $q) {
        var deferred = $q.defer();
        return Auth.currentUser().then(function(user) {
            if (user.is_admin) {
              return deferred.resolve({});
            } else {
              return $q.reject("Not Authorized");
            }
        }, function(error) {
            return $q.reject("Not Authorized");
        });
      }]
    }
  };

  var contributors = {
    name: 'contributors',
    url: '/contributors',
    template: '<contributors></contributors>'
  };

  $stateProvider.state(aboutState)
                .state(mainState)
                .state(admin)
                .state(contributors)
                .state('titles' ,{
                  url: '/titles/:id',
                  template: '<translations></translations>',
                  controller: 'translationsController',
                  resolve: {
                    auth: ['Auth','$q', function(Auth, $q) {
                      var deferred = $q.defer();
                      return Auth.currentUser().then(function(user) {
                          return deferred.resolve({});
                      }, function(error) {
                          return $q.reject("Not Authorized");
                      });
                    }]
                  }
                }).state('profile' ,{
                  url: '/profile/:id',
                  template: '<profile></profile>',
                  controller: 'profileController',
                  resolve: {
                    auth: ['Auth','$q', function(Auth, $q) {
                      var deferred = $q.defer();
                      return Auth.currentUser().then(function(user) {
                          return deferred.resolve({});
                      }, function(error) {
                          return $q.reject("Not Authorized");
                      });
                    }]
                  }
                });

}]);

titlesApp.run(['$state', function ($state) {}]);
