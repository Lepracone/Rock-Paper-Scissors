//Variables
let playerScore;
let computerScore;
let playGames = 3;
let totalPlayrScore;
let totalComputerScore;

const dropbtn = document.getElementById("dropbtn");
const playThree = document.getElementById("playThree");
const playFive = document.getElementById("playFive");
const playSeven = document.getElementById("playSeven");
const playNine = document.getElementById("playNine");

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


//Creates random computer choise
let computerPlay = function(){
    let arr = ["Rock", "Paper", "Scissors"];
    return arr[Math.floor(Math.random()*arr.length)];
}

//Plays one round
function playRound(){
    let playerSelection = prompt("Rock, Paper, Scissors?").toLowerCase() ; //Asks user for choise and set it to lower case
    let computerSelection = computerPlay().toLowerCase(); //Calls computerPlay function and set the random generated value to lower case
    
    if(playerSelection === computerSelection){
        console.log("It's a draw, nobody scores on this round!");

    }else if(playerSelection === "rock"){
        if(computerSelection === "paper"){
            computerScore++;
            console.log("You lost this round! Paper beats Rock");
        }else if(computerSelection === "scissors"){
            playerScore++;
            console.log("You won this round! Rock beats Scissors");
        }   

    }else if(playerSelection === "paper"){
        if(computerSelection === "rock"){
            playerScore++;
            console.log("You won this round! Paper beats Rock!");
        }else if(computerSelection === "scissors"){
            computerScore++;
            console.log("You lost this round! Scissors beats Paper!");
        }  

    }else if(playerSelection === "scissors"){
        if(computerSelection === "rock"){
            computerScore++;
            console.log("You lost this round! Rock beats Scissors!");
        }else if(computerSelection === "paper"){
            playerScore++;
            console.log("You won this round! Scissors beats Paper!");
        }  
    }
}

//Starts a 5 round game against CPU
function game(){
    playerScore = 0; //Resets Score
    computerScore =0;

    for(let i = 0; i<5; i++){
        playRound(); //Loop calling the function playRound 5 times
    }

    //Once the loop verify the winner and announce
    if(playerScore > computerScore){
        console.log("You won the game!!!");
    }else if(computerScore > playerScore){
        console.log("You lost the game!!!");
    }else{
        console.log("It's a draw!!!");
    }
}
