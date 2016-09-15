titlesApp
 .directive('profileCommentsTable', function() {
   return {
     controller: 'profileCommentsTableController',
     restrict: 'E',
     transclude: true,
     scope: {
    },
     templateUrl: 'profile_comments_table.html'
   };
 });
