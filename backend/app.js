const express = require('express');

const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Bike Station Info API',
      version: '1.0.0',
      descritpion: 'A simple Express Helsinki City Bike Station Info API',
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
  },
  apis: ['./routes/*.js'],
};

const stationRouter = require('./routes/stationRoutes');
const journeyRouter = require('./routes/journeyRoutes');

const app = express();

app.use(express.json());

app.use('/api/stations', stationRouter);
app.use('/api/journeys', journeyRouter);

module.exports = app;
