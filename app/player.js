'use strict';

// class Player {
//   constructor(name, position, rating) {
//     this.firstName = name,
//     this.positions = [{
//       position: position,
//       rating: rating
//     }]
//   }
//
//   addPosition(newPosition) {
//     this.positions.push(newPosition);
//   }
//
// }
//
// export default Player;

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
