const db = require('../database/index');
const APIFeatures = require('../utils/apiFeatures');

exports.getAllStations = async (req, res, next) => {
  try {
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
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: 'No stations were found',
    });
  }
  next();
};

exports.getStation = async (req, res, next) => {
  try {
    const results = await db.query('SELECT * FROM station WHERE id = $1', [
      req.params.id,
    ]);
    res.status(200).json({
      status: 'success',
      data: {
        station: results.rows[0],
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: 'A station with the specified ID was not found.',
    });
  }
  next();
};
