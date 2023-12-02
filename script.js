function getPlayerChoice(choiceMessage = "Type rock, paper, or scissors: ", playerOptions = ["rock", "paper", "scissors"]) {
    let playerChoice;
    
    do {
        playerChoice = prompt(choiceMessage, playerOptions.join(', '));
        playerChoice = playerChoice ? playerChoice.toLowerCase() : "";
    } while (!playerOptions.includes(playerChoice));
    return playerChoice;
}

function getComputerChoice() {
    const computerOptions = ["rock", "paper", "scissors"];
    const randomNumber = Math.floor(Math.random() * 3);
    return computerOptions[randomNumber]; 
}

function playGameRound() {
    let gameRoundResult;
    let gameRoundMessage;

    const playerChoice = getPlayerChoice();

    const computerChoice = getComputerChoice();

    if ((playerChoice == "rock" && computerChoice == "scissors") || (playerChoice == "paper" && computerChoice == "rock") || (playerChoice == "scissors" && computerChoice == "paper")) {
        gameRoundMessage = "Computer chose " + computerChoice + "\n=> You win!\n" + playerChoice + " beats " + computerChoice;
        gameRoundResult = true; //True for win conditions
    } else if ((playerChoice == "rock" && computerChoice == "paper") || (playerChoice == "paper" && computerChoice == "scissors") || (playerChoice == "scissors" && computerChoice == "rock")) {
        gameRoundMessage = "Computer chose " + computerChoice +  + "\n=> You lose!\n" + computerChoice + " beats " + playerChoice;
        gameRoundResult = false; //False for lose conditions
    } else {
        const nextRound = playGameRound();
        gameRoundResult = nextRound.result;
        gameRoundMessage = "Computer chose " + computerChoice + "\n=> Draw!\n" + nextRound.message;
    }

    return { result: gameRoundResult, message: gameRoundMessage };
}

const result = playGameRound();
console.log("Game result: " + result.result);
console.log(result.message);