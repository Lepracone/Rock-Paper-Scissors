//Variables
let playerScore = 0;
let computerScore = 0;
let playGames = 3;
let totalPlayerScore = 0;
let totalComputerScore = 0;
let onHold = true;
let playerSelection;

const dropbtn = document.getElementById("dropbtn");
const playThree = document.getElementById("playThree");
const playFive = document.getElementById("playFive");
const playSeven = document.getElementById("playSeven");
const playNine = document.getElementById("playNine");
const userScore = document.getElementById("userScore");
const cpuScore = document.getElementById("cpuScore");
const resetScore = document.getElementById("resetScore");
const instantUserScore = document.getElementById("instantUserScore");
const instantCpuScore = document.getElementById("instantCpuScore");
const messageBoard = document.getElementById("messageBoard");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const newGame = document.getElementById("newGame");
const playerImage = document.getElementById("playerImage");
const cpuImage = document.getElementById("cpuImage");


//Best of dropdown
playThree.addEventListener("click", function(){
    playGames = 3;
    dropbtn.textContent = 3;
});

playFive.addEventListener("click", function(){
    playGames = 5;
    dropbtn.textContent = 5;
});

playSeven.addEventListener("click", function(){
    playGames = 7;
    dropbtn.textContent = 7;
});

playNine.addEventListener("click", function(){
    playGames = 9;
    dropbtn.textContent = 9;
});

//Reset Score
resetScore.addEventListener("click", function(){
    totalPlayerScore = 0;
    totalComputerScore = 0;
    playerScore = 0;
    computerScore = 0;
    userScore.textContent = 0;
    cpuScore.textContent = 0;
})

//Player Selection
rock.addEventListener("click", function(){
    playerSelection = "rock";
    if(onHold === false){
        if(playerScore == playGames || computerScore == playGames){
            endGame();
        }else{
            playRound();
        }
    }      
});

paper.addEventListener("click", function(){
    playerSelection = "paper";
    if(onHold === false){
        if(playerScore == playGames || computerScore == playGames){
            endGame();
        }else{
            playRound();
        }
    } 
});
scissors.addEventListener("click", function(){
    playerSelection = "scissors";
    if(onHold === false){
        if(playerScore == playGames || computerScore == playGames){
            endGame();
        }else{
            playRound();
        }
    } 
});

//Creates random computer choise
let computerPlay = function(){
    let arr = ["Rock", "Paper", "Scissors"];
    return arr[Math.floor(Math.random()*arr.length)];
}

//Plays one round
function playRound(){
    let computerSelection = computerPlay().toLowerCase(); //Calls computerPlay function and set the random generated value to lower case
    playerImage.innerHTML = '<img src="img/'+playerSelection+'.JPG">';
    cpuImage.innerHTML = '<img src="img/'+computerSelection+'.JPG">'
    if(playerSelection === computerSelection){
        messageBoard.textContent = "It's a draw!";

    }else if(playerSelection === "rock"){
        if(computerSelection === "paper"){
            computerScore++;
            instantCpuScore.textContent = computerScore;
            messageBoard.textContent = "You lost this round! Paper beats Rock";
        }else if(computerSelection === "scissors"){
            playerScore++;
            instantUserScore.textContent = playerScore;
            messageBoard.textContent = "You won this round! Rock beats Scissors";
        }   

    }else if(playerSelection === "paper"){
        if(computerSelection === "rock"){
            playerScore++;
            instantUserScore.textContent = playerScore;
            messageBoard.textContent ="You won this round! Paper beats Rock!";
        }else if(computerSelection === "scissors"){
            computerScore++;
            instantCpuScore.textContent = computerScore;
            messageBoard.textContent ="You lost this round! Scissors beats Paper!";
        }  

    }else if(playerSelection === "scissors"){
        if(computerSelection === "rock"){
            computerScore++;
            instantCpuScore.textContent = computerScore;
            messageBoard.textContent ="You lost this round! Rock beats Scissors!";
        }else if(computerSelection === "paper"){
            playerScore++;
            instantUserScore.textContent = playerScore;
            messageBoard.textContent ="You won this round! Scissors beats Paper!";
        }  
    }
    if(playerScore == playGames || computerScore == playGames){
        endGame();
    }
}

//Starts a game with multiple rounds
function gameReset(){
    playerScore = 0; //Resets Score
    computerScore = 0;
    instantCpuScore.textContent = computerScore;
    instantUserScore.textContent = playerScore;
}

function endGame(){
    //Once the loop finishes verify the winner and announce
    if(playerScore == playGames){
        messageBoard.textContent = "You won the game!!! Press New Game to play again!";
        totalPlayerScore++;
        userScore.textContent = totalPlayerScore;
        onHold = true;

    }else if((computerScore == playGames)){
        messageBoard.textContent = "You lost the game!!! Press New Game to play again!";
        totalComputerScore++;
        cpuScore.textContent = totalComputerScore;
        onHold = true;
    }
}
    


//New Game Button

newGame.addEventListener("click", function(){
    onHold = false;
    messageBoard.textContent = "Choose your weapon!";
    gameReset();

})

//Reset total score Button
resetScore.addEventListener("click", function(){
    totalPlayerScore = 0;
    totalComputerScore = 0;
    userScore.textContent = 0;
    cpuScore.textContent = 0;
    onHold = true;
    messageBoard.textContent = "Press New Game to play again!"
})
