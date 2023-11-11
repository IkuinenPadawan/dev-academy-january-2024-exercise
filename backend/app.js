const express = require('express');
const cors = require('cors');

const stationRouter = require('./routes/stationRoutes');
const journeyRouter = require('./routes/journeyRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/stations', stationRouter);
app.use('/api/journeys', journeyRouter);

module.exports = app;
