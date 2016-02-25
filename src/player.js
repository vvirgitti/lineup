'use strict';

require('babel-register');

module.exports = function Player(name, position, rating) {
  this.firstName = name,
  this.positions = [{
    position: position,
    rating: rating
  }],
  this.addPosition = function (newPosition) {
    this.positions.push(newPosition);
  };
};
