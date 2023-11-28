function getComputerChoice() {
    const computerOptions = ["rock", "paper", "scissors"];
    const randomNumber = Math.floor(Math.random() * 3);
    return computerOptions[randomNumber]; 
}

console.log("Computer choice: " + getComputerChoice());