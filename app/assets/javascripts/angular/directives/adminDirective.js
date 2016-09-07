titlesApp
 .directive('admin', function() {
   return {
     controller: 'adminController',
     restrict: 'E',
     transclude: true,
     scope: {
    },
     templateUrl: 'admin.html'
   };
 });
