titlesApp
 .directive('logIn', function() {
   return {
     controller: 'logInController',
     restrict: 'E',
     transclude: true,
     scope: {
     },
     templateUrl: 'log_in.html'
   };
 });
