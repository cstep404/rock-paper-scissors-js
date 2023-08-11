console.log("LET'S PLAY!!!")

// main game function
const game = () => {

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
        console.log(e.target);
            let playerSelection = e.target.id;
            let cpuSelection = getComputerChoice();

            // create the element, manipulate the element, and then place it on page by appending

            // div - results box
            const resultsBox = document.createElement('div');
            resultsBox.textContent = 'Results!'
            
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
            if (playerSelection === 'rock' && cpuSelection === 'rock') {
                console.log('Tie');
            }
            if (playerSelection === 'paper' && cpuSelection === 'paper') {
                console.log('Tie');
            }
            if (playerSelection === 'scissors' && cpuSelection === 'scissors') {
                console.log('Tie');
            }
            // player wins
            if (playerSelection === 'rock' && cpuSelection === 'scissors') {
                console.log('Player wins');
            }
            if (playerSelection === 'paper' && cpuSelection === 'rock') {
                console.log('Player wins');
            }
            if (playerSelection === 'scissors' && cpuSelection === 'paper') {
                console.log('Player wins');
            }
            // cpu wins
            if (playerSelection === 'rock' && cpuSelection === 'paper') {
                console.log('Computer wins');
            }
            if (playerSelection === 'paper' && cpuSelection === 'scissors') {
                console.log('Computer wins');
            }
            if (playerSelection === 'scissors' && cpuSelection === 'rock') {
                console.log('Computer wins');
            }
    }

    buttonSelector.forEach((button) => {
        button.addEventListener('click', startGame);
    });
}

game();