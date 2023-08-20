("LET'S PLAY!!!")

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
    const announceDiv = document.querySelector('#announcement');

    // get the computers selection
    const getComputerChoice = () => {
        // computer choices
        const choices = ['rock', 'paper', 'scissors'];
        // get a number between 0 and 3
        const random = Math.floor(Math.random() * choices.length);
        // return the index of choices
        return choices[random];
    }

    const startGame = (e) => {

        if (numberOfGames < 5) {
            let playerSelection = e.target.id;
            let cpuSelection = getComputerChoice();
            numberOfGames += 1;

            // create the element, manipulate the element, and then place it on page by appending
    
            // div - results box
            const resultsBox = document.createElement('div');
            resultsBox.id = 'results-box';
            resultsBox.textContent = `===== Results of round ${numberOfGames}! =====`;
            resultsBox.style.margin = '16px';
            resultsBox.style.padding = '16px';
            resultsBox.style.border = '2px solid #000000';
            resultsBox.style.backgroundColor = '#3a01ac';
            resultsBox.style.borderRadius = '1.0em';
            resultsBox.style.color = '#FFFFFF';
            resultsBox.style.boxShadow ='2px 2px black';
            resultsBox.style.fontSize = '1.2em';
            resultsBox.style.textShadow = '2px 2px black';

            // player choice
            const playerChoice = document.createElement('p');
            playerChoice.textContent = `Player's selection: ${playerSelection}`;
            resultsBox.appendChild(playerChoice);
    
            // cpu choice
            const cpuChoice = document.createElement('p');
            cpuChoice.textContent = `Computers selection: ${cpuSelection}`;
            resultsBox.appendChild(cpuChoice);

            // outcomes
            const gameOutcome = document.createElement('p');
            resultsBox.appendChild(gameOutcome);

            // number of games
            const gameCounter = document.createElement('p');
            resultsBox.appendChild(gameCounter);

            // scores
            const gameScores = document.createElement('p');
            resultsBox.appendChild(gameScores);

            // announce winner
            const gameWinner = document.createElement('h1');
            gameWinner.style.color = '#FFFFFF';
            gameWinner.style.textShadow = '2px 2px black';
            
            // append the results to the game div
            gameDivSelector.appendChild(resultsBox);

            announceDiv.appendChild(gameWinner);
    
            // ties
            if (playerSelection === cpuSelection) {
                gameOutcome.textContent = `Outcome: Tie!`;
            }
            // player wins
            if (playerSelection === 'rock' && cpuSelection === 'scissors') {
                gameOutcome.textContent = `Outcome: Player wins the match!`;
                playerScore += 1;
            }
            if (playerSelection === 'paper' && cpuSelection === 'rock') {
                gameOutcome.textContent = `Outcome: Player wins the match!`;
                playerScore += 1;
            }
            if (playerSelection === 'scissors' && cpuSelection === 'paper') {
                gameOutcome.textContent = `Outcome: Player wins the match!`;
                playerScore += 1;
            }
            // cpu wins
            if (playerSelection === 'rock' && cpuSelection === 'paper') {
                gameOutcome.textContent = `Outcome: Computer wins the match!`;
                computerScore += 1;
            }
            if (playerSelection === 'paper' && cpuSelection === 'scissors') {
                gameOutcome.textContent = `Outcome: Computer wins the match!`;
                computerScore += 1;
            }
            if (playerSelection === 'scissors' && cpuSelection === 'rock') {
                gameOutcome.textContent = `Outcome: Computer wins the match!`;
                computerScore += 1;
            }

            gameCounter.textContent = `Number of games played: ${numberOfGames}`;
            gameScores.textContent = `Player score: ${playerScore}, Computer score: ${computerScore}`;

            if (numberOfGames === 5) {
                if (playerScore > computerScore) {
                    gameWinner.textContent = `Player wins the game!`;
                } else if (playerScore < computerScore) {
                    gameWinner.textContent = `Computer wins the game!`;
                } else {
                    gameWinner.textContent = `Game was a tie!`;
                }
            }
        }
    }

    buttonSelector.forEach((button) => {
        button.addEventListener('click', startGame);
    });
}

game();