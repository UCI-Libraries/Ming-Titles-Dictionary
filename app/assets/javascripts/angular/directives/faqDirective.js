titlesApp
 .directive('faq', function() {
   return {
     restrict: 'E',
     transclude: true,
     scope: {
     },
     controller: 'faqController',
     templateUrl: 'faq.html'
   };
 });
