class Game {
  constructor() {
    this.player1 = new Player('Gryffindor', '🦁');
    this.player2 = new Player('Slytherin', '🐍');
    this.board = {1: '', 2: '', 3: '', 4: '', 5: '', 6: '', 7: '', 8: '', 9: ''};
  };

  startNewGame() {
    this.player1.retrievePointsFromStorage(this.player1);
    this.player2.retrievePointsFromStorage(this.player2);
    this.resetBoard();
    this.randomizePlayerTurn();
  };

  resetBoard() {
    for (var i = 1; i < 10; i++) {
      this.board[i] = '';
    };
  };

  randomizePlayerTurn() {
    var randomNumber = Math.ceil(Math.random() * 2);
    if (randomNumber === 1) {
      this.player1.myTurn = true;
      this.player2.myTurn = false;
    } else {
      this.player1.myTurn = false;
      this.player2.myTurn = true;
    };
  };

  returnCorrectPlayerTurn() {
    if (this.player1.myTurn) {
      return this.player1;
    } else {
      return this.player2;
    };
  };

  returnResults(player, id) {
    this.updateBoard(player, id);
    var winner = this.checkForWinner(player);
    if (winner === false) {
      var draw = this.checkForDraw();
      if (draw === false) {
        this.switchTurn();
        return draw;
      } else {
        return draw;
      };
    } else {
      return winner;
    };
  };

  switchTurn() {
      this.player1.myTurn = !this.player1.myTurn;
      this.player2.myTurn = !this.player2.myTurn;
  };

  updateBoard(player, choice) {
      this.board[choice] = player.token;
  };

  checkForWinner(player) {
    var token = player.token;
    var board = this.board;
    var output = ``;
    switch (true) {
      case board[1] === token && board[2] === token && board[3] === token :
        output = `100 points to ${player.id}!`;
        break;

      case board[4] === token && board[5] === token && board[6] === token :
        output = `100 points to ${player.id}!`;
        break;

      case board[7] === token && board[8] === token && board[9] === token :
        output = `100 points to ${player.id}!`;
        break;

      case board[1] === token && board[4] === token && board[7] === token :
        output = `100 points to ${player.id}!`;
        break;

      case board[2] === token && board[5] === token && board[8] === token :
        output = `100 points to ${player.id}!`;
        break;

      case board[3] === token && board[6] === token && board[9] === token :
        output = `100 points to ${player.id}!`;
        break;

      case board[3] === token && board[5] === token && board[7] === token :
        output = `100 points to ${player.id}!`;
        break;

      case board[1] === token && board[5] === token && board[9] === token :
        output = `100 points to ${player.id}!`;
        break;

      default :
        output = false;
        break;
     };
     if (output) {
       player.points += 100;
       player.savePointsToStorage(player);
       return output;
     } else {
       return output;
     };
  };

  checkForDraw() {
    var drawCounter = 0;
    for (var i = 1; i < 10; i++) {
      if (this.board[i] !== '') {
        drawCounter++;
      }
    } if (drawCounter === 9) {
      return `It is a draw, play again...`;
    } else {
      return false;
    };
  };
};
