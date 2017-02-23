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

    select (roster, playerPosition) {
    const filtered = _.filter(roster, {positions: [{position: playerPosition}]});

    if (filtered.length === 1) {
      return filtered
    } else {
       return sortArray(filtered)
    }
  }

}

export default Roster;
