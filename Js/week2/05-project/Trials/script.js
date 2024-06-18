



const choices = ["rock", "paper", "scissors"];
let player1Score = 0;
let player2Score = 0;

document.querySelectorAll('.choice').forEach(button => {
    button.addEventListener('click', () => {
        const player1Choice = button.dataset.choice;
        const player2Choice = choices[Math.floor(Math.random() * choices.length)];
        const result = determineWinner(player1Choice, player2Choice);
        updateScore(result);
        displayResult(player1Choice, player2Choice, result);
    });
});

document.getElementById('reset').addEventListener('click', resetGame);

function determineWinner(player1, player2) {
    if (player1 === player2) {
        return "It's a tie!";
    } else if ((player1 === "rock" && player2 === "scissors") ||
               (player1 === "paper" && player2 === "rock") ||
               (player1 === "scissors" && player2 === "paper")) {
        player1Score++;
        return "Player 1 wins!";
    } else {
        player2Score++;
        return "Player 2 wins!";
    }
}

function updateScore(result) {
    document.getElementById('player1Score').textContent = player1Score;
    document.getElementById('player2Score').textContent = player2Score;
}

function displayResult(player1Choice, player2Choice, result) {
    document.getElementById('result').textContent = `Player 1 chose ${player1Choice}, Player 2 chose ${player2Choice}. ${result}`;
}

function resetGame() {
    player1Score = 0;
    player2Score = 0;
    updateScore();
    document.getElementById('result').textContent = '';
};


constchoices = ["rock", "paper", "scissors"];{
let player1Score = 0;
let player2Score = 0;
}
// Function to show the loader
function showLoader() {
    document.getElementById('loader').classList.remove('hidden');
}

// Function to hide the loader
function hideLoader() {
    document.getElementById('loader').classList.add('hidden');
}

// Function to handle player choice
function handlePlayerChoice(player1Choice) {
    showLoader(); // Show loader when player makes a choice
    
    const player2Choice = choices[Math.floor(Math.random() * choices.length)];

    // Simulate processing time (you can remove this setTimeout in production)
    setTimeout(() => {
        const result = determineWinner(player1Choice, player2Choice);
        updateScore(result);
        displayResult(player1Choice, player2Choice, result);
        hideLoader(); // Hide loader after processing
    }, 1000); // Adjust the time as needed
}

// Add event listeners for player choices
document.querySelectorAll('.choice').forEach(button => {
    button.addEventListener('click', () => {
        const player1Choice = button.dataset.choice;
        handlePlayerChoice(player1Choice);
    });
});

// Event listener for reset button
document.getElementById('reset').addEventListener('click', resetGame);

