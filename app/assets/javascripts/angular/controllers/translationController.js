titlesApp
  .controller('translationsController', ['$scope', '$http', '$stateParams', 'Translation', 'Comment', 'Auth', function($scope, $http, $stateParams, Translation, Comment, Auth){

  function formatTimestamps(translations) {
    translations.forEach(function(translation){
      translation.comments.forEach(function(comment){
        var date = moment(comment.created_at.slice(0,10)+" "+ comment.created_at.slice(11,19))
                        .subtract(6, 'hours')
                        .format('MMMM Do YYYY h:mm a');
        // var time = moment(comment.created_at.slice(11,19)).format('h:mm a');
        // console.log(comment.created_at.slice(11,19));
        comment.formatted_date = date;
      });
    });
    return translations;
  }

  var init = function() {
    $scope.getPosts();
  };

  $scope.title = {};
  $scope.current_translation = {};
  $scope.translations = [];

  $scope.getPosts = function() {
    console.log("in translations controller", $stateParams);
    $http.get('api/titles/'+ $stateParams.id).then(function(response) {
      $scope.title = response.data;
      console.log("RESPONSE", response.data);
      $scope.translations = formatTimestamps(response.data.translations);
    });
  };

  $scope.logCurrentTranslation = function(translation) {
    $scope.current_translation = translation;
  };

  init();


}]);
