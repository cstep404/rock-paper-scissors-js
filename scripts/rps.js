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

    buttonSelector.forEach((button) => {
        button.addEventListener('click', (e) => {
            console.log(e.target);
            playerSelection = e.target.id;;

            cpuChoice = getComputerChoice();

            // create the element, manipulate the element, and then place it on page by appending

            // div - results box
            const resultsBox = document.createElement('div');
            resultsBox.textContent = 'Results!'
            gameDivSelector.appendChild(resultsBox);
            
            // playerResults.textContent = `Player chose: ${playerSelection}`;
            // resultsBox.appendChild(playerResults);

            // cpuResults.textContent = `Player chose: ${cpuChoice}`;
            // cpuResults.appendChild(resultsBox);
            
            // ties
            if (playerSelection === 'rock' && cpuChoice === 'rock') {
                console.log('Tie');
            }
            if (playerSelection === 'paper' && cpuChoice === 'paper') {
                console.log('Tie');
            }
            if (playerSelection === 'scissors' && cpuChoice === 'scissors') {
                console.log('Tie');
            }
            // player wins
            if (playerSelection === 'rock' && cpuChoice === 'scissors') {
                console.log('Player wins');
            }
            if (playerSelection === 'paper' && cpuChoice === 'rock') {
                console.log('Player wins');
            }
            if (playerSelection === 'scissors' && cpuChoice === 'paper') {
                console.log('Player wins');
            }
            // cpu wins
            if (playerSelection === 'rock' && cpuChoice === 'paper') {
                console.log('Computer wins');
            }
            if (playerSelection === 'paper' && cpuChoice === 'scissors') {
                console.log('Computer wins');
            }
            if (playerSelection === 'scissors' && cpuChoice === 'rock') {
                console.log('Computer wins');
            }
        });
    });
}

game();