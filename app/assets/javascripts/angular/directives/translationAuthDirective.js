titlesApp
 .directive('translationApproval', function() {
   return {
     controller: 'translationApprovalController',
     restrict: 'E',
     transclude: true,
     scope: {
    },
     templateUrl: 'translation_approval_table.html'
   };
 });
