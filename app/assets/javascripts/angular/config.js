titlesApp.config(['$httpProvider','AuthProvider', function( $httpProvider, AuthProvider ) {
    $httpProvider.defaults.withCredentials = true;
    AuthProvider.registerPath('/auth/register.json');
}]);
