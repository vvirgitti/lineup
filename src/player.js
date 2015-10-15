function Player (name, position, rating) {
  this.firstName = name,
  this.positions = [{position: position, rating: rating}]
};

function addPosition (newPosition) {
  (Player.positions).push(newPosition);
}

// Player.addPosition = addPosition; 

module.exports = {
  Player: Player,
  addPosition: addPosition
}
