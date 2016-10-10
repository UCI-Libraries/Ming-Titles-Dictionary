titlesApp
  .controller('profileTranslationTableController', ['$scope', '$http', '$stateParams', 'titlesService', 'NgTableParams', 'Auth', '$state', function($scope, $http, $stateParams, titlesService, NgTableParams, Auth, $state){

      var init = function() {
        getTranslations();
      };

      var data = [];
      $scope.dataEmpty = data.length === 0;

      $scope.tableParams = new NgTableParams(
        {sorting: {
          comment_added_at: "asc"
        }},
        { dataset: data});
      $scope.approvedFilter = [{title: 'approved', id: true},{title: 'unapproved', id: false}];

      function getTranslations() {
        Auth.currentUser().then(function(user) {
          $http.get('api/user/'+user.id+'/translations').then(function(response) {
            $scope.dataEmpty = response.data.length === 0;
            $scope.tableParams.settings({dataset: response.data});
          });
        }, function(error) {
          console.log("no session, comment cannot be saved");
        });

      }

      $scope.seeTitle = function(id) {
        var url = $state.href('titles', {"id": id});
        window.open(url,'_blank');
      };

      init();



}]);
