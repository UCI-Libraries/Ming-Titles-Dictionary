titlesApp
 .directive('contributors', function() {
   return {
     controller: 'contributorsController',
     restrict: 'E',
     transclude: true,
     scope: {
     },
     templateUrl: 'contributors.html'
   };
 });
