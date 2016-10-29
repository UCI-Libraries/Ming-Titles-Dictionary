titlesApp
 .directive('archived', function() {
   return {
     controller: 'archivedController',
     restrict: 'E',
     transclude: true,
     scope: {
     },
     templateUrl: 'archived.html'
   };
 });
