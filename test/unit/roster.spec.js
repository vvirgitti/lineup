'use strict';

import chai from 'chai';
import {expect} from 'chai';
import sinon from 'sinon';

import Roster from './../../app/roster';
import {addPlayer} from './../../app/roster';
import Player from './../../app/player';

describe.skip('Roster', () => {

  let sandbox;

  beforeEach( () => {
    sandbox = sinon.sandbox.create();
    const roster = new Roster();
  });

  afterEach( () => {
    sandbox.restore();
  });

  const player1 = new Player('Bob', 'Catch', 4);
  const player2 = new Player('James', 'Pitch', 3);

  it('can add a player to the roster', () => {
    const roster = new Roster();

    roster.addPlayer(player1);
    expect(roster.playersList.length).to.equal(1);
  });

  it('can remove a player from the roster', () => {
    const roster = new Roster();

    roster.addPlayer(player1);
    roster.addPlayer(player2);
    roster.removePlayer(player1);
    expect(roster.playersList.length).to.equal(1);
  });

// it('can store the data in the database', () => {
//
// });


});
