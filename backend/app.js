const express = require('express');
const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

const stationRouter = require('./routes/stationRoutes');
const journeyRouter = require('./routes/journeyRoutes');

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

const specs = swaggerJsDoc(options);

const app = express();

app.use(express.json());
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(specs));
app.use('/api/stations', stationRouter);
app.use('/api/journeys', journeyRouter);

// Handle unhandled routes
app.all('*', (req, res, next) => {
  res.status(404).json({
    status: 'fail',
    message: `Can't find ${req.originalUrl} on this server!`,
  });
});

// Global error handling
app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
  });
});

module.exports = app;
