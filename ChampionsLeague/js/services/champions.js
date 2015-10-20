app.factory('champions', ['$http', function($http) {
    return $http.get('js/catalogs/groups.json')
        .success(function(data) {
            return data;    
        })
        .error(function(err) {
            return err;
        });
}]);