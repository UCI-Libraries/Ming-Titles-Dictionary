titlesApp
  .controller('adminController', ['$scope', '$timeout', '$http', '$stateParams', 'titlesService', function($scope, $timeout, $http, $stateParams, titlesService){

  var init = function() {
    getUsers();
  };

  $scope.users = {};

  function getUsers() {
    console.log("in translations controller", $stateParams);
      $http.get('admin/users/').then(function(response) {
        console.log(response.data);
        $scope.users = response.data;
      });
  }

  

  init();


}]);
