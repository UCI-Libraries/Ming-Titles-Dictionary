titlesApp
 .directive('newCommentForm', function() {
   return {
     controller: 'newCommentController',
     restrict: 'E',
     transclude: true,
     scope: true,
     templateUrl: 'new_comment_form.html'
   };
 });
