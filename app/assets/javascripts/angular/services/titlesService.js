titlesApp
  .service('titlesService', function() {

    var titleFocus = "";

    this.setFocus = function(inst) {
      titleFocus =  inst;
    };

    this.getFocus = function() {
      return titleFocus;
    };

});
