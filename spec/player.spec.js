'use strict';

import chai from 'chai';
import {expect} from 'chai';
import Player from './../src/player';
let player = new Player();
import {addPosition} from './../src/player';

describe('Player', () => {

  it('has a name', () => {
    const player = new Player('Bob');
    expect(player.firstName).to.equal('Bob');
  });

  it('has a position', () => {
    const player = new Player('Bob','Catch');
    expect(player.positions[0].position).to.equal('Catch');
  });

  it('has a rating', () => {
    const player = new Player('Bob', 'Catch', 4);
    expect(player.positions[0].rating).to.equal(4);
  });

  it('has a rating for a specific position', () => {
    const player = new Player('Bob', 'Catch', 4);
    expect(player.positions[0]).to.deep.equal({position:'Catch', rating: 4})
  });

  it('can have a 2nd position', () => {
    const player = new Player('Bob', 'Catch', 4);
    player.addPosition({position: 'Outfield', rating: 2});
    console.log('*'.repeat(50), player);
    expect(player.positions[1]).to.deep.equal({position: 'Outfield', rating: 2});
  });


});
