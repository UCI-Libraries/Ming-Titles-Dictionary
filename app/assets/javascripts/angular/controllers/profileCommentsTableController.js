titlesApp
  .controller('profileCommentsTableController', ['$scope', '$http', '$stateParams', 'titlesService', 'NgTableParams', 'Auth', '$state', function($scope, $http, $stateParams, titlesService, NgTableParams, Auth, $state){

      var init = function() {
        getComments();
      };

      var data = [];
      $scope.dataEmpty = data.length === 0;

      $scope.tableParams = new NgTableParams({}, { dataset: data});
      $scope.approvedFilter = [{title: 'approved', id: true},{title: 'unapproved', id: false}];

      function getComments() {
        Auth.currentUser().then(function(user) {
          $http.get('api/user/'+user.id+'/comments').then(function(response) {
            response.data.forEach( function(comment) {
              comment.formatted_date = formatTimestamp(comment.created_at);
            });
            $scope.dataEmpty = response.data.length === 0;
            $scope.tableParams.settings({dataset: response.data});
          });
        }, function(error) {
          console.log("no session, comment cannot be saved");
        });
      }

      function formatTimestamp(timestamp) {
        return moment(timestamp.slice(0,10)+" "+ timestamp.slice(11,19))
                        .subtract(7, 'hours')
                        .format('MM-DD-YY h:mm a');
      }

      $scope.seeTitle = function(id) {
        if (id) {
          var url = $state.href('titles', {"id": id});
          window.open(url,'_blank');
        }
      };

      init();

}]);
