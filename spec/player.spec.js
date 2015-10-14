'use strict';

var chai = require('chai');
var expect = chai.expect;
var Player = require('./../src/player');

describe('Player', function () {

  it('has a name', function () {
    var player = new Player('Bob');
    expect(player.firstName).to.equal('Bob');
  });

  it('has a position', function () {
    var player = new Player('Bob','Catch');
    expect(player.favouritePosition.position).to.equal('Catch');
  });

  it('has a rating for a position', function () {
    var player = new Player('Bob', 'Catch', 4);
    expect(player.favouritePosition.rating).to.equal(4);
  });

  it('has a 2nd position', function () {
    var player = new Player('Bob', 'Catch', 4, 'Outfield');
    expect(player.secondPosition.secondPosition).to.equal('Outfield');
  });

  it('has a rating for the 2nd position', function () {
    var player = new Player('Bob', 'Catch', 4, 'Outfield', 2);
    expect(player.secondPosition.secondRating).to.equal(2);
  });

});
