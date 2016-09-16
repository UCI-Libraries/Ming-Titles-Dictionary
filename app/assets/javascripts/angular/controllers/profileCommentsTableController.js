titlesApp
  .controller('profileCommentsTableController', ['$scope', '$http', '$stateParams', 'titlesService', 'NgTableParams', 'Auth', function($scope, $http, $stateParams, titlesService, NgTableParams, Auth){

      var init = function() {
        getComments();
      };

      var data = [];
      $scope.tableParams = new NgTableParams({}, { dataset: data});
      $scope.approvedFilter = [{title: 'approved', id: true},{title: 'unapproved', id: false}];

      function getComments() {
        Auth.currentUser().then(function(user) {
          $http.get('api/user/'+user.id+'/comments').then(function(response) {
            // console.log("translations by user", response.data);
            $scope.tableParams.settings({dataset: response.data.comments});
          });
        }, function(error) {
          console.log("no session, comment cannot be saved");
        });
      }

      $scope.approveTranslation = function(translation) {
        // console.log(user, user.id);
        // $http.put('admin/approve_user/'+ user.id +'.json', {"approved": true}).then(function(response) {
        //   console.log("Saved!", response.data);
        //   getUsers();
        // });
      };

      $scope.revokeTranslation = function(translation) {
        // console.log(user, user.id);
        // $http.put('admin/approve_user/'+ user.id +'.json', {"approved": false}).then(function(response) {
        //   console.log("Saved!", response.data);
        //   getUsers();
        // });
      };

      init();



}]);
