titlesApp
 .directive('passwordChange', function() {
   return {
     controller: 'passwordChangeController',
     restrict: 'E',
     transclude: true,
     scope: {
     },
     templateUrl: 'password_change.html'
   };
 });
