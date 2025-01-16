// Ask for the user's name
let userName = prompt("Hello, What is your name?");

// Get the greeting element
let greeting = document.getElementById('greeting');

// display for greeting
userName
userName ? document.getElementById('greeting').innerText = `Hello, ${userName}!`
    : document.getElementById('greeting').innerText = 'Hello stranger!'


let playerScore = 0, computerScore = 0;

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * 3)];
}

function play(playerChoice) {
    const computerChoice = getComputerChoice();
    const resultElement = document.getElementById('results');
    const choicesContainer = document.getElementById('choicesContainer');

    choicesContainer.textContent = `You chose: ${playerChoice} | Computer chose: ${computerChoice}`

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
};

function updateScores() {
    document.getElementById('playerScore').textContent = playerScore;
    document.getElementById('computerScore').textContent = computerScore;
}

function checkWinner() {
    if (playerScore === 3 || computerScore === 3) {
        const resultElement = document.getElementById('result');
        const restartButton = document.getElementById('restartButton');
        const choices = document.querySelector('.choices');

        if (playerScore === 3) {
            resultElement.textContent = 'You win the game!';
            triggerConfetti();
        } else {
            resultElement.textContent = 'Computer wins the game!';
        }
        disableChoices();

    }
    restartButton.style.display = 'inline-block';
    choices.style.display = 'none';
}

function disableChoices() {
    document.querySelectorAll('.choice button').forEach(button => button.disabled = false);  )
}
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    updateScores();
    document.getElementById('result').textContent = 'Choose your move!';
    document.getElementById('choicesContainer').textContent = 'Chose your move!';
    clearConfetti();
}

// Create a new, plain <span> element
let sp1 = document.createElement("span");

// Get the reference element
let sp2 = document.getElementById("childConfetti");
// Get the parent element
let parentDiv = sp2.parentNode;

// Insert the new element into before sp2
parentDiv.insertBefore(sp1, sp2);
function triggerConfetti() {
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        confetti.style.animationDuration = Math.random() * 2 + 3 + 's';
        document.body.appendChild(confetti);
        parentDiv.insertBefore(sp1, sp2);
    }
}

function clearConfetti() {
    document.querySelectorAll('.confetti').forEach(confetti => confetti.remove());
}

