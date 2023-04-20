console.log("LET'S PLAY")

// main game function
const game = () => {

    let numberOfGames = 0;
    let playerScore = 0;
    let computerScore = 0;

    while (numberOfGames < 5) {

        let playersTurn = true;

        let playerSelection;

        // get the computers selection
        const getComputerChoice = () => {
            // computer choices
            const choices = ["rock", "paper", "scissors"];
            // get a number between 0 and 3
            const random = Math.floor(Math.random() * choices.length);
            // return the index of choices
            return choices[random];
        }

        const playGame = (playerSelection, computerSelection) => {
            // validate players choice: must be either rock, paper or scissors. cannot be an integer or other word
            while (playersTurn === true) {
                const playerChoice = prompt("Please enter your choice: Rock, Paper, or Scissors");
                if (playerChoice.toLowerCase() === "rock" || playerChoice.toLowerCase() === "paper" || playerChoice.toLowerCase() === "scissors") {
                    playerSelection = playerChoice.toLowerCase();
                    playersTurn = false;
                } else {
                    console.log("Please enter a valid selection")
                }
            }

            console.log(`player chose: ${playerSelection}`)
            console.log(`computer chose: ${computerSelection}`)

            // rock outcomes
            if (playerSelection === "rock" && computerSelection === "rock") {
                console.log("tie")
                numberOfGames += 1;
            } else if (playerSelection === "rock" && computerSelection === "paper") {
                console.log("computer wins")
                computerScore += 1;
                numberOfGames += 1;
            } else if (playerSelection === "rock" && computerSelection === "scissors") {
                console.log("player wins")
                playerScore += 1;
                numberOfGames += 1;
                // paper outcomes
            } else if (playerSelection === "paper" && computerSelection === "rock") {
                console.log("player wins")
                playerScore += 1;
                numberOfGames += 1;
            } else if (playerSelection === "paper" && computerSelection === "paper") {
                console.log("tie")
                numberOfGames += 1;
            } else if (playerSelection === "paper" && computerSelection === "scissors") {
                console.log("computer wins")
                computerScore += 1;
                numberOfGames += 1;
                // scissor outcomes
            } else if (playerSelection === "scissors" && computerSelection === "rock") {
                console.log("computer wins")
                computerScore += 1;
                numberOfGames += 1;
            } else if (playerSelection === "scissors" && computerSelection === "paper") {
                console.log("player wins")
                playerScore += 1;
                numberOfGames += 1;
            } else if (playerSelection === "scissors" && computerSelection === "scissors") {
                console.log("tie");
                numberOfGames += 1;
            } else {
                console.log('something got messed up!')
            }
        }
        playGame(playerSelection, getComputerChoice());
        console.log(`player score: ${playerScore}`)
        console.log(`cpu score: ${computerScore}`)
        console.log(`games played: ${numberOfGames}`)
    }

}

game();