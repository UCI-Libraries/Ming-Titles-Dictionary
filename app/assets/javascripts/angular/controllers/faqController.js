titlesApp
  .controller('faqController', ['$scope', '$http', 'FAQ', function($scope, $http, FAQ){
    $scope.faqTopics = FAQ;
  }]);
