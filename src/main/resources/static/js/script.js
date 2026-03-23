//declare common variables
let currentPlayer = "X";
let board = ["", "", "", "", "", "", "", "", ""];
let isGameActive = true;
let names = ["Apple", "Banana", "Cherry", "Date"];
let currentRotation = 0;

//rock paper scissor logic
function makeMove(userChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    const displayArea = document.getElementById('display-area');

    if (!displayArea) return; //not going to work if it is not rock paper scissor game

    displayArea.style.opacity = '0';
    setTimeout(() => {
        let result = "";
        if (userChoice === computerChoice) {
            result = `🤝 It's draw. (Computer: ${computerChoice})`;
        } else if (
            (userChoice === 'rock' && computerChoice === 'scissors') ||
            (userChoice === 'paper' && computerChoice === 'rock') ||
            (userChoice === 'scissors' && computerChoice === 'paper')
        ) {
            result = `🎉 You win! (Computer: ${computerChoice})`;
        } else {
            result = `💀 You lose! (Computer: ${computerChoice})`;
        }
        displayArea.innerHTML = `<strong>${result}</strong>`;
        displayArea.style.opacity = '1';
    }, 200);
}

// random wheel part
function drawWheel() {
    const canvas = document.getElementById('wheelCanvas');
    if (!canvas) return; // Wheel page မဟုတ်ရင် ဘာမှမလုပ်ပါ

    const ctx = canvas.getContext('2d');
    const size = names.length;
    const arcSize = (2 * Math.PI) / size;

    ctx.clearRect(0, 0, 400, 400);
    names.forEach((name, i) => {
        const angle = i * arcSize;
        ctx.beginPath();
        ctx.fillStyle = `hsl(${(i * 360) / size}, 70%, 50%)`;
        ctx.moveTo(200, 200);
        ctx.arc(200, 200, 200, angle, angle + arcSize);
        ctx.fill();

        ctx.save();
        ctx.translate(200, 200);
        ctx.rotate(angle + arcSize / 2);
        ctx.textAlign = "right";
        ctx.fillStyle = "white";
        ctx.font = "bold 16px Poppins";
        ctx.fillText(name, 180, 10);
        ctx.restore();
    });
}

function addName() {
    const input = document.getElementById('nameInput');
    if (input && input.value) {
        names.push(input.value);
        input.value = "";
        drawWheel();
        updateList();
    }
}

function updateList() {
    const list = document.getElementById('namesList');
    if (list) list.innerText = "Names: " + names.join(", ");
}

function spinWheel() {
    const canvas = document.getElementById('wheelCanvas');
    if (!canvas) return;
    const extraDegrees = Math.floor(3000 + Math.random() * 5000);
    currentRotation += extraDegrees;
    canvas.style.transform = `rotate(${currentRotation}deg)`;
}

//tic tac toe
function makeTTTMove(cell, index) {
    const statusDisplay = document.getElementById('status');
    if (!statusDisplay || board[index] !== "" || !isGameActive) return;

    board[index] = currentPlayer;
    cell.innerText = currentPlayer;
    cell.classList.add(currentPlayer === "X" ? "x-mark" : "o-mark");

    checkResult(statusDisplay);
}

function checkResult(statusDisplay) {
    const winningConditions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    let roundWon = false;
    for (let i = 0; i < winningConditions.length; i++) {
        const [a, b, c] = winningConditions[i];
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            roundWon = true;
            break;
        }
    }

    if (roundWon) {
        statusDisplay.innerText = `🎉 Player ${currentPlayer} Wins!`;
        isGameActive = false;
        return;
    }

    if (!board.includes("")) {
        statusDisplay.innerText = "🤝 Draw!";
        isGameActive = false;
        return;
    }

    currentPlayer = currentPlayer === "X" ? "O" : "X";
    statusDisplay.innerText = `Player ${currentPlayer}'s Turn`;
}

function resetTTT() {
    currentPlayer = "X";
    board = ["", "", "", "", "", "", "", "", ""];
    isGameActive = true;
    const statusDisplay = document.getElementById('status');
    if (statusDisplay) statusDisplay.innerText = "Player X's Turn";
    document.querySelectorAll('.mainmenu-ttt-cell').forEach(cell => {
        cell.innerText = "";
        cell.classList.remove("x-mark", "o-mark");
    });
}

//initialization
window.onload = () => {
    drawWheel();
    updateList();
};