titlesApp
 .directive('editCommentForm', function() {
   return {
     controller: 'editCommentController',
     restrict: 'E',
     transclude: true,
     scope: true,
     templateUrl: 'edit_comment_form.html'
   };
 });
