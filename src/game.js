class Game {
  constructor() {
    this.player1 = new Player('Gryffindor', '🦁')
    this.player2 = new Player('Slytherin', '🐍')
    this.board = {1: '', 2: '', 3: '', 4: '', 5: '', 6: '', 7: '', 8: '', 9: ''}
  };

  startGame(player1, player2) {
    var randomNumber = Math.ceil(Math.random() * 2);
    if (randomNumber === 1) {
      player1.myTurn = true;
    } else {
      player2.myTurn = true;
    };
  };

  takeTurn(player1, player2) {
    if (player1.myTurn === true) {
      player1.myTurn = false;
      player2.myTurn = true;
    } else {
      player1.myTurn = true;
      player2.myTurn = false;
    };
  };

  updateBoard(player, choice) {
    if (player.myTurn === true) {
      this.board.choice = player.token;
    };
  };

  declareWinner() {

  };

  declareDraw() {

  };

  addWinToPlayer() {

  };

  startNewGame() {

  };
};
