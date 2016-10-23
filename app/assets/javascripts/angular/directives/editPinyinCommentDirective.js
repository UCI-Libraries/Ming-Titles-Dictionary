titlesApp
 .directive('editPinyinCommentForm', function() {
   return {
     controller: 'editPinyinCommentController',
     restrict: 'E',
     transclude: true,
     scope: true,
     templateUrl: 'edit_pinyin_comment_form.html'
   };
 });
