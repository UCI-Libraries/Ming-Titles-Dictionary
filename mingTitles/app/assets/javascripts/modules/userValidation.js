angular.module('UserValidation', []).directive('validPassword', function () {
    return {
        require: 'ngModel',
        link: function (scope, elm, attrs, ctrl) {
            ctrl.$parsers.unshift(function (viewValue, $scope) {
                var noMatch = viewValue != scope.myForm.password.$viewValue;
                console.log(noMatch, scope.myForm);
                ctrl.$setValidity('noMatch', !noMatch);
            });
        }
    };
});
