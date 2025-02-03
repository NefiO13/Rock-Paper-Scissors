// Ask for the user's name
let userName = prompt("Hello, What is your name?");

// Get the greeting element
let greeting = document.getElementById('greeting');
const resultElement = document.getElementById('results');
const restartButton = document.getElementById('restartButton');
const choicesButton = document.getElementById('.choice button');
const choicesImages = document.getElementById('.choice img');


// display for greeting
userName
userName ? document.getElementById('greeting').innerText = `Hello, ${userName}!`
    : document.getElementById('greeting').innerText = 'Hello stranger!'

restartButton.style.display = 'none';

let playerScore = 0, computerScore = 0;


function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * 3)];
}

function play(playerChoice) {
    if (playerScore === 3 || computerScore === 3) return;


    const computerChoice = getComputerChoice();
    const choicesContainer = document.getElementById('choicesContainer');

    choicesContainer.textContent = `You chose: ${playerChoice} | Computer chose: ${computerChoice}`;

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
        if (playerScore === 3) {
            resultElement.textContent = 'You win the game!';
            triggerConfetti();
        } else {
            resultElement.textContent = 'Computer wins the game!';
            makeImagesGray();
        }

        // Show the restart button
        restartButton.style.display = 'inline-block';

        // Disable choice buttons
        disableChoices();
    }
}

function disableChoices() {
    // Disable all choice buttons
    choicesButton.forEach((button) => {
        button.disabled = true;
    });

}


function enableChoices() {
    choicesButtons.forEach((button) => {
        button.disabled = false;
    });
    resetImagesColor(); // Reset image color when enabling choices
}

function makeImagesGray() {
    choicesImages.forEach((img) => {
        img.style.filter = "grayscale(100%)"; // Make images gray
    });
}

function resetImagesColor() {
    choicesImages.forEach((img) => {
        img.style.filter = "none"; // Restore original colors
    });
}


function resetGame() {
    // Reset scores and UI
    playerScore = 0;
    computerScore = 0;
    updateScores();
    document.getElementById('results').textContent = 'Choose your move!';
    document.getElementById('choicesContainer').textContent = 'You chose: - | Computer chose: -';

    // Hide the restart button
    restartButton.style.display = 'none';
    enableChoices();
    resetImagesColor();

    // Stop and clear the confetti
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
    // Create and animate confetti
    for (let i = 0; i < 10; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        confetti.style.animationDuration = Math.random() * 2 + 3 + 's';
        document.body.appendChild(confetti);
    }
}

function clearConfetti() {
    // Clear the confetti interval and remove all confetti elements

    for (let i = 0; i < 10; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        confetti.style.animationDuration = Math.random() * 2 + 3 + 's';
        document.body.appendChild(confetti);
    }
}

function clearConfetti() {
    document.querySelectorAll('.confetti').forEach(confetti => confetti.remove());
}

playgame();