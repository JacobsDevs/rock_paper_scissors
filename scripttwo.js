/*
ROCK PAPER SCISSORS

Legend will be:
1 = Rock
2 = Paper
3 = Scissors
*/

/*Get array of possible options*/
let options = ["Rock", "Paper", "Scissors"];
let playerNumber = 0;
let pcNumber = 0;
let playerTotal = 0;
let pcTotal = 0;

const scoreBoard = document.getElementById("h2");

function getPlayerChoice(choice) {
    if (choice == "rock") { 
        choice = 0;
    } else if (choice == "paper") {
        choice = 1;
    } else if (choice == "scissors") {
        choice = 2;
    }
    return choice;
}

function getComputerChoice() {
    choice = Math.floor(Math.random() * 3) + 1;
    return choice
}

function getChoices(playerChose) {
    let computerChoice = getComputerChoice();
    let playerChoice = playerChose;

}

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', playerChoice);
    button.addEventListener('click', pcChoice);
    button.addEventListener('click', getWinner);
})

function playerChoice() {
    if (scoreBoard.innerText != "SCOREBOARD!"){
        scoreBoard.innerText = "SCOREBOARD!";
    }
    const thePlayerChoice = document.getElementById("thechoice");
    playerNumber = getPlayerChoice(this.id);
    thePlayerChoice.innerText = options[playerNumber];
}

function pcChoice() {
    const theComputerChoice = document.getElementById("thepcchoice");
    pcNumber = getComputerChoice() - 1;
    theComputerChoice.innerText = options[pcNumber];
}

function updateScores() {
    const playerScoreText = document.getElementById("playerscore");
    const pcScoreText = document.getElementById("pcscore");
    playerScoreText.innerText = playerTotal;
    pcScoreText.innerText = pcTotal;
}

function getWinner() {
    if (pcNumber == playerNumber) {
        console.log("It's a tie!")
    }else if (pcNumber == playerNumber - 1 || pcNumber == 2 && playerNumber == 0){
        playerTotal++;
    }else {
        pcTotal++;
    }
    updateScores();
    if (playerTotal == 5) {
        scoreBoard.innerText = "Player Wins!!!"
        playerTotal = 0;
        pcTotal = 0;
        updateScores();
    } else if (pcTotal == 5) {
        scoreBoard.innerText = "Computer Wins!!!"
        playerTotal = 0;
        pcTotal = 0;
        updateScores();
    }
}