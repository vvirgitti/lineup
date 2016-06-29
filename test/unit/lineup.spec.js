'use strict';

import chai from 'chai';
import {expect} from 'chai';
import _ from 'lodash';
import sinon from 'sinon';

import Lineup from './../../app/lineup';
import Roster from './../../app/roster';


describe('Lineup', () => {

  let sandbox;

  beforeEach(() => {
    sandbox = sinon.sandbox.create();
  });

  afterEach(() => {
    sandbox.restore();
  });

  const playerList = [
    {firstName: 'Kat', positions: [{position: 'left field', rating: 1}]},
    {firstName: 'Dan', positions: [{position: 'left center field', rating: 2}]},
    {firstName: 'Papi', positions: [{position: 'pitch', rating: 3}]},
    {firstName: 'Mike', positions: [{position: '3rd base', rating: 4}]},
    {firstName: 'Andy', positions: [{position: 'short stop', rating: 5}]},
    {firstName: 'Dani', positions: [{position: '2nd base', rating: 6}]},
    {firstName: 'Joelle', positions: [{position: 'right center field', rating: 7}]},
    {firstName: 'Bec', positions: [{position: 'catch', rating: 8}]},
    {firstName: 'Sven', positions: [{position: 'right field', rating: 9}]}
  ];

  it('can select a player from the roster that is a pitch for the pitch position', () => {
    sandbox.stub(Roster, 'playerList').returns(playerList);
    const lineup = new Lineup(roster);
    lineup.select(roster, 'pitch');
    // const lineup2 = new Lineup('catch');
    // lineup2.attribute('pitch');
    console.log('Test', lineup);
    // console.log(lineup.select(roster, 'pitch'));
    // console.log('Lineup', lineup.pitch);
    expect(lineup.pitch).to.deep.equal('Papi');
  });

  // it('can select the player with the highest rating for a specific position', () => {
  //   const lineup = new Lineup();
  //   const newRoster = _.clone(roster);
  //   const newPitch = {firstName: 'Tyrone', positions: [{position: 'pitch', rating: 4}]};
  //   const newPitch2 = {firstName: 'April', positions: [{position: 'pitch', rating: 5}]};
  //   const newPitch3 = {firstName: 'Craig', positions: [{position: 'pitch', rating: 1}]};
  //   newRoster.push(newPitch);
  //   newRoster.push(newPitch2);
  //   newRoster.push(newPitch3);
  //   console.log('The lineup is', lineup);
  //   expect(lineup.select(newRoster, 'pitch')).to.deep.equal(newPitch2);
  // });
  //
  // it('knows that the minimum number of players is 10', () => {
  //   const lineup = new Lineup();
  //   const positionList = ['pitch', ];
  //   function iteratePosition(positionList) {
  //     positionList_.forEach(function (position) {
  //       return lineup.select(roster, position);
  //     })
  //   };
  //
  //   expect(roster.length).to.be.equal(9);
  // });

});
