const Player = require('../models/player');

const get_All = async (req, res) => {
  let allPlayers = await Player.find();

  allPlayers = allPlayers.map((player) => ({
    playerId: player._id,
    playerName: player.player_name,
  }));

  res.json(allPlayers);
};

const insert_Player = async (req, res) => {
  const player = req.body;

  const playerInDatabase = await Player.findOneAndUpdate(
    { id: player.id },
    player,
    { upsert: true, new: true }
  )
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

const get_Player = async (req, res) => {
  const id = req.params.id;
  let player = await Player.findById(id);
  res.json(player);
};

module.exports = { get_All, insert_Player, get_Player };
