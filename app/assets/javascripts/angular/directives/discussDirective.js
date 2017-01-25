titlesApp
 .directive('discuss', function() {
   return {
     controller: 'discussController',
     restrict: 'E',
     transclude: true,
     scope: {
     },
     templateUrl: 'discuss.html'
   };
 });
