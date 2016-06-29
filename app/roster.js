'use strict';

export default function Roster () {
  this.playersList = [];
}

Roster.prototype.addPlayer = function (player) {
  this.playersList.push(player);
}

Roster.prototype.removePlayer = function (player) {
  const index = this.playersList.indexOf(player);
  this.playersList.splice(index, 1);
}
