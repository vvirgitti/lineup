'use strict';

function Player (name, position, rating) {
    this.firstName = name,
    this.positions = [{
      position: position,
      rating: rating
    }]

     Player.prototype.addPosition = (newPosition) => {
      this.positions.push(newPosition);
    }
}

module.exports = Player;
