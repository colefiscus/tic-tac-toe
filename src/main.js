// QUERY SELECTORS / GLOBAL VARIABLES //
var playerOnePoints = document.querySelector('.player-1-points');
var playerTwoPoints = document.querySelector('.player-2-points');
var ticTacToeText = document.querySelector('.tic-tac-toe-text');

var ticTacToe = document.querySelector('.tic-tac-toe');

var game = new Game();

// EVENT LISTENERS //
window.addEventListener('load', startNewGame);
ticTacToe.addEventListener('click', takePlayerTurn);

// FUNCTIONS //
function startNewGame() {
  game.startNewGame();
  displayPlayerTurn();
  updateScore();
};

function displayPlayerTurn() {
  if (game.player1.myTurn) {
    ticTacToeText.innerText = `It is ${game.player1.id}'s turn.`;
  } else {
    ticTacToeText.innerText = `It is ${game.player2.id}'s turn.`;
  };
};

function updateScore() {
  playerOnePoints.innerText = `${game.player1.points} Points`;
  playerTwoPoints.innerText = `${game.player2.points} Points`;
};

function takePlayerTurn(event) {
  if (game.player1.myTurn) {
    addPlayerToken(game.player1);
    displayPlayerTurn();
    checkForWinner(game.player1);
    checkForDraw();
  } else {
    addPlayerToken(game.player2);
    displayPlayerTurn();
    checkForWinner(game.player2);
    checkForDraw();
  };
};

function addPlayerToken(player) {
  var squareID = event.target.id;
  if (player.myTurn && !event.target.innerText) {
    game.updateBoard(player, squareID);
    game.takeTurn();
    event.target.innerText = player.token;
  };
};

function checkForWinner(player) {
  var winner = game.checkForWinner(player);
  if (typeof(winner) === 'string') {
    ticTacToeText.innerText = `${winner}`;
    resetGame();
  };
};

function checkForDraw() {
  var draw = game.checkForDraw();
  if (typeof(draw) === 'string') {
    ticTacToeText.innerText = `${draw}`;
    resetGame();
  };
};

function resetGame() {
  ticTacToe.style.pointerEvents = 'none';
  game.resetGame();
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
  updateScore();
  ticTacToe.style.pointerEvents = 'auto';
  displayPlayerTurn();
};
