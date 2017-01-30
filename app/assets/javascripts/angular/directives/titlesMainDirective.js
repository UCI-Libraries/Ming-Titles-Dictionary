titlesApp
 .directive('titlesMain', function() {
   return {
     restrict: 'E',
     transclude: true,
     scope: true,
     templateUrl: 'main.html',
     controller: 'titlesMainController',
   };
 });
