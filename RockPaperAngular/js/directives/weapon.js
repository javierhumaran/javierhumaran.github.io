app.directive('weapon', function() {
    return {
        restrict: 'E',
        scope: {
            listing: '='
        },
        templateUrl: 'js/directives/weapon.html'
    };
});