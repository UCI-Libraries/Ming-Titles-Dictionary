titlesApp
 .directive('newPinyinCommentForm', function() {
   return {
     controller: 'newPinyinCommentController',
     restrict: 'E',
     transclude: true,
     scope: true,
     templateUrl: 'new_pinyin_comment_form.html'
   };
 });
