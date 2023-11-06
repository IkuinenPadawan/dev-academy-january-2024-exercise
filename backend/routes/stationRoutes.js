const express = require('express');
const stationHandler = require('./../handlers/stationHandler');

const router = express.Router();

router.route('/').get(stationHandler.getAllStations);

router.route('/:id').get(stationHandler.getStation);

module.exports = router;
