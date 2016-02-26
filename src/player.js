'use strict';

export default class Player {
  constructor(name, position, rating) {
    this.firstName = name,
    this.positions = [{
      position: position,
      rating: rating
    }]
  }

  addPosition(newPosition) {
    this.positions.push(newPosition);
  };
}
