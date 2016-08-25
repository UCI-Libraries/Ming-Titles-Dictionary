titlesApp
 .directive('institutionsMenu', function() {
   return {
     controller: 'institutionsMenuController',
     restrict: 'E',
     transclude: true,
     scope: {
      //  deactivatePinPermission: '&',
      //  activatePinPermission: '&',
      //  pinData: '=',
      //  setMap: '&'
    },
     templateUrl: 'institutions_menu.html'
   };
 });
