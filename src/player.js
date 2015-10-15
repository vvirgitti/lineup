function Player (name, position, rating) {
  this.firstName = name,
  this.positions = [{position: position, rating: rating}]
};

// function addPosition (newPosition) {
//   console.log(Player.positions);
//   Player[positions].push(newPosition);
// }

Player.prototype.positions = function (newPosition) {
  console.log(Player.positions);
  (Player.positions).push(newPosition);
}

module.exports = Player;

module.exports.addPosition = addPosition;
