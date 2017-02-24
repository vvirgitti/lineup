'use strict';


//Roster saves the player to ElasticSearch and retrieve it from there

function roster() {
    this.playersList = []

    roster.prototype.addPlayer = (player) => {
      this.playersList.push(player);
    }

    roster.prototype.removePlayer = (player) => {
        const index = this.playersList.indexOf(player);
        this.playersList.splice(index, 1);
    }

}

module.exports = roster;
