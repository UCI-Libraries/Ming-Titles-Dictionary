titlesApp
  .controller('profileTranslationTableController', ['$scope', '$http', '$stateParams', 'titlesService', 'NgTableParams', 'Auth', function($scope, $http, $stateParams, titlesService, NgTableParams, Auth){

      var init = function() {
        getTranslations();
      };

      var data = [];
      $scope.tableParams = new NgTableParams({}, { dataset: data});
      $scope.approvedFilter = [{title: 'approved', id: true},{title: 'unapproved', id: false}];

      function getTranslations() {
        Auth.currentUser().then(function(user) {
          $http.get('api/user/'+user.id+'/translations').then(function(response) {
            // console.log("translations by user", response.data);
            $scope.tableParams.settings({dataset: response.data.translations});
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
