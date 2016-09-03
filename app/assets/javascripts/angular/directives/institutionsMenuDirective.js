titlesApp
 .directive('institutionsMenu', function() {
   return {
     controller: 'institutionsMenuController',
     restrict: 'E',
     transclude: true,
     scope: {
    },
     templateUrl: 'institutions_menu.html'
   };
 });
