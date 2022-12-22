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

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = getComputerChoice().toLowerCase();

    const selectionDiv = document.querySelector("#selectionDiv");
    
    const youChose = document.createElement('p');
        youChose.classList.add('youChose');
        youChose.textContent = "You chose " + playerSelection;

    selectionDiv.appendChild(youChose);

    const compyChose = document.querySelector("#selectionDiv");
        compyChose.classList.add('compyChose');
        compyChose.textContent = "The computer chose " +computerSelection; 

    /*    
    console.log(playerSelection)
    console.log(computerSelection)
    */

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

const rockbBtn = document.querySelector("#rockBtn");
rockBtn.addEventListener('click', () => {
    playRound("Rock");
}) 

const paperBtn = document.querySelector("#paperBtn");
paperBtn.addEventListener('click', () => {
    playRound("Paper");
})

const scissorsBtn = document.querySelector("#scissorsBtn");
scissorsBtn.addEventListener('click', () => {
    playRound("Scissors");
})