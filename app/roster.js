'use strict';

class Roster {
  constructor () {
    this.playersList = [];
  }

  addPlayer (player) {
    this.playersList.push(player);
  };

  removePlayer(player) {
    const index = this.playersList.indexOf(player);
    this.playersList.splice(index, 1);
  }

}

export default Roster;
