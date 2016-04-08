'use strict';

import _ from 'lodash';

class Lineup {

  constructor() {
    this.pitch = {};
  }

  select (roster, playerPosition) {
    const filtered = _.filter(roster, {positions: [{position: playerPosition}]});

    if (filtered.length === 1) {
      return filtered
    } else {
       return sortArray(filtered)
    }
  }
}

function sortArray (filteredRoster) {
  return _.last(_.sortBy(filteredRoster, function (o) {
    return o.positions[0].rating
  }));
}

export default Lineup;
