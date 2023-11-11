const db = require('../database/index');
const APIFeatures = require('../utils/apiFeatures');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.getAllStations = catchAsync(async (req, res, next) => {
  const { page, limit, search } = req.query;
  const values = [page, limit];
  const query = 'SELECT * FROM station';
  let countQuery = 'SELECT count(*) as count FROM station';

  if (search) {
    values.push(`%${req.query.search}%`);
    countQuery += ' WHERE station_name ILIKE $1';
  }

  const stationCountResult = await db.query(countQuery, values.slice(2));
  const stationCount = stationCountResult.rows[0].count;

  const features = new APIFeatures(query, req.query, 'station_name')
    .search()
    .sort()
    .paginate();

  const results = await db.query(features.query, values);

  res.status(200).json({
    status: 'success',
    data: {
      stations: results.rows,
      stationCount,
    },
  });
});

exports.getStation = catchAsync(async (req, res, next) => {
  const results = await db.query('SELECT * FROM station WHERE id = $1', [
    req.params.id,
  ]);

  if (results.rowCount === 0) {
    return next(
      new AppError('A station with the specified ID was not found.', 404),
    );
  }

  res.status(200).json({
    status: 'success',
    data: {
      station: results.rows[0],
    },
  });
});
