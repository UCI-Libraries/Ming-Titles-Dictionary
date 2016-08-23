titlesApp
  .controller('signupFormController', ['$scope', '$timeout', 'User', 'Auth', function($scope, $timeout, User, Auth){

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

  $scope.clearFormFields = function() {
    // $scope.title = "";
    // $scope.pinData.lat = "";
    // $scope.pinData.lon = "";
    // $scope.desc = "";
    // refreshPinSettings();
    // $scope.setMap();
  };

  $scope.submitUser = function(data) {
    console.log(data);
    var user = new User();
    var credentials = {
      user_handle: data.username,
      email: data.email,
      fname: data.fname,
      lname: data.lname,
      country: data.country,
      institution: data.institution,
      research: data.research,
      // approved: false,
      password: data.password
                      };

    var config = {
        headers: {
            'X-HTTP-Method-Override': 'POST'
        }
    };

    Auth.register(credentials, config).then(function(registeredUser) {
        console.log(registeredUser); // => {id: 1, ect: '...'}
    }, function(error) {
        console.log("FAILED", error);
        // Registration failed...
    });

    $scope.$on('devise:new-registration', function(event, user) {
        // ...
    });


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

    // user.save($scope.user, function() {
    //  //data saved. do something here.
    // }); //saves an entry. Assuming $scope.entry is the Entry object
  };






}]);
