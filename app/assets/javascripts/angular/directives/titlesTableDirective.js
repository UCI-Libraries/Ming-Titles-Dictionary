titlesApp
 .directive('titlesTable', function() {
   return {
     controller: 'titlesTableController',
     restrict: 'E',
     transclude: true,
     scope: {
     },
     templateUrl: 'titles_table.html'
   };
 });
