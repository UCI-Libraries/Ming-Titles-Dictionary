titlesApp
  .controller('translationApprovalController', ['$scope', '$http', '$stateParams', 'titlesService', 'NgTableParams', '$state', 'Translation', function($scope, $http, $stateParams, titlesService, NgTableParams, $state, Translation){

      var init = function() {
        getTranslations();
      };

      var data = [];
      $scope.tableParams = new NgTableParams(
          {sorting: { id: "asc" }}, { dataset: data}
        );

      $scope.approvedFilter = [{title: 'approved', id: true},{title: 'unapproved', id: false}];

      $scope.flaggedFilter = [{title: 'flagged', id: true},{title: 'unflagged', id: false}];

      function getTranslations() {
        $http.get('translations/').then(function(response) {
          var data = setNestedAttrs(response.data);
          $scope.tableParams.settings({dataset: data});
        });
      }

      function setNestedAttrs(data) {
        data.forEach( function(title) {
          title.chinese_title = title.title.chinese_title;
          title.translation_count = title.title.translation_count;
        });
        return data;
      }

      $scope.approveTranslation = function(translation) {
        $http.put('admin/translations/'+ translation.id, {"approved": true}).then(function(response) {
          console.log("Approved!", response.data);
          getTranslations();
        });
      };

      $scope.revokeTranslation = function(translation) {
        $http.put('admin/translations/'+ translation.id, {"approved": false}).then(function(response) {
          console.log("Revoked!", response.data);
          getTranslations();
        });
      };

      $scope.seeTitle = function(id) {
        var url = $state.href('titles', {"id": id});
        window.open(url,'_blank');
      };

      $scope.setFlag = function(id, flag) {
        $http.put('admin/translations/'+ id, {"flag": !flag}).then(function(response) {
          getTranslations();
        });
      };

      init();



}]);
