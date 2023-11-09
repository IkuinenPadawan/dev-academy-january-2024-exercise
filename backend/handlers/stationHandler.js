const db = require('../database/index');

exports.getAllStations = async (req, res, next) => {
  try {
    const { page, limit } = req.query;
    const query = `SELECT * FROM station LIMIT $2 OFFSET (($1 - 1) * $2)`;
    const results = await db.query(query, [page, limit]);
    res.status(200).json({
      status: 'success',
      data: {
        stations: results.rows,
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
