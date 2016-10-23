titlesApp
  .controller('titleCommentsController', ['$scope', '$http', 'NgTableParams', 'titlesService', '$state', function($scope, $http, NgTableParams, titlesService, $state){

    var init = function() {
      getTitleComments();
    };

    var data = [];

    $scope.commentTypeFilter = [{title: 'Pinyin Comment', id: 'pinyin'},{title: 'Chinese Title Comment', id: 'chinese'}];

    $scope.dataEmpty = data.length === 0;

    $scope.tableParams = new NgTableParams(
      {sorting: {
        formatted_comment_added_date: "desc"
      }},
      { dataset: data});
    $scope.approvedFilter = [{title: 'approved', id: true},{title: 'unapproved', id: false}];

    function formatTimestamp(timestamp) {
      if (timestamp) {
        return moment(timestamp.slice(0,10)+" "+ timestamp.slice(11,19))
                        .subtract(6, 'hours')
                        .format('MM-DD-YY h:mm a');
      } else {
        return "";
      }
    }

    function getTitleComments() {
      $http.get('api/pinyin_comments').then(function(response) {
        $scope.dataEmpty = response.data.length === 0;
        response.data.forEach( function(comment) {
          comment.comment_type = 'pinyin';
          comment.chinese_title = comment.title.chinese_title;
          comment.pinyin_title = comment.title.pinyin_title;
        });
        data = response.data;
      }).then(function() {
        $http.get('api/title_comments').then(function(response) {
          $scope.dataEmpty = response.data.length === 0;
          response.data.forEach( function(comment) {
            comment.comment_type = 'pinyin';
            comment.chinese_title = comment.title.chinese_title;
            comment.pinyin_title = comment.title.pinyin_title;
          });
          data.push(response.data);
        });
      }).then(function() {
        $scope.tableParams.settings({dataset: data});
      });
    }

    $scope.seeTitle = function(id) {
      var url = $state.href('titles', {"id": id});
      window.open(url,'_blank');
    };

    init();

}]);
