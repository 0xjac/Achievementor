const Steam   = require('steam-webapi');
const Promise = require('bluebird');

const config = require('../../config/default.json');

// Set global Steam API Key
Steam.key = config.steamAPIKey;

module.exports = function(cb){
  Steam.ready(function(err) {
      if (err) return cb(err);

      // Creates an promise wielding function for every method (with Async attached at the end)
      Promise.promisifyAll(Steam.prototype);

      return cb(null, new Steam());
    });
  };
