class Game {
  constructor() {
    this.player1 = new Player('Gryffindor', '🦁');
    this.player2 = new Player('Slytherin', '🐍');
    this.board = {1: '', 2: '', 3: '', 4: '', 5: '', 6: '', 7: '', 8: '', 9: ''};
  };

  startGame() {
    var randomNumber = Math.ceil(Math.random() * 2);
    if (randomNumber === 1) {
      this.player1.myTurn = true;
      this.player2.myTurn = false;
    } else {
      this.player1.myTurn = false;
      this.player2.myTurn = true;
    };
  };

  takeTurn() {
      this.player1.myTurn = !this.player1.myTurn;
      this.player2.myTurn = !this.player2.myTurn;
  };

  updateBoard(player, choice) {
    if (player.myTurn && this.board[choice] === '') {
      this.board[choice] = player.token;
    };
  };

  checkForWinner(player) {
    var token = player.token;
    var board = this.board;

    switch (true) {
     case board[1] === token && board[2] === token && board[3] === token :
       this.addWinToPlayer(player);
       return `${player.id} wins!`;

     case board[4] === token && board[5] === token && board[6] === token :
       this.addWinToPlayer(player);
       return `${player.id} wins!`;

     case board[7] === token && board[8] === token && board[9] === token :
       this.addWinToPlayer(player);
       return `${player.id} wins!`;

      case board[1] === token && board[4] === token && board[7] === token :
       this.addWinToPlayer(player);
       return `${player.id} wins!`;

      case board[2] === token && board[5] === token && board[8] === token :
       this.addWinToPlayer(player);
       return `${player.id} wins!`;

      case board[3] === token && board[6] === token && board[9] === token :
       this.addWinToPlayer(player);
       return `${player.id} wins!`;

      case board[3] === token && board[5] === token && board[7] === token :
       this.addWinToPlayer(player);
       return `${player.id} wins!`;

     case board[1] === token && board[5] === token && board[9] === token :
       this.addWinToPlayer(player);
       return `${player.id} wins!`;

     default :
     return;
     }
  };

  checkForDraw() {
    var drawCounter = 0;
    debugger;
    for (var i = 1; i < 10; i++) {
      if (this.board[i] === this.player1.token || this.board[i] === this.player2.token) {
        drawCounter++
      }
    } if (drawCounter === 9) {
      return `It is a draw, play again...`
    }
  };

  addWinToPlayer(player) {
    player.wins++
  };

  startNewGame() {
    for (var i = 1; i < 10; i++) {
      this.board[i] = ''
    };
    this.startGame();
  };
};
