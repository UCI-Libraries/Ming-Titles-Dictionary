titlesApp
 .directive('newTitleForm', function() {
   return {
     controller: 'newTitleController',
     restrict: 'E',
     transclude: true,
     scope: true,
     templateUrl: 'new_title_form.html'
   };
 });
