const express = require('express');
const journeyHandler = require('./../handlers/journeyHandler');

const router = express.Router();

router.route('/stationstats/:stationId').get(journeyHandler.getJourneyStats);

module.exports = router;
