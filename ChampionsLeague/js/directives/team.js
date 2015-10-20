app.directive('team', function() {
    return {
        restrict: 'E',
        scope: {
            teams: '='
        },
        templateUrl: 'js/directives/team.html'
    };
});