'use strict';
const roster = [];

function player (name, position, rating) {
    this.firstName = name,
    this.positions = [{
      position: position,
      rating: rating
    }]

     player.prototype.addPosition = (newPosition) => {
      this.positions.push(newPosition);
    }

    player.prototype.addPlayer = (player) => {
      roster.push(player);
    }
}


module.exports = {player, roster};
