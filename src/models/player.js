const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const playerSchema = new Schema(
  {
    id: {
      type: 'Date',
    },
    player_name: {
      type: 'String',
    },
    games: {
      type: 'String',
    },
    time: {
      type: 'Date',
    },
    goals: {
      type: 'String',
    },
    xG: {
      type: 'String',
    },
    assists: {
      type: 'String',
    },
    xA: {
      type: 'String',
    },
    shots: {
      type: 'String',
    },
    key_passes: {
      type: 'String',
    },
    yellow_cards: {
      type: 'String',
    },
    red_cards: {
      type: 'String',
    },
    position: {
      type: 'String',
    },
    team_title: {
      type: 'String',
    },
    npg: {
      type: 'String',
    },
    npxG: {
      type: 'String',
    },
    xGChain: {
      type: 'String',
    },
    xGBuildup: {
      type: 'String',
    },
  },
  { timestamps: true }
);

const Player = mongoose.model('Player', playerSchema);

module.exports = Player;
