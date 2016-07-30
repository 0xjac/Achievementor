'use strict';

const coroutine = require('bluebird').coroutine;

module.exports = {
  getGames: coroutine(function* getGamesGen(steamID, steamClient) {
    try {
      let data = yield steamClient.getOwnedGamesAsync({
        steamid: steamID,
        include_appinfo: 1,
        include_played_free_games: 1,
        appids_filter: [],
        format: 'json'
      });
      return data;
    } catch(err) {
      console.error('Failed to retrieve games for ' + steamID);
      console.trace(err);
      return err;
    }
  })
};
