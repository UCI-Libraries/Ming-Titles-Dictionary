titlesApp
  .controller('signupFormController', ['$scope', '$timeout', 'User', function($scope, $timeout, User){

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
    // pinInput.removeClass("pin-input-full");
    // pinInput.addClass("collapse");
    // mapLoc.removeClass("collapse");
    // latLon.addClass("collapse");
    // pinList.css("height", "calc(100% - 80px)");
    // plusToggle.toggleClass('minus');
  };

  $scope.clearFormFields = function() {
    // $scope.title = "";
    // $scope.pinData.lat = "";
    // $scope.pinData.lon = "";
    // $scope.desc = "";
    // refreshPinSettings();
    // $scope.setMap();
  };

  $scope.submitUser = function(data, form) {
    console.log("HIIII", data, form);

    var user = new User();

    user.data = {user_handle: "cucumber",
                        email: "mustard@h.co ",
                        fname: "CLAIRE",
                        lname: "Friday",
                        country: "safeway",
                        institution: "UCI",
                        research: "potatoes",
                        is_admin: false,
                        approved: false
                        };



//   var AppController = function(Book) {
//   // to create a Book
//   var book = new Book();
//   book.name = 'AngularJS in nutshell';
//   book.create();
//
//   // to retrieve a book
//   var bookPromise = Book.get(123);
//   bookPromise.then(function(b) {
//     book = b;
//   });
// };

    user.save($scope.user, function() {
     //data saved. do something here.
    }); //saves an entry. Assuming $scope.entry is the Entry object
  };





}]);
