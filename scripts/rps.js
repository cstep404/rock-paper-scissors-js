console.log("lets play!")

const choices = ["rock", "paper", "scissors"];

const getComputerChoice = () => {
    // get a number between 0 and 3
    const random = Math.floor(Math.random() * choices.length);
    console.log(random, choices[random]);
    // return the index of choices
    return choices[random];
}

// call the computer choice function
getComputerChoice()