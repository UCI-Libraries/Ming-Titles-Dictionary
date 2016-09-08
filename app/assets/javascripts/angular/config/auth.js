titlesApp.config(['AuthProvider', function(AuthProvider) {
    AuthProvider.loginPath('auth/login.json');
    // AuthProvider.loginMethod('GET');
    AuthProvider.logoutPath('auth/logout.json');
    // AuthProvider.logoutMethod('GET');
}]);
