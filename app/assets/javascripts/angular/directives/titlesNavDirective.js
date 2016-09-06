titlesApp
 .directive('titlesNav', function() {
   return {
     controller: 'titlesNavController',
     restrict: 'E',
     transclude: true,
     scope: {
    },
     templateUrl: 'titles_nav.html'
   };
 });
