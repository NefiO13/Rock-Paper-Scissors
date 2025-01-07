let playerScore = 0;
let computerScore = 0;
const resultDisplay = document.getElementById('result');
const playerScoreDisplay = document.getElementById('playerScore');
const computerScoreDisplay = document.getElementById('computerScore');

function computerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection) {
    const computerSelection = computerChoice();
    let result = '';

    switch (playerSelection + computerSelection) {
        case 'rockscissors':
        case 'paperrock':
        case 'scissorspaper':
            playerScore++;
            result = `You win! ${playerSelection} beats ${computerSelection}.`;
            break;
        case 'scissorsrock':
        case 'rockpaper':
        case 'paperscissors':
            computerScore++;
            result = `You lose! ${computerSelection} beats ${playerSelection}.`;
            break;
        default:
            result = `It's a draw! You both chose ${playerSelection}.`;
    }

    updateScore();
    resultDisplay.textContent = result;
    checkWinner();
}

function updateScore() {
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
}

function checkWinner() {
    if (playerScore === 3 || computerScore === 3) {
        resultDisplay.textContent = playerScore === 3 ? 'Congratulations! You win the game!' : 'Game over! The computer wins!';
        disableButtons();
    }
}

function disableButtons() {
    const buttons = document.querySelectorAll('.choice');
    buttons.forEach(button => button.disabled = true);
}

function restartGame() {
    playerScore = 0;
    computerScore = 0;
    updateScore();
    resultDisplay.textContent = 'Make your move!';
    const buttons = document.querySelectorAll('.choice');
    buttons.forEach(button => button.disabled = false);
}