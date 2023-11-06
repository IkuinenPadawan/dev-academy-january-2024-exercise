const express = require('express');

const stationRouter = require('./routes/stationRoutes');

const app = express();

app.use(express.json());

app.use('/api/stations', stationRouter);

module.exports = app;
