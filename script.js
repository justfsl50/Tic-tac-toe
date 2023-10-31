let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

function makeMove(cell) {
    const cellIndex = Array.from(cell.parentElement.children).indexOf(cell);

    if (board[cellIndex] === '' && gameActive) {
        cell.textContent = currentPlayer;
        board[cellIndex] = currentPlayer;
        if (checkWin()) {
            document.getElementById('winner-message').textContent = `Congratulations! ${currentPlayer} wins!`;
            gameActive = false;
        } else if (board.indexOf('') === -1) {
            document.getElementById('winner-message').textContent = "It's a draw!";
            gameActive = false;
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }

        // Play the click sound
        const clickSound = document.getElementById('click-sound');
        clickSound.play();
    }
}

function checkWin() {
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    for (const combination of winningCombinations) {
        const [a, b, c] = combination;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return true;
        }
    }

    return false;
}

function resetBoard() {
    currentPlayer = 'X';
    board = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;
    document.getElementById('winner-message').textContent = '';
    document.querySelectorAll('.cell').forEach(cell => cell.textContent = '');
}

