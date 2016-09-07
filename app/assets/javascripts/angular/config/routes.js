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
    template: '<admin></admin>'
  };

  $stateProvider.state(aboutState);
  $stateProvider.state(mainState);
  $stateProvider.state(admin);
  $stateProvider.state('titles' ,{
    url: '/titles/:id',
    template: '<translations></translations>',
    controller: 'translationsController'
  });



}]);

titlesApp.run(['$state', function ($state) {}]);
