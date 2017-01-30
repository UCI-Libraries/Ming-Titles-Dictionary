titlesApp
  .controller('newTitleController', ['$scope', 'Title', '$http', function($scope, Title, $http){

  $scope.errors = "";

  var init = function() {
    $scope.institutionsOne = [];
    $scope.institutionsTwo = [];
    $scope.institutionsThree = [];

    getRootOffices();
  };

  function getRootOffices() {
    $http({
        url: 'api/institutions',
        method: "GET",
        params: {roots: true}
     }).then(function(response) {
        $scope.institutionsOne = response.data;
      });
  }

  init();

  $scope.titleSaved = false;

  $scope.fetchChildren = function(institution, rank) {
    if (institution.id && rank === 2) {
      $http({
          url: 'api/institutions',
          method: "GET",
          params: {parent_id: institution.id}
       }).then(function(response) {
          $scope.institutionsTwo = response.data;
       });
    } else if (institution.id && rank === 3) {
      $http({
          url: 'api/institutions',
          method: "GET",
          params: {parent_id: institution.id}
       }).then(function(response) {
          $scope.institutionsThree = response.data;
       });
    }
  };

  $scope.resetTitleForm = function() {
    $scope.formData = null;
    $scope.myForm.$setPristine();
    $scope.titleSaved = true;
  };

  $scope.postTitle = function(data, form) {
    var title = new Title();
    title.chinese_title = data.chineseTitle;
    title.pinyin_title = data.pinyinTitle;
    title.institution_one = data.institutionOne.name;
    title.institution_two = data.institutionTwo.name;
    title.institution_three = data.institutionThree.name;
    title.save().then(function() {
      $scope.resetTitleForm();
    }, function(error) {
      console.log("no session, title cannot be saved");
    });
  };

}]);
