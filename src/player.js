class Player {
  constructor(id, token) {
    this.id = id;
    this.token = token;
    this.points = 0;
    this.myTurn = false;
  };

  savePointsToStorage(player) {
    localStorage.setItem(player.id, player.points);
  };

  retrievePointsFromStorage(player) {
    if (localStorage.hasOwnProperty(player.id)) {
      player.points = JSON.parse(localStorage.getItem(player.id));
    };
  };
};
