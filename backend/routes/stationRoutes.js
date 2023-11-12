const express = require('express');
const stationHandler = require('./../handlers/stationHandler');

const router = express.Router();

/**
 * @swagger
 * /api/stations:
 *   get:
 *     summary: Get all stations
 *     description: Retrieve a list of all stations.
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: The page number for pagination.
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           minimum: 1
 *           maximum: 100
 *         description: The number of items per page.
 *       - in: query
 *         name: sort
 *         schema:
 *           type: string
 *         description: Sort the stations by a specific field (e.g., station_name).
 *       - in: query
 *         name: search
 *         schema:
 *           type: string
 *         description: Search from station_name field.
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
 *                     stations:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           id:
 *                             type: integer
 *                             example: 503
 *                           station_name:
 *                             type: string
 *                             example: Keilalahti
 *                           station_address:
 *                             type: string
 *                             example: Keilalahdentie 2
 *                           coordinate_x:
 *                             type: string
 *                             example: "24.827467"
 *                           coordinate_y:
 *                             type: string
 *                             example: "60.171524"
 *                       example:
 *                         - id: 503
 *                           station_name: Keilalahti
 *                           station_address: Keilalahdentie 2
 *                           coordinate_x: "24.827467"
 *                           coordinate_y: "60.171524"
 *                         - id: 511
 *                           station_name: Sateentie
 *                           station_address: Sateentie 2
 *                           coordinate_x: "24.810688"
 *                           coordinate_y: "60.173424"
 *                     stationCount:
 *                       type: string
 *                       example: 44
 *       404:
 *         description: No stations were found
 */
router.route('/').get(stationHandler.getStations);

/**
 * @swagger
 * /api/stations/{id}:
 *   get:
 *     summary: Get station by id
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *           minimum: 1
 *         required: true
 *         description: The ID of the station to return.
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
 *                     station:
 *                       type: object
 *                       properties:
 *                         id:
 *                           type: integer
 *                           example: 511
 *                         station_name:
 *                           type: string
 *                           example: Sateentie
 *                         station_address:
 *                           type: string
 *                           example: Sateentie 2
 *                         coordinate_x:
 *                           type: string
 *                           example: "24.810688"
 *                         coordinate_y:
 *                           type: string
 *                           example: "60.173424"
 *       404:
 *         description: A station with the specified ID was not found.
 */
router.route('/:id').get(stationHandler.getStation);

module.exports = router;
