Array.prototype.random = function () {
    return this[Math.floor((Math.random()*this.length))];
}
var options = ["rock", "paper", "scissors"];

function getComputerChoice() {
    let computerSelection = options.random();
}
function playRound(playerSelection, computerSelection) {

const playerSelection = prompt("What is your play?\nRock\nPaper\nScissors");
const computerSelection = getComputerChoice();
playRound()