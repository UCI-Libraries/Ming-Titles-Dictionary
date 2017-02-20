titlesApp
 .directive('assignmentForm', function() {
   return {
     restrict: 'E',
     transclude: true,
     scope: true,
     templateUrl: 'assignment_form.html',
     controller: 'assignmentController'
   };
 });
