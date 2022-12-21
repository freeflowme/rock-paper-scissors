let playerSelection;
let computerSelection;


function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    let choice = choices[Math.floor(Math.random() * choices.length)];
    return choice
}

/*
console.log(getComputerChoice())
*/

function playRound() {
    playerSelection = prompt("Enter one: Rock, Paper, or Scissors").toLowerCase();
    computerSelection = getComputerChoice().toLowerCase();


    console.log(playerSelection)
    console.log(computerSelection)


    if(playerSelection === computerSelection) {
        alert("Tie!");
        return "Tie!";
    } else if (
        (playerSelection == "rock" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "rock")
    )   {
            alert("Loss!");
            return "Loss!";
    } else if (
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper")
    )   {
            alert("Win!");
            return "Win!";
    }
}

/*
function game() {
    for(let i = 1; i < 5; i++) {
        playRound();
    }
}

game ()
*/

const rockbtn = document.querySelector("#rockbtn");
rockbtn.addEventListener('click', () => {
    playRound("Rock");
}) 

const paperbtn = document.querySelector("#paperbtn");
paperbtn.addEventListener('click', () => {
    playRound("Paper");
})

const scissorsbtn = document.querySelector("#scissorsbtn");
scissorsbtn.addEventListener('click', () => {
    playRound("Scissors");
})