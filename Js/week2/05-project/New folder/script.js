const choices = ["rock", "paper", "scissors"];
let player1Score = 0;
let player2Score = 0;
let player1Choice = "";
let player2Choice = "";


function handlePlayerChoice(player, choice) {
    if (player === 1) {
        player1Choice = choice;
    } else {
        player2Choice = choice;
    }


    if (player1Choice && player2Choice) {
        const result = determineWinner(player1Choice, player2Choice);
        updateScore(result);
        displayResult(player1Choice, player2Choice, result);
        player1Choice = ""; 
        player2Choice = "";
    }
}


document.querySelectorAll('.choice').forEach(button => {
    button.addEventListener('click', () => {
        if (!player1Choice) {
            handlePlayerChoice(1, button.dataset.choice);
        } else if (!player2Choice) {
            handlePlayerChoice(2, button.dataset.choice);
        }
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
}





