console.log("LET'S PLAY!!!")

// main game function
const game = () => {

    // vars
    let numberOfGames = 0;
    let playerScore = 0;
    let computerScore = 0;

    // selectors
    const buttonSelector = document.querySelectorAll('.btn');
    // selects the div named game
    const gameDivSelector = document.querySelector('#game');

    // get the computers selection
    const getComputerChoice = () => {
        // computer choices
        const choices = ["rock", "paper", "scissors"];
        // get a number between 0 and 3
        const random = Math.floor(Math.random() * choices.length);
        // return the index of choices
        return choices[random];
    }

    const startGame = (e) => {

        if (numberOfGames < 5) {
            console.log(e.target);
            let playerSelection = e.target.id;
            let cpuSelection = getComputerChoice();
            numberOfGames += 1;
            // create the element, manipulate the element, and then place it on page by appending
    
            // div - results box
            const resultsBox = document.createElement('div');
            resultsBox.textContent = `Results of round ${numberOfGames}!`
            
            // player choice
            const playerChoice = document.createElement('p');
            playerChoice.textContent = `Player's selection: ${playerSelection}`;
            resultsBox.appendChild(playerChoice);
    
            // cpu choice
            const cpuChoice = document.createElement('p');
            cpuChoice.textContent = `Computers selection: ${cpuSelection}`;
            resultsBox.appendChild(cpuChoice);
    
            gameDivSelector.appendChild(resultsBox);
    
            // ties
            if (playerSelection === cpuSelection) {
                console.log('Tie');
            }
            // player wins
            if (playerSelection === 'rock' && cpuSelection === 'scissors') {
                console.log('Player wins');
                playerScore += 1;
            }
            if (playerSelection === 'paper' && cpuSelection === 'rock') {
                console.log('Player wins');
                playerScore += 1;
            }
            if (playerSelection === 'scissors' && cpuSelection === 'paper') {
                console.log('Player wins');
                playerScore += 1;
            }
            // cpu wins
            if (playerSelection === 'rock' && cpuSelection === 'paper') {
                console.log('Computer wins');
                computerScore += 1;
            }
            if (playerSelection === 'paper' && cpuSelection === 'scissors') {
                console.log('Computer wins');
                computerScore += 1;
            }
            if (playerSelection === 'scissors' && cpuSelection === 'rock') {
                console.log('Computer wins');
                computerScore += 1;
            }
            console.log(`number of games: ${numberOfGames}`);
            console.log(`playerScore: ${playerScore}`);
            console.log(`computerScore: ${computerScore}`)
            if (numberOfGames === 5) {
                if (playerScore > computerScore) {
                    console.log(`player wins the game`);
                } else if (playerScore < computerScore) {
                    console.log(`computer wins the game`);
                } else {
                    console.log(`tie!`);
                }
            }
        }
    }

    buttonSelector.forEach((button) => {
        button.addEventListener('click', startGame);
    });
}

game();