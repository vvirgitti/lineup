'use strict';

import _ from 'lodash';
import roster from './roster';

class Lineup {

  constructor(roster) {
    this.pitch = select(roster, 'pitch')
  }

  select (roster, playerPosition) {
    const filtered = _.filter(roster, {positions: [{position: playerPosition}]});
    const player = '';

    if (filtered.length === 1) {
      const player = filtered[0].firstName;
      return player;
      console.log('WHO ARE YOU', player);
      this.pitch = player;
    } else {
      const player = sortArray(filtered)[0].firstName;
       return player;
       console.log('WHO ARE YOU 2', player);
       this.pitch = player;
    }
    console.log('Helllo', player);
    return this.pitch = player;
  }

}

function sortArray (filteredRoster) {
  return _.last(_.sortBy(filteredRoster, function (o) {
    return o.positions[0].rating
  }));
}

export default Lineup;
