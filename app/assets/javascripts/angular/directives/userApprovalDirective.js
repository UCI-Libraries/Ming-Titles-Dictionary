titlesApp
 .directive('userApproval', function() {
   return {
     controller: 'userApprovalController',
     restrict: 'E',
     transclude: true,
     scope: {
    },
     templateUrl: 'user_approval_table.html'
   };
 });
