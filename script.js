let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;

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
    const youChose = document.createElement("p");
        youChose.classList.add("youChose");
        youChose.textContent = "You chose " + playerSelection;
        selectionDiv.appendChild(youChose);
    const compyChose = document.createElement("p");
        compyChose.classList.add("compyChose");
        compyChose.textContent = "The computer chose " + computerSelection; 
        selectionDiv.appendChild(compyChose);

    /*    
    console.log(playerSelection)
    console.log(computerSelection)
    */

    const resultsDiv = document.querySelector("#resultsDiv");

    if(playerSelection === computerSelection) { 
        const isTie = document.createElement("p");
        isTie.classList.add("isTie");
        isTie.textContent = "It's a tie!";
        resultsDiv.appendChild(isTie);    
        /*
        alert("Tie!");
        */
        return "Tie!";
    } else if (
        (playerSelection == "rock" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "rock")
    )   { 
            const isLoss = document.createElement("p");
            isLoss.classList.add("isLoss");
            isLoss.textContent = "Sorry... you lose";
            resultsDiv.appendChild(isLoss);
            /*    
            alert("Loss!");
            */
            return "Loss!";
    } else if (
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper")
    )   {
            const isWin = document.createElement("p");
            isWin.classList.add("isWin");
            isWin.textContent = "Congratulations... you win!";
            resultsDiv.appendChild(isWin);
            /*
            alert("Win!");
            */
            return "Win!";
    }
}


function game() {
    for(let i = 1; i < 5; i++) {
        playRound();
    }
}


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