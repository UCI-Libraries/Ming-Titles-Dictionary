titlesApp
  .controller('userApprovalController', ['$scope','$http', 'NgTableParams', function($scope, $http, NgTableParams){

  var init = function() {
    getUsers();
  };
  var data = [];
  $scope.tableParams = new NgTableParams({}, { dataset: data});

  // $scope.users = {};

  function getUsers() {
    $http.get('admin/users_to_approve/').then(function(response) {
      console.log(response.data);
      $scope.tableParams = new NgTableParams({}, { dataset: response.data});
      // $scope.users = response.data;
    });
  }

  // function getTitles(inst) {
  //   var route = 'api/titles/';
  //   if(!!inst || inst === '') {
  //     route = 'api/titles/institution/' + inst;
  //   }
  //   $http.get(route).then(function(response) {
  //     for (var i = 0; i < response.data.length; i++) {
  //       response.data[i].num_translations = 0; //initialization of new property
  //       console.log(response.data[i].translations);
  //
  //       response.data[i].num_translations = response.data[i].translations.length;  //set the data from nested obj into new property
  //     }
  //     $scope.tableParams = new NgTableParams({}, { dataset: response.data});
  //
  //   });
  // }

  init();

}]);
