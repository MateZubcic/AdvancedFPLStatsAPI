const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const config = require('./config');
const Player = require('./models/player');
const playerRoute = require('./routes/playerRoutes');

mongoose
  .connect(config.dbURI)
  .then((result) => {
    app.listen(config.port);
    console.log('connected to db and api listening on port ' + config.port);
  })
  .catch((err) => console.log(err));

const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});

app.use('/players', playerRoute);

app.get((req, res) => {
  res.status(404).json('Request route not found.');
});
