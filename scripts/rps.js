console.log("lets play!")

const choices = ["rock", "paper", "scissors"];

const getComputerChoice = () => {
    // get a number between 0 and 3
    const random = Math.floor(Math.random() * choices.length);
    console.log(random, choices[random]);
    // return the index of choices
    return choices[random];
}

let playersTurn = true;

let playerSelection;

while (playersTurn === true) {
    const playerChoice = prompt("Please enter your choice: Rock, Paper, or Scissors");
    // log the players decision
    console.log('player choice:', playerChoice);
    console.log(typeof(playerChoice))
    if (playerChoice.toLowerCase() === "rock" || playerChoice.toLowerCase() === "paper" || playerChoice.toLowerCase() === "scissors") {
        playerSelection = playerChoice.toLowerCase();
        playersTurn = false;
    } else {
        console.log("Please enter a valid selection")
    }
}

// check player selection after loop
console.log(playerSelection);

const playGame = (playerSelection, computerSelection) => {
    console.log(`player chose: ${playerSelection}`)
    console.log(`computer chose: ${computerSelection}`)
    // rock outcomes
    if (playerSelection === "rock" && computerSelection === "rock") {
        console.log("tie")
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        console.log("computer wins")
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        console.log("player wins")
        // paper outcomes
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        console.log("player wins")
    } else if (playerSelection === "paper" && computerSelection === "paper") {
        console.log("tie")
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        console.log("computer wins")
        // scissor outcomes
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        console.log("computer wins")
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        console.log("player wins")
    } else if (playerSelection === "scissors" && computerSelection === "scissors") {
        console.log("tie")
    } else {
        console.log('something got messed up!')
    }
}

playGame(playerSelection, getComputerChoice());