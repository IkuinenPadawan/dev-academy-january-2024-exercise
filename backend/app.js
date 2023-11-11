const express = require('express');

const stationRouter = require('./routes/stationRoutes');
const journeyRouter = require('./routes/journeyRoutes');

const app = express();

app.use(express.json());

app.use('/api/stations', stationRouter);
app.use('/api/journeys', journeyRouter);

module.exports = app;
