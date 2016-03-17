'use strict';

import chai from 'chai';
import {expect} from 'chai';
import sinon from 'sinon';

import Lineup from './../../app/lineup';

describe.skip('Lineup', () => {

  let sandbox;

  beforeEach( () => {
    sandbox = sinon.sandbox.create();
  });

  afterEach( () => {
    sandbox.restore();
  });

  const roster = [
    {firstName: 'Kat', positions: [{position: 'outfield', rating: 2}]},
    {firstName: 'Dan', positions: [{position: 'outfield', rating: 2}]},
    {firstName: 'Papi', positions: [{position: 'pitch', rating: 2}]},
    {firstName: 'Mike', positions: [{position: '3rd base', rating: 2}]},
    {firstName: 'Andy', positions: [{position: 'short stop', rating: 2}]},
    {firstName: 'Dani', positions: [{position: '2nd base', rating: 2}]},
    {firstName: 'Joelle', positions: [{position: 'outfield', rating: 2}]},
    {firstName: 'Bec', positions: [{position: 'catch', rating: 2}]}
  ];

  it('can select players from the roster', () => {
    const player = new Player ('Andy', 'Short Stop', 5);

    lineup.select(player);
    expect()
  });

  it('knows that the minimum number of players is 10', () => {
    // use sinon to mock a roster and then return an error when then number is not 10

    sandbox.spy(roster, 'retrieve');


    // const roster = sinon.spy(Roster);
    // expect(lineup.numberOfPlayers(8, players)).to.throw(Error, 'There are not enough players on the roster' );
  });

  it.skip('can select the best players per position', () => {
    // use sinon mock
  });

});
