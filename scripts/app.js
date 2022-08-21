let row = 0;
let col = 0;
let count = 0;
let gameOver = false;
const gameData = [
    [-1, -1, -1],
    [-1, -1, -1],
    [-1, -1, -1]
];

let editedPlayer = 0;
let activePlayer = 0;
const players = [
    {
        name:"",
        symbol:"X"
    },
    {
        name:"",
        symbol:"O"
    }
];

const playerConfigOverlayElement = document.getElementById("config-overlay");
const backDropElement = document.getElementById("backdrop");
const formElement = document.querySelector("form");
const errorOutputElement = document.getElementById("config-error");

const cancelConfigBtnElement = document.getElementById("cancel-config-btn");

const editPlayer1BtnElement = document.getElementById("edit-player-1-btn");
const editPlayer2BtnElement = document.getElementById("edit-player-2-btn");
const startNewGameBtnElement = document.getElementById("start-game-btn");
const gameAreaElement = document.getElementById("active-game");
const gameFieldElements = document.querySelectorAll("#game-board li");
const activePlayerNameElement = document.getElementById("active-player-name");
const gameOverElement = document.getElementById("game-over");
const winnerNameElement = document.getElementById("winner-name");

editPlayer1BtnElement.addEventListener("click", openPlayerConfig);
editPlayer2BtnElement.addEventListener("click", openPlayerConfig);

cancelConfigBtnElement.addEventListener("click", closePlayerConfig);
backDropElement.addEventListener("click", closePlayerConfig);

formElement.addEventListener("submit", savePlayerConfig);

startNewGameBtnElement.addEventListener("click", startNewGame);

for (const gameFieldElement of gameFieldElements) {
    gameFieldElement.addEventListener("click", selectGameField);
}
