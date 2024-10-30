function getComputerChoice() {
    const computerOptions = ["rock", "paper", "scissors"];
    const randomNumber = Math.floor(Math.random() * 3);
    return computerOptions[randomNumber]; 
}

function playGameRound(playerChoice) {
    let gameRoundResult;
    let gameRoundMessage;

    const computerChoice = getComputerChoice();

    if ((playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")) {
        gameRoundMessage = `Computer chose ${computerChoice} => You win! ${playerChoice} beats ${computerChoice}`;
        gameRoundResult = true;
    } else if ((playerChoice === "rock" && computerChoice === "paper") ||
               (playerChoice === "paper" && computerChoice === "scissors") ||
               (playerChoice === "scissors" && computerChoice === "rock")) {
        gameRoundMessage = `Computer chose ${computerChoice} => You lose! ${computerChoice} beats ${playerChoice}`;
        gameRoundResult = false;
    } else {
        gameRoundMessage = `Computer chose ${computerChoice} => Draw!`;
        gameRoundResult = null;
    }

    return { result: gameRoundResult, message: gameRoundMessage };
}

function playGame() {
    let playerWins = 0;
    let computerWins = 0;

    function updateScoreboard() {
        document.getElementById("player-score").textContent = playerWins;
        document.getElementById("computer-score").textContent = computerWins;
    }

    document.querySelectorAll(".choice-button").forEach(button => {
        button.addEventListener("click", () => {
            const playerChoice = button.getAttribute("data-choice");
            const roundResult = playGameRound(playerChoice);

            if (roundResult.result === true) playerWins++;
            else if (roundResult.result === false) computerWins++;

            document.getElementById("result-message").textContent = roundResult.message;
            updateScoreboard();

            if (playerWins === 5 || computerWins === 5) {
                const finalMessage = playerWins === 5 ? "Congratulations! You won!" : "You lost the game. Better luck next time.";
                document.getElementById("result-message").textContent = finalMessage;
                playerWins = 0;
                computerWins = 0;
                updateScoreboard();
            }
        });
    });
}

document.addEventListener("DOMContentLoaded", () => {
    playGame();
});
