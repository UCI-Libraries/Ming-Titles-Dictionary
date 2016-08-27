titlesApp
  .controller('institutionsMenuController', ['$scope', '$timeout', '$http', function($scope, $timeout, $http){

  // var addItem = angular.element(document.getElementsByClassName('add-item'));


  var init = function() {
    getOffices();
  };

  function getOffices() {
      $http.get('api/institutions/all_trees').then(function(response) {
        console.log(response.data);
        $scope.offices = response.data;
      });
  }

  init();

  $scope.offices = [];

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

titlesApp.controller('AccordionDemoCtrl', function ($scope) {
  $scope.oneAtATime = true;

  $scope.groups = [
    {
      title: 'Dynamic Group Header - 1',
      content: 'Dynamic Group Body - 1'
    },
    {
      title: 'Dynamic Group Header - 2',
      content: 'Dynamic Group Body - 2'
    }
  ];

  $scope.items = ['Item 1', 'Item 2', 'Item 3'];

  $scope.addItem = function() {
    var newItemNo = $scope.items.length + 1;
    $scope.items.push('Item ' + newItemNo);
  };

  $scope.status = {
    isCustomHeaderOpen: false,
    isFirstOpen: true,
    isFirstDisabled: false
  };
});
