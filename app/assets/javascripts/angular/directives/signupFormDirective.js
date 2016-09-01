titlesApp
 .directive('signupForm', function() {
   return {
     controller: 'signupFormController',
     restrict: 'E',
     transclude: true,
     scope: {
     },
     templateUrl: 'signupForm.html'
   };
 });
