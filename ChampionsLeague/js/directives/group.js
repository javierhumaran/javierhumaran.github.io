app.directive('group', function() {
    return {
        restrict: 'E',
        scope: {
            groups: '='
        },
        templateUrl: 'js/directives/group.html'
    };
});