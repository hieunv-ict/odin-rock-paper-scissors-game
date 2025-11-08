function getComputerChoice(){
    let choiceVal = Math.floor(Math.random() * 3)
    console.log(choiceVal);
    if (choiceVal === 0){
        return "rock"
    }
    else if (choiceVal === 1){
        return "paper"
    }
    else{
        return "scissors"
    }
}

let computerScore = 0;
let playerScore = 0;
let roundNum = 0;

function playRound(playerChoice, computerChoice){
    //compare 2 choices to determine round result
    playerWin = false;
    tie = false;

    if (playerChoice === computerChoice){
        tie = true;
    }
    else if (playerChoice === "rock"){
        if (computerChoice === "scissors"){
            playerWin = true;
        }
    }
    else if (playerChoice === "paper"){
        if (computerChoice === "rock"){
            playerWin = true;
        }
    }
    else {
        if (computerChoice === "paper"){
            playerWin = true;
        }
    }
    
    // Capitalize 2 choices to display result
    let playerChoiceCaptitalized = capitalize(playerChoice);
    let computerChoiceCapitalized = capitalize(computerChoice);
    //
    let resultElem = document.querySelector("#result-title");
    let resultContent = "Result : ";
    if (tie){
        resultContent += "This round is tie!";
    }
    else if (playerWin){
        resultElem.classList.remove("lose-msg");
        resultElem.classList.add("win-msg");
        resultContent += `You win! ${playerChoiceCaptitalized} beats ${computerChoiceCapitalized}!`;
        playerScore++;
    }
    else{
        resultElem.classList.remove("win-msg");
        resultElem.classList.add("lose-msg");
        resultContent += `You lose! ${computerChoiceCapitalized} beats ${playerChoiceCaptitalized}!`;
        computerScore++;
    }

    // delete previous round result to display current round result
    resultElem.textContent = "";
    resultElem.textContent = resultContent;
    
    // keep track of the score
    let computerScoreElem = document.querySelector("#computer-score");
    let playerScoreElem = document.querySelector("#player-score");
    playerScoreElem.textContent = playerScore;
    computerScoreElem.textContent = computerScore;
    // keep track the round number
    roundNum++;
    let roundElem = document.querySelector("#round-number");
    roundElem.textContent = roundNum;
    checkForWinner();
}

function capitalize(str){
    return str[0].toUpperCase() + str.slice(1);
}

function checkForWinner(){
    // first reaches 5 is the winner -> player confirm to reset
    let isReset = false;
    if (playerScore === 5){
        isReset = confirm("You are the winner");
    }
    else if (computerScore === 5){
        isReset = confirm("Computer is the winner");
    }
    
    if (isReset){
        location.reload();
    }
}

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

rockBtn.addEventListener("click", (e) => playRound("rock", getComputerChoice()));
paperBtn.addEventListener("click", (e) => playRound("paper", getComputerChoice()));
scissorsBtn.addEventListener("click", (e) => playRound("scissors", getComputerChoice()));