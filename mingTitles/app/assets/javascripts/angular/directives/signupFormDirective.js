titlesApp
 .directive('signupForm', function() {
   return {
     controller: 'signupFormController',
     restrict: 'E',
     transclude: true,
     scope: {
      //  deactivatePinPermission: '&',
      //  activatePinPermission: '&',
      //  pinData: '=',
      //  setMap: '&'
     },

     templateUrl: 'signupForm.html'
   };
 });
