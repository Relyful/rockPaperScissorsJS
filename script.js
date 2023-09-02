function getComputerChoice() {
    let computerChoice;
    let x = Math.floor(Math.random() * 100); //get number between 0 and 99 to be used in computers decision
    console.log(x);

    if (x < 32) {
        return 'rock';
    }
    else if (x >= 32 && x < 77) {
        return 'paper';
    }
    else {
        return 'scissors';
    }
}

function rpsRound(playerSelection, computerSelection) { //plays a round of RPS and returns winner
    if (playerSelection === 'rock') {
        if (computerSelection === 'rock') {                //get results if player chose rock
            return 'Tie! Rock vs Rock!'
        }
        else if (computerSelection === 'paper') {
            return 'You lose! Paper beats Rock!'
        }
        else {
            return 'You Win! Rock beats Scissors!'
        }      
    }

    if (playerSelection === 'paper') {                    //get results if player chose paper
        if (computerSelection === 'rock') { 
            return 'You Win! Paper beats Rock!'
        }
        else if (computerSelection === 'paper') {
            return 'Tie! Paper vs Paper!'
        }
        else {
            return 'You Lose! Scissors beat Paper!'
        }
    }

    if (playerSelection === 'scissors') {                  //get results if player chose scissors
        if (computerSelection === 'rock') {
            return 'You Lose! Rock beats Scissors!'
        }
        else if (computerSelection === 'paper') {
            return 'You Win! Scissors beat Paper!'
        }
        else {
            return 'Tie! Scissors vs Scissors!'
        }
    }
}


console.log(rpsRound());