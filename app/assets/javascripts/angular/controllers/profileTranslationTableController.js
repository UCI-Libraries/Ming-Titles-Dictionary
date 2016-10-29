titlesApp
  .controller('profileTranslationTableController', ['$scope', '$http', '$stateParams', 'titlesService', 'NgTableParams', 'Auth', '$state', function($scope, $http, $stateParams, titlesService, NgTableParams, Auth, $state){

      var init = function() {
        getTranslations();
      };

      var data = [];
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

      function getTranslations() {
        Auth.currentUser().then(function(user) {
          $http.get('api/user/'+user.id+'/translations').then(function(response) {
            $scope.dataEmpty = response.data.length === 0;
            response.data.forEach( function(translation) {
              translation.formatted_comment_added_date = formatTimestamp(translation.comment_added_at);
              translation.chinese_title = translation.title.chinese_title;
            });
            $scope.tableParams.settings({dataset: response.data});
          });
        }, function(error) {
          console.log("no session, comment cannot be saved");
        });

      }

      $scope.seeTitle = function(id) {
        if (id) {
          var url = $state.href('titles', {"id": id});
          window.open(url,'_blank');
        }
      };

      init();



}]);
