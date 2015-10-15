'use strict';

var chai = require('chai');
var expect = chai.expect;
var Player = require('./../src/player');
var addPosition = require('./../src/player');


describe('Player', function () {

  it('has a name', function () {
    var player = new Player('Bob');
    expect(player.firstName).to.equal('Bob');
  });

  it('has a position', function () {
    var player = new Player('Bob','Catch');
    expect(player.positions[0].position).to.equal('Catch');
  });

  it('has a rating', function () {
    var player = new Player('Bob', 'Catch', 4);
    expect(player.positions[0].rating).to.equal(4);
  });

  it('has a rating for a specific position', function () {
    var player = new Player('Bob', 'Catch', 4);
    expect(player.positions[0]).to.deep.equal({position:'Catch', rating: 4})
  });

  it('can add a 2nd position', function () {
    var player = new Player('Bob', 'Catch', 4);
    Player.addPosition({position: 'Outfield', rating: 2});
    expect(player.positions[1]).to.deep.equal({position: 'Outfield', rating: 2});
  });

  // it('has a 2nd position', function () {
  //   var player = new Player('Bob', 'Catch', 4, 'Outfield');
  //   expect(player.secondPosition.secondPosition).to.equal('Outfield');
  // });
  //
  // it('has a rating for the 2nd position', function () {
  //   var player = new Player('Bob', 'Catch', 4, 'Outfield', 2);
  //   expect(player.secondPosition.secondRating).to.equal(2);
  // });

});
