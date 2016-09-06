titlesApp
 .directive('translations', function() {
   return {
     controller: 'translationsController',
     restrict: 'E',
     transclude: true,
     scope: {
     },
     templateUrl: 'translation.html'
   };
 });
