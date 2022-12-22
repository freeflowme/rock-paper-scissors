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

    const scoreDiv = document.querySelector("#scoreDiv");

    if(playerSelection === computerSelection) { 
        const isTie = document.createElement("p");
        isTie.classList.add("isTie");
        isTie.textContent = "This round is a tie!";
        resultsDiv.appendChild(isTie);    
       
    } else if (
        (playerSelection == "rock" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "rock")
    )   { 
            const isLoss = document.createElement("p");
            isLoss.classList.add("isLoss");
            isLoss.textContent = "Sorry... you lose this round!";
            resultsDiv.appendChild(isLoss);

            computerScore++; 

            const lossScore = document.createElement("p");
            lossScore.classList.add("lossScore");
            lossScore.textContent = ${computerScore};
            scoreDiv.appendChild(lossScore);
           
    } else if (
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper")
    )   {
            const isWin = document.createElement("p");
            isWin.classList.add("isWin");
            isWin.textContent = "Congratulations... you win this round!";
            resultsDiv.appendChild(isWin);

            playerScore++;

            const winScore = document.createElement("p");
            winScore.classList.add("winScore");
            winScore.textContent = ${playerScore};
            scoreDiv.appendChild(winScore);
         
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