Array.prototype.random = function () {
    return this[Math.floor((Math.random()*this.length))];
} // selects one random option, found this function on stackoverflow

var options = ["rock", "paper", "scissors"];

let playerScore = 0;
let computerScore = 0;


function playRound() {
    let computerSelection = options.random();
    let playerSelection = prompt("What is your play?\nRock\nPaper\nScissors");

    if ((playerSelection == "paper" && computerSelection == "rock") || (playerSelection == "scissors" && computerSelection == "paper") || (playerSelection == "rock" && computerSelection == "scissors")) {
        playerScore += 1;
        console.log("You won this round!")
    }
    else if (playerSelection == computerSelection) {
        console.log("It's a tie!");
    }
    else if ((computerSelection == "paper" && playerSelection == "rock") || (computerSelection == "scissors" && playerSelection == "paper") || (computerSelection == "rock" && playerSelection == "scissors")) {
        computerScore += 1;
        console.log("Computer won this round :(");
    }
    else {
        console.log("Enter a valid option")
    }
    }

 

while ((playerScore < 5) && (computerScore < 5)) {
    playRound();
}

if (computerScore == 5) {
    console.log("Computer wins! You lost :(")
}
else if (playerScore == 5) {
    console.log("You won! Congrats!")
}