'use strict';

import chai from 'chai';
import {expect} from 'chai';
import sinon from 'sinon';

import Roster from './../../app/roster';
import {addPlayer} from './../../app/roster';
import Player from './../../app/player';

describe('Roster', () => {

  let sandbox;

  beforeEach( () => {
    sandbox = sinon.sandbox.create();
    const roster = new Roster();
  });

  afterEach( () => {
    sandbox.restore();
  });

  const player1 = new Player('Kat', 'outfield', 1);
  const player2 = new Player('Dan', 'outfield', 2);
  const player3 = new Player('Papi', 'pitch', 3);
  const player4 = new Player('Mike', '3rd base', 4);
  const player5 = new Player('Andy', 'short stop', 5);
  const player6 = new Player('Dani', '2nd base', 6);
  const player7 = new Player('Joelle', 'outfield', 7);
  const player8 = new Player('Bec', 'catch', 8);
  const player9 = new Player('Sven', 'outfield', 9);
  const player10 = new Player('Dan', 'outfield', 10);
  const player11 = new Player('Ken', 'pitch', 5);

  it('can add a player to the roster', () => {
    const roster = new Roster();

    roster.addPlayer(player1);
    expect(roster.playersList.length).to.equal(1);
    expect(roster.playersList[0].positions[0].position).to.equal('outfield');
  });

  it('can remove a player from the roster', () => {
    const roster = new Roster();

    roster.addPlayer(player1);
    roster.addPlayer(player2);
    roster.removePlayer(player1);
    expect(roster.playersList.length).to.equal(1);
  });

  // it('can select the player with the highest rating for a specific position', () => {
  //   const lineup = new Lineup();
  //   const newPitch = {firstName: 'Tyrone', positions: [{position: 'pitch', rating: 4}]};
  //   const newPitch2 = {firstName: 'April', positions: [{position: 'pitch', rating: 5}]};
  //   const newPitch3 = {firstName: 'Craig', positions: [{position: 'pitch', rating: 1}]};
  //   roster.push(newPitch);
  //   roster.push(newPitch2);
  //   roster.push(newPitch3);
  //   console.log('Selecting a pitcher', lineup.select(roster, 'pitch'));
  //   expect(lineup.select(roster, 'pitch')).to.deep.equal(newPitch2);
  // });





  // it('knows that the minimum number of players is 10', () => {
    // use sinon to mock a roster and then return an error when then number is not 10
  // });

// it('can store the data in the database', () => {
//
// });


});
