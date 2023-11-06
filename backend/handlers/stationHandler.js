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

exports.getStation = (req, res, next) => {
  res.status(200).json({
    status: 'success',
    message: 'Not yet implemented',
  });
  next();
};
