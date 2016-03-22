'use strict';

import _ from 'lodash';

class Lineup {

  constructor() {
    this.pitch = {};
  }

  select (roster, playerPosition) {
     return _.filter(roster, {positions: [{position: playerPosition}]})
  }
}

export default Lineup;

function highestRating (roster) {
  _.orderBy(roster, ['rating'], ['desc'])
}
