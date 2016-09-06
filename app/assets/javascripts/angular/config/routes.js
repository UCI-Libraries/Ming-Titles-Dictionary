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

  // var title = {
  //   url: '/title/:id',
  //   params: [
  //      'id'
  //   ],
  //   template: 'translation',
  //   controller: 'translationsController'
  // };

  $stateProvider.state(aboutState);
  $stateProvider.state(mainState);
  $stateProvider.state('titles' ,{
    url: '/titles/:id',
    template: '<translations></translations>',
    controller: 'translationsController'
  });



}]);

titlesApp.run(['$state', function ($state) {}]);
