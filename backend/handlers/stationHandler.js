const db = require('../database/index');
const APIFeatures = require('../utils/apiFeatures');

exports.getAllStations = async (req, res, next) => {
  try {
    const { page, limit } = req.query;
    const values = [page, limit];
    const query = 'SELECT * FROM station';

    const stationCount = await db.query(
      'SELECT count(*) as count FROM station',
    );

    if (req.query.search) {
      values.push(`%${req.query.search}%`);
    }

    const features = new APIFeatures(query, req.query, 'station_name')
      .search()
      .sort()
      .paginate();

    const results = await db.query(features.query, values);
    res.status(200).json({
      status: 'success',
      data: {
        stations: results.rows,
        stationCount: stationCount.rows,
        rowCount: results.rowCount,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
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
      message: err,
    });
  }
  next();
};
