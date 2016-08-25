var titlesApp = angular.module('titlesApp', ['templates', 'countrySelect', 'UserValidation', 'Devise']);

titlesApp.config([
  // '$stateProvider',
  // '$urlRouterProvider',
  // '$locationProvider',
  '$httpProvider',
  'AuthProvider',

  function (
    // $stateProvider,
    // $urlRouterProvider,
    // $locationProvider,
    $httpProvider,
    AuthProvider
  ) {

    $httpProvider.defaults.withCredentials = true;
    AuthProvider.registerPath('/auth/register.json');
    // AuthProvider.registerMethod('GET');

    // if (window.history && window.history.pushState) {
    //   $locationProvider.html5Mode(true); // Uses "/some-url" instead of "/!#some-url"
    // }
    //
    // $stateProvider
    //   .state('home', {
    //     url: '/',
    //     templateUrl: '/views/home.html',
    // })
    //   .otherwise({
    //     redirectTo: '/'
    // });

  }]);
