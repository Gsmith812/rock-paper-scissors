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

// Create getPlayerChoice that will prompt a user to input their selection
// of the choices and its compared insensitively to the options then returns the users choice
// if none of the choices match the user input alert they need to select one of the three

function getPlayerChoice () {
    let playerChoice = prompt(`Choose your weapon 'Rock', 'Paper', or 'Scissors'?`, '');

    // Compare user input to choices in choice array
    for (let i = 0; i < choices.length; i++) {

        if(choices[i].toUpperCase() === playerChoice.toUpperCase()) {
            playerChoice = choices[i];
            return playerChoice;
        }
    }

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
        result = `You Tied! You both selected ${playerSelection}`;
    } else if ( ((playerChoiceIndex - 1) === computerChoiceIndex) || (computerChoiceIndex === 2 && playerChoiceIndex === 0) ) {
        result = `You Won! ${playerSelection} beats ${computerSelection}`;
    } else {
        result = `You Lose! ${computerSelection} beats ${playerSelection}`;
    }

    // return result

    return result;
}

