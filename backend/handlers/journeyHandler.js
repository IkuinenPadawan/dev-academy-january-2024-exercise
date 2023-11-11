const db = require('../database/index');

exports.getJourneyStats = async (req, res, next) => {
  const numStartingQuery =
    'SELECT COUNT(*) FROM Journey WHERE departure_station_id = $1';
  const numEndingQuery =
    'SELECT COUNT(*) FROM Journey WHERE return_station_id = $1';
  const distStartingQuery =
    'SELECT AVG(distance) FROM Journey WHERE departure_station_id = $1';
  const durJStartingQuery =
    'SELECT AVG(duration) FROM Journey WHERE departure_station_id = $1';
  try {
    const numStarting = await db.query(numStartingQuery, [
      req.params.stationId,
    ]);
    const numEnding = await db.query(numEndingQuery, [req.params.stationId]);
    const distStarting = await db.query(distStartingQuery, [
      req.params.stationId,
    ]);
    const durStarting = await db.query(durJStartingQuery, [
      req.params.stationId,
    ]);
    res.status(200).json({
      status: 'success',
      data: {
        numberOfJourneysStarting: numStarting.rows[0].count,
        numberOfJourneysEnding: numEnding.rows[0].count,
        averageDistanceOfJourneysStarting: distStarting.rows[0].avg,
        averageDurationOfJourneysStarting: durStarting.rows[0].avg,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: 'Statistics with the specified station ID were not found.',
    });
  }
  next();
};
