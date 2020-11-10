// QUERY SELECTORS / GLOBAL VARIABLES //
var playerOnePoints = document.querySelector('.player-1-points');
var playerTwoPoints = document.querySelector('.player-2-points');
var ticTacToeText = document.querySelector('.tic-tac-toe-text');

var ticTacToe = document.querySelector('.tic-tac-toe');

var game = new Game();

// EVENT LISTENERS //
window.onload = startNewGame;
ticTacToe.addEventListener('click', displayResults);

// FUNCTIONS //
function startNewGame() {
  ticTacToe.style.pointerEvents = 'auto';
  game.startNewGame();
  displayPlayerTurn();
  updateScore();
};

function displayPlayerTurn() {
  player = game.returnCorrectPlayerTurn();
  ticTacToeText.innerText = `It is ${player.id}'s turn.`;
};

function updateScore() {
  playerOnePoints.innerText = `${game.player1.points} Points`;
  playerTwoPoints.innerText = `${game.player2.points} Points`;
};

function displayResults() {
  if (!event.target.innerText) {
    var player = game.returnCorrectPlayerTurn();
    var results = game.returnResults(player, event.target.id);
    event.target.innerText = game.board[event.target.id];
    if (results === false) {
      displayPlayerTurn();
    } else {
      ticTacToeText.innerText = `${results}`;
      resetGame();
    };
  };
};

function resetGame() {
  ticTacToe.style.pointerEvents = 'none';
  setTimeout(resetBoard, 2000);
};

function resetBoard() {
    ticTacToe.innerHTML = `
    <tr class="top-row">
      <td class="column-one" id="1"></td>
      <td class="column-two" id="2"></td>
      <td class="column-three" id="3"></td>
    </tr>
    <tr class="middle-row">
      <td class="column-one" id="4"></td>
      <td class="column-two" id="5"></td>
      <td class="column-three" id="6"></td>
    </tr>
    <tr class="bottom-row">
      <td class="column-one" id="7"></td>
      <td class="column-two" id="8"></td>
      <td class="column-three" id="9"></td>
    </tr>
    `
  startNewGame();
};
