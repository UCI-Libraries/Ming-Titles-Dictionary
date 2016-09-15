titlesApp
 .directive('profileTranslationTable', function() {
   return {
     controller: 'profileTranslationTableController',
     restrict: 'E',
     transclude: true,
     scope: {
    },
     templateUrl: 'profile_translation_table.html'
   };
 });
