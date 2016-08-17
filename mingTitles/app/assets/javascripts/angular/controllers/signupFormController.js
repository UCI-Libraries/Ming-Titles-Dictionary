titlesApp
  .controller('signupFormController', ['$scope', '$timeout', function($scope, $timeout){

  // var addItem = angular.element(document.getElementsByClassName('add-item'));
  // var latLon = angular.element(document.getElementsByClassName('pin-latlon'));
  // var mapLoc = angular.element(document.getElementsByClassName('map-loc'));
  // var pinInput = angular.element(document.getElementsByClassName('pin-input'));
  // var plusToggle = angular.element(document.getElementsByClassName('plus'));
  // var pinList = angular.element(document.getElementsByClassName('pins-list'));

  var init = function() {

  };

  init();


  $scope.$watch(
    // function() { return $scope.pinData.lat; },
    // function(newValue, oldValue) {
    //   if ( newValue !== oldValue ) {
    //     if (newValue >= -90 && newValue <= 90) {
    //       $scope.latInput = initValsService.latLonValidColor;
    //     } else {
    //       $scope.latInput = initValsService.latLonInvalidColor;
    //     }
    //   }
    // }
  );

  var resetDash = function() {
    pinInput.removeClass("pin-input-full");
    pinInput.addClass("collapse");
    mapLoc.removeClass("collapse");
    latLon.addClass("collapse");
    pinList.css("height", "calc(100% - 80px)");
    plusToggle.toggleClass('minus');
  };

  $scope.clearFormFields = function() {
    // $scope.title = "";
    // $scope.pinData.lat = "";
    // $scope.pinData.lon = "";
    // $scope.desc = "";
    // refreshPinSettings();
    // $scope.setMap();
  };

  // $scope.latLonInvalid = true;

  $scope.submitUser = function() {
    // pinService.addMarker(pinService.newPermMarker());
    // pinService.clearTempMarker();
    // $scope.clearFormFields();
  };





}]);
