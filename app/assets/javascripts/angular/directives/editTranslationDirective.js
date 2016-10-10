titlesApp
 .directive('editTranslationForm', function() {
   return {
     controller: 'editTranslationController',
     restrict: 'E',
     transclude: true,
     scope: true,
     templateUrl: 'edit_translation_form.html'
   };
 });
