const db = require('../database/index');

exports.getJourneyStats = async (req, res, next) => {
  try {
    res.status(200).json({
      status: 'success',
      message: 'Not yet implemented',
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: { err },
    });
  }
  next();
};
