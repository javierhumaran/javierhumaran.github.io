app.controller('ChampionsController', ['$scope', 'champions', function($scope, champions) {
    
    champions.success(function(data) {
        $scope.groups = data;
    });
    
}]);