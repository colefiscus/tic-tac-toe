class Game {
  constructor() {
    this.player1 = new Player('Gryffindor', '🦁')
    this.player2 = new Player('Slytherin', '🐍')
    this.board = {1: '', 2: '', 3: '', 4: '', 5: '', 6: '', 7: '', 8: '', 9: ''}
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
    if (player.myTurn === true) {
      this.board.choice = player.token;
    };
  };

  checkForWinner(player) {
     switch (winCondition) {
       case this.board[1], this.board[2], this.board[3] === player.token :
         addWinToPlayer(player);
         return `${player.id} wins!`;
       break;

       case this.board[4], this.board[5], this.board[6] === player.token :
         addWinToPlayer(player);
         return `${player.id} wins!`;
       break;

       case this.board[7], this.board[8], this.board[9] === player.token :
         addWinToPlayer(player);
         return `${player.id} wins!`;
       break;

       case this.board[1], this.board[4], this.board[7] === player.token :
         addWinToPlayer(player);
         return `${player.id} wins!`;
       break;

       case this.board[2], this.board[5], this.board[8] === player.token :
         addWinToPlayer(player);
         return `${player.id} wins!`;
       break;

       case this.board[3], this.board[6], this.board[9] === player.token :
         addWinToPlayer(player);
         return `${player.id} wins!`;
       break;

       case this.board[3], this.board[5], this.board[7] === player.token :
         addWinToPlayer(player);
         return `${player.id} wins!`;
       break;

       case this.board[1], this.board[5], this.board[9] === player.token :
         addWinToPlayer(player);
         return `${player.id} wins!`;
       break;

       default :
       return;
       break;
     }
  };

  checkForDraw() {
    var drawCounter
    for (var i = 0; i < 10; i++) {
      if (this.board[i] === player1.token || this.board[i] === player2.token) {
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
