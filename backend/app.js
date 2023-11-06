const express = require('express');

const app = express();

app.use(express.json());

app.use('/', (req, res) => {
  res.send('Hello from api!');
});

module.exports = app;
