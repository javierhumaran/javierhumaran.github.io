var rock = 0, paper = 1, scissors = 2, lizard = 3, spock = 4;

var homeScore = 0, awayScore = 0;

var userResult = "", matchResult, pcResult = "";

function randomNumber(max){
    var number = Math.floor(Math.random() * max);
    return number;
}

function switchChoice(choice) {
    switch(choice) {
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
}

function userChoice(weapon) {
    
    var pcChoice = randomNumber(5);
    
    userResult = switchChoice(weapon);
    pcResult = switchChoice(pcChoice);
    
    if(weapon == pcChoice){
        userResult = "";
        pcResult = "";
        matchResult = "It's a Draw";
    }
    else if(weapon == rock) {
        if (pcChoice == paper || pcChoice == spock) {
            matchResult = " loses against ";
        }
        else if (pcChoice == scissors || pcChoice == lizard) {
            matchResult = " wins against ";
        }
    } 
    else if (weapon == paper){
        if (pcChoice == scissors || pcChoice == lizard) {
            matchResult = " loses against ";
        }
        else if (pcChoice == spock || pcChoice == rock) {
            matchResult = " wins against ";
        }
    }
    else if (weapon == scissors){
        if (pcChoice == spock || pcChoice == rock) {
            matchResult = " loses against ";
        }
        else if (pcChoice == lizard || pcChoice == paper) {
            matchResult = " wins against ";
        }
    }
    else if (weapon == lizard){
        if (pcChoice == rock || pcChoice == scissors) {
            matchResult = " loses against ";
        }
        else if (pcChoice == spock || pcChoice == paper) {
            matchResult = " wins against ";
        }
    }
    else if (weapon == spock){
        if (pcChoice == paper || pcChoice == lizard) {
            matchResult = " loses against ";
        }
        else if (pcChoice == rock || pcChoice == scissors) {
            matchResult = " wins against ";
        }
    }
    
    if(matchResult == " wins against "){
        homeScore++;
        document.getElementById('home-score').innerHTML = homeScore;
    } 
    else if(matchResult == " loses against ") {
        awayScore++;
        document.getElementById('away-score').innerHTML = awayScore;
    } 
    
    document.getElementById('match-message').getElementsByTagName('h1')[0].innerHTML = userResult + matchResult + pcResult + "!";
}
