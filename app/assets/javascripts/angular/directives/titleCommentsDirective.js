titlesApp
 .directive('titleComments', function() {
   return {
     controller: 'titleCommentsController',
     restrict: 'E',
     transclude: true,
     scope: {
    },
     templateUrl: 'title_comments_table.html'
   };
 });
