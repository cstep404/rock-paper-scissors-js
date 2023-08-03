console.log("LET'S PLAY!!!")

// main game function
const game = () => {

    // selectors
    const buttonSelector = document.querySelectorAll('.btn');
    const resultsBox = document.querySelector('#results');

    // div - results box
    resultsBox.textContent = 'Results!'

    // player results
    const playerResults = document.createElement('p');
    playerResults.style.color = 'green';

    // computer results
    const cpuResults = document.createElement('p');
    cpuResults.style.color = 'white';

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
            playerResults.textContent = `Player chose: ${playerSelection}`;
            playerResults.appendChild(resultsBox);
            cpuResults.textContent = `Player chose: ${cpuChoice}`;
            cpuResults.appendChild(resultsBox);
            
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