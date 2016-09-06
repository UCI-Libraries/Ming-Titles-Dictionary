titlesApp.config(function($stateProvider) {
  var mainState = {
    name: 'main',
    url: '/',
    template: '<titles-main></titles-main>'
  };

  var aboutState = {
    name: 'about',
    url: '/about',
    template: '<about-info></about-info>'
  };

  $stateProvider.state(aboutState);
  $stateProvider.state(mainState);

});
