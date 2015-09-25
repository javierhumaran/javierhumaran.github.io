app.controller('GameController', ['$scope', function($scope) {
    
    $scope.weapons = [
        {
            weapon_name: "Rock",
            weapon_img: "img/rock.png",
            weapon_value: 0
        },
        {
            weapon_name: "Paper",
            weapon_img: "img/paper.png",
            weapon_value: 1
        },
        {
            weapon_name: "Scissors",
            weapon_img: "img/scissors.png",
            weapon_value: 2
        },
        {
            weapon_name: "Lizard",
            weapon_img: "img/lizard.png",
            weapon_value: 3
        },
        {
            weapon_name: "Spock",
            weapon_img: "img/spock.png",
            weapon_value: 4
        }
    ];

}]);