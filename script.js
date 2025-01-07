let playerScore = 0, computerScore = 0;

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * 3)];
}

function play(playerChoice) {
    const computerChoice = getComputerChoice();
    const resultElement = document.getElementById('result');

    if (playerChoice === computerChoice) {
        resultElement.textContent = `It's a tie! You both chose ${playerChoice}.`;
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        playerScore++;
        resultElement.textContent = `You win! ${playerChoice} beats ${computerChoice}.`;
    } else {
        computerScore++;
        resultElement.textContent = `You lose! ${computerChoice} beats ${playerChoice}.`;
    }

    updateScores();
    checkWinner();
}

function updateScores() {
    document.getElementById('playerScore').textContent = playerScore;
    document.getElementById('computerScore').textContent = computerScore;
}

function checkWinner() {
    if (playerScore === 3 || computerScore === 3) {
        const resultElement = document.getElementById('result');
        resultElement.textContent = playerScore === 3 ? 'You win the game!' : 'Computer wins the game!';
        disableChoices();
    }
}

function disableChoices() {
    document.querySelectorAll('.choice button').forEach(button => button.disabled = true);
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    updateScores();
    document.getElementById('result').textContent = 'Choose your move!';
    document.querySelectorAll('.choice button').forEach(button => button.disabled = false);
}
