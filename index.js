// Create constant global variable for set of choices for game

const choices = ['Rock', 'Paper', 'Scissors'];

// Create getComputerChoice function
// That will randomly return one of three strings
// 'Rock', 'Paper', or 'Scissors' randomly
// Create variable with random number from 0-2
// store the computerChoice in a variable
// return computerChoice

function getComputerChoice () {

    let randomNumber = Math.floor(Math.random() * 3);
    let computerChoice = choices[randomNumber];
    
    return computerChoice;
}

// Create playRound() function that takes two parameters
// playerSelection and computerSelection
// compare playerSelection with compterSelection to return either two strings
// 'You win! playerSelection beats computerSelection!
// OR 'You lose! computerChoice beats playerChoice!
// OR 'You tied!'

function playRound(playerSelection, computerSelection) {
    let result;
    // Create index variables for playerSelection and computerSelection to reduce conditional size
    let playerChoiceIndex = choices.indexOf(playerSelection);
    let computerChoiceIndex = choices.indexOf(computerSelection);

    //conditonals to handle results of round
    //using comparison operators to compare index values of each selection in the choices array
    if (playerChoiceIndex === computerChoiceIndex) {
        result = [`You Tied! You both selected ${playerSelection}`, 'Tied'];
    } else if ( ((playerChoiceIndex - 1) === computerChoiceIndex) || (computerChoiceIndex === 2 && playerChoiceIndex === 0) ) {
        result = [`You Won! ${playerSelection} beats ${computerSelection}`, 'Win'];
    } else {
        result = [`You Lose! ${computerSelection} beats ${playerSelection}`, 'Loss'];
    }

    // return result
    return result;
}

const btns = document.querySelectorAll('button');

const scoreDiv = document.querySelector('.score');
const gameResult = document.querySelector('.gameResult');

let playerScore = 0;
let computerScore = 0;

scoreDiv.innerText = `Player Score: ${playerScore}   Computer Score: ${computerScore}`;

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        const roundResult = document.querySelector('.roundResult');
        gameResult.innerText = '';

        result = playRound(btn.innerText, getComputerChoice());
        roundResult.innerText = result[0];
        if(result[1] === 'Win') {
            playerScore++;
            scoreDiv.innerText = `Player Score: ${playerScore} vs. Computer Score: ${computerScore}`;
        } else if (result[1] === 'Loss') {
            computerScore++;
            scoreDiv.innerText = `Player Score: ${playerScore} vs. Computer Score: ${computerScore}`;
        }

        // Logic for reaching a score of 5

        if(playerScore === 5 && playerScore > computerScore) {
            // reset scores
            playerScore = 0;
            computerScore = 0;
            
            gameResult.innerText = 'Congratulations! You beat the Computer!';
            
        } else if (computerScore === 5 && computerScore > playerScore) {
            playerScore = 0;
            computerScore = 0;
            
            gameResult.innerText = 'Game Over! You Lost!';
        }

        
    });
})

