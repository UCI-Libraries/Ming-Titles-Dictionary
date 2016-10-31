titlesApp
  .controller('newTitleController', ['$scope', 'Title', function($scope, Title){

  $scope.errors = "";

  $scope.titleSaved = false;

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
