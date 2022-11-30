function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    let choice = choices[Math.floor(Math.random() * choices.length)];
    return choice
}

/*
console.log(getComputerChoice())
*/

function playOneRound() {
    let playerSelection = prompt("Enter one: Rock, Paper, or Scissors").toLowerCase();
    let computerSelection = getComputerChoice(); 
    if(playerSelection === computerSelection) {
        return "Tie!"
    }
    if(playerSelection === "Rock") {
        if(computerSelection === "Scissors") {
            return "Congratulations, you win!";
        } else {
            return "Sorry, you lose.  Better luck next time!";
        }
    }
    if(playerSelection === "Paper") {
        if(computerSelection === "Rock") {
            return "Congratulations, you win!";
        } else {
            return "Sorry, you lose.  Better luck next time!";
        }
    }
    if(playerSelection === "Scissors") {
        if(computerSelection === "Paper") {
            return "Congratulations, you win!";
        } else {
            return "Sorry, you lose.  Better luck next time!";
        }
    }
}