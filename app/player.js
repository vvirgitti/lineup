'use strict';

export default function Player (name, position, rating) {
  this.firstName = name;
  this.positions = [{
    position: position,
    rating: rating
  }];
}

Player.prototype.addPosition = function (newPosition) {
  this.positions.push(newPosition);
}
