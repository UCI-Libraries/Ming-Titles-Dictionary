titlesApp
 .directive('newTitleCommentForm', function() {
   return {
     controller: 'newTitleCommentController',
     restrict: 'E',
     transclude: true,
     scope: true,
     templateUrl: 'new_title_comment_form.html'
   };
 });
