titlesApp
 .directive('editTitleCommentForm', function() {
   return {
     controller: 'editTitleCommentController',
     restrict: 'E',
     transclude: true,
     scope: true,
     templateUrl: 'edit_title_comment_form.html'
   };
 });
