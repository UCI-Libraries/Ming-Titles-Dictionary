titlesApp
  .controller('contributorsController', ['$scope', '$http', function($scope, $http){

  var init = function() {
    $scope.contributors = [];
    getContributors();
  };

  function getContributors() {
    $http.get('api/users/contributors/true').then(function(response) {
      console.log(response);
      $scope.contributors = response.data;
    });
  }

  // $scope.approveTranslation = function(translation) {
  //   $http.put('admin/translations/'+ translation.id, {"approved": true}).then(function(response) {
  //     console.log("Approved!", response.data);
  //     getTranslations();
  //   });
  // };

  init();

}]);
