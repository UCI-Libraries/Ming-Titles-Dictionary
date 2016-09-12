titlesApp
 .directive('newTranslationForm', function() {
   return {
     controller: 'newTranslationController',
     restrict: 'E',
     transclude: true,
     scope: true,
     templateUrl: 'new_translation_form.html'
   };
 });
