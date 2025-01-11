let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
let gameOver = false;

const boardElement = document.getElementById('board');

const xImage = 'a.png'; 
const oImage = 'm.png'; 

const imgW = 75;
const imgH = 100; 

// إنشاء الأزرار
for (let i = 0; i < 9; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.addEventListener('click', () => handleClick(i));
    boardElement.appendChild(square);
}

function handleClick(index) {
    if (board[index] === '' && !gameOver) {
        board[index] = currentPlayer;
        updateBoard();
        if (checkWinner()) {
            setTimeout(() => 100);
            gameOver = true;
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }
}

function updateBoard() {
    const squares = document.querySelectorAll('.square');
    squares.forEach((square, index) => {
        square.innerHTML = ''; // إزالة أي محتوى سابق
        if (board[index] === 'X') {
            const img = document.createElement('img');
            img.src = xImage; 
            img.style.width = `${imgW}px`; 
            img.style.height = `${imgH}px`; 
            square.appendChild(img);
        } else if (board[index] === 'O') {
            const img = document.createElement('img');
            img.src = oImage;
            img.style.width = `${imgW}px`; 
            img.style.height = `${imgH}px`; 
            square.appendChild(img);
        }
    });
}

function checkWinner() {
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    return winningCombinations.some(combination => {
        const [a, b, c] = combination;
        return board[a] && board[a] === board[b] && board[a] === board[c];
    });
}

function resetGame() {
    board = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    gameOver = false;
    updateBoard();
}
