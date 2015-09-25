app.controller('GameController', ['$scope', function($scope) {
    
    var rock = "Rock", paper = "Paper", scissors = "Scissors", lizard = "Lizard", spock = "Spock";
    
    $scope.score = {
        homeScore: 0,
        awayScore: 0
    };
    
    $scope.matchMessage = {
        userResult: "",
        matchResult: "Choose your Weapon!",
        pcResult: ""
    };
    
    $scope.weapons = [
        {
            weapon_name: rock,
            weapon_img: "img/rock.png"
        },
        {
            weapon_name: paper,
            weapon_img: "img/paper.png"
        },
        {
            weapon_name: scissors,
            weapon_img: "img/scissors.png"
        },
        {
            weapon_name: lizard,
            weapon_img: "img/lizard.png"
        },
        {
            weapon_name: spock,
            weapon_img: "img/spock.png"
        }
    ];

    function randomWeapon(max){
        var pcWeapon = Math.floor(Math.random() * max);
        
        switch(pcWeapon) {
            case 0:  return "Rock"     
                break;
            case 1:  return "Paper"    
                break;
            case 2:  return "Scissors" 
                break;
            case 3:  return "Lizard"   
                break;
            case 4:  return "Spock"    
                break;
            default: return "";
        }
        
        return pcWeapon;
    }

    $scope.userChoice = function (userWeapon) {

        var pcWeapon = randomWeapon(5);

        $scope.matchMessage.userResult = userWeapon;
        $scope.matchMessage.pcResult = pcWeapon;

        if(userWeapon == pcWeapon){
            $scope.matchMessage.userResult = "";
            $scope.matchMessage.pcResult = "";
            $scope.matchMessage.matchResult = "It's a Draw";
        }
        else if(userWeapon == rock) {
            if (pcWeapon == paper || pcWeapon == spock) {
                $scope.matchMessage.matchResult = " loses against ";
            }
            else if (pcWeapon == scissors || pcWeapon == lizard) {
                $scope.matchMessage.matchResult = " wins against ";
            }
        } 
        else if (userWeapon == paper){
            if (pcWeapon == scissors || pcWeapon == lizard) {
                $scope.matchMessage.matchResult = " loses against ";
            }
            else if (pcWeapon == spock || pcWeapon == rock) {
                $scope.matchMessage.matchResult = " wins against ";
            }
        }
        else if (userWeapon == scissors){
            if (pcWeapon == spock || pcWeapon == rock) {
                $scope.matchMessage.matchResult = " loses against ";
            }
            else if (pcWeapon == lizard || pcWeapon == paper) {
                $scope.matchMessage.matchResult = " wins against ";
            }
        }
        else if (userWeapon == lizard){
            if (pcWeapon == rock || pcWeapon == scissors) {
                $scope.matchMessage.matchResult = " loses against ";
            }
            else if (pcWeapon == spock || pcWeapon == paper) {
                $scope.matchMessage.matchResult = " wins against ";
            }
        }
        else if (userWeapon == spock){
            if (pcWeapon == paper || pcWeapon == lizard) {
                $scope.matchMessage.matchResult = " loses against ";
            }
            else if (pcWeapon == rock || pcWeapon == scissors) {
                $scope.matchMessage.matchResult = " wins against ";
            }
        }

        if($scope.matchMessage.matchResult == " wins against "){
            $scope.score.homeScore++;
        } 
        else if($scope.matchMessage.matchResult == " loses against ") {
            $scope.score.awayScore++;
        }
    }
    
}]);