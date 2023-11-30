function getComputerChoice() {
    const computerOptions = ["rock", "paper", "scissors"];
    const randomNumber = Math.floor(Math.random() * 3);
    return computerOptions[randomNumber]; 
}

function playGameRound(playerChoice) {
    let gameResult;
    const computerChoice = getComputerChoice();

    playerChoice = prompt("Type rock, paper, or scissors: ", "rock, paper, or scissors");

    if (playerChoice.toLowerCase() == "rock" || playerChoice.toLowerCase() == "paper" || playerChoice.toLowerCase() == "scissors") {
        if (playerChoice.toLowerCase() == "rock" && computerChoice == "scissors") {
            gameResult = "Computer chose scissors.\nYou win! Rock beats scissors.";
        } else if (playerChoice.toLowerCase() == "paper" && computerChoice == "rock") {
            gameResult = "Computer chose rock.\nYou win! Paper beats rock.";
        } else if (playerChoice.toLowerCase() == "scissors" && computerChoice == "paper") {
            gameResult = "Computer chose paper.\nYou win! Scissors beats paper."; 
        } else if (playerChoice.toLowerCase() == "rock" && computerChoice == "paper") {
            gameResult = "Computer chose paper.\nYou lose! Paper beats rock."; 
        } else if (playerChoice.toLowerCase() == "paper" && computerChoice == "scissors") {
            gameResult = "Computer chose scissors.\nYou lose! Scissors beats paper.";
        } else if (playerChoice.toLowerCase() == "scissors" && computerChoice == "rock") {
            gameResult = "Computer chose rock.\nYou lose! Rock beats scissors."; 
        } else {
            gameResult = "Computer chose " + computerChoice + "\nDraw!";
        }
    } else {
        gameResult = "Invalid game input!";
    }

    return gameResult;
}

console.log("Game result: " + playGameRound());