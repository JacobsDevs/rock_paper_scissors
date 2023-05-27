/* ROCK, PAPER, SCISSORS!

We need to start by: Getting computer choice
getComputerChoice() from a random number between 1 and 3

*/ 


//get choice from computer, rock = 1, paper = 2, scissors = 3
function getComputerChoice(){
    let computerChoice = (Math.floor(Math.random() * 100) % 3) + 1;
    return computerChoice;
}

//Get choice from player with prompt and convert to 1 2 3 
function getPlayerChoice(){
    let playerChoice = prompt("rock, paper or scissors?")
    playerChoice = playerChoice.toLowerCase();
    if (playerChoice == "rock"){
        playerChoice = Number(1);
    } else if (playerChoice == "paper") {
        playerChoice = Number(2);
    } else if (playerChoice == "scissors") {
        playerChoice = Number(3);
    }
    return playerChoice;
}

let choices = ["rock", "paper", "scissors"]

//Get choices, Display Choices and Choose victor.
function decide(){
    let computerChoice = getComputerChoice();
    let playerChoice = getPlayerChoice();
    console.log(`Computer has chosen ${choices[computerChoice - 1]} and you have chosen ${choices[playerChoice - 1]}`);
    if (computerChoice == playerChoice) {
        console.log("It's a tie!")
    }else if ((computerChoice == (playerChoice - 1) && computerChoice < 3) || (computerChoice == 3 && playerChoice == 1)){
        console.log("You Win!");
        return 1;
    }else {
        console.log("You Lose!");
        return 2;
    }

}

//run the game 5 times and tally the winner.
function game(){
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++){
        let result = decide();
        if (result == 1){
            playerScore++;
        } else if (result == 2) {
            computerScore++;
        } 
    }

//Print scores and decide winner or tie
    console.log(`Computer Score: ${computerScore} \n Player Score: ${playerScore}`)
    if (computerScore > playerScore){
        console.log("You LOST!");
    }else if (computerScore < playerScore){
        console.log("You WIN!!!");
    }else {
        console.log("TIE!");
    }
}