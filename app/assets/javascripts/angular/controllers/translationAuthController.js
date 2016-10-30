titlesApp
  .controller('translationApprovalController', ['$scope', '$http', '$stateParams', 'titlesService', 'NgTableParams', '$state', 'Translation', function($scope, $http, $stateParams, titlesService, NgTableParams, $state, Translation){

      var init = function() {
        $scope.loading = true;
        getTranslations();
      };

      var data = [];
      $scope.tableParams = new NgTableParams(
          {sorting: { id: "asc" }}, { dataset: data}
        );

      $scope.statusFilter = [{title: 'approved', id: 'approved'},{title: 'unapproved', id: 'unapproved'}, {title: 'new', id: 'new'}];

      $scope.flaggedFilter = [{title: 'flagged', id: true},{title: 'unflagged', id: false}];

      function getTranslations() {
        $http.get('translations/').then(function(response) {
          $scope.data = setNestedAttrs(response.data);
          $scope.tableParams.settings({dataset: $scope.data});
          $scope.loading = false;
        });
      }

      function setNestedAttrs(data) {
        data.forEach( function(title) {
          title.chinese_title = title.title.chinese_title;
          title.pinyin_title = title.title.pinyin_title;
          title.translation_count = title.title.translation_count;
          title.status = "unapproved";
          if (title.approved === true ) {
            title.status = "approved";
          } else if (title.reviewed === false) {
            title.status = "new";
          }
        });
        return data;
      }

      $scope.approveTranslation = function(translation) {
        $http.put('admin/translations/'+ translation.id, {"approved": true, "new": false}).then(function(response) {
          getTranslations();
        });
      };

      $scope.revokeTranslation = function(translation) {
        $http.put('admin/translations/'+ translation.id, {"approved": false}).then(function(response) {
          getTranslations();
        });
      };

      $scope.seeTitle = function(id) {
        if (id) {
          var url = $state.href('titles', {"id": id});
          window.open(url,'_blank');
        }
      };

      $scope.setFlag = function(translation, flag) {
        $http.put('admin/translations/'+ translation.id, {"flag": !flag}).then(function(response) {
          $scope.data.forEach( function(t) {
            if (t.id === translation.id) {
              t.flag = !flag;
            }
          });
          $scope.tableParams.settings({dataset: $scope.data});
        });
      };

      init();

}]);
