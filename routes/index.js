var express = require('express');
var router = express.Router();
const Steam   = require('steam-webapi');

const steamlib = require('../modules/steam/utility');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/:steamID/games', function(req, res){
  steamlib.getGames(req.params.steamID, new Steam())
  .then(function showGames(data) {
    res.render('games', {
      games    : data.games,
      gameCount: data.game_count,
      title: 'The games for ' + req.params.steamID
    });
  });
});

module.exports = router;
