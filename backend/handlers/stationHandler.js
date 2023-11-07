const db = require('../database/index');

exports.getAllStations = async (req, res, next) => {
  const results = await db.query('SELECT * FROM station');
  res.status(200).json({
    status: 'success',
    data: {
      data: results,
    },
  });
  next();
};

exports.getStation = async (req, res, next) => {
  const results = await db.query(
    `SELECT * FROM station WHERE id = ${req.params.id}`,
  );
  res.status(200).json({
    status: 'success',
    data: {
      data: results,
    },
  });
  next();
};
