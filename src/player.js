function Player (name, position, rating, secondPosition, secondRating) {
  this.firstName = name,
  this.favouritePosition = {
    position: position,
    rating: rating
  },
  this.secondPosition = {
    secondPosition: secondPosition,
    secondRating: secondRating
  }
};

// this.favouritePositon = [
//   {
//     position: position,
//     rating:rating
//   }
// ]

module.exports = Player;
