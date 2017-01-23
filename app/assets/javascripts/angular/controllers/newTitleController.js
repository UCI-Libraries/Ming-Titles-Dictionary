titlesApp
  .controller('newTitleController', ['$scope', 'Title', '$http', function($scope, Title, $http){

  $scope.errors = "";

  var init = function() {
    $scope.institutions = [];
    getRootOffices();
  };

  function getRootOffices() {
    $http({
        url: 'api/institutions',
        method: "GET",
        params: {roots: true}
     }).then(function(response) {
        console.log(response.data);
        $scope.institutions = response.data;
      });
  }

  init();

  $scope.titleSaved = false;

  $scope.fetchChildren = function(institution) {
    $http({
        url: 'api/institutions',
        method: "GET",
        params: {parent_id: institution.id}
     }).then(function(response) {
        console.log(response.data);
        // $scope.institutions = response.data;
      });
    console.log(institution);
  };

  $scope.resetTitleForm = function() {
    $scope.formData = null;
    $scope.myForm.$setPristine();
    $scope.titleSaved = true;
  };

  $scope.postTitle = function(data, form) {
    var title = new Title();
    console.log(data);
    title.chinese_title = data.chineseTitle;
    title.pinyin_title = data.pinyinTitle;
    title.institution_one = data.institutionOne;
    title.institution_two = data.institutionTwo;
    title.institution_three = data.institutionThree;
    title.save().then(function() {
      $scope.resetTitleForm();
    }, function(error) {
      console.log("no session, title cannot be saved");
    });
  };

}]);
