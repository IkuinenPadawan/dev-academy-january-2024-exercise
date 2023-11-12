const db = require('../database/index');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.getJourneyStats = catchAsync(async (req, res, next) => {
  const numStartingQuery =
    'SELECT COUNT(*) FROM Journey WHERE departure_station_id = $1';
  const numEndingQuery =
    'SELECT COUNT(*) FROM Journey WHERE return_station_id = $1';
  const distStartingQuery =
    'SELECT AVG(distance) FROM Journey WHERE departure_station_id = $1';
  const durJStartingQuery =
    'SELECT AVG(duration) FROM Journey WHERE departure_station_id = $1';

  const numStarting = await db.query(numStartingQuery, [req.params.stationId]);
  const numEnding = await db.query(numEndingQuery, [req.params.stationId]);
  const distStarting = await db.query(distStartingQuery, [
    req.params.stationId,
  ]);
  const durStarting = await db.query(durJStartingQuery, [req.params.stationId]);

  // Error checks for this handler should be refactored
  if (
    numStarting.rows[0].count === '0' ||
    numEnding.rows[0].count === '0' ||
    numEnding.rows[0].avg === null ||
    numEnding.rows[0].avg === null
  ) {
    return next(
      new AppError(
        'Statistics with the specified station ID were not found.',
        404,
      ),
    );
  }
  res.status(200).json({
    status: 'success',
    data: {
      numberOfJourneysStarting: numStarting.rows[0].count,
      numberOfJourneysEnding: numEnding.rows[0].count,
      averageDistanceOfJourneysStarting: distStarting.rows[0].avg,
      averageDurationOfJourneysStarting: durStarting.rows[0].avg,
    },
  });
  next();
});
