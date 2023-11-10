const db = require('../database/index');

exports.getAllStations = async (req, res, next) => {
  try {
    const { page, limit } = req.query;
    let query = 'SELECT * FROM station';

    // Sort
    if (req.query.sortBy) {
      query += ` ORDER BY ${req.query.sortBy}`;

      // Determine order (ASC or DESC)
      if (
        req.query.order &&
        (req.query.order.toUpperCase() === 'ASC' ||
          req.query.order.toUpperCase() === 'DESC')
      ) {
        query += ` ${req.query.order.toUpperCase()}`;
      }
    }

    // Pagination
    query += ` LIMIT $2 OFFSET (($1 - 1) * $2)`;
    const stationCount = await db.query(
      'SELECT count(*) as count FROM station',
    );

    const results = await db.query(query, [page, limit]);

    res.status(200).json({
      status: 'success',
      data: {
        stations: results.rows,
        stationCount: stationCount.rows,
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
