function restartGame(){
    row = 0;
    col = 0;
    count = 0;
    gameOver = false;
    gameOverElement.firstElementChild.innerHTML = 'You Won <span id="winner-name">PLAYER-NAME</span>!';

    for(let i=0; i<3; i++){
        for(let j=0; j<3; j++){
            gameData[i][j]=-1;
            gameFieldElements[count].textContent = "";
            gameFieldElements[count].classList.remove("disabled");
            count++;
        }
    }

    count = 0;
    editedPlayer = 0;
    activePlayer = 0;

    console.dir(gameOverElement);
    gameOverElement.style.display = "none";
}
function startNewGame() {
  if (!(players[0].name && players[1].name)) {
    alert("Please enter the names of both players");
    return;
  }
  restartGame();
  activePlayer = Math.floor(Math.random() * 2);
  activePlayerNameElement.textContent = players[activePlayer].name;
  gameAreaElement.style.display = "block";
}

function checkWinner() {
  if (checkVertical() || checkHorizontal() || checkPD() || checkSD()) {
    return true;
  }
  return false;
}
function checkVertical() {
  if (row == 0) {
    if (
      gameData[row + 1][col] == activePlayer &&
      gameData[row + 2][col] == activePlayer
    )
      return true;
  } else if (row == 1) {
    if (
      gameData[row + 1][col] == activePlayer &&
      gameData[row - 1][col] == activePlayer
    )
      return true;
  } else if (row == 2) {
    if (
      gameData[row - 1][col] == activePlayer &&
      gameData[row - 2][col] == activePlayer
    )
      return true;
  }
  return false;
}
function checkHorizontal() {
  if (col == 0) {
    if (
      gameData[row][col + 1] == activePlayer &&
      gameData[row][col + 2] == activePlayer
    )
      return true;
  } else if (col == 1) {
    if (
      gameData[row][col + 1] == activePlayer &&
      gameData[row][col - 1] == activePlayer
    )
      return true;
  } else if (col == 2) {
    if (
      gameData[row][col - 1] == activePlayer &&
      gameData[row][col - 2] == activePlayer
    )
      return true;
  }
  return false;
}
function checkSD() {
  if (row == 0 && col == 2) {
    if (
      gameData[row + 1][col - 1] == activePlayer &&
      gameData[row + 2][col - 2] == activePlayer
    )
      return true;
  } else if (row == 1 && col == 1) {
    if (
      gameData[row - 1][col + 1] == activePlayer &&
      gameData[row + 1][col - 1] == activePlayer
    )
      return true;
  } else if (row == 2 && col == 0) {
    if (
      gameData[row - 1][col + 1] == activePlayer &&
      gameData[row - 2][col + 2] == activePlayer
    )
      return true;
  }
  return false;
}
function checkPD() {
  if (row == 0 && col == 0) {
    if (
      gameData[row + 1][col + 1] == activePlayer &&
      gameData[row + 2][col + 2] == activePlayer
    )
      return true;
  } else if (row == 1 && col == 1) {
    if (
      gameData[row - 1][col - 1] == activePlayer &&
      gameData[row + 1][col + 1] == activePlayer
    )
      return true;
  } else if (row == 2 && col == 2) {
    if (
      gameData[row - 1][col - 1] == activePlayer &&
      gameData[row - 2][col - 2] == activePlayer
    )
      return true;
  }
  return false;
}

function selectGameField(event) {
  if (!(event.target.textContent || gameOver)) {
    const selectedField = event.target;
    row = +selectedField.dataset.row;
    col = +selectedField.dataset.col;
    event.target.textContent = players[activePlayer].symbol;
    event.target.classList.add("disabled");
    gameData[row][col] = activePlayer;
    count++;
    if (checkWinner()) {
        console.log(players[activePlayer].name)
      winnerNameElement.innerHTML = players[activePlayer].name;
      console.dir(winnerNameElement);
      gameOverElement.style.display = "block";
      gameOver=true;
      return;
    }
    if(count==9){
        itsDraw();
        return;
    }
    activePlayer = activePlayer ^ 1;
    activePlayerNameElement.textContent = players[activePlayer].name;
  }
}

function itsDraw(){
    gameOverElement.firstElementChild.textContent = "oops, it's a draw!!";
    gameOverElement.style.display = "block";
    gameOver = true;
    return;
}
