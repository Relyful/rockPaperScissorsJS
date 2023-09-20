function getComputerChoice() {
    let computerChoice;
    let x = Math.floor(Math.random() * 100); //get number between 0 and 99 to be used in computers decision
    
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
    if (playerSelection != 'rock' && playerSelection != 'paper' && playerSelection != 'scissors') {
        return 'Make a valid choice!'
    }
    console.log(`Computer chose: ${computerSelection}.`)
    if (playerSelection === 'rock') {
        if (computerSelection === 'rock') {                //get results if player chose rock
            return 2
        }
        else if (computerSelection === 'paper') {
            return 0
        }
        else {
            return 1
        }      
    }

    if (playerSelection === 'paper') {                    //get results if player chose paper
        if (computerSelection === 'rock') { 
            return 1
        }
        else if (computerSelection === 'paper') {
            return 2
        }
        else {
            return 0
        }
    }

    if (playerSelection === 'scissors') {                  //get results if player chose scissors
        if (computerSelection === 'rock') {
            return 0
        }
        else if (computerSelection === 'paper') {
            return 1
        }
        else {
            return 2
        }
    }
}

const btnRock = document.querySelector('#rock');
const btnPaper = document.querySelector('#paper');
const btnScissors = document.querySelector('#scissors');

    
let scoreComputer = 0;
let scorePlayer = 0;
let scoreTie = 0;
function game(playerSelection) {
    let result = rpsRound(playerSelection, getComputerChoice());
    if (result == 0) {
        scoreComputer = scoreComputer + 1;
        console.log('Computer wins!!!');
    }
    else if (result == 1) {
        scorePlayer = scorePlayer + 1;
        console.log('Player wins!!!');
    }
    else {
        scoreTie = scoreTie + 1;
        console.log('Tie!!!');
    }
    console.log(`Player score: ${scorePlayer} ` + `Computer score: ${scoreComputer} ` + `Ties: ${scoreTie} `);
}

// game();
btnRock.addEventListener('click', function() {game('rock')});
btnPaper.addEventListener('click', function() { game('paper')});
btnScissors.addEventListener('click', function() { game('scissors')});