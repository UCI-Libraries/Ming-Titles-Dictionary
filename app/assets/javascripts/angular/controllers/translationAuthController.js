titlesApp
  .controller('translationApprovalController', ['$scope', '$http', '$stateParams', 'titlesService', 'NgTableParams', '$state', function($scope, $http, $stateParams, titlesService, NgTableParams, $state){

      var init = function() {
        getTranslations();
      };

      var data = [];
      $scope.tableParams = new NgTableParams({}, { dataset: data});
      $scope.approvedFilter = [{title: 'approved', id: true},{title: 'unapproved', id: false}];

      function getTranslations() {
        $http.get('admin/translations/').then(function(response) {
          $scope.tableParams.settings({dataset: response.data});
        });
      }

      $scope.approveTranslation = function(translation) {
        console.log(translation);
        $http.put('admin/translations/'+ translation.id, {"approved": true}).then(function(response) {
          console.log("Saved!", response.data);
          getTranslations();
        });
      };

      $scope.revokeTranslation = function(translation) {
        // console.log(user, user.id);
        // $http.put('admin/approve_user/'+ user.id +'.json', {"approved": false}).then(function(response) {
        //   console.log("Saved!", response.data);
        //   getUsers();
        // });
      };

      $scope.seeTitle = function(id) {
        var url = $state.href('titles', {"id": id});
        window.open(url,'_blank');
      };

      init();



}]);
