'use strict';

function player (name, position, rating) {
    this.firstName = name,
    this.positions = [{
      position: position,
      rating: rating
    }]

     player.prototype.addPosition = (newPosition) => {
      this.positions.push(newPosition);
    }
}


module.exports = player;
