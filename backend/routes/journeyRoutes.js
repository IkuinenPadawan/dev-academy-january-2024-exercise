const express = require('express');
const journeyHandler = require('./../handlers/journeyHandler');

const router = express.Router();

/**
 * @swagger
 * /api/journeys/stationstats/{id}:
 *   get:
 *     summary: Get station journey statistics by id
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *           minimum: 1
 *         required: true
 *         description: The ID of the station to return.
 *     description: Retrieve statistics about the average number, distance, and duration of journeys.
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: success
 *                 data:
 *                   type: object
 *                   properties:
 *                     numberOfJourneysStarting:
 *                       type: string
 *                       example: "3856"
 *                     numberOfJourneysEnding:
 *                       type: string
 *                       example: "3848"
 *                     averageDistanceOfJourneysStarting:
 *                       type: string
 *                       example: "2921.1852620653866113"
 *                     averageDurationOfJourneysStarting:
 *                       type: string
 *                       example: "973.7956431535269710"
 *       404:
 *         description: Statistics with the specified station ID were not found.
 */

router.route('/stationstats/:stationId').get(journeyHandler.getJourneyStats);

module.exports = router;
