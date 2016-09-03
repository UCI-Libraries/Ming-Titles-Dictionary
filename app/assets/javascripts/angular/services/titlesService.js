titlesApp
  .service('titlesService', ['$rootScope', function($rootScope) {

    var titleFocus = "";

    this.setFocus = function(inst) {
      titleFocus =  inst;
      $rootScope.$broadcast('updateTitleTable');
    };

    this.getFocus = function() {
      return titleFocus;
    };

}]);
