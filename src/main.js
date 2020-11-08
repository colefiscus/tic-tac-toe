// QUERY SELECTORS / GLOBAL VARIABLES //
var playerOnePoints = document.querySelector('.player-1-points');
var playerTwoPoints = document.querySelector('.player-2-points');
var ticTacToeText = document.querySelector('.tic-tac-toe-text');

var ticTacToe = document.querySelector('.tic-tac-toe')

// I dont know if I need all of these if I can just use event.target + IDs

// var topLeft = document.querySelector('#1');
// var topCenter = document.querySelector('#2');
// var topRight = document.querySelector('#3');
// var middleLeft = document.querySelector('#4');
// var middleCenter = document.querySelector('#5');
// var middleRight = document.querySelector('#6');
// var bottomLeft = document.querySelector('#7');
// var bottomCenter = document.querySelector('#8');
// var bottomRight = document.querySelector('#9');

var game = new Game()

// EVENT LISTENERS //
window.addEventListener('load', startNewGame)
ticTacToe.addEventListener('click', addPlayerToken)

// I dont know if I need all of these if I can just use event.target + IDs

// topLeft.eventListener('click', );
// topCenter.eventListener('click', );
// topRight.eventListener('click', );
// middleLeft.eventListener('click', );
// middleCenter.eventListener('click', );
// middleRight.eventListener('click', );
// bottomLeft.eventListener('click', );
// bottomCenter.eventListener('click', );
// bottomRight.eventListener('click', );

// FUNCTIONS //
function startNewGame() {
  game.startNewGame();
  showPlayerTurn();
  updateScore();
};

function showPlayerTurn() {
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

function addPlayerToken(event) {
  var squareID = event.target.id
  game.updateBoard(player, squareID)
}
