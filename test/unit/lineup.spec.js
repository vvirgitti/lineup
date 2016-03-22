'use strict';

import chai from 'chai';
import {expect} from 'chai';
import sinon from 'sinon';
import _ from 'lodash';

import Lineup from './../../app/lineup';

describe.only('Lineup', () => {

  let sandbox;

  beforeEach( () => {
    sandbox = sinon.sandbox.create();
  });

  afterEach( () => {
    sandbox.restore();
  });

  const roster = [
    {firstName: 'Kat', positions: [{position: 'outfield', rating: 1}]},
    {firstName: 'Dan', positions: [{position: 'outfield', rating: 2}]},
    {firstName: 'Papi', positions: [{position: 'pitch', rating: 3}]},
    {firstName: 'Mike', positions: [{position: '3rd base', rating: 4}]},
    {firstName: 'Andy', positions: [{position: 'short stop', rating: 5}]},
    {firstName: 'Dani', positions: [{position: '2nd base', rating: 6}]},
    {firstName: 'Joelle', positions: [{position: 'outfield', rating: 7}]},
    {firstName: 'Bec', positions: [{position: 'catch', rating: 8}]},
    {firstName: 'Sven', positions: [{position: 'outfield', rating: 9}]}
  ];

  const roster2 = [{firstname: 'Ken', positions: 'pitch'}];

  it('can select a player that is a pitch for the pitch position', () => {
    const lineup = new Lineup();

    expect(lineup.select(roster, 'pitch')).to.deep.equal([{firstName: 'Papi', positions: [{position: 'pitch', rating: 3}]}]);
  });

  it('can select the player with the highest rating for a specific position', () => {
    const lineup = new Lineup();

    const newPitch = {firstName: 'Tyrone', positions: [{position: 'pitch', rating: 4}]};
    roster.push(newPitch);
    console.log(lineup.select(roster, 'pitch'));
    expect(lineup.select(roster, 'pitch')).to.deep.equal(newPitch);

  });

  it('knows that the minimum number of players is 10', () => {
    // use sinon to mock a roster and then return an error when then number is not 10
  });

});
