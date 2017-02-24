'use strict';

const sinon = require('sinon');
const expect = require('chai').expect;

const Roster = require('./../../app/roster');

describe.only('Roster', () => {

  const player1 = {
    firstName: 'Bob',
    positions: [{
      position: 'pitch',
      rating: 2
    }]
  }

  const player2 = {
    firstName: 'Rob',
    positions: [{
      position: 'catch',
      rating: 3
    }]
  }

  it('add a player to the roster', ()=> {
    const roster = new Roster();
    roster.addPlayer(player1);
    expect(roster.playersList.length).to.equal(1);
  });

  it('add 2 players to the roster', ()=> {
    const roster = new Roster();
    roster.addPlayer(player1);
    roster.addPlayer(player2);
    expect(roster.playersList.length).to.equal(2);
  });

  it('can remove a player to the roster', ()=> {
    const roster = new Roster();
    roster.addPlayer(player1);
    roster.addPlayer(player2);
    roster.removePlayer(player1);
    expect(roster.playersList.length).to.equal(1);
    expect(roster.playersList[0].firstName).to.equal('Rob');
  });

});

