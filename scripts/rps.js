console.log("LET'S PLAY!!!")

// main game function
const game = () => {

    // vars
    let playerChoice;

    // selectors
    const rockSelector = document.querySelector('#rock');
    const paperSelector = document.querySelector('#paper');
    const scissorsSelector = document.querySelector('#scissors');

    const buttonSelector = document.querySelectorAll('.btn');

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
            console.log(`Button clicked: ${e.target.id}`);
            playerChoice = e.target.id;;
            cpuChoice = getComputerChoice();
            console.log(`Player chose: ${playerChoice}`);
            console.log(`Computer chose: ${cpuChoice}`);
            // ties
            if (playerChoice === 'rock' && cpuChoice === 'rock') {
                console.log('Tie');
            }
            if (playerChoice === 'paper' && cpuChoice === 'paper') {
                console.log('Tie');
            }
            if (playerChoice === 'scissors' && cpuChoice === 'scissors') {
                console.log('Tie');
            }
            // player wins
            if (playerChoice === 'rock' && cpuChoice === 'scissors') {
                console.log('Player wins');
            }
            if (playerChoice === 'paper' && cpuChoice === 'rock') {
                console.log('Player wins');
            }
            if (playerChoice === 'scissors' && cpuChoice === 'paper') {
                console.log('Player wins');
            }
            // cpu wins
            if (playerChoice === 'rock' && cpuChoice === 'paper') {
                console.log('Computer wins');
            }
            if (playerChoice === 'paper' && cpuChoice === 'scissors') {
                console.log('Computer wins');
            }
            if (playerChoice === 'scissors' && cpuChoice === 'rock') {
                console.log('Computer wins');
            }
        });
    });

    
    

}

game();