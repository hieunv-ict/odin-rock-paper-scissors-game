function getComputerChoice(){
    choiceVal = Math.floor(Math.random() * 3)
    if (choiceVal === 0){
        return "Rock"
    }
    else if (choiceVal === 1){
        return "Paper"
    }
    else{
        return "Scissors"
    }
}

function getHumanChoice(){
    let playerChoice = prompt("Enter your choice. Press cancel to exit the game: ")
    return playerChoice
}

let computerScore = 0
let playerScore = 0
function playRound(playerChoice, computerChoice){
    //make playerChoice case-insensitive
    let playerChoiceLowerCase = String(playerChoice).toLowerCase()
    let computerChoiceLowerCase = String(computerChoice).toLowerCase()

    //compare 2 choices to determine round result
    playerWin = false;
    tie = false;

    if (playerChoiceLowerCase === computerChoiceLowerCase){
        tie = true;
    }
    else if (playerChoiceLowerCase === "rock"){
        if (computerChoiceLowerCase === "scissors"){
            playerWin = true;
        }
    }
    else if (playerChoiceLowerCase === "paper"){
        if (computerChoiceLowerCase === "rock"){
            playerWin = true;
        }
    }
    else {
        if (computerChoiceLowerCase === "paper"){
            playerWin = true;
        }
    }

    //Process the choices to capitalized format
    playerChoiceCaptitalized = captitalize(playerChoiceLowerCase)
    computerChoiceCapitalized = captitalize(computerChoiceLowerCase)
    //change score based on 2 result
    if (tie){
        console.log("This round is tie!")
    }
    else if (playerWin){
        console.log(`You win! ${playerChoiceCaptitalized} beats ${computerChoiceCapitalized}!`)
        playerScore++
    }
    else{
        console.log(`You lose! ${computerChoiceCapitalized} beats ${playerChoiceCaptitalized}!`)
        computerScore++
    }
    //print result of the round
    console.log(`Player: ${playerScore} \nComputer: ${computerScore}`)
}

function captitalize(str){
    let tmp = String(str)
    let strArr = tmp.split('')
    strArr[0] = strArr[0].toUpperCase()
    let res = strArr.join("")
    return res
}


function playGame(){
    
    for (let i = 0; i < 5; i++){
        
        let playerChoice = getHumanChoice()
        console.log(playerChoice)
        if (playerChoice == null || playerChoice == ""){
            console.log("You have exited.")
            return
        }
        
        console.log("Round " +(i+1))
        playRound(playerChoice, getComputerChoice())
    }
    if (playerScore > computerScore){
        alert("You win the game!")
    }
    else if (computerScore > playerScore){
        alert("Computer win the game!")
    }
    else{
        alert("The game is tie!")
    }
}

playGame()