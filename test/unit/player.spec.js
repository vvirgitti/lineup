'use strict';

const expect = require('chai').expect;

const Player = require('./../../app/player').player;
const roster = require('./../../app/player').roster;

describe('Player', () => {

  let player;

  beforeEach(() => {
    player = new Player('Bob', 'Catch', 4);
  });

  it('has a name, a position and a rating', () => {
    expect(player.firstName).to.equal('Bob');
    expect(player.positions[0].position).to.equal('Catch');
    expect(player.positions[0].rating).to.equal(4);
  });

  it('has a rating for a specific position', () => {
    expect(player.positions[0]).to.deep.equal({position:'Catch', rating: 4})
  });

  it('can have a 2nd position', () => {
    player.addPosition({position: 'Outfield', rating: 2});
    expect(player.positions[1]).to.deep.equal({position: 'Outfield', rating: 2});
  });

  it('can be added to a roster', () => {
    player.addPlayer(player);
    expect(roster.length).to.equal(1);
    expect(roster[0].firstName).to.equal('Bob');
  });

});
