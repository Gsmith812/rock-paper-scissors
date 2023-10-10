// Create getComputerChoice function
// That will randomly return one of three strings
// 'Rock', 'Paper', or 'Scissors' randomly
// Create variable with random number from 0-2
// store the computerChoice in a variable
// return computerChoice

function getComputerChoice () {
    let choices = ['Rock', 'Paper', 'Scissors'];
    let randomNumber = Math.floor(Math.random() * 3);
    let computerChoice = choices[randomNumber];
    
    return computerChoice;
}