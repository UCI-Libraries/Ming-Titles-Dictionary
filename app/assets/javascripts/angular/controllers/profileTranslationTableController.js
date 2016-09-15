titlesApp
  .controller('profileTranslationTableController', ['$scope', '$http', '$stateParams', 'titlesService', 'NgTableParams', function($scope, $http, $stateParams, titlesService, NgTableParams){

      var init = function() {
        getTranslations();
      };

      var data = [];
      $scope.tableParams = new NgTableParams({}, { dataset: data});
      $scope.approvedFilter = [{title: 'approved', id: true},{title: 'unapproved', id: false}];

      function getTranslations() {
        $http.get('admin/translations/').then(function(response) {
          console.log("TRANSLATIONS", response.data);
          $scope.tableParams.settings({dataset: response.data});
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
