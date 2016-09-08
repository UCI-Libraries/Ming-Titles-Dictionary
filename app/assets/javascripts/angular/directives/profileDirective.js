titlesApp
 .directive('profile', function() {
   return {
     controller: 'profileController',
     restrict: 'E',
     transclude: true,
     scope: {
    },
     templateUrl: 'profile.html'
   };
 });
