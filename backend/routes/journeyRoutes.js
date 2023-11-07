const express = require('express');
const journeyHandler = require('./../handlers/journeyHandler');

const router = express.Router();

router.route('/').get(journeyHandler.getJourneyStats);

module.exports = router;
